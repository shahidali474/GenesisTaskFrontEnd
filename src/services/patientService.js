import axios from 'axios';

const BASE_URL = 'https://localhost:7113/api/patients';

export const fetchPatients = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching patients:', error);
        throw error;
    }
};

export const fetchPatientById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching patient with ID ${id}:`, error);
        throw error;
    }
};

export const addPatient = async (patientData) => {
    debugger;
    try {
        const response = await axios.post(BASE_URL, patientData);
        return response.data;
    } catch (error) {
        console.error('Error adding patient:', error);
        throw error;
    }
};

export const updatePatient = async (id, updatedPatientData) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, updatedPatientData);
        return response.data;
    } catch (error) {
        console.error(`Error updating patient with ID ${id}:`, error);
        throw error;
    }
};

export const deletePatient = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting patient with ID ${id}:`, error);
        throw error;
    }
};
