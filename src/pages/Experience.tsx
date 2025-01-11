import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import ProjectBox from '../components/ProjectBox';
import Footer from '../components/Footer';


// Liste des projets
const projects = [

  {
    title: "Affichage Graphique avec Three.js",
    categories: ["Computer Graphics"],
    description: "Réalisation d'un logo en 3D avec des algorithmes d'infographie.",
    longDescription: "En groupe, nous avons développé un système pour tracer des courbes et afficher des objets vectoriels en 2D et 3D. Le projet a permis d'afficher un logo complexe avec des animations et une navigation autour de celui-ci.",
    date: "Octobre - Décembre 2024",
    images: ["public/images/capture info.png"],
    technologies: ["HTML", "CSS", "JavaScript", "Three.js"],
    duration: "3 mois à temps partiel"
  },
  {
    title: "Site Restaurant",
    categories: ["Web Design", "WordPress"],
    description: "Création d'un site vitrine pour un restaurant.",
    longDescription: "Réalisation en freelance d'un site internet pour un restaurant type brasserie. Le site inclut les horaires, l'adresse, le menu, et d'autres informations importantes, permettant aux clients d'accéder facilement aux détails du restaurant en ligne. L'objectif était de renforcer la présence digitale du restaurant et d'optimiser les conversions.",
    date: "Octobre 2024",
    images: [
      "public/images/capture_lemilord.jpeg",
    ],
    technologies: ["WordPress"],
    duration: "1 mois à temps partiel",
    link: "https://le-milord.fr/"
  },
  {
    title: "Site Internet Junior Entreprise",
    categories: ["Web", "Full Stack"],
    description: "Refonte et gestion du site web de la Junior Entreprise.",
    longDescription: "En tant que DSI, j'ai conçu une nouvelle version du site web de la Junior Entreprise. Le site propose deux interfaces : une pour les étudiants (pour rejoindre l'association et réaliser des missions) et une pour les entreprises (présentation des services et missions réalisées). Cette refonte a permis d'améliorer la gestion et l'accès aux informations.",
    date: "Décembre 2023 - Décembre 2024",
    images: [
      "public/images/capture_junior.jpeg",
    ],
    technologies: ["WordPress"],
    duration: "12 mois à temps partiel",
    link: "https://junia-lille-etudes.fr/"
  },

  {
    title: "Le Comptoir",
    categories: ["SaaS", "Web", "Full Stack"],
    description: "Développement d'une plateforme SaaS pour aider les restaurateurs à optimiser leur gestion.",
    longDescription: "Pendant plus d'un mois, nous avions carte blanche pour réaliser un projet informatique. Après plusieurs réunions, nous avons décidé de créer une plateforme SaaS pour améliorer l'expérience client dans les restaurants tout en simplifiant la gestion pour les restaurateurs. Côté restaurateur, le système permet de gérer le menu, les stocks, et la trésorerie avec un tableau de bord complet. Côté consommateur, les clients peuvent scanner un QR code pour accéder au menu, passer commande, et suivre l'état de leur commande en temps réel. Des options comme le paiement via API (SumUp), une borne de commande et une interface web pour consulter le menu en ligne ont également été intégrées.",
    date: "Mai 2024",
    images: [
     "public/images/capture_comptoire_1 (1).jpeg",
     "public/images/capture_comptoire_1 (2).jpeg",
     "public/images/capture_comptoire_1 (4).jpeg",
     "public/images/capture_comptoire_1 (3).jpeg",
     "public/images/capture_comptoire_1 (5).jpeg",
     "public/images/capture_comptoire_1 (6).jpeg"
    ],
    technologies: ["React", "Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    duration: "1 mois et demi à temps plein"
  },
  {
    title: "Site de Réservation de Vélo",
    categories: ["Web", "Reservation System"],
    description: "Site de réservation de vélos pour un foyer.",
    longDescription: "Création d'un site en WordPress pour gérer la réservation de flottes de vélos. J'ai développé un plugin de réservation personnalisé, intégrant la gestion des flottes et l'envoi automatique d'emails pour les nouvelles réservations ou modifications.",
    date: "Août 2024",
    images: ["public/images/capture_vélo.jpeg",'public/images/capture vélo_2.jpeg'],
    technologies: ["WordPress", "PHP", "SQL", "JavaScript"],
    duration: "6 mois à temps partiel"
  },
  
  {
    title: "Gestion de Troupes pour Wargame",
    categories: ["Java", "Game Development"],
    description: "Interface pour faciliter la mise en place d'une partie de Wargame.",
    longDescription: "Développement en Java d'une application permettant de générer automatiquement une armée selon les informations fournies par l'utilisateur. Le projet intègre la gestion des erreurs et un système de tests complet.",
    date: "Décembre 2024",
    images: ["public/images/Capture_projet_java.PNG"],
    technologies: ["Java"],
    duration: "1 mois à temps partiel"
  },
  {
    title: "Projet VAL en C++",
    categories: ["Simulation"],
    description: "Modélisation d'un système de transport de type VAL.",
    longDescription: "Avec un collègue, nous avons développé une modélisation simplifiée de rames de métro, incluant des facteurs d'arrêt d'urgence, d'accélération et de freinage. Le projet a permis de renforcer nos compétences en programmation orientée objet et en gestion de threads, avec une interface graphique basée sur SFML.",
    date: "Décembre 2023",
    images: [
      "public/images/Capture_val.PNG",
    ],
    technologies: ["C++", "SFML"],
    duration: "1 mois à temps partiel"
  },
  {
    title: "Plateforme de Gestion des Notes",
    categories: ["Web", "Scraping"],
    description: "Création d'une plateforme web pour la gestion des notes.",
    longDescription: "Développement d'une plateforme permettant aux étudiants d'importer leurs relevés de notes pour calculer automatiquement leurs moyennes et classements. Le projet utilise des techniques de scraping pour extraire les données depuis un PDF et les traiter.",
    date: "Décembre 2023",
    images: ["public/images/capture note 1.jpeg", "public/images/capture note 2.jpeg", "public/images/capture note 3.jpeg"],
    technologies: ["HTML", "CSS", "PHP", "JavaScript", "SQL"],
    duration: "1 mois à temps partiel"
  },
  {
    title: "Jeu Web de Logique",
    categories: ["Web", "Game Development"],
    description: "Développement d'un jeu web avec un solveur intégré.",
    longDescription: "Lors de notre première année, nous avons conçu un jeu web de logique avec un solveur capable de trouver les solutions optimales pour résoudre différentes cartes. Ce projet nous a permis de collaborer efficacement, de partir d'une idée jusqu'à un produit fini, et de le présenter devant un amphithéâtre.",
    date: "Mai 2023",
    images: ["public/images/Capture_CIR1.PNG", "public/images/capture cir1 2.jpeg", "public/images/capture cir1 3.jpeg"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    duration: "1 mois et demi à temps plein"
  },
  {
    title: "Site Club de Baseball",
    categories: ["Web", "Vitrine"],
    description: "Site vitrine avec formulaire de contact pour un club de baseball.",
    longDescription: "Création d'un site internet permettant de présenter les informations clés sur le club de baseball, incluant horaires et coordonnées. Ce projet a été réalisé dans le cadre d'un cours de web.",
    date: "Décembre 2022",
    images: ["public/images/capture vipères valenciennes.jpeg"],
    technologies: ["HTML", "CSS"],
    duration: "2 mois à temps partiel",
    link: "https://www.viperesvalenciennes.com/"
  }
];


// Extraire toutes les technologies uniques
const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];

// Extraire toutes les catégories uniques
const allCategories = [...new Set(projects.flatMap(project => project.categories))];

// Extraire toutes les années uniques
const allYears = [...new Set(projects.map(project => {
  // Extraire la date ou période
  const dateStr = project.date;

  // Vérifier si c'est une période (contient un tiret)
  if (dateStr.includes('-')) {
    // Séparer les parties de la période
    const dates = dateStr.split('-').map(part => part.trim());
    // Extraire l'année de la partie droite (date la plus grande)
    return new Date(dates[dates.length - 1]).getFullYear();
  } else {
    // Extraire l'année pour une date simple
    return new Date(dateStr).getFullYear();
  }
}))]
.sort((a, b) => b - a); // Trier les années par ordre décroissant

console.log(allYears);


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
      
      const matchesYear = !selectedYear || (() => {
        const dateStr = project.date;
  
        if (dateStr.includes('-')) {
          // Période : Extraire la partie droite de la plage
          const dates = dateStr.split('-').map(part => part.trim());
          const endYear = new Date(dates[dates.length - 1]).getFullYear();
          return endYear === selectedYear;
        } else {
          // Date simple : Extraire l'année
          return new Date(dateStr).getFullYear() === selectedYear;
        }
      })();
  
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