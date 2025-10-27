/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: 'edge', // 👈 This makes all routes use the Edge runtime
  },
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
