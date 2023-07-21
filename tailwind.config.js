/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark':
          'linear-gradient(360deg, #2B9B73 0%, #0f172a 97.40%)'
      },
      padding: {
        '15': '3.75rem'
      },
      fontSize: {
        'h1': "clamp(2rem, 1vw, 3.75rem)",
        'h3': "clamp(1.75rem, 5vw, 3rem)"
      },
      
    },
  },
  plugins: [],
}
