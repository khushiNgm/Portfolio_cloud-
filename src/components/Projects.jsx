
import recipe from "../assets/RECIPE.png"; 
import curd from '../assets/CURD.png'
import MDSIMG from "../assets/mandsaur.png"; // Import Expense Tracker image
import StaticWeb from "../assets/1754036549009.png";
import AlertService from "../assets/1753357308669 (1).png";
import GestureControlled from "../assets/1753611533318 (1).png";
import GroceryImg from "../assets/GroceryWeb.png"; 
import PortfolioImg from "../assets/portfolio.png"; 

const projects = [
 
  {
    id: 1,
    name: " Real-Time File Upload Alert Service",
    technologies: "AWS S3, Lambda, SNS, IAM, Python (Boto3)",
    image: AlertService,
    github: "https://github.com/khushiNgm/recipe_pro",
    // liveDemo: "https://recipepro-ten.vercel.app/",
  },
  {
    id: 2,
    name: "Static Web App Deployment on AWS S3",
    technologies: "S3, IAM, AWS CLI, CloudFront",
    image: StaticWeb,
    github: "https://github.com/khushiNgm/CURD_REACT",
    // liveDemo: "https://curdreact.vercel.app/",
  
  },
  {
    id: 3,
    name: "Gesture-Controlled AWS EC2 Instance Launch",
    technologies: "Python, OpenCV, cvzone, Boto3, AWS EC2, Amazon Linux 2",
    image: GestureControlled,
    github: "https://github.com/khushiNgm/MDS_WEB",
    // liveDemo: "https://mds-web-ashy.vercel.app/",
  },
  {
    id: 4,
    name: "Grocery Web",
    technologies: "A full-stack responsive website.Built with ReactJS, Tailwind CSS, NodeJS, ExpressJS, and MongoDB for smooth UI and backend integration.",
    image: GroceryImg,
    github: "https://github.com/khushiNgm/grocery_web",
    liveDemo: "https://grocery-web-seven.vercel.app/",
  },
  {
    id: 5,
    name: "Portfolio",
    technologies: "Built my portfolio using ReactJS and Tailwind CSS with smooth navigation and modern UI design.Includes project previews, tech stack highlights, and an integrated contact form.",
    image: PortfolioImg,
    github: "https://github.com/khushiNgm/PORTFOLIO",
    liveDemo: "https://portfolio-ps1o.vercel.app/",
  },
 
];

const Projects = () => {
  return (
    <div
      className="bg-white dark:bg-black text-black dark:text-white py-20"
      id="projects"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.technologies}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
