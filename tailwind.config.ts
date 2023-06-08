import type { Config } from 'tailwindcss';

import { tailwindPlugins } from './src/lib/tailwind';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {},
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [...tailwindPlugins],
} satisfies Config;
