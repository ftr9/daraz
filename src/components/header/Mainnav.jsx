import './Mainnav.css'
import addone from './add1.gif'

const Mainnav = () => {
  return (
    <div className="mainnav">
      <div className="mainnav__content">
        <div className="mainnav__logo">
          <img
            className="mainnav__logo"
            src="/images/logo/main.png"
            alt="business main logo"
          ></img>
        </div>

        <div className="mainnav__searchBar">
          <input type={'text'} placeholder="Search in daraz"></input>
          <button>
            <ion-icon name="search"></ion-icon>
          </button>
        </div>

        <div className="mainnav__cart">
          <ion-icon name="cart-outline"></ion-icon>
        </div>

        <div className="mainnav__ad">
          <img src={addone} alt="sale"></img>
        </div>
      </div>
    </div>
  )
}

export default Mainnav
