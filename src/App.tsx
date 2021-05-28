import React ,{useEffect ,useState} from 'react';
import logo from './logo.svg';
import {getList} from './api/APILocation'
import DataTable from './components/dataTable'
import './App.css';
interface Story {
  id:number;
  job_title: string;
  organization_name: string;
  location_coordinates: [string,string]
  // properties for the Story
}
function App() {
  const [error, setError] = useState<null | { message: string }>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState <Story [] | null>(null);

  useEffect(() => {
    fetch('https://us.jobfeed.com/data/info-recent-jobs')
    .then(data => data.json())
        .then(result => {
          console.log(result);
          let id = 0
          setIsLoaded(true);
          const idResult= result.map((res:Story)=> ({ ...res, id: id+=1}))
          setItems(idResult)

        },

        (error) => {
          setIsLoaded(true);
          setError(error);
          
        }
      )
  }, [])
  const handleclickRow = (id:any)=>{
    // setIsLoaded(false);

    console.log(items);
   const arr = items.filter((item)=> {
      return item.id !== id
  })
  console.log(arr);

    // const index = items.indexOf(id);
    // console.log(index);

    // const filter= items.splice(index, 1);

    setItems(arr);

    // setIsLoaded(true);


    
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
     <DataTable handleclick={handleclickRow} items={items} />
    );
  }
}

export default App;
