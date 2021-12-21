import './addbutton.css'
const Addbutton = ({ name, color }) => {
  return (
    <button style={{ backgroundColor: `${color}` }} className="addButton">
      {name}
    </button>
  )
}

export default Addbutton
