
//  import UcfImage from '../assets/Vulogo.jfif'; // Import the UCF image
import schoolImg from '../assets/MPBORD.png'
const education = [
  {
    institution: "Vikram University Ujjain",
    degree: "Bachelor of Computer Application",
    duration: "2022-2025",
    gpa: "RUNNING",
   image: schoolImg,// UcfImage 
  },
  {
    institution: "GOVT GIRLS H.S. SCHOOL, ALOTE (M.P.)",
    degree: "Higher Secondary Education(10+2)",
    duration: "2021-2022",
    gpa: "Percentage: 86%",
    image: schoolImg,
  },
  {
    institution: "GOVT GIRLS H.S. SCHOOL, ALOTE (M.P.)",
    degree: "Secondary Education(10)",
    duration: "2019-2020",
    gpa: "Percentage: 91%",
    image: schoolImg,
  }
];

const Education = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="education">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex items-center space-x-6"
            >
              <img
                src={edu.image}
                alt={edu.institution}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {edu.institution}
                </h3>
                <p className="mt-2 text-lg">{edu.degree}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{edu.duration}</p>
                <p className="mt-1 text-gray-600 dark:text-gray-300 font-semibold">{edu.gpa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
