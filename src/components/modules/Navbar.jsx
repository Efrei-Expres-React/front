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
        <Link to="/about" className="text-white px-4">Mon CV</Link>
        <Link to="/services" className="text-white px-4">Mon profil</Link>
        <Link to="/services" className="text-white px-4" onClick={handleLogout}>Se déconnecter</Link>
        </>
    )
}

const NotLoggedLinks = () =>{
    return (
        <>
        <Link to="/login" className="text-white px-4">Connexion</Link>
        <Link to="/services" className="text-white px-4">Inscription</Link>
        </>
    )
}

  return (
    <nav className="bg-blue-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Home</Link>
        <div>
          <Link to="/" className="text-white px-4">CV</Link>
          {user ? LoggedLinks() : NotLoggedLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
