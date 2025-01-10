import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Business = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8">Business</h1>
        
        {/* Introduction */}
        <div className="mb-16">
          <p className="text-xl text-gray-600">
            Depuis 2023, je développe mes activités entrepreneuriales en parallèle de ma formation d'ingénieur.
          </p>
        </div>

        {/* Flocage de Textiles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Flocage de Textiles</h2>
          <div className="project-box">
            <p className="text-gray-600 mb-6">
              Service de personnalisation de textiles pour particuliers et professionnels.
            </p>
            <a 
              href="#" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Voir le site web <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <img 
                src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80" 
                alt="Exemple de flocage" 
                className="rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80" 
                alt="Atelier de flocage" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Prestations Informatiques */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Prestations Informatiques</h2>
          <div className="project-box">
            <p className="text-gray-600 mb-4">
              En tant qu'étudiant en école d'ingénieur, je propose des services de développement web et mobile pour les entreprises et les particuliers.
            </p>
            <p className="text-gray-600">
              Mon expertise technique et ma formation me permettent de répondre à vos besoins en matière de développement d'applications, de sites web et de solutions digitales sur mesure.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Business;