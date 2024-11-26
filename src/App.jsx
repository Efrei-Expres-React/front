import './App.css'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Navbar from './components/modules/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import UpdateProfile from './pages/UpdateProfile'
import Profile from './pages/Profile'
import ProtectedRoute from './routes/ProtectedRoute'
import MyCvs from './pages/MyCv'

function App() {

  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
    <main className="container mx-auto p-8">
    <Routes>
                        {/*Public Routes*/}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />

                        {/*Private Routes*/}      
                        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>} />
                        <Route path="/my-cv" element={<ProtectedRoute> <MyCvs /> </ProtectedRoute>} />
                        <Route path="/update-profile" element={<ProtectedRoute> <UpdateProfile /> </ProtectedRoute>} />
                        

                         {/*404*/}
                        <Route path="/*" element={<HomePage />} />
                    </Routes>
    </main>
  </div>
  )
}

export default App
