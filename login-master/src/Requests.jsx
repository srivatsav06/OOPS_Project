import React, { useMemo ,Component,useState } from 'react';
import MaterialReactTable from 'material-react-table';
import { Icon, Menu } from 'semantic-ui-react'
import Navbar from './Navbar';
const data=[{
  Events:"MEET 1",
  Accepted:5,
  Rejected:2,
  Pending :7,

 },
 {
    Events:"MEET 2",
    Accepted:5,
    Rejected:2,
    Pending :7,
 },
 {
    Events:"MEET 3",
    Accepted:5,
    Rejected:2,
    Pending :7,
 },
 {
    Events:"MEET 4",
    Accepted:5,
    Rejected:2,
    Pending :7,
 },
 ];
const  Requests = () =>{
  const columns= useMemo(
    () => [{
    Header:'Events',
    columnId:1,
    accessorKey:'Events'},
    {
      Header:'Accepted',
      columnId:2,
      accessorKey:'Accepted'
    },
      {
        Header:'Rejected',
        columnId:3,
        accessorKey:'Rejected'
      },
      {
        Header:"Pending",
        columnId:4,
        accessorKey:'Pending'
      },
     
    ],
    [],
  );
  // state = {}
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

 
    const { activeItem } = this.state
  return (<div>
    <Navbar /><div  className='SearchTable'>
    {/* <Menu compact icon='labeled' color='black' size='massive'>
        <Menu.Item
          name='Sent Requests'
          active={activeItem === 'Sent Requests'}
          onClick={this.handleItemClick}
          style={{ backgroundColor: activeItem === 'Sent Requests' ? 'skyblue' : '' }}
        >
        Sent Requests
        </Menu.Item>

        <Menu.Item
          name='Received Requests'
          active={activeItem === 'Received Requests'}
          onClick={this.handleItemClick}
          style={{ backgroundColor: activeItem === 'Received Requests' ? 'skyblue' : '' }}

        >
          Received Requests
        </Menu.Item>
      </Menu> */}
    <MaterialReactTable 
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      muiTableHeadCellProps={{
  sx: theme => ({
    background: '#f1f1f1',
    borderRight: '1px solid rgba(224,224,224,1)',
    color: theme.palette.text.primary
  })
}}
    /></div></div>
  );
}
export default Requests