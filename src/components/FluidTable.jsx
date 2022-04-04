
import { Table } from "react-fluid-table"
import _ from "lodash"
import { useEffect, useState } from "react"

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
  const headerStyle = {
    fontSize: "12px"
  }
  const rowStyle = {
    fontSize: "10px"
  }

  return (
    <div className="fluid__table__container">      
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