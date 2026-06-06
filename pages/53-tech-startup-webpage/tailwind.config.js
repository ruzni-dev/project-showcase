module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a365d", // Deep navy foundation
          50: "#e6f3ff",
          100: "#b3d9ff", 
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#1a365d",
          600: "#152d4d",
          700: "#10243d",
          800: "#0b1b2d",
          900: "#06121d"
        },
        secondary: {
          DEFAULT: "#319795", // Vibrant teal energy
          50: "#e6fffa",
          100: "#b3f5f0",
          200: "#81e6d9",
          300: "#4fd1c7",
          400: "#38b2ac",
          500: "#319795",
          600: "#2c7a7b",
          700: "#285e61",
          800: "#234e52",
          900: "#1d4044"
        },
        accent: {
          DEFAULT: "#ed8936", // Warm orange urgency
          50: "#fffaf0",
          100: "#feebc8",
          200: "#fbd38d",
          300: "#f6ad55",
          400: "#ed8936",
          500: "#dd6b20",
          600: "#c05621",
          700: "#9c4221",
          800: "#7b341e",
          900: "#652b19"
        },
        background: "#ffffff", // Pure white clarity
        surface: {
          DEFAULT: "#f7fafc", // Subtle gray lift
          100: "#edf2f7",
          200: "#e2e8f0",
          300: "#cbd5e0"
        },
        text: {
          primary: "#2d3748", // Rich charcoal readability
          secondary: "#718096", // Balanced gray hierarchy
          muted: "#a0aec0"
        },
        success: {
          DEFAULT: "#38a169", // Confident green progress
          50: "#f0fff4",
          100: "#c6f6d5",
          200: "#9ae6b4",
          300: "#68d391",
          400: "#48bb78",
          500: "#38a169",
          600: "#2f855a",
          700: "#276749",
          800: "#22543d",
          900: "#1c4532"
        },
        warning: {
          DEFAULT: "#d69e2e", // Amber attention
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#d69e2e",
          600: "#b45309",
          700: "#92400e",
          800: "#78350f",
          900: "#451a03"
        },
        error: {
          DEFAULT: "#e53e3e", // Clear red concern
          50: "#fed7d7",
          100: "#feb2b2",
          200: "#fc8181",
          300: "#f56565",
          400: "#e53e3e",
          500: "#c53030",
          600: "#9b2c2c",
          700: "#742a2a",
          800: "#63171b",
          900: "#521b1b"
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Headlines and CTAs
        'source-sans': ['Source Sans Pro', 'sans-serif'], // Body text
        'fira-code': ['Fira Code', 'monospace'] // Technical accents
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-in': 'slideIn 300ms ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms'
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)'
      }
    },
  },
  plugins: [],
}