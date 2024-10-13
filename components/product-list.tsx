import { products } from '@/constants/shoe-data'
import ProductCard from './product-card'

const ProductList = () => {
  return (
    <div className='custom-grid grid auto-rows-[10px]'>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
