import {useState} from 'react'
import Button from '@material-ui/core/Button';
import { DataGrid, GridCellParams } from '@material-ui/data-grid';


interface Story {
    job_title: string;
    organization_name: string;
    location_coordinates: [string,string]
    // properties for the Story
  }

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'delete',
    width: 170,
    headerName: 'Delete',
    renderCell: (params: GridCellParams) => (
      <strong>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          style={{ marginLeft: 16 }}
        >
          Delete
        </Button>
      </strong>
    ),
  },
  { field: 'job_title', headerName: 'Job Title', width: 200 },
  { field: 'organization_name', headerName: 'Organization Name', width: 200 },
  {
    field: 'location_coordinates',
    headerName: 'Location Coordinates',
    width: 220,
  },
];



// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataTable(props:any) {
    const [rows, setRows] = useState(props.items);
    const [deletedRows, setDeletedRows] = useState(Array());
  console.log(props.items);
  
       const handleRowSelection = (e:any) => {
        props.handleclick(e.data.id)
       };
    let data =   props.items &&   <div style={{ height: 400, width: '80%' }}>
    <DataGrid  rows={props.items} columns={columns} pageSize={5} onRowSelected={handleRowSelection} />
    </div>
  return (
 data
 );
}