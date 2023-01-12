import withYaml from 'next-plugin-yaml';
import bundleAnalyzer from '@next/bundle-analyzer';
import { withContentlayer } from 'next-contentlayer';
import { SearchPlugin } from './src/utils/search.mjs';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const searchPlugin = new SearchPlugin();

export default withBundleAnalyzer(
  withYaml(
    withContentlayer()({
      webpack: (config, { dev, isServer }) => {
        config.plugins ||= [];
        config.plugins.push(searchPlugin);

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
