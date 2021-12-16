import './Mininav.css'

const Mininav = ({ shrinkStatus }) => {
  return (
    <div className={`mininav ${shrinkStatus ? 'mininav__collapse' : ''}`}>
      <ul>
        <li>
          <a href="/">save more on app</a>
        </li>
        <li>
          <a href="/">sell on daraz</a>
        </li>
        <li>
          <a href="/">customer care</a>
        </li>
        <li>
          <a href="/">track my order</a>
        </li>
        <li>
          <a href="/">login</a>
        </li>
        <li>
          <a href="/">sign Up</a>
        </li>
        <li>
          <a href="/">langugae translation</a>
        </li>
      </ul>
    </div>
  )
}

export default Mininav
