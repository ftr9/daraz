import './productdetailpage.css';

import Category from '../section/productspage/Category';
import DeliveryOption from '../section/productspage/DeliveryOption';
import ProductRating from '../elements/ratings/ProductRating';
import Addbutton from '../elements/buttons/Addbutton';

import Incbutton from '../elements/buttons/Incbutton';

const ProductDetailPage = () => {
    return (
        <div className='productDetailPage'>
            <div className='productDetailPage__content'>
                <Category />
                <div className='productDetailPage__actual'>
                    <div className='productDetailPage__left'>
                        <div className='productDetailsPage__left__image'>
                            <img src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} alt={"product name"}></img>
                        </div>
                        <div className='productDetailsPage__left__content'>
                            <h2>just a dummy product to render in the chat so that it makes senese</h2>
                            <div className="ProductDetailPage__left__menu">
                                <ProductRating totalRater={3} rating={2} />
                                <div className='productDetailsPage__icon'>
                                    <ion-icon name="share-social-sharp"></ion-icon>
                                    <ion-icon name="heart"></ion-icon>
                                </div>
                            </div>

                            <div className='productDetailsPage__price'>
                                Rs. 290
                            </div>
                            <Incbutton />
                            <div className='productDetailsPage__addbuttons'>
                                <Addbutton name={"Buy now "} color={"#2ABBE8"} />
                                <Addbutton name={"Add to cart"} color={"#D0611E"} />
                            </div>
                        </div>
                    </div>
                    <div className='productDetailPage__right'>
                        <DeliveryOption />
                    </div>
                </div>

            </div>

            <div className='productDetailPage__content productDetailsPage__content_pad'>
                <p>Product details of Nature's Tattva Castor Oil (Cold Pressed, Pure & Natural) - 200 ml</p>
                <p>Nature's Tattva 100% Pure Natural and Cold Pressed Castor Oil is derived from cold pressing organic ricinus communis seeds. When applied topically it is known to slow down aging. Castor oil when applied to the skin penetrates deep and stimulates the production of collagen and elastin. This in turn helps to soften and hydrate the skin. It delays the appearance of wrinkles and fine lines and makes the skin smoother, softer and younger. You may also use this oil to treat fine lines around the eye area. Castor oil is rich in ricinoleic acid that wards off acne causing bacteria. It effectively penetrates the skin layers making it an excellent remedy for acne. Castor oil is packed with essential fatty acids, specifically Omega-3 fatty acids that hydrate the skin while stimulating the growth of healthy tissues thus giving you a blemish-free skin which is soft to touch. This oil also boosts blood circulation to the follicles, leading to a faster hair growth. The oil also has Omega-9 essential fatty acids that are responsible for healthy hair. It also helps reduce split ends, controls hair breakage and conditions and moisturizes your hair. The application of castor oil is a popular method to prevent premature greying.</p>
                <p>The germicidal, insecticidal, and fungicidal properties of ricin and ricinoleic acid present in castor oil protect the scalp and hair from microbial and fungal infections, the two prime causes of hair loss. In addition to this, the fatty acids in it nourish the hair and prevent the scalp from drying by retaining moisture. In addition, it also prevents premature graying of hair and dandruff and promotes conditioning.

                    It works as an emollient, smoothing flaky skin and making it feel softer. It can also provide a barrier on the skin and protect against moisture loss. For hair, it acts as a lubricant, coating and conditioning strands to improve smoothness and shine.</p>
            </div>

            <div className='productDetailPage__content productDetailsPage__content_pad'>
                <h4>Ratings & Reviews of Nature's Tattva Castor Oil (Cold Pressed, Pure & Natural) - 200 ml</h4>
            </div>

        </div>
    )
}

export default ProductDetailPage
