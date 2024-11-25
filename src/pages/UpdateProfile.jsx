import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from '../utils/hooks/useForm';
import Alerts from '../components/atoms/Alerts';
import { getMyProfile, putMyProfile } from '../api/user';
import UserForm from '../components/layout/UserForm';
import { AuthContext } from '../utils/context/AuthContext';
import { useState , useEffect, useContext } from 'react';



const UpdateProfile = () => {
const [profile, setProfile] = useState();
const {token } = useContext(AuthContext);
  const { formData, handleInputChange , setFormData} = useForm({ birth: '', bio : '', firstName:  '', lastName: ''});
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  
  const getProfile = useCallback( async () => {
    try {
        const res =  await getMyProfile(token);
        setProfile(res.data)
    } catch (error) {
        setError(error.message)
    }
  }, [token]);

  useEffect(() => {
    getProfile()
  }, [token]);

  useEffect(() => {
    if (profile) {
      setFormData({
        firstName: profile.firstName,
        lastName: profile.lastName,
        birth: profile.birth,
        bio: profile.bio,
      });
    }
  }, [profile, setFormData]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
        const res = await putMyProfile(formData.firstName,formData.lastName, formData.birth, formData.bio, token);
            if (res?.data) {          
                navigate('/login');
        }
        } catch (err) {
            setError(err.message);
     }
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Modifier le profil</h2>
        {error && <Alerts message={error} type='error'/> }
            <UserForm button={"Modifier le profil"} handleSubmit={handleSubmit} inputPasswords={false} formData={formData} handleInputChange={handleInputChange}/>
      </div>
    </div>
  );
};

export default UpdateProfile;
