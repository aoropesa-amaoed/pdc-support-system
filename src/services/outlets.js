import axios from "axios";

const baseUrl = 'http://localhost:3001/outlets';

async function getOutlets() {
    const response = await axios.get(baseUrl);
    return response.data;

}

export default {
    getOutlets,
};