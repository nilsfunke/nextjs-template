import type { PluginAPI } from 'tailwindcss/types/config';

const typoPlugin = ({ addUtilities, theme }: PluginAPI) => {
  const bodyFontWeights = ['regular', 'medium'];
  const bodyFontSizes = ['1', '2', '3', '4', '5'];
  const textBodyClasses = bodyFontWeights.flatMap((fontWeight) =>
    bodyFontSizes.map((fontSize) => [
      `.typo-body-${fontWeight}-${fontSize}`,
      {
        'font-weight': theme(`fontWeight.${fontWeight}`),
        'font-family': theme('fontFamily.body'),
        'line-height': theme(`lineHeight.${fontSize}`),
        'font-size': theme(`fontSize.${fontSize}`),
      },
    ])
  );

  const displayFontWeights = ['medium', 'semibold', 'bold'];
  const displayFontSizes = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
  ];
  const textDisplayClasses = displayFontWeights.flatMap((fontWeight) =>
    displayFontSizes.map((fontSize) => [
      `.typo-display-${fontWeight}-${fontSize}`,
      {
        'font-weight': theme(`fontWeight.${fontWeight}`),
        'font-family': theme('fontFamily.display'),
        'line-height': theme(`lineHeight.${fontSize}`),
        'font-size': theme(`fontSize.${fontSize}`),
      },
    ])
  );
  addUtilities({
    ...Object.fromEntries(textBodyClasses),
    ...Object.fromEntries(textDisplayClasses),
  });
};

export { typoPlugin };
