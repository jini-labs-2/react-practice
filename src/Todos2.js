import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
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

const PAGE_SIZE_OPTIONS = [
    { value:  10, label:  '10'},
    { value:  20, label:  '20'},
    { value:  50, label:  '50'},
    { value: 100, label: '100'}
]

const Todos2 = () => {
  const fetchTods = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.data)
  }

  const {data = [], isPending, isError, error} = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTods
  })

  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  if (isPending) return (<p>loading...</p>)
  if (isError) return (<p>fetch error.{error.message}</p>)
  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerG) => (
          <tr key={headerG.id}>
            {headerG.headers.map((header) => (
              <th key={header.id}
                style={
                  header.id === 'title' ? {width: '600px'} : {}}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {/* {header.getcontext()} */}
              </th>
            ))}
          </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
            <td key={cell.id}
            style={cell.column.id === 'title' ? {textAlign: 'left', paddingLeft: '0.5rem'} : {}}
            >
              {flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              )}
            </td>
            ))}
          </tr>
          ))}
        </tbody>

        <tfoot className='pagenation' style={{display: 'flex'}}>
          <select className=''
            value={table.getState().pagination.pageSize}
            onChange={(e) =>
              table.setPageSize(Number(e.target.value))
            }
          >
            {PAGE_SIZE_OPTIONS.map(({value, label}) => 
              <option
                key={label} value={value}
              >{label}</option>
            )}
          </select>

          <button
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            {'<'}
          </button>
          Page 
          {table.getState().pagination.pageIndex + 1}
          &nbsp;of&nbsp;
          {table.getPageCount()}
          <button
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            {'>'}
          </button>
        </tfoot>
      </table>
    </div>
  )
}

export default Todos2