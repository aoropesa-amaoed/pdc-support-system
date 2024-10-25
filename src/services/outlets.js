import axios from "axios";

const baseUrl = 'http://localhost:3001/outlets';

async function getOutlets() {
    const response = await axios.get(baseUrl);
    return response.data;

}

async function addOutlets(newOutletObject) {
    const response = await axios.post(baseUrl, newOutletObject); 

    return response.data;
    
}

export default {
    getOutlets,
    addOutlets,
};