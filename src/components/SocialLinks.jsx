import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { profile } from '../data/profile'

/**
 * Lista central de redes sociais/contato.
 * `variant` controla o tamanho/estilo: 'nav' | 'footer' | 'contact'
 */
export const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profile.linkedin,
    Icon: FaLinkedinIn,
    value: profile.linkedinHandle,
  },
  {
    id: 'github',
    label: 'GitHub',
    href: profile.github,
    Icon: FaGithub,
    value: profile.githubHandle,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: profile.instagram,
    Icon: FaInstagram,
    value: profile.instagramHandle,
  },
  {
    id: 'email',
    label: 'E-mail',
    href: `mailto:${profile.email}`,
    Icon: MdEmail,
    value: profile.email,
    external: false,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: `https://wa.me/${profile.whatsapp}`,
    Icon: FaWhatsapp,
    value: profile.phone,
  },
]

export default function SocialLinks({ items = socialLinks, className = '', size = 20 }) {
  return (
    <ul className={`social ${className}`}>
      {items.map(({ id, label, href, Icon }) => (
        <li key={id}>
          <a
            href={href}
            className="social__link"
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer noopener"
            aria-label={label}
            title={label}
          >
            <Icon size={size} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  )
}
