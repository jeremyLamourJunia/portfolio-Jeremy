import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';
import ProjectModal from './ProjectModal';

interface ProjectBoxProps {
  project: {
    title: string;
    categories: string[];
    description: string;
    longDescription: string;
    date: string;
    images: string[];
    technologies: string[];
    duration: string;
    link?: string;
  };
  index: number;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        className="h-full"
      >
        <div className="project-box h-full flex flex-col hover:scale-[1.02] transition-transform">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
            <p className="text-gray-600 mb-2 line-clamp-2">{project.description}</p>
            <p className="text-sm text-gray-500">{project.date}</p>
          </div>

          <div className="flex-grow">
            {project.images && project.images.length > 0 ? (
              <ProjectCarousel images={project.images} />
            ) : (
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Aucune image disponible</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              Voir plus <ExternalLink className="ml-2 h-4 w-4" />
            </button>
            
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      />
    </>
  );
};

export default ProjectBox;