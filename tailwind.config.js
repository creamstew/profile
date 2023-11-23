module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-murecho)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
