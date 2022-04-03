import React, { useEffect, useState } from 'react'
import { ActiveContext } from './Container'
import FluidTable from './FluidTable'


function QueryOutput({ tabsData, setTabsData }) {
  const ActiveTabData = React.useContext(ActiveContext)
  const [ currData, setCurrData ] = useState(ActiveTabData)

  useEffect(() => {
    setCurrData(tabsData.filter((o) => {
      if(o.isActive) {
        return o
      }
    }))
  }, [ActiveTabData])

  return (
    <div>
      {/* <FluidTable ordersData={ordersData} /> */}
      {
        currData[0]?.isActive && currData[0]?.tableData?.length > 1
        ? <FluidTable ordersData={currData[0].tableData} />
        : <h2>No data</h2>
      }
      {/* {
        tabsData.map((o, i) => {
          if(o.isActive && o.tableData.length > 1) {
            return <FluidTable ordersData={o.tableData} key={`ft${i}`}/>
          } else {
            return 
          }
        })
      } */}
    </div>
  )
}

export default QueryOutput