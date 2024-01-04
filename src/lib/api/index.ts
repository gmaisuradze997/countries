import axios from 'axios';


export const getAllCountries = async () => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        return response.data;
    } catch (error) {
        console.error(error);
    }

};

// Export the API calls
export default {
    getAllCountries,
};
