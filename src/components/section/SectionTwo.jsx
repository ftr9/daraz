import './SectionTwo.css'
import {
  darazfashion,
  darazmall,
  dmart,
  rechargeandservices,
  twelve,
} from './servicesImage/index'

const SectionTwo = () => {
  return (
    <div className="sectiontwo">
      <div className="sectiontwo__content">
        <button className="section__two--cta">
          <img src={twelve} alt="service"></img>
          <span>12.12</span>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <button className="section__two--cta">
          <img src={darazmall} alt="service"></img>
          <span>DarazMall</span>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <button className="section__two--cta">
          <img src={dmart} alt="service"></img>
          <span>dMart</span>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <button className="section__two--cta">
          <img src={rechargeandservices} alt="service"></img>
          <span>Recharge&Services</span>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <button className="section__two--cta">
          <img src={darazfashion} alt="service"></img>
          <span>DarazFashion</span>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>
      </div>
    </div>
  )
}

export default SectionTwo
