import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
// import {Link} from '@reach/router';
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
            
            <button onClick>delete</button>
            <Link to = "/api/person/">Main View</Link>
        </div>
    )

    
}
export default Detail;
