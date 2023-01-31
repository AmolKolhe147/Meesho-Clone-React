import {useEffect, useState} from 'react'
import './App.css';
import axios from "axios";

const axios = () => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");
  
    useEffect(() => {
      
      axios.get("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products")
      .then((res) => setMyData(res.data)
      .catch((error) =>
      setIsError(error.message)
      )
      );
  
    }, []);
  
  
    return (
      <div className="App">
        <h1>Products for you</h1>
        <div className="grid">
        {myData.map((product) =>{
            const {id, title,price,category} = product;
            return <div className="card" key={id}>
              <h2>{title}</h2>
              <p>{price}</p>
              <p>{category}</p>
            </div>
        })
  
        }
      </div>
      </div>
    );
}

export default axios