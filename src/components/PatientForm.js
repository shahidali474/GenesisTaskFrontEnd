import React, { useState } from 'react';
import { addPatient, updatePatient } from '../services/patientService';

const PatientForm = () => {
    debugger;
    const [formData, setFormData] = useState({
        name: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        debugger;
        e.preventDefault();
        const isUpdate = !!formData.id;
        try {
            if (isUpdate) {
                await updatePatient(formData.id, formData);
                console.log('Patient updated successfully!');
            } else {
                await addPatient(formData);
                console.log('Patient added successfully!');
            }
            setFormData({
                name: '',
            });
        } catch (error) {
            console.error('Error submitting patient data:', error);
        }
    };

    return (
        <div>
            <h2>Patient Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PatientForm;
