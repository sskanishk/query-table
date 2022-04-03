import { useState } from "react"

function Test(params) {
  const [data, setData] = useState([])
  const [peep, setPeep] = useState("")
  const boom = () => {
    
    setData([...data, {id: new Date().getTime(), title: ""}])
  }
  return (
    <>
      {
        data.map((o) => {
          return (
            <div key={`k${o.id}`}>
              <input 
                type={'text'} 
                value={o.title} 
                key={o.id} 
                onChange={(e) => {
                  
                  // setPeep(e.target.value)}
                  const temp = data.map((x) => {
                    if(x.id === o.id) {
                      
                      const a = {...o, title: e.target.value}
                      return a
                    } else {
                      
                      return x
                    }
                  })

                  
                  setData(temp)
                }}
                // onKeyDown={(event) => {
                //   if (event.key === 'Enter' || event.key === 'Escape') {
                //     console.log(o)
                //     setData(data.map((x) => {
                //       if(x.id === o.id) {
                //         return {...o, title: event.target.value}
                //       } else {
                //         return o
                //       }
                //     }))
                //     setPeep("")
                //     event.preventDefault()
                //     event.stopPropagation()
                //   }
                // }}
              />
              <p>{o.title} || {o.id}</p>
            </div>
          )
        })
      }
      <button onClick={boom}> Add </button>
    </>
  )
}

export default Test