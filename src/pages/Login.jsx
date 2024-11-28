import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from '../utils/hooks/UseForm';
import { login as loginAPI} from '../api/user';
import { AuthContext } from '../utils/context/AuthContext';
import { useContext } from 'react';
import Alerts from '../components/atoms/Alerts';



const Login = () => {
    const {login } = useContext(AuthContext);
  const { formData, handleInputChange } = useForm({ email: '', password: '' });
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const res = await loginAPI(formData.email, formData.password);
        if (res?.data?.user) {
            const { firstname, lastname, email, token } = res?.data?.user;
      
            login({
              user: {
                firstname,
                lastname,
                email,
              },
              token,
            });
      
            navigate('/dashboard');
    }
    } catch (err) {
        setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>
        {error && <Alerts message={error} type='error'/> }
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
