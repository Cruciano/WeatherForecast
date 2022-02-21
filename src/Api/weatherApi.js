import axios from "axios";

const BASE_URL = 'https://www.metaweather.com/api/location/';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;


export const getLocation = async (location) => {
    const {data} = await axios(`${REQUEST_URL}/search`, {params: {query: location}});

    if(!data || data.length === 0) {
        return;
    }

    return data[0];
}

export const getForecast = async (woeid) => {
    const {data} = await axios(`${REQUEST_URL}/${woeid}`);

    if(!data || data.length === 0) {
        return;
    }

    return data.consolidated_weather;
}