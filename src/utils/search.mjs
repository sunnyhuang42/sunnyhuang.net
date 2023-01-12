// ref: https://github.com/shuding/nextra/blob/main/packages/nextra/src/content-dump.ts

import fs from 'fs';
import path from 'path';

let asset;
let cached;
let assetDir;
let cacheDir;
let cacheDirExist = false;

function initFromCache(filename) {
  if (!cached) {
    try {
      const content = fs.readFileSync(path.join(assetDir, filename), 'utf8');
      cached = true;
      return JSON.parse(content);
    } catch {
      cached = false;
    }
  }
  return {};
}

export function addSearchData({ slug, title, data }) {
  if (!cacheDir || !assetDir) {
    initConfig();
  }
  const dataFilename = 'search-data.json';

  asset ||= initFromCache(dataFilename);
  asset[slug] = {
    title,
    data,
  };

  const content = JSON.stringify(asset);

  fs.writeFileSync(path.join(assetDir, dataFilename), content);
  fs.writeFileSync(path.join(cacheDir, dataFilename), content);
}

export function initConfig() {
  cacheDir = path.join(process.cwd(), '.next', 'cache');
  assetDir = path.join(process.cwd(), '.next', 'static', 'chunks');
}

export function restoreCache() {
  if (!cacheDir || !assetDir) {
    initConfig();

    if (!fs.existsSync(assetDir)) {
      fs.mkdirSync(assetDir, { recursive: true });
    }

    cacheDirExist = fs.existsSync(cacheDir);
    if (!cacheDirExist) {
      fs.mkdirSync(cacheDir, { recursive: true });
    }
  }

  if (!cacheDirExist) {
    return;
  }

  if (!fs.existsSync(assetDir)) {
    fs.mkdirSync(assetDir, { recursive: true });
  }

  const files = fs.readdirSync(cacheDir);
  for (const file of files) {
    if (file.startsWith('nextra-data-')) {
      fs.copyFileSync(path.join(cacheDir, file), path.join(assetDir, file));
    }
  }
}

export class SearchPlugin {
  apply(compiler) {
    compiler.hooks.beforeCompile.tapAsync(
      'SearchPlugin',
      async (_, callback) => {
        restoreCache();
        callback();
      },
    );
  }
}
