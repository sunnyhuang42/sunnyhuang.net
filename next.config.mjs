import fs from 'fs';
import path from 'path';
import withYaml from 'next-plugin-yaml';
import bundleAnalyzer from '@next/bundle-analyzer';
import { withContentlayer } from 'next-contentlayer';

class SearchPlugin {
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync(
      'SearchPlugin',
      async (_, callback) => {
        const assetDir = path.join(process.cwd(), '.next', 'static', 'chunks');

        if (!fs.existsSync(assetDir)) {
          fs.mkdirSync(assetDir, { recursive: true });
        }

        fs.copyFileSync(
          path.join(process.cwd(), '.contentlayer', 'search-data.json'),
          path.join(assetDir, 'search-data.json'),
        );
        callback();
      },
    );
  }
}

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
