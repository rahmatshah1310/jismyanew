"use client"

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InputField from '@/components/ui/InputField'
import { cartItems, cartItems as mockCartItems } from '@/constants/data'

export default function SingleCartItem() {
  const { id } = useParams()
  const itemId = parseInt(id)
  const [cartItem, setCartItem] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState("")

  useEffect(() => {
    const foundItem = mockCartItems.find(item => item.id === itemId)
    if (foundItem) {
      setCartItem(foundItem)
      setQuantity(foundItem.quantity || 1)
      setSelectedOption(foundItem.selectedOption || "")
    }
  }, [itemId])

  if (!cartItem) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Item not found</p>
      </main>
    )
  }


  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const handleQuantityChange = (id, qty) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: qty } : item
    ))
  }

  const handleOptionChange = (id, value) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, selectedOption: value } : item
    ))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return (
    <main className="py-12 px-4">
      <div className="rounded-lg md:p-6 p-2.5">
        <div className="flex flex-col md:flex-row gap-8 mx-auto md:max-w-[45%] min-w[100%] bg-[var(--color-gray-50)] shadow-md p-2">
          <div className="flex-shrink-0 flex justify-center items-center ">
            <Image
              src={cartItem.image}
              alt={cartItem.name}
              width={300}
              height={300}
              className="rounded object-cover w-full h-full bg-[var(--color-gray-100)]"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-4 text-[var(--color-gray-800)]">{cartItem.name}</h1>
              <p className="text-xl text-[var(--color-pink-600)] font-semibold mb-2">Rs. {cartItem.price.toLocaleString()}</p>

              <div className="mb-2 text-[var(--color-gray-600)]">
                <div><strong>Ships In:</strong> {cartItem.delivery}</div>
                <div><strong>Delivery Area:</strong> {cartItem.area}</div>
                <div><strong>Origin:</strong> {cartItem.origin}</div>
                <div><strong>Shipped By:</strong> {cartItem.shippedBy}</div>
              </div>

              <div className="mt-4 mb-4 flex items-center gap-2">
                <label className="font-semibold">Size:</label>
                <select
                  className="border border-gray-300 rounded px-2 py-1"
                  value={selectedOption}
                  onChange={e => setSelectedOption(e.target.value)}
                >
                  <option value="">Choose an Option...</option>
                  {cartItem.options.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <label className="font-semibold">Qty:</label>
                <InputField
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
                  className="w-20 px-2 py-1 border border-gray-300 rounded"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <button className="bg-[var(--color-pink-500)] hover:bg-[var(--color-pink-600)] text-white px-8 py-3 rounded-md font-semibold transition-colors mx-w-3xl">
                Remove Cart
              </button>
              <Link
                href="/"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="py-10 mt-5 sm:py-16 px-2 sm:px-4 md:px-8 bg-[var(--color-white)]">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-[var(--color-pink-600)]">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-4">
            {cartItems.map((product, index) => (
              <div key={index} className="bg-[var(--color-white)]  shadow-md overflow-hidden group hover:shadow-xl transition-shadow flex flex-col">
                <Link href={`/cart/${product.id}`}>
                  <div className="relative h-40 sm:h-64 md:h-50 w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-[var(--color-gray-700)]">{product.name}</h3>
                    <p className="text-[var(--color-pink-500)] font-bold mb-2 sm:mb-4 ">$ {product.price}</p>
                    <button className="w-full bg-[var(--color-pink-500)] text-[var(--color-white)] py-2 rounded-md hover:bg-[var(--color-pink-600)] transition-colors text-sm sm:text-base">
                      Add to Cart
                    </button>
                  </div></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-between bg-[var(--color-pink-500)]  items-center mt-8 max-w-[50%] mx-auto p-3 rounded">
        <div className="font-bold text-lg text-[var(--color-white)]">Total:</div>
        <div className="font-bold text-xl text-[var(--color-white)]">Rs. {total.toLocaleString()}</div>
      </div>
    </main>
  )
}
