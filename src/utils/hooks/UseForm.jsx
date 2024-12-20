import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return { formData, handleInputChange, setFormData };
};

