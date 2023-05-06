import React from 'react';
import { useEffect } from 'react';


const API_URL = 'https://www.omdbapi.com?apikey=ba2e94c9';

const JavascriptMastery = () => {
    //ba2e94c9
    const serchMovies = async (imdbID) => {
        const response = await fetch(`${API_URL}&s=${imdbID}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        serchMovies('Spiderman')
    }, []);


    return (
        <div>
            <h1>MovieLand</h1>
            <div className='search'>
                <input placeholder='search for movies' value='Superman' />
                <img className='searchIcon' alt='search' />
            </div>
        </div>
    )
}

export default JavascriptMastery
