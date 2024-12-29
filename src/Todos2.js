import React, { useEffect, useState } from 'react'

import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import axios from 'axios'
const columns = [
  {
    accessorKey: 'id',
    header: 'ID',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'userId',
    header: 'USER',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'title',
    header: 'TITLE',
    cell: (props) => <p>{props.getValue()}</p>
  },
  {
    accessorKey: 'complete',
    header: 'COMPLETE',
    cell: (props) => <p>{props.getValue()}</p>
  }
]

const Todos2 = () => {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => {setTodos(res.data)})
  }, [])

  const table = useReactTable({
    data: todos,
    columns,
    getCoreRowModel: getCoreRowModel(),

    getPaginationRowModel: getPaginationRowModel()
  })
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerG) => (
          <tr key={headerG.id}>
            {headerG.headers.map((header) => {
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {/* {header.getcontext()} */}
              </th>
            })}
          </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
            <td key={cell.id}>
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )}
            </td>
            ))}
          </tr>
          ))}
        </tbody>

        <div className='pagenation' style={{display: 'flex'}}>
          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            {'<'}
          </button>
          <div className=''>
            Page {table.getState().pagination.pageIndex + 1}
            &nbsp;of&nbsp;
            {table.getPageCount()}
          </div>
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            {'>'}
          </button>
        </div>
      </table>
    </div>
  )
}

export default Todos2