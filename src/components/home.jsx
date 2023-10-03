import { useState } from "react"

export default function Home() {

    const [count , setCount] = useState(0)

    return (
        <div className="container m-3">
            <h1>Result: {count}</h1>
            <div className="btn-group">
            <button className="btn btn-danger" onClick={()=> setCount(count-1)}>-</button>
            <button className="btn btn-success" onClick={()=> setCount(count+1)}>+</button>
            </div>
        </div>
    )
}