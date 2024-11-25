import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../utils/context/AuthContext';
import { useState, useCallback, useEffect } from 'react';
import Alerts from '../components/atoms/Alerts';
import { getMyProfile } from '../api/user';

const Profile = () => {
    const [profile, setProfile] = useState();
    const {token } = useContext(AuthContext);
    const [error, setError] = React.useState('');
  
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
  return (
    <div>
      {error && <Alerts message={error} type='error'/> }
      <ul>
        <li> Email : {profile?.email}</li>
        <li> Name : {profile?.firstName} {profile?.lastName}</li>
        <li> Date of birth : {profile?.birth}</li>
        <li> Bio : {profile?.bio}</li>
      </ul>
      <Link to="/update-profile">
      <button className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Modifier profil
      </button>
      </Link>
    </div>
  )
}

export default Profile
