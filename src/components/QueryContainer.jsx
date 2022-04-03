import { createContext, useState } from "react"
import QueryInput from "./QueryInput"
import QueryOutput from "./QueryOutput"

const ActiveContext2 = createContext()

function QueryContainer({ tabsData, setTabsData }) {
  const [a, setA] = useState("apple")
  return (
    <ActiveContext2.Provider value={a}>
      <QueryInput tabsData={tabsData} setTabsData={setTabsData} />
      <QueryOutput tabsData={tabsData} setTabsData={setTabsData} />
    </ActiveContext2.Provider>
  )
}

export default QueryContainer