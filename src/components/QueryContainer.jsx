import QueryInput from "./QueryInput"
import QueryOutput from "./QueryOutput"

function QueryContainer({ tabsData, setTabsData }) {
  return (
    <>
      <QueryInput tabsData={tabsData} setTabsData={setTabsData} />
      <QueryOutput tabsData={tabsData} setTabsData={setTabsData} />
    </>
  )
}

export default QueryContainer