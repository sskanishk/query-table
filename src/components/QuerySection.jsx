import React from 'react'
import { FixedSizeList as List } from 'react-window'
import { useTable } from 'react-table'
// import ReactTable from './ReactTable'

const ordersData = require('../data/ordersjson.json')


// import useOnScreen from '../hooks/useOnScreen'

function QuerySection() {
  // console.log(ordersData)
  const headers = Object.keys(ordersData[0])
  return (
    <div>
      {/* <Rows data={headers} /> */}
      {/* <TableData ordersData={ordersData} headers={headers} /> */}

      <RWExample />

      {/* <ReactTable /> */}

      {/* <ReactTable /> */}
    </div>
  )
}

function Rows({ row }) {
  return (
    <>
      {
        row.map((header, i) => {
          return <td key={`r-${i}`} className="column">{ header }</td>
        })
      }
    </>
  )
}

function Headers({ headers }) {
  return (
    <>
    {
      headers.map((header, i) => {
        return <th key={`h-${i}`} className="column">{ header }</th>
      })
    }
    </>
  )
}

function TableData({ ordersData, headers }) {
  return (      
    <table>
      <tbody>
      <tr>
        <Headers headers={headers} />
      </tr>
      {
        ordersData.map((data, i) => {
          const dt = Object.values(data)
          return <tr key={`r-${i}`}><Rows row={dt} /></tr>
        })
      }
      </tbody>
    </table>
  )
}

const RWRow = ({ index, style }) => {
  console.log("data ==> ", index)
  return <div style={style}>Row {ordersData[index].orderID}</div>
}
 
const RWExample = () => (
  <List
    height={150}
    itemCount={1000}
    itemSize={35}
    width={300}
    data={ordersData}
  >
    {RWRow}
  </List>
)

export default QuerySection