import './productcard.css'
import ProductRating from '../ratings/ProductRating'

const ProductCard = ({ image, name, price, rating, totalRaters }) => {
  return (
    <div className="productCard">
      <div className="productCard__image">
        <img src={image} alt={'product img'}></img>
      </div>
      <div className="productCard__content">
        <div className="productCard__title">{name}</div>
        <div className="productCard__price">Rs.{price}</div>
        <div className="productCard__rating">
          <ProductRating />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
