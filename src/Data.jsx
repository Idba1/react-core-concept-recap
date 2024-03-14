import { useEffect, useState } from "react"

export default function Data(){

    const [data, setData] = useState([]);
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res=> res.json())
        .then(data => console.log(data))
    },[])

    return(
        <div>
            <h3>Data:</h3>
        </div>
    )
}