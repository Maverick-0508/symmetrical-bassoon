'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Premium Milk',
      description: 'Pure, fresh milk from our healthy dairy cows',
      icon: '🥛',
      gradient: 'from-primary-amber to-accent-orange',
    },
    {
      id: 2,
      name: 'Artisan Yogurt',
      description: 'Fresh yogurt crafted in small batches',
      icon: '🍶',
      gradient: 'from-accent-orange to-primary-amber',
    },
    {
      id: 3,
      name: 'Organic Vegetables',
      description: 'Farm-fresh organic produce, picked daily',
      icon: '🥬',
      gradient: 'from-accent-blue to-primary-amber',
    },
    {
      id: 4,
      name: 'Fresh Fruits',
      description: 'Sweet and juicy seasonal fruits',
      icon: '🍎',
      gradient: 'from-primary-amber to-accent-blue',
    },
  ]

  const strengths = [
    {
      icon: '🌱',
      title: 'Sustainable Farming',
      description: 'We practice regenerative agriculture that improves soil health and biodiversity.',
    },
    {
      icon: '🏆',
      title: 'Award Winning',
      description: 'Multiple awards for our exceptional quality and dedication to organic farming.',
    },
    {
      icon: '🤝',
      title: 'Community First',
      description: 'Supporting local communities and building lasting relationships with our customers.',
    },
    {
      icon: '💚',
      title: 'Animal Welfare',
      description: 'Our animals are treated with respect and care, living happy and healthy lives.',
    },
    {
      icon: '🔬',
      title: 'Quality Control',
      description: 'Rigorous testing and quality assurance at every step of production.',
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Farm-fresh products and greens delivered directly to your doorstep within 24 hours.',
    },
  ]

  const partners = [
    { name: 'Organic Certified', logo: '🌿' },
    { name: 'Farm Fresh Alliance', logo: '🚜' },
    { name: 'Green Earth', logo: '🌍' },
    { name: 'Local Food Co-op', logo: '🏪' },
    { name: 'Sustainable Farms', logo: '♻️' },
    { name: 'Quality Assured', logo: '✓' },
  ]

  const testimonials = [
    {
      name: 'John Smith',
      role: 'Regular Customer',
      text: 'The best dairy products I\'ve ever had. The quality and freshness are unmatched.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Health Enthusiast',
      text: 'I love knowing exactly where my food comes from. Outstanding quality and service!',
    },
  ]

  const teamMembers = [
    {
      id: 1,
      name: 'Joseph Ndichu',
      role: 'Founder & CEO',
      image: '👩‍💼',
    },
    {
      id: 2,
      name: 'Faith Ngethe',
      role: 'Founder & CEO',
      image: '',
    },
    {
      id: 3,
      name: 'Alex Wasambula',
      role: 'Farm Manager',
      image: '👨‍🌾',
    },
    {
      id: 4,
      name: 'Jane Mwangi',
      role: 'Quality Assurance',
      image: '👩‍🔬',
    },
  ]

  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '1000+', label: 'Happy Customers' },
    { number: '100%', label: 'Organic' },
    { number: '24/7', label: 'Support' },
  ]

  const socialLinks = [
    { name: 'Facebook', iconName: 'facebook', url: 'https://www.facebook.com/profile.php?id=61555800447073' },
    { name: 'Instagram', iconName: 'instagram', url: 'https://www.instagram.com/sunnysidedairy_ke?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { name: 'Tiktok', iconName: 'tiktok', url: 'https://www.tiktok.com/@sunnysidedairy?is_from_webapp=1&sender_device=pc' },
  ]

  const renderSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook': return <FaFacebookF />
      case 'instagram': return <FaInstagram />
      case 'tiktok': return <FaTiktok />
    }
  }

  const heroRef = useRef(null)
  const productsRef = useRef(null)

  useEffect(() => {
    // Smooth scroll initialization
    const initSmoothScroll = async () => {
      if (typeof window !== 'undefined') {
        const Lenis = (await import('lenis')).default
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time: number) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
      }
    }

    initSmoothScroll()

    // Hero title animation
    gsap.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out',
      delay: 0.3,
    })

    gsap.from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.6,
    })

    gsap.from('.hero-cta', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      delay: 0.9,
    })

    // Stats animation
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: '.stats-container',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
    })

    // Product cards animation
    gsap.from('.product-card', {
      scrollTrigger: {
        trigger: '.products-grid',
        start: 'top 75%',
      },
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
    })

    // Strength cards animation with horizontal slide
    gsap.from('.strength-card', {
      scrollTrigger: {
        trigger: '.strengths-grid',
        start: 'top 70%',
      },
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    })

    // About section parallax
    gsap.to('.about-image-overlay', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
      },
      y: 100,
    })

    // Team members animation
    gsap.from('.team-member-card', {
      scrollTrigger: {
        trigger: '.team-grid',
        start: 'top 75%',
      },
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: 'power3.out',
    })

    // Testimonials animation
    gsap.from('.testimonial-card', {
      scrollTrigger: {
        trigger: '.testimonials-section',
        start: 'top 75%',
      },
      scale: 0.9,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
    })

    // Partners fade in
    gsap.from('.partner-item', {
      scrollTrigger: {
        trigger: '.partners-grid',
        start: 'top 80%',
      },
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.08,
      ease: 'power2.out',
    })

    // Contact cards slide up
    gsap.from('.contact-card', {
      scrollTrigger: {
        trigger: '.contact-grid',
        start: 'top 80%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
    })

    // Section titles reveal
    gsap.utils.toArray<HTMLElement>('.section-title').forEach((title) => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen bg-text-light text-primary-brown">
      {/* Header/Navigation */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b border-primary-brown/10 shadow-md">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <div className="text-2xl font-bold font-logo gradient-text tracking-tight">The Milk House</div>
          <div className="hidden md:flex gap-10 text-sm font-semibold font-body tracking-wide">
            <a href="#about" className="hover:text-primary-amber transition-colors duration-300">About Us</a>
            <a href="#products" className="hover:text-primary-amber transition-colors duration-300">Products</a>
            <a href="#team" className="hover:text-primary-amber transition-colors duration-300">Team</a>
            <a href="#contact" className="hover:text-primary-amber transition-colors duration-300">Contact Us</a>
          </div>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="w-9 h-9 rounded-full bg-primary-brown/5 hover:bg-gradient-to-br hover:from-primary-amber hover:to-accent-orange text-primary-brown hover:text-white flex items-center justify-center text-sm font-bold transition-all hover:scale-110 duration-300"
                aria-label={social.name}
              >
                {renderSocialIcon(social.iconName)}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-primary-brown">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-amber/20 via-primary-brown to-accent-orange/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-amber/10 via-primary-brown to-primary-brown"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-amber/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-orange/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl font-bold font-header mb-8 leading-tight">
              <span className="block text-primary-amber text-5xl md:text-6xl lg:text-7xl">Sunnyside</span>
              <span className="block text-text-light text-6xl md:text-7xl lg:text-8xl mt-1">Dairy</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-text-light/80 mb-12 max-w-2xl leading-relaxed font-body">
              Experience the finest farm-fresh products, where tradition meets innovation in every bite
            </p>
            <div className="hero-cta flex gap-6 flex-wrap">
              <a href="#products">
                <button className="group relative bg-gradient-to-r from-primary-amber to-accent-orange text-white px-10 py-5 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary-amber/30">
                  <span className="relative z-10">Explore Products</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </a>
              <a href="#about">
                <button className="border-2 border-text-light/30 text-text-light px-10 py-5 rounded-full font-semibold text-lg hover:bg-text-light/10 hover:border-primary-amber transition-all backdrop-blur-sm">
                  Our Story
                </button>
              </a>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="stats-container grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-4xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-item bg-text-light/10 backdrop-blur-md rounded-2xl p-6 border border-primary-amber/20">
                <div className="text-4xl md:text-5xl font-bold text-primary-amber mb-2">{stat.number}</div>
                <div className="text-text-light/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-light/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-amber rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="about-section relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-amber/5 via-transparent to-accent-orange/5"></div>
        
        {/* Decorative overlay */}
        <div className="about-image-overlay absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-amber/5 to-transparent"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="section-title text-6xl md:text-7xl font-bold font-header mb-8">
                <span className="gradient-text">About Us</span>
              </h2>
              <div className="space-y-6 text-xl text-primary-brown/80 leading-relaxed font-body">
                <p className="text-2xl font-light">
                  The Milk House at Sunny Side Dairy has been a cornerstone of our community for over two decades.
                </p>
                <p>
                  Founded on the principles of quality, sustainability, and respect for nature, we've grown from 
                  a small family farm into a trusted source of premium dairy and organic produce.
                </p>
                <p>
                  Our mission is simple: to provide the freshest, most nutritious products while maintaining the 
                  highest standards of animal welfare and environmental stewardship.
                </p>
              </div>
              <div className="mt-10 flex gap-6">
                <a href="#contact">
                  <button className="bg-gradient-to-r from-primary-amber to-accent-orange text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-amber/50 transition-all hover:scale-105">
                    Learn More
                  </button>
                </a>
                <a href="#products">
                  <button className="border-2 border-primary-amber text-primary-amber px-8 py-4 rounded-full font-semibold hover:bg-primary-amber hover:text-white transition-all">
                    View Products
                  </button>
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-text-light rounded-3xl p-8 border border-primary-brown/10 hover:border-primary-amber/50 transition-all transform hover:-translate-y-2 shadow-lg">
                  <div className="text-5xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold font-header mb-3 text-primary-brown">100% Organic</h3>
                  <p className="text-primary-brown/70">Certified organic farming practices</p>
                </div>
                <div className="bg-text-light rounded-3xl p-8 border border-primary-brown/10 hover:border-primary-amber/50 transition-all transform hover:-translate-y-2 mt-12 shadow-lg">
                  <div className="text-5xl mb-4">🐄</div>
                  <h3 className="text-2xl font-bold font-header mb-3 text-primary-brown">Happy Animals</h3>
                  <p className="text-primary-brown/70">Ethical and humane treatment</p>
                </div>
                <div className="bg-text-light rounded-3xl p-8 border border-primary-brown/10 hover:border-primary-amber/50 transition-all transform hover:-translate-y-2 -mt-12 shadow-lg">
                  <div className="text-5xl mb-4">♻️</div>
                  <h3 className="text-2xl font-bold font-header mb-3 text-primary-brown">Sustainable</h3>
                  <p className="text-primary-brown/70">Eco-friendly farming methods</p>
                </div>
                <div className="bg-text-light rounded-3xl p-8 border border-primary-brown/10 hover:border-primary-amber/50 transition-all transform hover:-translate-y-2 shadow-lg">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold font-header mb-3 text-primary-brown">Award Winning</h3>
                  <p className="text-primary-brown/70">Recognized for excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="relative py-32 px-6 bg-text-light">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-bold font-header mb-6 gradient-text">Meet the Team</h2>
            <p className="text-primary-brown/70 text-xl max-w-2xl mx-auto font-body">
              The passionate people behind the foundation of Sunnyside Dairy
            </p>
          </div>

          <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="team-member-card group flex flex-col items-center text-center"
              >
                {/* Circular Image Container */}
                <div className="relative mb-6 w-48 h-48">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-amber to-accent-orange p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
                      <div className="text-8xl">{member.image}</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary-amber/20 group-hover:border-primary-amber/50 transition-colors duration-300"></div>
                </div>

                {/* Member Info */}
                <h3 className="text-2xl font-bold font-header text-primary-brown mb-2 group-hover:text-primary-amber transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary-amber uppercase tracking-wide">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" ref={productsRef} className="relative py-32 px-6 bg-text-light">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-bold font-header mb-6 gradient-text">Our Products</h2>
            <p className="text-primary-brown/70 text-xl max-w-2xl mx-auto font-body">Handcrafted with passion, delivered with care</p>
          </div>
          
          <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <div
                key={product.id}
                className={`product-card group relative bg-white rounded-3xl p-10 border border-primary-brown/10 hover:border-primary-amber/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-primary-amber/20 ${
                  idx % 2 === 1 ? 'lg:mt-12' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">{product.icon}</div>
                  <h3 className="text-2xl font-bold font-header mb-4 text-primary-brown group-hover:text-primary-amber transition-colors">{product.name}</h3>
                  <p className="text-primary-brown/70 leading-relaxed mb-6 font-body">{product.description}</p>
                  <button className="text-primary-amber font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center">
                    Learn More <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Great At Section */}
      <section id="strengths" className="relative py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-bold font-header mb-6 gradient-text">What We're Great At</h2>
            <p className="text-primary-brown/70 text-xl max-w-3xl font-body">
              Our commitment to excellence is reflected in everything we do. Here's what sets us apart.
            </p>
          </div>
          
          <div className="strengths-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {strengths.map((strength, idx) => (
              <div
                key={idx}
                className={`strength-card group bg-text-light rounded-3xl p-10 border border-primary-brown/10 hover:border-primary-amber/50 transition-all duration-500 shadow-lg hover:shadow-2xl ${
                  idx % 3 === 1 ? 'md:mt-12' : ''
                } ${idx % 3 === 2 ? 'md:-mt-12' : ''}`}
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{strength.icon}</div>
                <h3 className="text-3xl font-bold font-header mb-4 text-primary-brown group-hover:text-primary-amber transition-colors">
                  {strength.title}
                </h3>
                <p className="text-primary-brown/70 text-lg leading-relaxed font-body">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="relative py-32 px-6 bg-text-light">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-bold font-header mb-6 gradient-text">Our Partners</h2>
            <p className="text-primary-brown/70 text-xl font-body">Trusted by industry leaders and certified organizations</p>
          </div>
          
          <div className="partners-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="partner-item bg-white rounded-2xl p-8 border border-primary-brown/10 hover:border-primary-amber/50 transition-all flex flex-col items-center justify-center text-center hover:scale-110 duration-300 shadow-md hover:shadow-xl"
              >
                <div className="text-5xl mb-3">{partner.logo}</div>
                <p className="text-xs text-primary-brown/70 font-medium font-body">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section relative py-32 px-6 bg-white">
        <div className="container mx-auto">
          <div className="mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-bold font-header mb-6 gradient-text">Customer Stories</h2>
            <p className="text-primary-brown/70 text-xl max-w-2xl font-body">Hear what our community has to say about us</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card bg-text-light rounded-3xl p-10 border border-primary-brown/10 hover:border-primary-amber/50 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-amber to-accent-orange flex items-center justify-center text-2xl font-bold text-white mr-5">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold font-header text-primary-brown text-xl">{testimonial.name}</p>
                    <p className="text-primary-brown/70 font-body">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-primary-brown/80 leading-relaxed italic text-xl mb-6 font-body">"{testimonial.text}"</p>
                <div className="flex text-primary-amber text-2xl">
                  ★★★★★
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-text-light">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="section-title text-6xl md:text-7xl font-bold font-header mb-6 gradient-text">Get In Touch</h2>
            <p className="text-2xl text-primary-brown/70 font-body">
              Ready to experience farm-fresh quality? Reach out to us today.
            </p>
          </div>
          
          <div className="contact-grid grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="contact-card bg-white rounded-3xl p-10 border border-primary-brown/10 hover:border-primary-amber/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="text-6xl mb-6">📍</div>
              <h3 className="font-bold font-header text-2xl mb-4 text-primary-amber">Location</h3>
              <p className="text-primary-brown/70 text-lg leading-relaxed font-body">Sunnyside Farm<br />Karura ka Nyungu, Kiambu County</p>
            </div>
            <div className="contact-card bg-white rounded-3xl p-10 border border-primary-brown/10 hover:border-primary-amber/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="text-6xl mb-6">📞</div>
              <h3 className="font-bold font-header text-2xl mb-4 text-primary-amber">Phone</h3>
              <p className="text-primary-brown/70 text-lg leading-relaxed font-body">0727 918796</p>
            </div>
            <div className="contact-card bg-white rounded-3xl p-10 border border-primary-brown/10 hover:border-primary-amber/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <div className="text-6xl mb-6">✉️</div>
              <h3 className="font-bold font-header text-2xl mb-4 text-primary-amber">Email</h3>
              <p className="text-primary-brown/70 text-lg leading-relaxed font-body">info@sunnysidedairy.com</p>
            </div>
          </div>
          
          <div className="text-center">
            <button className="bg-gradient-to-r from-primary-amber to-accent-orange text-white px-12 py-5 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-primary-amber/50 transition-all hover:scale-105">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-primary-brown border-t border-primary-amber/20 py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Brand */}
            <div>
              <div className="text-3xl font-bold font-logo text-primary-amber mb-6 tracking-tight">The Milk House</div>
              <p className="text-text-light/80 mb-6 leading-relaxed font-body">Rooted in tradition. Committed to quality.</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-12 h-12 rounded-full bg-text-light/5 hover:bg-gradient-to-br hover:from-primary-amber hover:to-accent-orange text-text-light flex items-center justify-center text-lg font-bold transition-all hover:scale-110 duration-300"
                    aria-label={social.name}
                  >
                    {renderSocialIcon(social.iconName)}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold font-header mb-6 text-primary-amber">Menu</h3>
              <ul className="space-y-3 font-body">
                <li><a href="#about" className="text-text-light/80 hover:text-primary-amber transition-colors duration-300">About Us</a></li>
                <li><a href="#team" className="text-text-light/80 hover:text-primary-amber transition-colors duration-300">Team</a></li>
                <li><a href="#products" className="text-text-light/80 hover:text-primary-amber transition-colors duration-300">Products</a></li>
                <li><a href="#contact" className="text-text-light/80 hover:text-primary-amber transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold font-header mb-6 text-primary-amber">Get in Touch</h3>
              <ul className="space-y-4 text-text-light/80 font-body">
                <li className="flex items-start">
                  <span className="mr-2">📍</span>
                  <span>Sunnyside Farm<br />Karura ka Nyungu, Kiambu County</span>
                </li>
                <li>📞 0727 918796</li>
                <li>✉️ info@sunnysidedairy.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-text-light/10 pt-10">
            <p className="text-text-light/60 text-sm text-center font-body">© 2026 The Milk House - Sunnyside Dairy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
