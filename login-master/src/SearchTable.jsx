import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import MyButton1 from './MyButton1';
import MyButton2 from './MyButton2';

const SearchTable = ({ users }) => {
  const columns = useMemo(
    () => [
      {
        Header: 'S.No',
        columnId: 1,
        accessorKey: 'SNo'
      },
      {
        Header: 'Name',
        columnId: 2,
        accessorKey: 'name'
      },
      {
        Header: 'Affiliation',
        columnId: 3,
        accessorKey: 'Affiliation'
      },
      {
        Header: " ",
        columnId: 4,
        accessorKey: 'button1',
        //Cell: ({ cell: { value } }) => value
      },
      {
        Header: " ",
        columnId: 5,
        accessorKey: 'button2',
        //Cell: ({ cell: { value } }) => value
      },
    ],
    [],
  );

  const data = users.map((user, index) => ({
    SNo: index + 1,
    name: user.name,
    Affiliation: user.role,
    button1: <MyButton1 />,
    button2: <MyButton2 />
  }))
  console.log(data);
  return (<div  className='SearchTable'>
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
    /></div>
  );
}




export default SearchTable;

