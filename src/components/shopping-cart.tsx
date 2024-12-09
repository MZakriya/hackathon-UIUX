"use client"

import Image from "next/image"
import { Lock, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface CartItem {
  id: string
  name: string
  image: string
  quantity: number
  price: number
}

const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Asgaard sofa",
    image: "/images/sofa-main.png",
    quantity: 1,
    price: 250000.00
  },
  {
    id: "2",
    name: "Casaliving Wood",
    image: "/images/cart2png",
    quantity: 1,
    price: 270000.00
  }
]

export default function ShoppingCart() {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-medium">Shopping Cart</h1>
        <Lock className="h-5 w-5 text-gray-400" />
      </div>

      <div className="divide-y">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 py-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-[#F9F1E7]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 justify-between">
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.quantity} x{" "}
                  <span className="text-[#B88E2F]">
                    Rs. {item.price.toLocaleString()}
                  </span>
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-500">
                <X className="h-5 w-5" />
                <span className="sr-only">Remove item</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between">
          <span className="font-medium">Subtotal</span>
          <span className="text-[#B88E2F]">
            Rs. {subtotal.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-2">
        <Button variant="outline" className="w-full">
          Cart
        </Button>
        <Button variant="outline" className="w-full">
          Checkout
        </Button>
        <Button variant="outline" className="w-full">
          Comparison
        </Button>
      </div>
    </div>
  )
}

