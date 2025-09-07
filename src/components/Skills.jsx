import { FaAws } from 'react-icons/fa';
import { SiDocker, SiKubernetes, SiTerraform, SiLinux, SiJenkins, SiGithub } from 'react-icons/si';
import { FaPython, FaJava, FaHtml5, FaCss3, FaDatabase,FaPhp, FaJsSquare,} from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
// import dsImage from '../assets/ds.png'; // Data Structures image
// import algorithmsImage from '../assets/Algorthims.png'; // Algorithms image
// import nodeImage from '../assets/node.png'; // Node.js image
// import exImage from '../assets/ex.png'; // Express.js image
import vsCodeImage from '../assets/vs.png'; // VS Code image

// import oopImage from '../assets/oop.png'; // Object Oriented Programming image


const skills = [
  { id: 1, name: "AWS",icon:<FaAws size={40} />, proficiency: 60},
  { id: 2, name: "Docker",icon:<SiDocker size={40} />,proficiency: 80 },
  { id: 3, name: "Kubernetes",icon:<SiKubernetes size={40} />, proficiency: 70 },
  { id: 4, name: "Terraform",icon:<SiTerraform size={40} />, proficiency: 65 },
  { id: 5, name: "Linux (Ubuntu)",  icon:<SiLinux size={40} />, proficiency: 85 },
  { id: 6, name: "Python",icon: <FaPython size={40} />, proficiency: 75 },
  { id: 7, name: "Git & GitHub",icon:<SiGithub size={40} />, proficiency: 80 },
  { id: 8, name: "Jenkins", icon:<SiJenkins size={40} />,proficiency: 70 },
  { id: 9, name: "VS Code", icon: <img src={vsCodeImage} alt="VS Code" className="w-10 h-10" />, proficiency: 85 },
  { id: 10, name: "React (for Cloud Projects)", icon:<DiReact size={40} />, proficiency: 70 },
];

const Skills = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="mb-4 flex space-x-2 justify-center">
                {Array.isArray(skill.icon) ? skill.icon.map((icon, idx) => (
                  <div key={idx}>{icon}</div>
                )) : (
                  <div>{skill.icon}</div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
{/*               <div className="w-full bg-gray-300  dark:bg-gray-600 rounded-full h-2.5 relative">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{`${skill.proficiency}%`}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
