import './App.css'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/modules/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import UpdateProfile from './pages/UpdateProfile'
import Profile from './pages/Profile'
import ProtectedRoute from './routes/ProtectedRoute'
import CreateCV from './pages/CreateCV'
import Dashboard from './pages/Dashboard';
import MyCvs from './pages/MyCvs'
import AllCV from './pages/AllCV';
import CvDetail from './pages/CvDetail';

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="container p-8 mx-auto">
    <Routes>
                        {/*Public Routes*/}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/allcv" element={<AllCV />} />


                        {/*Private Routes*/}      
                        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                        <Route path="/my-cv" element={<ProtectedRoute> <MyCvs /> </ProtectedRoute>} />
                        <Route path="/update-profile" element={<ProtectedRoute> <UpdateProfile /> </ProtectedRoute>} />
                        <Route path="/createcv" element={<ProtectedRoute> <CreateCV /> </ProtectedRoute>} />
                        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                        <Route path="/cv/:id" element={<ProtectedRoute><CvDetail /></ProtectedRoute>} />


                         {/*404*/}
                        <Route path="/*" element={<HomePage />} />
                    </Routes>
    </main>
  </div>
  )
}

export default App
