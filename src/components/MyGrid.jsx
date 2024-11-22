import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const items = [
  { id: 1, name: 'banana' },
  { id: 2, name: 'apple' },
  { id: 3, name: 'strawberry' }
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function MyGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Item> ID </Item>
        </Grid>
        <Grid size={8}>
          <Item> Name </Item>
        </Grid>
        {items && items.map((item) => (
          <>
          <Grid size={4}>
            <Item>{item.id}</Item>
          </Grid>
          <Grid size={8}>
            <Item>{item.name}</Item>
          </Grid>
          </>
        ))}
      </Grid>
    </Box>
  );
}
