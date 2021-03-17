import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';
const Main = () => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            });
    },[])
    return (
        <div>
           <PersonForm/>
           <hr/>
           { loaded && <PersonList people={people}/> }
        </div>
    )
}
export default Main;
