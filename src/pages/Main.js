import React, { useEffect, useState } from 'react'
import axios from "axios";

const Main = () => {


  const [valid, setValid] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('api/v1/dashboard/getUser')
          .then((response) => {
            console.log("data", data);
            console.log(response);
            setValid(true);
            setData(response.data);
          }, (error) => {
            console.log(error.response.data.status);
          });
    
  }, [])

  return (
    <>
    {
      valid && data ? (<div><h1>user type : {data.type}</h1> <h1> user email : {data.email}</h1></div>): (<h1>not authorized</h1>)
    }

    </>
    
    
  )
}

export default Main