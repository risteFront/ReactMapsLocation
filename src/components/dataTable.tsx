import Button from "@material-ui/core/Button";
import { DataGrid, GridCellParams } from "@material-ui/data-grid";

// properties for the Story
interface Story {
  job_title: string;
  organization_name: string;
  location_coordinates: [string, string];
}

export default function DataTable(props: any) {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "delete",
      width: 170,
      headerName: "Delete",
      renderCell: (params: GridCellParams) => {
        return (
          <strong>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              onClick={() => handleRowSelection(params.id)}
              style={{ marginLeft: 16 }}
            >
              Delete
            </Button>
          </strong>
        );
      },
    },
    { field: "job_title", headerName: "Job Title", width: 200 },
    { field: "organization_name", headerName: "Organization Name", width: 200 },
    {
      field: "location_coordinates",
      headerName: "Location Coordinates",
      width: 220,
    },
    {
      field: "Ciew Location on Map",
      width: 200,
      headerName: "Location on Map",
      renderCell: (params: GridCellParams) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={() => handleRowSelectionMap(params)}
            style={{ marginLeft: 16 }}
          >
            View on Map
          </Button>
        </strong>
      ),
    },
  ];

  const handleRowSelection = (id: any) => {
    console.log(id);
    props.handleclick(id);
  };
  const handleRowSelectionMap = (data: any) => {
    console.log(data);

    props.handleMapLocation(data);
  };
  let data = props.items && (
    <div style={{ height: 400, width: "80%" }}>
      <DataGrid rows={props.items} columns={columns} pageSize={5} />
    </div>
  );
  return data;
}
