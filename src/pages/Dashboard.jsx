import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../utils/context/AuthContext';
import { useContext } from 'react';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-700">Welcome to Your Dashboard</h2>
        <div className="mb-6 text-lg text-center text-gray-600">
          <p>Welcome back, <strong>{user.firstname} {user.lastname}</strong>!</p>
          <p className="mt-4">You are now ready to explore your dashboard.</p>
        </div>

        <div className="mt-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <a href="/createcv">
            <div className="p-6 text-center bg-blue-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Create CV</h3>
              <p className="mt-2 text-gray-600">Click here to create your CV for future use.</p>
            </div>
            </a>

            {/* Card 2 */}
            <a href="/allcv">
               <div className="p-6 text-center bg-blue-100 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">View CVs</h3>
                     <p className="mt-2 text-gray-600">Click here to view our CVs collection.</p>
               </div>
            </a>

            {/* Card 3 */}
            <a href="/profile">
               <div className="p-6 text-center bg-blue-100 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800">My Profile</h3>
                     <p className="mt-2 text-gray-600">Click here to view or edit your Profile.</p>
               </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
