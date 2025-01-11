import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Instagram } from 'lucide-react';
import Footer from '../components/Footer';
const Business = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold  text-blue-600 mb-8">Business</h1>
        
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-xl text-gray-600">
          Depuis 2023, je développe mes activités entrepreneuriales en parallèle de ma formation d’ingénieur. Mon objectif est de découvrir de nouveaux domaines et d’acquérir des compétences, tant en informatique qu’en gestion de projets, relation client et satisfaction client. Ces expériences m’ont permis de progresser, de m’épanouir dans des activités qui me passionnent, comme l’informatique et l’entrepreneuriat, tout en générant un revenu complémentaire.
          </p>
          <ol className='mt-8'>
            <li >
              <h2 className="text-2xl text-blue-600 font-bold mb-3">1. Flocage de textiles pour associations étudiantes et sportives</h2>
              <p className="text-xl text-gray-600">L’idée est née lors de ma première année de cycle préparatoire. Membre d’une association étudiante, nous souhaitions concevoir des t-shirts personnalisés. En cherchant comment les produire, j’ai vu une opportunité et décidé de me lancer. J’ai investi dans une presse à chaud, du textile et du matériel de flocage pour apprendre les techniques nécessaires. Par la suite, je suis passé au statut d’auto-entrepreneur, ce qui m’a permis de facturer mes clients et de proposer un service de flocage à toutes les associations intéressées.</p>
            </li>
             {/* Flocage de Textiles */}
        <section className="my-8">
          <div className="project-box">
            <h2 className="text-2xl text-center text-blue-600 font-bold mb-3">Printcool</h2>
            <div className='flex justify-between items-center'>
            <a target="_blank" 
              href="https://print-cool.vercel.app/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Voir le site web <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a href="https://www.instagram.com/_printcool_/" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-600">
                <Instagram className="h-5 w-5 mr-2" />
                Instagram
              </a>
            </div>
            

            <div className="mt-8 grid grid-cols-1 justify-items-center md:grid-cols-2 gap-6">
              <img 
                src="images/image4.jpg" 
                alt="Exemple de flocage" 
                className="w-2/3  rounded-lg shadow-md"
              />
              <img 
                src="images/image5.jpg" 
                alt="Atelier de flocage" 
                className="w-2/3 rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

            <li>
              <h2 className="text-2xl  text-blue-600 font-bold mt-6 mb-3">2. Prestations de services informatiques pour professionnels et particuliers</h2>
              {/* Prestations Informatiques */}
        <section>
          <div className="project-box">
          <p className="text-xl text-gray-600">En 2024, grâce aux projets scolaires et personnels que j’ai réalisés, j’ai pu décrocher des missions en freelance via des plateformes spécialisées et le bouche-à-oreille. Depuis, je propose divers services dans mes domaines de compétences, répondant aux besoins spécifiques des particuliers et des entreprises. Ces missions m’ont permis d’approfondir mes connaissances et de diversifier mes expériences professionnelles.</p>
          </div>
        </section>
            </li>
          </ol>
        </div>

       
        
      </div>
     
      <Footer/>
    </motion.div>
    
  );
};

export default Business;