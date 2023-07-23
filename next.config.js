/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/project/entertainment/photo',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
