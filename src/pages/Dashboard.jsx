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
            <div className="p-6 text-center bg-green-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Statistics</h3>
              <p className="mt-2 text-gray-600">Monitor your performance and metrics.</p>
            </div>

            {/* Card 3 */}
            <div className="p-6 text-center bg-yellow-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Settings</h3>
              <p className="mt-2 text-gray-600">Manage your account settings and preferences.</p>
            </div>
          </div>
        </div>

        {/* Optional: Logout button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => {
              // Log out functionality (could be added later)
              navigate('/');
            }}
            className="p-3 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
