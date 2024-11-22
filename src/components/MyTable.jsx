import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const items = [
  { id: 1, name: 'banana' },
  { id: 2, name: 'apple' },
  { id: 3, name: 'strawberry' }
]

const MyTable = () => {
  return (
    <div>
      <TableContainer>
        <Table sx={{ maxWidth: 400 }} aria-label="simple table" colSpan="1" headSticky>
          <TableHead>
            <TableRow>
              <TableCell>
                ID
              </TableCell>
              <TableCell>
                NAME
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items && items.map(({id, name}) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                <TableCell>{id}</TableCell>
                <TableCell>{name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MyTable