import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AllCV = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Liste simulée des CV (remplacez par vos données réelles)
  const cvs = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      description: 'Web Developer CV',
      pedagogicalExperience: 'Teaching frontend technologies to students.',
      professionalExperience: 'Worked at XYZ Corp as a frontend developer.',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      description: 'Data Scientist CV',
      pedagogicalExperience: 'Lectured on machine learning topics.',
      professionalExperience: 'Data Scientist at ABC Inc.',
    },
    {
      id: 3,
      firstName: 'Alice',
      lastName: 'Brown',
      description: 'Product Manager CV',
      pedagogicalExperience: 'Product management workshops for aspiring managers.',
      professionalExperience: 'Product Manager at DEF Ltd.',
    },
    {
      id: 4,
      firstName: 'Bob',
      lastName: 'Johnson',
      description: 'Backend Developer CV',
      pedagogicalExperience: 'Backend development bootcamps.',
      professionalExperience: 'Senior Backend Developer at GHI Tech.',
    },
    {
      id: 5,
      firstName: 'Charlie',
      lastName: 'Davis',
      description: 'UI/UX Designer CV',
      pedagogicalExperience: 'Mentoring UI/UX design students.',
      professionalExperience: 'UI/UX Designer at JKL Designs.',
    },
    {
      id: 6,
      firstName: 'Eve',
      lastName: 'Martinez',
      description: 'Mobile App Developer CV',
      pedagogicalExperience: 'Mobile app development for beginners.',
      professionalExperience: 'Mobile Developer at MNO Solutions.',
    },
    {
      id: 7,
      firstName: 'David',
      lastName: 'Miller',
      description: 'DevOps Engineer CV',
      pedagogicalExperience: 'DevOps training for engineers.',
      professionalExperience: 'DevOps Engineer at PQR Technologies.',
    },
    {
      id: 8,
      firstName: 'Sophia',
      lastName: 'Wilson',
      description: 'AI Engineer CV',
      pedagogicalExperience: 'Lectures on AI and machine learning.',
      professionalExperience: 'AI Engineer at STU AI Labs.',
    },
    {
      id: 9,
      firstName: 'James',
      lastName: 'Taylor',
      description: 'Full Stack Developer CV',
      pedagogicalExperience: 'Full-stack development classes.',
      professionalExperience: 'Full Stack Developer at VWX Innovations.',
    },
  ];

  // Filtrage basé sur la barre de recherche
  const filteredCVs = cvs.filter((cv) =>
    `${cv.firstName} ${cv.lastName} ${cv.description}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-6 text-3xl font-semibold text-center text-gray-700">Welcome to CV Dashboard</h2>
        <div className="mb-6 text-lg text-center text-gray-600">
          <p className="mt-4">Here you are set to explore all CVs</p>
        </div>

        {/* Barre de recherche */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search for a CV..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Grille des CV */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCVs.length > 0 ? (
            filteredCVs.map((cv) => (
              <div
                key={cv.id}
                onClick={() => navigate(`/cv/${cv.id}`)}
                className="p-6 text-center bg-blue-100 rounded-lg shadow-md cursor-pointer hover:bg-blue-200"
              >
                <h3 className="text-xl font-semibold text-gray-800">{cv.firstName} {cv.lastName}</h3>
                <p className="mt-2 text-gray-600">{cv.description}</p>
                <div className="mt-4 text-sm text-gray-500">
                  <p><strong>Pedagogical Experience:</strong> {cv.pedagogicalExperience}</p>
                  <p><strong>Professional Experience:</strong> {cv.professionalExperience}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No CVs found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCV;
