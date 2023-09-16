/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-radial-btm': 'radial-gradient(100% 90% at 50% 100%, var(--tw-gradient-stops))',
            'gradient-card': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
            'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        fontFamily: {
            sans: ['var(--font-inter)'],
            // mono: ['var(--font-roboto-mono)'],
        }
    },
  },
//   variants: {
//     extend: {
//         animation: ['hover', 'group-hover'] 
//     }
//   },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
