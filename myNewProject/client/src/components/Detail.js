import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Detail = (props) => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/detail/" + ${props}`)
            .then(res => {

            setDetail(res.data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <p>Title: {detail.title}</p>
            
            <p>Price: {detail.price}</p>
            <p>Description: {detail.description}</p>
            

        </div>
    )

    
}
export default Detail;
