import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from '../utils/hooks/useForm';
import Alerts from '../components/atoms/Alerts';
import Input from '../components/atoms/Input';
import { register } from '../api/user';



const Register = () => {
  const { formData, handleInputChange } = useForm({ email: '', password: '', birth: '', verifyPassword : '', firstName:'', lastName:''});
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if(formData.password === formData.verifyPassword){
        try {
            const res = await register(formData.firstName,formData.lastName, formData.email, formData.password, formData.birth, formData.bio);
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
        <form onSubmit={handleSubmit}>
        <Input 
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
            title="First Name"
            required
          />
            <Input 
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter your last name"
            title="Last name"
            required
          />
            <Input 
            id="birthDate"
            name="birth"
            type="date"
            value={formData.birth}
            onChange={handleInputChange}
            placeholder="Enter your birth date"
            title="Birth Date"
            required
          />
        <Input 
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            title="Email"
            required
          />
        <Input 
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            title="Password"
            required
          />
        <Input 
            id="verifyPassword"
            name="verifyPassword"
            type="password"
            value={formData.verifyPassword}
            onChange={handleInputChange}
            placeholder="Enter your again your password"
            title="Verify password"
            required
          />
        <Input 
            id="bio"
            name="bio"
            type="textarea"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Enter a little presentation"
            title="Bio"
            rows={5}
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
