
      
      export function getList() {
       return fetch('https://us.jobfeed.com/data/info-recent-jobs')
         .then(data => data.json())
      }

    //   useEffect(() => {
    //     getList()
    //     .then(items => {
    //     console.log(items);
        
    //     })
          
    
    
    //   });