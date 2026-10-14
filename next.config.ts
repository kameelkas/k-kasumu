import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  agentRules: false,
  env: {
    NEXT_PUBLIC_BUILD_DATE:
      process.env.VERCEL_GIT_COMMIT_AUTHOR_DATE || new Date().toISOString(),
  },
};

export default nextConfig;
