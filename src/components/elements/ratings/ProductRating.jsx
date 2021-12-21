import './productRating.css'
const ProductRating = ({ totalRater, rating }) => {
  const ratings = parseInt(rating)

  return (
    <div className="productRating">
      {new Array(parseInt(ratings)).fill(10).map((el, index) => (
        <ion-icon key={index} name="star"></ion-icon>
      ))}

      {new Array(5 - ratings).fill(10).map((el, index) => (
        <ion-icon style={{ color: 'gray' }} key={index} name="star"></ion-icon>
      ))}

      {/*<ion-icon name="star-half"></ion-icon>*/}
      <span className="totalraters">({totalRater})</span>
    </div>
  )
}

export default ProductRating
