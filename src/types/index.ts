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
  currentPrice: string
  originalPrice: string | null
  discount: number | null
  categoryId: number
  subcategoryId: number
}

export type { PriceRange, Category, Subcategory, Product }