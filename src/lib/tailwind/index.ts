import { PluginsConfig } from 'tailwindcss/types/config';

import { corePlugin } from './tailwind-core.plugin';
import { typoPlugin } from './tailwind-typo.plugin';

const tailwindPlugins: PluginsConfig = [
  corePlugin,
  typoPlugin,
  require('@tailwindcss/aspect-ratio'),
  require('tailwindcss-animate'),
];

export { tailwindPlugins };
