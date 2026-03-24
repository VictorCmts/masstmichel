/** @type {import('next').NextConfig} */

// Si vous déployez sur https://victorcmts.github.io/masstmichel/ → basePath = '/masstmichel'
// Si vous utilisez un domaine personnalisé (ex: mas-saintmichel.com) → basePath = ''
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/masstmichel'

const nextConfig = {
  output: 'export',          // Génère un site statique dans /out
  basePath,
  trailingSlash: true,       // Requis pour GitHub Pages
  images: {
    unoptimized: true,       // Requis pour l'export statique (pas de serveur image)
  },
}

export default nextConfig
