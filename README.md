# The Milk House - Sunnyside Dairy Website

A modern, responsive website for Sunnyside Dairy farm featuring fresh produce, milk, yogurt, and other dairy products.

## Project Overview

**Brand Name:** The Milk House - Sunny Side Dairy  
**Domain:** sunnysidedairy.com  
**Theme Colors:** Rich Brown (#462e1c), Amber (#c06e1d), and Warm Cream (#f4f1ea)  

### Features

- **Beautiful Landing Page** - Hero section with farm branding
- **Product Showcase** - Displays milk, yogurt, fresh vegetables, and seasonal fruits
- **About Section** - Information about The Milk House and our farming practices
- **Customer Testimonials** - Social proof from satisfied customers
- **Contact Information** - Easy way to reach the farm
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm installed

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

The development server supports hot reloading - changes are reflected immediately as you edit files.

### Build for Production

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
src/
└── app/
    ├── layout.tsx        # Root layout with metadata
    ├── page.tsx          # Home page component
    └── globals.css       # Global styles and Tailwind directives
```

## Color Palette

- **Rich Brown:** #462e1c (Primary text and backgrounds)
- **Amber:** #c06e1d (Primary accent / interactive elements)
- **Accent Orange:** #a04e10 (Hover states and highlights)
- **Accent Blue:** #3b5566 (Secondary accent)
- **Warm Cream:** #f4f1ea (Light background)

## Customization

### Adding Products

Edit `src/app/page.tsx` and modify the `products` array to add more items:

```typescript
const products = [
  {
    id: 1,
    name: 'Your Product',
    description: 'Product description',
    icon: '🌟',
  },
  // Add more products...
]
```

### Updating Contact Information

Find the contact section in `src/app/page.tsx` and update:
- Location
- Phone number
- Email address

## Deployment

The site is ready to deploy on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Other Node.js hosting providers**

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build

## Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Add product detail pages
- [ ] Implement online ordering system
- [ ] Add blog section for farm updates
- [ ] Create customer testimonial submission form
- [ ] Add image gallery for farm photos
- [ ] Implement newsletter signup
- [ ] Add seasonal product filtering
- [ ] Multi-language support

## License

All rights reserved. The Milk House - Sunnyside Dairy © 2026

## Support

For questions or support, contact: info@sunnysidedairy.com
