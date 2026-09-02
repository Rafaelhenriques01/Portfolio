/**
 * ---------------------------------------------------------------------------
 * Ferramenta de recorte de imagem (sem dependencias externas)
 * ---------------------------------------------------------------------------
 * Le um PNG, recorta um quadrado e redimensiona, gerando a imagem pronta para
 * ser usada no circulo da foto de perfil.
 *
 * Uso:
 *   node scripts/recortar-foto.mjs <entrada.png> <saida.png> [x] [y] [lado] [tamanhoFinal]
 *
 * Exemplo (recorta um quadrado de 900px a partir do ponto 90,20 e salva com 640px):
 *   node scripts/recortar-foto.mjs foto-original.png public/images/foto-perfil.png 90 20 900 640
 */

import fs from 'node:fs'
import zlib from 'node:zlib'

const CANAIS = { 0: 1, 2: 3, 4: 2, 6: 4 }

/** Decodifica um PNG de 8 bits em { width, height, channels, data }. */
function lerPng(caminho) {
  const buf = fs.readFileSync(caminho)
  let pos = 8
  let width, height, depth, colorType
  const pedacos = []

  while (pos < buf.length) {
    const tamanho = buf.readUInt32BE(pos)
    const nome = buf.toString('ascii', pos + 4, pos + 8)
    const dados = buf.subarray(pos + 8, pos + 8 + tamanho)
    if (nome === 'IHDR') {
      width = dados.readUInt32BE(0)
      height = dados.readUInt32BE(4)
      depth = dados[8]
      colorType = dados[9]
      if (dados[12] !== 0) throw new Error('PNG entrelacado nao e suportado')
    }
    if (nome === 'IDAT') pedacos.push(dados)
    if (nome === 'IEND') break
    pos += 12 + tamanho
  }

  if (depth !== 8) throw new Error(`profundidade ${depth} nao suportada (use 8 bits)`)
  const canais = CANAIS[colorType]
  if (!canais) throw new Error(`tipo de cor ${colorType} nao suportado`)

  const bruto = zlib.inflateSync(Buffer.concat(pedacos))
  const linha = width * canais
  const data = Buffer.alloc(height * linha)

  // Desfaz os filtros de cada linha (spec do PNG)
  for (let y = 0; y < height; y++) {
    const filtro = bruto[y * (linha + 1)]
    const origem = bruto.subarray(y * (linha + 1) + 1, y * (linha + 1) + 1 + linha)
    const atual = data.subarray(y * linha, (y + 1) * linha)
    const anterior = y > 0 ? data.subarray((y - 1) * linha, y * linha) : Buffer.alloc(linha)

    for (let i = 0; i < linha; i++) {
      const a = i >= canais ? atual[i - canais] : 0
      const b = anterior[i]
      const c = i >= canais ? anterior[i - canais] : 0
      let v = origem[i]
      if (filtro === 1) v += a
      else if (filtro === 2) v += b
      else if (filtro === 3) v += (a + b) >> 1
      else if (filtro === 4) {
        const p = a + b - c
        const pa = Math.abs(p - a)
        const pb = Math.abs(p - b)
        const pc = Math.abs(p - c)
        v += pa <= pb && pa <= pc ? a : pb <= pc ? b : c
      }
      atual[i] = v & 255
    }
  }

  return { width, height, channels: canais, data }
}

/** Recorta um quadrado e redimensiona por media de area (mantem a nitidez). */
function recortarERedimensionar(img, x0, y0, lado, destino) {
  const { channels: ch, width, data } = img
  const saida = Buffer.alloc(destino * destino * ch)
  const escala = lado / destino

  for (let dy = 0; dy < destino; dy++) {
    const sy0 = Math.floor(y0 + dy * escala)
    const sy1 = Math.max(sy0 + 1, Math.floor(y0 + (dy + 1) * escala))

    for (let dx = 0; dx < destino; dx++) {
      const sx0 = Math.floor(x0 + dx * escala)
      const sx1 = Math.max(sx0 + 1, Math.floor(x0 + (dx + 1) * escala))
      const soma = new Array(ch).fill(0)
      let total = 0

      for (let sy = sy0; sy < sy1; sy++) {
        for (let sx = sx0; sx < sx1; sx++) {
          const i = (sy * width + sx) * ch
          for (let c = 0; c < ch; c++) soma[c] += data[i + c]
          total++
        }
      }

      const j = (dy * destino + dx) * ch
      for (let c = 0; c < ch; c++) saida[j + c] = Math.round(soma[c] / total)
    }
  }

  return { width: destino, height: destino, channels: ch, data: saida }
}

const TABELA_CRC = Array.from({ length: 256 }, (_, n) => {
  let c = n
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
  return c >>> 0
})

function crc32(buf) {
  let c = 0xffffffff
  for (const byte of buf) c = TABELA_CRC[(c ^ byte) & 0xff] ^ (c >>> 8)
  return (c ^ 0xffffffff) >>> 0
}

function pedaco(nome, dados) {
  const tamanho = Buffer.alloc(4)
  tamanho.writeUInt32BE(dados.length)
  const corpo = Buffer.concat([Buffer.from(nome, 'ascii'), dados])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(corpo))
  return Buffer.concat([tamanho, corpo, crc])
}

/** Grava a imagem como PNG. */
function gravarPng(caminho, img) {
  const { width, height, channels: ch, data } = img
  const colorType = { 1: 0, 2: 4, 3: 2, 4: 6 }[ch]

  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(width, 0)
  ihdr.writeUInt32BE(height, 4)
  ihdr[8] = 8
  ihdr[9] = colorType

  // Filtro 0 (nenhum) em cada linha
  const linha = width * ch
  const bruto = Buffer.alloc(height * (linha + 1))
  for (let y = 0; y < height; y++) {
    bruto[y * (linha + 1)] = 0
    data.copy(bruto, y * (linha + 1) + 1, y * linha, (y + 1) * linha)
  }

  const png = Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pedaco('IHDR', ihdr),
    pedaco('IDAT', zlib.deflateSync(bruto, { level: 9 })),
    pedaco('IEND', Buffer.alloc(0)),
  ])

  fs.writeFileSync(caminho, png)
  return png.length
}

// --------------------------------- CLI ---------------------------------
const [entrada, saida, x = 0, y = 0, lado, destino = 640] = process.argv.slice(2)

if (!entrada || !saida) {
  console.error('uso: node scripts/recortar-foto.mjs <entrada.png> <saida.png> [x] [y] [lado] [tamanhoFinal]')
  process.exit(1)
}

const original = lerPng(entrada)
const ladoFinal = Number(lado) || Math.min(original.width, original.height)
const recortada = recortarERedimensionar(original, Number(x), Number(y), ladoFinal, Number(destino))
const bytes = gravarPng(saida, recortada)

console.log(`entrada:  ${original.width}x${original.height} (${original.channels} canais)`)
console.log(`recorte:  ${ladoFinal}x${ladoFinal} a partir de (${x}, ${y})`)
console.log(`saida:    ${saida} -> ${recortada.width}x${recortada.height}, ${(bytes / 1024).toFixed(1)} KB`)
