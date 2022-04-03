// import { useState } from "react"
import { useState, createContext } from "react"
import ChromeTabs from "./ChromeTabs"
import QueryContainer from "./QueryContainer"
const ordersData = require('../data/ordersjson.json')

export const ActiveContext = createContext()

function Container() {

  const [ tabsData, setTabsData ] = useState([{
    id: "id",
    isActive: true,
    title: "User Data",
    editMode: false,
    tableData: ordersData
  }])

  const [ activeTabs, setActiveTabs ] = useState(tabsData[0])

  return (
    <ActiveContext.Provider value={tabsData}>
      <div className="app__container">
        <ChromeTabs tabsData={tabsData} setTabsData={setTabsData} activeTabs={activeTabs} />
        <QueryContainer tabsData={tabsData} setTabsData={setTabsData} />
      </div>
    </ActiveContext.Provider>
  )
}

export default Container