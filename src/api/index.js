import axios from 'axios'

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let changedUrl = url;
    if(country){
        changedUrl = `${url}/countries/${country}`
    }
    else changedUrl = url;

    try {
        const { data } = await axios.get(changedUrl)
        return {
            confirmed: data.confirmed,
            recovered: data.recovered,
            deaths: data.deaths,
            lastUpdate: data.lastUpdate,
        }

    }
    catch (err) {
        console.log(err)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData=[]
        for (var i in data) {
            modifiedData.push({confirmed:data[i].confirmed.total, deaths:data[i].deaths.total, date:data[i].reportDate})
        }
        return modifiedData
    }
    catch (err) {

    }
}

export const fetchCountries = async () => {
    try{
        const fetchedData =[]
        const response = await axios.get(`${url}/countries`)
        for (var i in response.data.countries) {
            fetchedData.push({countries:response.data.countries[i].name})
        }
        return fetchedData
    }
    catch(error){

    }
}