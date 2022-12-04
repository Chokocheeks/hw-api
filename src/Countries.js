import bootstrap from 'bootstrap';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { fetchCountriesData } from "./store/countrySlice"
import Carousel from 'react-bootstrap/Carousel';

export const Countries = () => {
    const dispatch = useDispatch();
    const countries = useSelector((store) => store.countries.countries);

    useEffect(() => {
        dispatch(fetchCountriesData());
    }, [dispatch]);

    const tempArr = [...countries];


    return(
        <Carousel>
            {tempArr.map((el) => (
                <Carousel.Item interval={1000}>
                    <img className="d-block"
                    style={{ height: '80vh' }}
                     src={el.flags.svg}
                     alt="First slide"/>
                    <Carousel.Caption className='carouselFont'>
                    <h3>{el.name. common}</h3>
                    <p>Capital: {el.capital}<br/>
                    Population: {el.population}<br/></p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}