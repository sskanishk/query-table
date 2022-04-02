import { useState } from 'react'
import '../assets/ChromeTabs.scss'
import { nanoid } from 'nanoid'


function ChromeTabs() {

  const firstTabsData = [
    // { isActive: true, title: "SQL 1", id: "tommy" }
  ]
  const [ tabsData, setTabsData ] = useState(firstTabsData)


  const addTabs = () => {
    const id = nanoid(4)
    const newTab = tabsData.map((tab) => { return {...tab, isActive: false} }) 
    setTabsData([...newTab,{
      id: id,
      isActive: true,
      title: "new tab"
    } ])
  }
  
  const deleteTab = (idToRemove) => {
    const newTab = tabsData.filter((tab) => tab.id !== idToRemove)
    setTabsData(newTab)
  }
  
  const openTab = (id) => {
    const newTab = tabsData.map((tab) => { 
      if(tab.id === id) {
        return {...tab, isActive: true}
      } else {
        return {...tab, isActive: false}
      }
    }) 
    setTabsData(newTab)
  }
  
  return (
    <div className="tabs">
      {
        tabsData.map((tab, idx) => {
          return (
            <div className={`tab ${tab.isActive ? "colorTab" : ""}` } key={idx}>
              <span onClick={() => openTab(tab.id)}>{tab.title}{tab.id}</span>
              <span onClick={() => deleteTab(tab.id)}>x</span>
            </div>
          )
        })
      }
      <div className="addtabs" onClick={() => addTabs()}>+</div>
    </div>
  )
}

export default ChromeTabs