import './SectionThree.css'
import { useEffect, useState } from 'react'
import { ProductCard } from '../elements/products'
import FetchLoad from '../elements/loading/fetchLoad'

////fake rest api integration
import axios from 'axios'

const SectionThree = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ;(async () => {
      const products = await axios.get('https://fakestoreapi.com/products/')
      setProducts(products.data)
    })()
  }, [setProducts])

  return (
    <div className="sectionthree">
      <div className="sectionthree--content">
        <h2>Just For You</h2>
        <div className="sectionthree__products">
          {products.length === 0 ? (
            <FetchLoad />
          ) : (
            products.map(product => (
              <ProductCard
                image={product.image}
                key={product.id}
                id={product.id}
                name={product.title}
                price={product.price}
                rating={product.rating.rate}
                totalRaters={product.rating.count}
              ></ProductCard>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionThree
