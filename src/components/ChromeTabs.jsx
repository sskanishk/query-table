import { useState } from 'react'
import '../assets/ChromeTabs.scss'
import { nanoid } from 'nanoid'

import cross from "../assets/cross.svg"
import plus from "../assets/plus.svg"

function ChromeTabs({ tabsData, setTabsData, activeTabs }) {

  // const [name, setName] = useState([])
  const [toggle, setToggle] = useState(true)


  const addTabs = () => {
    const id = nanoid(4)
    const newTab = tabsData.map((tab) => { return { ...tab, isActive: false } })
    setTabsData([...newTab, {
      id: id,
      isActive: true,
      title: "New Tab",
      editMode: false,
      tableData: []
    }])
  }

  const deleteTab = (idToRemove) => {
    const newTab = tabsData.filter((tab) => tab.id !== idToRemove)
    setTabsData(newTab)
  }

  const openTab = (id) => {
    const newTab = tabsData.map((tab) => {
      if (tab.id === id) {
        return { ...tab, isActive: true }
      } else {
        return { ...tab, isActive: false }
      }
    })
    setTabsData(newTab)
  }

  const setName = (e, tab) => {
    setTabsData(tabsData.map((x) => {
      if(x.id === tab.id) {
        
        const a = {...tab, title: e.target.value}
        return a
      } else {
        
        return x
      }
    }))
  }

  return (
    <div className="tabs__container box__grooming">
      <div className="tabs__wrapper">
        <div className="tabs">
          {
            tabsData.map((tab, idx) => {
              return (
                <div className={`tab ${tab.isActive ? "colorTab" : ""}`} key={`${idx}tabs`}>

                  {/* {
                    tab.isActive
                    ? toggle
                      ? (
                        <p
                          onDoubleClick={() => {
                            setTabsData(tabsData.map((x) => {
                              if(x.id === tab.id) {
                                
                                const a = {...tab, editMode: true}
                                return a
                              } else {
                                
                                return x
                              }
                            }))
                          }}
                        >{tab.title}</p>
                      ) 
                      : (
                        <input
                          type='text'
                          value={tab.title}
                          onChange={(e) => {
                            setName(e, tab)
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === 'Escape') {
                              setToggle(true)
                              e.preventDefault()
                              e.stopPropagation()
                              // setTabsData([...tabsData, { ...tab, title: name }])
                            }
                          }}
                        />
                      )
                    : "Nakko"
                  } */}

                  {
                    tab.editMode && tab.isActive 
                    ? (
                      <input
                        type='text'
                        value={tab.title}
                        onChange={(e) => {
                          setName(e, tab)
                        }}
                        onBlur={() => {
                          setTabsData(tabsData.map((x) => {
                            if(x.id === tab.id) {
                              
                              const a = {...tab, editMode: false}
                              return a
                            } else {
                              
                              return x
                            }
                          }))
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === 'Escape') {
                            setTabsData(tabsData.map((x) => {
                              if(x.id === tab.id) {
                                
                                const a = {...tab, editMode: false}
                                return a
                              } else {
                                
                                return x
                              }
                            }))
                            e.preventDefault()
                            e.stopPropagation()
                            // setTabsData([...tabsData, { ...tab, title: name }])
                          }
                        }}
                      />
                    )
                    : (
                      <p
                        onClick={() => openTab(tab.id)}
                        onDoubleClick={() => {
                          setTabsData(tabsData.map((x) => {
                            if(x.id === tab.id) {
                              
                              const a = {...tab, editMode: true}
                              return a
                            } else {
                              
                              return x
                            }
                          }))
                        }}
                      >{tab.title}</p>
                    ) 
                  }
                  {/* <p onClick={() => openTab(tab.id)}>{tab.title}{tab.id}</p> */}
                  <span onClick={() => deleteTab(tab.id)} className="closeTab">
                  <img 
                    src={cross}
                    width="10px"  
                  />
                  </span>
                  
                </div>
              )
            })
          }
        </div>
        <div className="addtabs" onClick={() => addTabs()}>
          <img 
            src={plus}
            width="10px"  
          />
        </div>
      </div>
      
    </div>

  )
}

export default ChromeTabs