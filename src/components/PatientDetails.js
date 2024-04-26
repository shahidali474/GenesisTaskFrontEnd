import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPatientById } from '../services/patientService';

const PatientDetails = () => {
    const { id } = useParams();
    const [patient, setPatient] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const patientData = await fetchPatientById(id);
                setPatient(patientData);
            } catch (error) {
                console.error(`Error fetching patient with ID ${id}:`, error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div>
            <h2>Patient Details</h2>
            {patient ? (
                <div>
                    <p>ID: {patient.id}</p>
                    <p>Name: {patient.name}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PatientDetails;
