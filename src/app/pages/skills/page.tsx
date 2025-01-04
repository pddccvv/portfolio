export default function Skills() {
  return (
    <div className="py-10 px-5">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        My Skills
      </h1>
      <div className="max-w-4xl mx-auto">
        <h3>Framework</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg font-medium text-gray-600">
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Laravel
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            React JS
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Flask Python
          </li>
          {/* <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Next JS
          </li> */}
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Bootstrap
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Tailwind CSS
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto">
        <h3>Programming Language</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg font-medium text-gray-600">
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Hypertext Preprocessor (PHP)
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Javascript
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            Python
          </li>
        </ul>
      </div>
      <div className="max-w-4xl mx-auto">
        <h3>Databases</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg font-medium text-gray-600">
          <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            MySQL
          </li>
        </ul>
      </div>
    </div>
  );
}
