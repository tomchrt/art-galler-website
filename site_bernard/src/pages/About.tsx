import { artist } from '../data/artist';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          À propos de {artist.name}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {artist.bio}
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Expositions</h3>
            <ul className="space-y-2">
              {artist.exhibitions?.map((exhibition, index) => (
                <li key={index} className="text-gray-700">• {exhibition}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
