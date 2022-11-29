import bootstrap from 'bootstrap';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import List from './List';



export default function Countries(){
    const [countries, setCountries] = useState();
    async function loadData(){
        const responce = await fetch('https://restcountries.com/v2/all');
        const data = await responce.json();
        const contryList = data.map((el) => el.name);
        setCountries(contryList);
        console.log(contryList);
    }
    
    useEffect(() => {
        loadData();
    }, []);

    return (
        <Container>
            {contryList.map((country) => {
                return(
                    <li>{country}</li>
                )
            })}
            <List />
        </Container>
    )
}