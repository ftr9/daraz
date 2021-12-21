import './incbutton.css'
const Button = ({ icon }) => {
  return <button>{icon}</button>
}

const Incbutton = () => {
  return (
    <div className="quantityIncDec">
      <p>Quantity</p>
      <div className="IncDecbutton">
        <Button icon={<ion-icon name="add"></ion-icon>} />
        <input
          readOnly={true}
          value={1}
          type={'number'}
          min={1}
          max={5}
        ></input>
        <Button icon={<ion-icon name="remove"></ion-icon>} />
      </div>
    </div>
  )
}

export default Incbutton
