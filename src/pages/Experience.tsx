import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProjectBox from '../components/ProjectBox';
import Footer from '../components/Footer';

// Liste des projets
const projects = [
  {
    title: "Application de Gestion de Stock",
    categories: ["Web", "Full Stack", "React", "Node.js"],
    description: "Développement d'une application web complète pour la gestion de stock d'une entreprise de textile.",
    longDescription: "Cette application permet la gestion complète des stocks, des commandes et des clients. Elle inclut des fonctionnalités avancées comme le suivi en temps réel, les notifications automatiques et un tableau de bord analytique.",
    date: "Janvier 2024",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Express", "Docker"],
    duration: "3 mois"
  },
  {
    title: "Site E-commerce de Personnalisation",
    categories: ["E-commerce", "Web Design", "UX/UI"],
    description: "Création d'une plateforme e-commerce pour la vente de produits personnalisables.",
    longDescription: "Plateforme permettant aux clients de personnaliser leurs produits en temps réel avec un configurateur 3D. Intégration complète avec les systèmes de paiement et de livraison.",
    date: "Novembre 2023",
    images: [
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["Next.js", "Stripe", "Three.js", "Tailwind CSS"],
    duration: "4 mois"
  },
  {
    title: "Application Mobile de Livraison",
    categories: ["Mobile", "React Native", "API"],
    description: "Développement d'une application mobile pour un service de livraison local.",
    longDescription: "Application permettant aux clients de commander des produits locaux et de suivre leurs livraisons en temps réel. Interface pour les livreurs et système de notation intégré.",
    date: "Septembre 2023",
    images: [
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80"
    ],
    technologies: ["React Native", "Firebase", "Google Maps API"],
    duration: "5 mois"
  }
];

// Extraire toutes les technologies uniques
const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

// Extraire toutes les catégories uniques
const allCategories = [...new Set(projects.flatMap(project => project.categories))];

// Extraire toutes les années uniques
const allYears = [...new Set(projects.map(project => 
  new Date(project.date).getFullYear()
))].sort((a, b) => b - a);

const Experience = () => {
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesTech = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => project.technologies.includes(tech));
      
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.some(cat => project.categories.includes(cat));
      
      const matchesYear = !selectedYear || 
        new Date(project.date).getFullYear() === selectedYear;

      return matchesTech && matchesCategory && matchesYear;
    });
  }, [selectedTechnologies, selectedCategories, selectedYear]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Expériences</h1>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:text-blue-700"
            >
              <Filter className="h-5 w-5" />
              Filtres
            </button>
          </div>

          {/* Filtres */}
          <motion.div
            initial={false}
            animate={{ height: showFilters ? 'auto' : 0, opacity: showFilters ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              {/* Années */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Année</h3>
                <div className="flex flex-wrap gap-2">
                  {allYears.map(year => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedYear === year
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {allTechnologies.map(tech => (
                    <button
                      key={tech}
                      onClick={() => toggleTechnology(tech)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedTechnologies.includes(tech)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>

              {/* Catégories */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Types de Projets</h3>
                <div className="flex flex-wrap gap-2">
                  {allCategories.map(category => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedCategories.includes(category)
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectBox project={project} index={index} />
              </motion.div>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  Aucun projet ne correspond aux filtres sélectionnés.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default Experience;