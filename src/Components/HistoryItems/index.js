import './index.css'

const HistoryItems = props => {
  const {historyList, key, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyList

  const onDelete = () => onDeleteItem(id)

  return (
    <div className="history-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="history-img-container">
        <img src={logoUrl} alt="instagram" className="logo-img" />
        <p className="logo-title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
        className="delete-img"
        onClick={onDelete}
      />
    </div>
  )
}
export default HistoryItems
