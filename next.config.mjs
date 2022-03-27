import withYaml from 'next-plugin-yaml';
import bundleAnalyzer from '@next/bundle-analyzer';
import { withContentlayer } from 'next-contentlayer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(
  withYaml(
    withContentlayer()({
      webpack: (config, { dev, isServer }) => {
        // Replace React with Preact only in client production build
        if (!dev && !isServer) {
          Object.assign(config.resolve.alias, {
            react: 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
          });
        }

        return config;
      },
    }),
  ),
);
