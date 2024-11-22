import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

const gridColums = [
  { field: 'id', headerName: 'id', width: 200},
  { field: 'name', headerName: 'name', width: 200}
]
const items = [
  { id: 1, name: 'banana' },
  { id: 2, name: 'apple' },
  { id: 3, name: 'strawberry' }
]

const MyDataGrid = () => {
  return (
    <div>
      <DataGrid
        rows={items}
        columns={gridColums}
        sx={{height:"350px", fontSize:12, border: "none"}}
      />
    </div>
  )
}

export default MyDataGrid