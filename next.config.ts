import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/room/a7a99002-cac1-41a8-a6dd-acbb4ca6df96',
        destination: '/chambres-et-suites/menthe-a-leau-suite',
        permanent: true,
      },
      {
        source: '/room/d31ac321-c376-4184-9256-c060e5ef718c',
        destination: '/chambres-et-suites/spritz-room',
        permanent: true,
      },
      {
        source: '/room/18a3a003-b3e6-483c-913d-b3918b82a78e',
        destination: '/chambres-et-suites/sangria-room',
        permanent: true,
      },
      {
        source: '/room/eae3446b-9f58-4fdc-b7bd-0dfbdae9989c',
        destination: '/chambres-et-suites/mojito-room',
        permanent: true,
      },
      {
        source: '/room/098db06f-f270-4acc-880d-41d204ccaf7a',
        destination: '/chambres-et-suites/corona-suite',
        permanent: true,
      },
      {
        source: '/attraction/:slug',
        destination: '/experiences',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
