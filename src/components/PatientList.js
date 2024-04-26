import React, { useState, useEffect } from 'react';
import { fetchPatients } from '../services/patientService';

const PatientList = () => {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const patientsData = await fetchPatients();
                setPatients(patientsData);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Patient List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th></th>
                        <th>Age</th><th></th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.name}</td>
                            <td></td>
                            <td>{patient.age}</td>
                            <td></td>
                            <td>{patient.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientList;
