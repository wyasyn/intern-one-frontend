import { StaticImageData } from 'next/image'
import { images } from './images'

export interface SneakerProduct {
  id: number
  name: string
  image: StaticImageData
  slug: string
  price: number
  currency: string
  stockQuantity: number
  isNew: boolean
  description: string
  rating: number
}

// Helper function to create a slug from a string
const createSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-')
}

export const getProductBySlug = (slug: string): SneakerProduct | undefined => {
  return products.find(product => product.slug === slug)
}

export const products: SneakerProduct[] = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    slug: createSlug('Nike Air Max 270'),
    image: images.nike,
    price: 560000,
    currency: 'UGX',
    stockQuantity: 15,
    isNew: true,
    description:
      'Sleek design with extra cushioning for all-day comfort. Available in multiple colors.',
    rating: 4.5
  },
  {
    id: 2,
    name: 'Adidas Ultraboost 21',
    slug: createSlug('Adidas Ultraboost 21'),
    image: images.adidas,
    price: 670000,
    currency: 'UGX',
    stockQuantity: 10,
    isNew: false,
    description:
      'Boost your run with the perfect blend of energy return and comfort.',
    rating: 4.7
  },
  {
    id: 3,
    name: 'Puma RS-X3 Puzzle',
    slug: createSlug('Puma RS-X3 Puzzle'),
    image: images.puma,
    price: 450000,
    currency: 'UGX',
    stockQuantity: 7,
    isNew: true,
    description:
      'A bold design for style and performance. Stand out with these retro-inspired sneakers.',
    rating: 3.2
  },
  {
    id: 4,
    name: 'Converse Chuck Taylor All Star',
    slug: createSlug('Converse Chuck Taylor All Star'),
    image: images.converse,
    price: 260000,
    currency: 'UGX',
    stockQuantity: 30,
    isNew: false,
    description:
      'The timeless classic, perfect for everyday wear. Available in high-top and low-top versions.',
    rating: 4.0
  },
  {
    id: 5,
    name: 'Jordan Air Jordan 1 Retro High OG',
    slug: createSlug('Jordan Air Jordan 1 Retro High OG'),
    image: images.jordan,
    price: 640000,
    currency: 'UGX',
    stockQuantity: 15,
    isNew: false,
    description:
      'Iconic high-top sneakers with premium leather and legendary design.',
    rating: 4.8
  },
  {
    id: 6,
    name: 'New Balance 990v5',
    slug: createSlug('New Balance 990v5'),
    image: images.balance,
    price: 660000,
    currency: 'UGX',
    stockQuantity: 5,
    isNew: true,
    description:
      'Premium materials and unmatched stability for casual wear or running.',
    rating: 4.6
  },
  {
    id: 7,
    name: 'Reebok Classic Leather',
    slug: createSlug('Reebok Classic Leather'),
    image: images.reebok,
    price: 320000,
    currency: 'UGX',
    stockQuantity: 25,
    isNew: false,
    description:
      'Retro style meets modern comfort. The perfect everyday sneaker.',
    rating: 4.2
  },
  {
    id: 8,
    name: 'Vans Old Skool',
    slug: createSlug('Vans Old Skool'),
    image: images.van,
    price: 250000,
    currency: 'UGX',
    stockQuantity: 40,
    isNew: true,
    description:
      'Skate-inspired low-tops with the signature side stripe. Durable and stylish for all occasions.',
    rating: 4.4
  },
  {
    id: 9,
    name: 'Puma Black & Yellow Sport',
    slug: createSlug('Puma Black and Yellow Sport'),
    image: images.pumaSport,
    price: 750000,
    currency: 'UGX',
    stockQuantity: 0,
    isNew: false,
    description:
      "Step into style and performance with the Puma Black & Yellow Sport sneakers. These skate-inspired low-top shoes feature a sleek black design with bold yellow accents, offering both durability and comfort. Whether you're hitting the streets or the gym, their versatile look and robust construction make them perfect for any occasion. Designed with Puma's signature stripe for a sporty edge, these sneakers provide a perfect blend of fashion and function.",
    rating: 2.5
  }
]
