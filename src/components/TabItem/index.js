import './index.css'

const TabItem = props => {
  const {eachTab, onClickTab, activeTabColor} = props
  const {tabId, displayText} = eachTab
  const changeTab = () => onClickTab(tabId)
  const activeTabClass = activeTabColor ? 'active-tab' : ''
  return (
    <li className={`tab ${activeTabClass}`}>
      <button onClick={changeTab}>{displayText}</button>
    </li>
  )
}

export default TabItem
