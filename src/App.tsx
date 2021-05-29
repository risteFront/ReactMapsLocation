import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import { getList } from "./api/APILocation";
import DataTable from "./components/dataTable";
import GoogleMapReact from "google-map-react";
import "./App.css";

// properties for the Story
interface Story {
  id: number;
  job_title: string;
  organization_name: string;
  location_coordinates: [string, string];
}
function App() {
  const [error, setError] = useState<null | { message: string }>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState<Story[] | null>(null);
  const [lat, setLat] = useState<number>(32.776664734);
  const [lng, setLng] = useState<number>(-96.796989441);

  const res = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 15,
  };

  useEffect(() => {
    getList().then(
      (result) => {
        console.log(result);
        let id = 0;
        setIsLoaded(true);
        const idResult = result.map((res: Story) => ({
          ...res,
          id: (id += 1),
        }));
        setItems(idResult);
      },

      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
  }, []);
  const handleclickRow = (id: any) => {
    const arr = items.filter((item) => {
      return item.id !== id;
    });
    setItems(arr);
  };
  const handleMapLocationData = (data: any) => {
    console.log(parseFloat(data.row.location_coordinates[0]));
    console.log(parseFloat(data.row.location_coordinates[1]));

    setLat(parseFloat(data.row.location_coordinates[0]));
    setLng(parseFloat(data.row.location_coordinates[1]));
  };
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <DataTable
          style={{ margin: "auto" }}
          handleclick={handleclickRow}
          handleMapLocation={handleMapLocationData}
          items={items}
        />
        <div style={{ margin: "auto", height: "70vh", width: "70%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyB_YwhSglgBSUEWyuPWXcQYWDugNbMCQQ4",
            }}
            center={{ lat: lat, lng: lng }}
            defaultZoom={res.zoom}
          ></GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
