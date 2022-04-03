import axios from 'axios'
import { useState } from 'react'

function QueryInput({ tabsData, setTabsData }) {
  const [ isLoading, setIsLoading ] = useState(false)

  const getQueryResult = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const response = await axios.get('/b/MXR3')
    if(response.status === 200) {
      const data = response.data
      setIsLoading(false)
      let newTabData = tabsData.map((tab) => {
        if(tab.isActive) {
          return {...tab, isEmpty: false, tableData: data}
        } else {
          return {...tab, isEmpty: true}
        }
      })
      setTabsData(newTabData)
    }
  }
  return (
    <div className="">
      <div className="query__wrapper box__grooming">
        <div>
          {
            tabsData.map((tab) => {
              if(tab.isActive){
                return <h4>{tab.title}</h4>
              }
            })
          }
        </div>
        <form className="query__search cf" onSubmit={(e) => getQueryResult(e)}>
          <textarea type="text" placeholder="SELECT * FROM UESR" required />
          <button type="submit" disabled={isLoading} >{isLoading ? 'Fetching...' : 'Run'}</button>
        </form>
      </div>
    </div>
  )
}

export default QueryInput