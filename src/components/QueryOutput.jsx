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
      return null
    }))
  }, [tabsData])

  return (
    <div>
      {
        currData[0]?.isActive && currData[0]?.tableData?.length > 1
        ? <FluidTable fluidTableData={currData[0].tableData} />
        : <h2>No data</h2>
      }
    </div>
  )
}

export default QueryOutput