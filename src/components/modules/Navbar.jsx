import React from 'react';
import { Link } from 'react-router-dom'; 
import { AuthContext } from '../../utils/context/AuthContext';
import { useContext } from 'react';

const Navbar = () => {
const { user, logout } = useContext(AuthContext);

const LoggedLinks = () =>{
    function handleLogout(){
        logout()
    }
    return (
        <>
        <Link to="/my-cv" className="px-4 text-white">Mes CV</Link>
        <Link to="/profile" className="px-4 text-white">Mon profil</Link>
        <Link to="/" className="px-4 text-white" onClick={handleLogout}>Se déconnecter</Link>
        </>
    )
}

const NotLoggedLinks = () =>{
    return (
        <>
        <Link to="/login" className="px-4 text-white">Connexion</Link>
        <Link to="/register" className="px-4 text-white">Inscription</Link>
        </>
    )
}

  return (
    <nav className="p-4 bg-blue-500 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-lg font-semibold text-white">Home</Link>
        <div>
          <Link to="/allcv" className="px-4 text-white">CV</Link>
          {user ? LoggedLinks() : NotLoggedLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
