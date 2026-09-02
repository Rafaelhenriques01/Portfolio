import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Plugin que executa a Serverless Function `/api/contact` tambem no
 * ambiente local (`npm run dev`), simulando o comportamento da Vercel.
 */
function localApiPlugin() {
  return {
    name: 'local-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        const chunks = []
        for await (const chunk of req) chunks.push(chunk)
        req.body = chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {}

        // Adapta a resposta do Node para a API usada pela Vercel (res.status().json())
        res.status = (code) => {
          res.statusCode = code
          return res
        }
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
          return res
        }

        try {
          const { default: handler } = await server.ssrLoadModule('/api/contact.js')
          await handler(req, res)
        } catch (error) {
          server.config.logger.error(`[local-api] ${error.message}`)
          res.statusCode = 500
          res.end(JSON.stringify({ ok: false, error: 'Erro no handler local.' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), localApiPlugin()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
  },
})
