import './Mainnav.css'
import addone from './add1.gif'

const NoborderNavs = ({ content, icon, isiconFirst = false }) => {
  if (!isiconFirst) {
    return (
      <div
        className="mainnav__content1--cta-button"
        style={{ marginRight: '4rem' }}
      >
        {icon}
        <p style={{ marginLeft: '1rem' }}>{content}</p>
      </div>
    )
  } else {
    return (
      <div className="mainnav__content1--cta-button">
        <p style={{ marginRight: '1rem' }}>{content}</p>
        {icon}
      </div>
    )
  }
}

const Mainnav = ({ openStatus, shrinkStatus }) => {
  return (
    <div className={`mainnav ${shrinkStatus ? 'mainnav__shadow' : ''}`}>
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
      <div
        className={`mainnav__content--1 ${
          openStatus ? 'mainnav__content--1__open' : ''
        }`}
      >
        <div className="mainnav__content--dropdown">
          <NoborderNavs
            content={'categories'}
            icon={<ion-icon name="chevron-down"></ion-icon>}
            isiconFirst={true}
          />
        </div>
        <div className="mainnav__content1--cta">
          <NoborderNavs
            content={'12.12'}
            icon={<ion-icon name="trophy"></ion-icon>}
          />
          <NoborderNavs
            icon={<ion-icon name="card"></ion-icon>}
            content={'Daraz Mall'}
          />
          <NoborderNavs
            icon={<ion-icon name="cart"></ion-icon>}
            content={'dMart'}
          />
          <NoborderNavs
            icon={<ion-icon name="download"></ion-icon>}
            content={'Recharge & Services'}
          />
          <NoborderNavs
            icon={<ion-icon name="menu"></ion-icon>}
            content={'Daraz Fashion'}
          />
        </div>
      </div>
    </div>
  )
}

export default Mainnav
