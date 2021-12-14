import { useEffect, useState } from 'react'
import {
  sectionadd1,
  sectionadd2,
  sectionadd3,
  sectionadd4,
  sectionadd5,
  sectionadd6,
  sectionadd7,
  sectionadd8,
} from '../ads/index'
import './slideshow.css'

const Dots = ({ currentIndex }) => {
  return (
    <div className="sectionOne__images--dots">
      <div
        className={`sectionOne__images--dot ${
          currentIndex === 1 ? 'sectionOne__images--dot__active' : ''
        } `}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>

      <div
        className={`sectionOne__images--dot ${
          currentIndex === 2 ? 'sectionOne__images--dot__active' : ''
        } `}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>

      <div
        className={`sectionOne__images--dot ${
          currentIndex === 3 ? 'sectionOne__images--dot__active' : ''
        }`}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>

      <div
        className={`sectionOne__images--dot ${
          currentIndex === 4 ? 'sectionOne__images--dot__active' : ''
        }`}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>

      <div
        className={`sectionOne__images--dot ${
          currentIndex === 5 ? 'sectionOne__images--dot__active' : ''
        }`}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>

      <div
        className={`sectionOne__images--dot ${
          currentIndex === 6 ? 'sectionOne__images--dot__active' : ''
        }`}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>

      <div
        className={`sectionOne__images--dot ${
          currentIndex === 7 ? 'sectionOne__images--dot__active' : ''
        }`}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>

      <div
        className={`sectionOne__images--dot ${
          currentIndex === 8 ? 'sectionOne__images--dot__active' : ''
        }`}
      >
        <ion-icon name="ellipse"></ion-icon>
      </div>
    </div>
  )
}

const AdImages = ({ currentIndex }) => {
  switch (currentIndex) {
    case 1:
      return (
        <img
          src={sectionadd1}
          className={currentIndex === 1 ? 'active__slideImage' : ''}
          alt="sale AD"
        ></img>
      )
    case 2:
      return <img src={sectionadd2} alt="sale AD"></img>
    case 3:
      return <img src={sectionadd3} alt="sale AD"></img>
    case 4:
      return <img src={sectionadd4} alt="sale AD"></img>
    case 5:
      return <img src={sectionadd5} alt="sale AD"></img>
    case 6:
      return <img src={sectionadd6} alt="sale AD"></img>
    case 7:
      return <img src={sectionadd7} alt="sale AD"></img>
    case 8:
      return <img src={sectionadd8} alt="sale AD"></img>
    default:
      return <img src={sectionadd1} alt="sale AD"></img>
  }
}

const SecOneSlideShow = () => {
  const [dotIndex, setdotIndex] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      let index = dotIndex
      index++
      if (index > 8) {
        index = 0
      }
      setdotIndex(index)
    }, 3000)
  }, [dotIndex])

  return (
    <div className="sectionOne__images">
      <AdImages currentIndex={dotIndex} />
      <Dots currentIndex={dotIndex} />
    </div>
  )
}

export default SecOneSlideShow
