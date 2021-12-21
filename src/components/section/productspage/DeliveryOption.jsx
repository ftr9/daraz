import './deliverOption.css'

const TopicAndInfo = ({ name, icon }) => {
  return (
    <div className="topicwithInfo">
      <span>{name}</span>
      {icon}
    </div>
  )
}

const DeliveryOption = () => {
  return (
    <div className="deliveryOption">
      <TopicAndInfo
        name={'Delivery Options'}
        icon={<ion-icon name="information-circle-outline"></ion-icon>}
      />
      <div className="deliveryOption__1">
        <ion-icon name="location-outline"></ion-icon>
        <span className="deliveryOption__primary">
          Bagmati, Kathmandu Metro 22 - Newroad Area, Newroad
        </span>
        <span className="deliveryOption__change">change</span>
      </div>
      <div className="deliveryOption__2">
        <ion-icon name="home-outline"></ion-icon>
        <span>
          <p className="deliveryOption__primary">Home Delivery</p>
          <span className="deliveryOption__secondary">4-5 days</span>
        </span>
        <span className="deliveryOption__price">Rs. 59</span>
      </div>
      <div className="deliveryOption__3">
        <ion-icon name="card-outline"></ion-icon>
        <span className="deliveryOption__primary">
          Cash On Delivery Available
        </span>
      </div>

      <TopicAndInfo
        name={'Return and Waranty'}
        icon={<ion-icon name="information-circle-outline"></ion-icon>}
      />

      <div className="deliveryOption__3">
        <ion-icon style={{ color: 'blue' }} name="checkbox"></ion-icon>
        <span className="deliveryOption__primary">100% Authentic</span>
      </div>

      <div className="deliveryOption__2">
        <ion-icon style={{ color: 'blue' }} name="checkbox"></ion-icon>
        <span>
          <p className="deliveryOption__primary">14 days easy return </p>
          <span className="deliveryOption__secondary">
            Change of mind is not applicable
          </span>
        </span>
      </div>

      <div className="deliveryOption__3">
        <ion-icon name="shield-half-outline"></ion-icon>
        <span className="deliveryOption__primary">Waranty not available</span>
      </div>

      <div className="deliveryOption__stat">
        <div className="deliveryOption__stat__content">
          <div className="deliveryOption__stat__content--primary">
            Positive Seller Ratings
          </div>
          <div className="deliveryOption__stat__content--secondary">90%</div>
        </div>
        <div className="deliveryOption__stat__content">
          <div className="deliveryOption__stat__content--primary">
            Ship On Time
          </div>
          <div className="deliveryOption__stat__content--secondary">100%</div>
        </div>
        <div className="deliveryOption__stat__content">
          <div className="deliveryOption__stat__content--primary">
            Chat Response Rate
          </div>
          <div className="deliveryOption__stat__content--secondary">100%</div>
        </div>
      </div>
    </div>
  )
}

export default DeliveryOption
