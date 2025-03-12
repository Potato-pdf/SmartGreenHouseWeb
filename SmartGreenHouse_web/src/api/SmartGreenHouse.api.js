import axios from 'axios';

export const getAll = () => {
    return axios.get('http://localhost:8000/SmartGreenHouse/api/SmartGreenHouse/')
}