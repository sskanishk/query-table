
import { Table } from "react-fluid-table"
import _ from "lodash"
import { useEffect, useState } from "react"
import MultiRangeSlider from "./multiRangeSlider"
// import * as faker from '@faker-js/faker';
const { faker } = require('@faker-js/faker')


const ordersData = require('../data/ordersjson.json')

function FluidTable({ ordersData }) {
  const [ data, setData ] = useState(ordersData)

  const headers = Object.keys(ordersData[0])
  const columns = headers.map((header) => ({ key: header, header: header, sortable: true }))
  const onSort = (col, dir) => {
    setData(!col || !dir ? ordersData : _.orderBy(data, [col], [dir.toLowerCase()]));
  }
  function getMin(data, val) {
    return data.reduce((min, p) => p[val] < min ? p[val] : min, data[0][val]);
  }
  function getMax(data, val) {
    return data.reduce((max, p) => p[val] > max ? p[val] : max, data[0][val]);
  }

 


  
  const getSlideResult = ({ min, max }) => {
    const newData = _.filter(ordersData, o => o.freight > min && o.freight < max) 
    setData(newData)
  }
  const headerStyle = {
    fontSize: "10px"
  }
  const rowStyle = {
    fontSize: "10px"
  }

  return (
    <div className="fluid__table__container">
      <div>
      {/* <MultiRangeSlider
        min={getMin(ordersData, "freight")}
        max={getMax(ordersData, "freight")}
        onChange={({ min, max }) => getSlideResult({ min, max }) }
      /> */}
      </div>
      
      {
        ordersData
        ? <Table 
          data={data} 
          columns={columns} 
          className={"fluid__table"} 
          headerStyle= {headerStyle}
          rowStyle={rowStyle}
          onSort={onSort}
        />
        : <h2>Hello Data</h2>
      }
    </div>
  )
}


export default FluidTable