import './SectionThree.css'

import { ProductCard } from '../elements/products'

const SectionThree = () => {
  return (
    <div className="sectionthree">
      <div className="sectionthree--content">
        <h2>Just For You</h2>
        <div className="sectionthree__products">
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/c1a6e56441dd8410ca3f6fa15cc67e87.jpg_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/eeef1da3f3979b4c650b8ca52c2736f6.jpg_400x400q75-product.jpg'
            }
            name={'boot'}
            price={1500}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/8cccd8352e34cd567e52590351900d16.jpg_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/bf2424c644173c8b82d29f54b396bcbf.jpg_400x400q75-product.jpg'
            }
            name={'boot'}
            price={1500}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/3aae7615c78dd5279b4dcf6047183d3a.jpg_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/1bc0f22decb8f211ad9c9ff2b54ef92f.png_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />

          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/c1a6e56441dd8410ca3f6fa15cc67e87.jpg_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/eeef1da3f3979b4c650b8ca52c2736f6.jpg_400x400q75-product.jpg'
            }
            name={'boot'}
            price={1500}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/8cccd8352e34cd567e52590351900d16.jpg_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/bf2424c644173c8b82d29f54b396bcbf.jpg_400x400q75-product.jpg'
            }
            name={'boot'}
            price={1500}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/3aae7615c78dd5279b4dcf6047183d3a.jpg_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />
          <ProductCard
            image={
              'https://static-01.daraz.com.np/p/1bc0f22decb8f211ad9c9ff2b54ef92f.png_400x400q75-product.jpg'
            }
            name={'gloves'}
            price={1200}
          />
        </div>
      </div>
    </div>
  )
}

export default SectionThree
