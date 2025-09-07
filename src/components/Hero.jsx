import TypingEffect from 'react-typing-effect';
import HeroImage from '../assets/myphoto(2).jpeg'

const Hero = () => {
  return (
    <div className='text-center py-16 bg-white dark:bg-black text-black dark:text-white'>
      <img 
        src={HeroImage} 
        alt="khushi nigam" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105' 
      />
      <h1 className='text-4xl font-bold mb-4'>
        <TypingEffect
          text={['Hi there!', `I'm Khushi Nigam`]}
          speed={50}
          eraseDelay={2000}
          typingDelay={500}
          cursorRenderer={cursor => <span className="text-black dark:text-white">{cursor}</span>}
        />
      </h1>
      
      <p className='mt-4 text-lg text-gray-600 dark:text-gray-300'>
        <span className='font-semibold text-gray-800 dark:text-gray-200'>
        A passionate <strong>  Junior Cloud & DevOps Engineer |</strong> Building scalable cloud solutions and automating infrastructure with AWS, Docker, and Kubernetes
        </span>
      </p>
      
      
    </div>
  );
};

export default Hero;
