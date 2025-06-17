'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@components/ui/Button'
import { slides, policy, products, category } from '@constants/data'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState(null)

  const slideVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[500px] h-[calc(100vh-10rem)] mt-16 bg[var(--bacground)]">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="absolute inset-0 bg-black/40" />
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center text-[var(--color-white)] w-full max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="w-full max-w-2xl mx-auto">
                  <AnimatePresence mode="wait">
                    {currentSlide === index && (
                      <motion.div
                        key={`slide-${index}`}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                          exit: { opacity: 0 }
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.h2
                          variants={slideVariants}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 md:mb-4 text-[var(--color-white)]"
                        >
                          {slide.heading}
                        </motion.h2>
                        <motion.p
                          variants={slideVariants}
                          transition={{ duration: 0.8, delay: 0.4 }}
                          className="text-base sm:text-lg md:text-xl mb-4 md:mb-8 max-w-lg mx-auto text-[var(--color-white)]"
                        >
                          {slide.description}
                        </motion.p>
                        <motion.div
                          variants={slideVariants}
                          transition={{ duration: 0.8, delay: 0.6 }}
                        >
                          <Link
                            href={slide.buttonLink}
                            className="inline-block bg-[var(--color-pink-500)] hover:bg-[var(--color-pink-600)] px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-md transition-colors text-[var(--color-white)]"
                          >
                            {slide.buttonText}
                          </Link>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-9 px-5 bg-[var(--color-white)]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-pink-600)]">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.map((category) => (
              <div key={category.text} className="group relative overflow-hidden rounded-lg bg-[var(--color-gray-50)]">
                <Image
                  src={category.image}
                  alt={category}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[var(--color-white)] text-xl font-semibold bg-black/50 px-6 py-2 rounded">
                  {category.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Return Policy Section */}
      <section id="return-policy" className="py-20 px-5 bg-[var(--color-gray-50)]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-pink-600)]">Our Return Policy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policy.map((item) => (
              <div key={item.title} className="bg-[var(--color-white)] p-8 rounded-lg text-center transform hover:-translate-y-2 transition-transform">
                <i className={`fas ${item.icon} text-4xl text-[var(--color-pink-500)] mb-4`}></i>
                <h3 className="text-xl font-semibold mb-4 text-[var(--color-pink-600)]">{item.title}</h3>
                <p className="text-[var(--color-gray-600)]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-5 bg-[var(--color-white)]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-pink-600)]">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-[var(--color-white)] rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-[var(--color-gray-700)]">{product.name}</h3>
                  <p className="text-[var(--color-pink-500)] font-bold mb-4 ">{product.price}</p>
                  <button className="w-full bg-[var(--color-pink-500)] text-[var(--color-white)] py-2 rounded-md hover:bg-[var(--color-pink-600)] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 px-5 bg-gradient-to-r from-pink-500 to-pink-600 text-[var(--color-white)]">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offer</h2>
          <p className="text-xl mb-8">Get 20% off on your first purchase</p>
          <Link
            href="#shop-now"
            className="inline-block bg-[var(--color-white)] text-pink-500 px-8 py-3 rounded-md hover:[var(--color-gray-100)] transition-colors font-semibold"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-5 bg-[var(--color-white)]">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-[var(--color-pink-600)]">Subscribe to Our Newsletter</h2>
          <p className="mb-8 text-[var(--color-gray-600)]">Get updates on new arrivals and exclusive offers</p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-[var(--color-gray-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Button
              type="submit"
              className="bg-[var(--color-pink-500)] text-[var(--color-white)] px-8 py-3 rounded-md hover:bg-[var(--color-pink-600)] transition-colors"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/923488597922"
        className="fixed right-6 bottom-6 bg-[var(--color-green-500)] text-[var(--color-white)] w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform z-50"
        target="_blank"
      >
        <i className="fab fa-whatsapp"></i>
      </Link>
    </main>
  )
}