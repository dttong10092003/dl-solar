interface PriceRange {
  label: string
  min: number
  max: number
}

interface Category {
  id: number
  name: string
}

interface Subcategory {
  id: number
  categoryId: number
  name: string
}

interface Product {
  id: number
  name: string
  image: string
  thumbnails: string[]
  description: string
  currentPrice: number
  originalPrice: number | null
  discount: number | null
  categoryId: number
  subcategoryId: number
}

interface CartItem {
  id: number
  productId: number
  name: string
  image: string
  currentPrice: number
  originalPrice: number | null
  quantity: number
  totalPrice: number
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalAmount: number
}

export type { PriceRange, Category, Subcategory, Product, CartItem, CartState }