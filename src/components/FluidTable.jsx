
import { Table } from "react-fluid-table"
import _ from "lodash"
import { useEffect, useState } from "react"
// import MultiRangeSlider from "./multiRangeSlider"

function FluidTable({ fluidTableData }) {
  const [ data, setData ] = useState(fluidTableData)

  useEffect(() => {
    setData(_.orderBy(data, ["freight"], ["asc"]));
  }, [fluidTableData])

  const headers = Object.keys(fluidTableData[0])
  const columns = headers.map((header) => ({ key: header, header: header, sortable: true }))
  const onSort = (col, dir) => {
    setData(!col || !dir ? data : _.orderBy(data, [col], [dir.toLowerCase()]));
  }
  // function getMin(data, val) {
  //   return data.reduce((min, p) => p[val] < min ? p[val] : min, data[0][val]);
  // }
  // function getMax(data, val) {
  //   return data.reduce((max, p) => p[val] > max ? p[val] : max, data[0][val]);
  // }  
  // const getSlideResult = ({ min, max }) => {
  //   const newData = _.filter(fluidTableData, o => o.freight > min && o.freight < max) 
  //   setData(newData)
  // }
  const headerStyle = {
    fontSize: "12px"
  }
  const rowStyle = {
    fontSize: "10px"
  }

  return (
    <div className="fluid__table__container">
      <div>
      {/* <MultiRangeSlider
        min={getMin(fluidTableData, "freight")}
        max={getMax(fluidTableData, "freight")}
        onChange={({ min, max }) => getSlideResult({ min, max }) }
      /> */}
      </div>
      
      {
        fluidTableData
        ? <Table 
          data={data} 
          columns={columns} 
          className={"fluid__table"} 
          headerStyle= {headerStyle}
          rowStyle={rowStyle}
          onSort={onSort}
          sortColumn="freight"
          sortDirection="ASC"
        />
        : <h2>Hello Data</h2>
      }
    </div>
  )
}


export default FluidTable