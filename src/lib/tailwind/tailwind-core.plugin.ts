import type { Config } from 'tailwindcss';

const corePlugin: { config?: Partial<Config> } = {
  config: {
    theme: {
      colors: {
        inherit: 'inherit',
        current: 'currentColor',
        transparent: 'transparent',
      },
      fontFamily: {
        display: ['var(--font-families-display)'],
        body: ['var(--font-families-body)'],
      },
      fontWeight: {
        light: 'var(--font-weights-light)',
        regular: 'var(--font-weights-regular)',
        medium: 'var(--font-weights-medium)',
        semibold: 'var(--font-weights-semibold)',
        bold: 'var(--font-weights-bold)',
      },
      lineHeight: {
        1: 'var(--line-heights-1)',
        2: 'var(--line-heights-2)',
        3: 'var(--line-heights-3)',
        4: 'var(--line-heights-4)',
        5: 'var(--line-heights-5)',
        6: 'var(--line-heights-6)',
        7: 'var(--line-heights-7)',
        8: 'var(--line-heights-8)',
        9: 'var(--line-heights-9)',
        10: 'var(--line-heights-10)',
        11: 'var(--line-heights-11)',
        12: 'var(--line-heights-12)',
        13: 'var(--line-heights-13)',
      },
      fontSize: {
        1: ['var(--font-sizes-1) /* 12px */', 'var(--line-heights-1)'],
        2: ['var(--font-sizes-2)', 'var(--line-heights-2)'],
        3: ['var(--font-sizes-3)', 'var(--line-heights-3)'],
        4: ['var(--font-sizes-4)', 'var(--line-heights-4)'],
        5: ['var(--font-sizes-5)', 'var(--line-heights-5)'],
        6: ['var(--font-sizes-6)', 'var(--line-heights-6)'],
        7: ['var(--font-sizes-7)', 'var(--line-heights-7)'],
        8: ['var(--font-sizes-8)', 'var(--line-heights-8)'],
        9: ['var(--font-sizes-9)', 'var(--line-heights-9)'],
        10: ['var(--font-sizes-10)', 'var(--line-heights-10)'],
        11: ['var(--font-sizes-11)', 'var(--line-heights-11)'],
        12: ['var(--font-sizes-12)', 'var(--line-heights-12)'],
        13: ['var(--font-sizes-13)', 'var(--line-heights-13)'],
      },
      spacing: {
        0: 'var(--space-0)',
        0.5: 'var(--space-0-5)',
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        5: 'var(--space-5)',
        6: 'var(--space-6)',
        7: 'var(--space-7)',
        8: 'var(--space-8)',
        9: 'var(--space-9)',
        10: 'var(--space-10)',
        11: 'var(--space-11)',
        12: 'var(--space-12)',
        13: 'var(--space-13)',
        14: 'var(--space-14)',
        15: 'var(--space-15)',
        16: 'var(--space-16)',
      },
      container: {
        center: true,
        padding: 'var(--space-6)',
      },
      screens: {
        sm: '512px',
        md: '768px',
        lg: '1008px',
        xl: '1200px',
      },
    },
    corePlugins: {
      aspectRatio: false,
    },
  },
};

export { corePlugin };
