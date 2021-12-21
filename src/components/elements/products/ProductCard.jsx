import './productcard.css'
import ProductRating from '../ratings/ProductRating'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, name, price, rating, totalRaters, id }) => {
  return (
    <Link className="productCard__link" to={`/details/${id}`}>
      <div className="productCard">
        <div className="productCard__image">
          <img src={image} alt={'product img'}></img>
        </div>
        <div className="productCard__content">
          <div className="productCard__title">{name}</div>
          <div className="productCard__price">Rs.{price}</div>
          <div className="productCard__rating">
            {/* ////Product rating component here*/}
            <ProductRating totalRater={totalRaters} rating={rating} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
