import axios from 'axios'
import { useState } from 'react'

function QueryInput({ tabsData, setTabsData }) {
  const [ isLoading, setIsLoading ] = useState(false)

  const getQueryResult = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // const response = await axios.get('https://jsonkeeper.com/b/MXR3')
    const response = await axios.get('https://raw.githubusercontent.com/sskanishk/query-table/master/db.json')
    // const response = await axios.get('/b/MXR3')
    console.log(response)
    if(response.status === 200) {
      const data = response.data.data
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
            tabsData.map((tab, id) => {
              if(tab.isActive){
                return <h4 key={`h4${id}`}>{tab.title}</h4>
              }
              return null
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