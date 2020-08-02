import React,{useState, useEffect} from 'react';
import {NativeSelect, FormControl} from "@material-ui/core"
import './CountryPicker.css'
import {fetchCountries} from"../../api"

const CountryPicker = ({handlecountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([])
    useEffect(() =>{
        const fetchAPI = async()=>{
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI()
    }, [setFetchedCountries])


    return(
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e)=>handlecountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchedCountries.map((country,i) => <option key={i} value={country.countries}>{country.countries}</option>)}
            </NativeSelect>
        </FormControl>
        )
}

export default CountryPicker;