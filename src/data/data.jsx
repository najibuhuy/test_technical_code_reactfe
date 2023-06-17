import { useEffect, useState } from "react"
const axios = require('axios');

export default function GetDataResult(props) {
    const [isLoading, setIsloading] = useState(true)
    const [loadedDetail, setLoadedDetail] = useState([])

    const urlGetData = "http://localhost:8000/prima/23"

    useEffect(() =>{
        setIsloading(true);
        axios({
            method: 'GET',
            url: urlGetData
        }).then(response =>{
            return response.data
        }).then(responseArray => {
            setIsloading = false
            setLoadedDetail = responseArray
        }).catch(error => {
            console.log(error)
        }), [props.data]
    })

    return ( 
        <div>
            <h1> Result:</h1>
            <p> {loadedDetail}</p>
        </div>
    )
}