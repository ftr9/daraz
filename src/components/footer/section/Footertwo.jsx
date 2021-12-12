import './footerTwo.css'

const Footertwo = () => {
  return (
    <div className="footer__2">
      <div className="footer__2--content">
        <div className="footer__2--content__cta">
          <div className="footer__2--content__title">Payment Methods</div>
          <div className="footer__2--content__images">
            <span>COD</span>
            <span>VISA</span>
            <span>BANK</span>
          </div>
        </div>
        <div className="footer__2--content__cta">
          <div className="footer__2--content__title">Daraz International</div>
          <div className="footer__2--content__images--1">
            <span>
              <img src="/images/logo/pakistan.png" alt="pak" />
            </span>
            <span>
              <img src="/images/logo/bangadesh.jpg" alt="bang" />
            </span>
            <span>
              <img src="/images/logo/srilanka.png" alt="sril" />
            </span>
            <span>
              <img src="/images/logo/myanmaar.png" alt="myn"></img>
            </span>
            <span>
              <img src="/images/logo/nepal.webp" alt="Nep" />
            </span>
          </div>
        </div>
        <div className="footer__2--content__cta">
          <div className="footer__2--content__title">Follow Us</div>
          <div className="footer__2--content__images--2">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
            <ion-icon name="logo-euro"></ion-icon>
          </div>
        </div>
        <div className="footer__2--content__cta">
          <div className="footer__2--content__title">Verified by</div>
          <div className="footer__2--content__images--3">
            <img src="/images/logo/pcidss.png" alt="pcis"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footertwo
