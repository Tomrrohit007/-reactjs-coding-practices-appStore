import './index.css'

const AppItem = props => {
  const {eachapp} = props
  const {appName, imageUrl, category} = eachapp
  return (
    <li className="app-list">
      <img className="image" src={imageUrl} alt="appName" category={category} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
