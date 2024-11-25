import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from '../utils/hooks/useForm';
import Alerts from '../components/atoms/Alerts';
import { register } from '../api/user';
import UserForm from '../components/layout/UserForm';



const Register = () => {
  const { formData, handleInputChange } = useForm({ email: '', password: '', birth: '', verifyPassword : '', firstname:'', lastname:''});
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if(formData.password === formData.verifyPassword){
        try {
            const res = await register(formData.firstname,formData.lastname, formData.email, formData.password, formData.birth, formData.bio);
            if (res?.data?.user) {          
                navigate('/login');
        }
        } catch (err) {
            setError(err.message);
        }
    }
    else{
        setError("Les mots de passe ne sont pas identiques")
    }

  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Register</h2>
        {error && <Alerts message={error} type='error'/> }
        <UserForm button={"Inscription"} handleSubmit={handleSubmit} inputPasswords={true} formData={formData} handleInputChange={handleInputChange}/>
     
      </div>
    </div>
  );
};

export default Register;
