import axios from "axios";

const baseUrl = 'https://pdc-support-system.onrender.com/outlets';

async function getOutlets() {
    const response = await axios.get(baseUrl);
    return response.data;

}

export default {
    getOutlets,
};