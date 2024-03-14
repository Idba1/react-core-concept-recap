import { useEffect, useState } from "react"
import SingleData from "./SingleData";
import './data.css'

export default function Data(){

    const [data, setData] = useState([]);
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data => setData(data))
    },[])

    return(
        <div className="body">
            <h3>Data:{data.length}</h3>
            {
                data.map(single => <SingleData single={single}></SingleData>)
            }
        </div>
    )
}