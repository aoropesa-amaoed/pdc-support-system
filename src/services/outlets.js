import axios from "axios";

const baseUrl = 'http://localhost:3001/outlets';

async function getOutlets() {
    const res = await axios.get(baseUrl);
    return res.data;
}

async function addOutlets(newOutletObject) {
    const res = await axios.post(baseUrl, newOutletObject); 
    return res.data;    
}

async function deleteOutlet(id) {
    const res = await axios.delete(`${baseUrl}/${id}`);
    return res;
}

async function updateOutlet(id, updatedOutlet) {
    const res = await axios.put(`${baseUrl}/${id}`, updatedOutlet);
    return res.data;
}

export default {
    getOutlets,
    addOutlets,
    deleteOutlet,
    updateOutlet,
};