import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectBox from '../components/ProjectBox';
import Footer from '../components/Footer';

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
  // ... autres projets
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Portfolio
              <span className="block gradient-text">Jérémy Lam</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              Développeur Full Stack & Entrepreneur
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/2 mt-12 md:mt-0 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-dark to-blue-light opacity-20 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800"
              alt="Jérémy Lam"
              className="relative z-10 w-72 h-72 object-cover rounded-full mx-auto border-4 border-white shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">À propos de moi</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Actuellement étudiant en école d'ingénieur, je suis passionné par le développement web et l'entrepreneuriat. Mon parcours m'a permis d'acquérir une solide expertise technique tout en développant une vision business orientée résultats.
                </p>
                <p>
                  Spécialisé dans les technologies modernes comme React, Node.js et TypeScript, je crée des applications web performantes et innovantes. Ma double compétence en développement et en gestion de projet me permet d'avoir une approche globale des projets.
                </p>
                <p>
                  En parallèle de mes études, j'ai lancé plusieurs projets entrepreneuriaux, notamment dans le domaine du textile personnalisé et des services numériques. Cette expérience m'a appris à gérer des projets de A à Z et à m'adapter aux besoins des clients.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Full Stack</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Entrepreneur</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Ingénieur</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-dark to-blue-light opacity-10 rounded-3xl"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "TypeScript", "Next.js", "MongoDB", "Docker"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Formation</h3>
                    <p className="text-gray-600">École d'Ingénieur - Spécialité Informatique</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Langues</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Français</span>
                        <span>Natif</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Anglais</span>
                        <span>Professionnel</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Projets Récents
          </motion.h2>
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectBox key={index} project={project} index={index} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to="/experience"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Voir toutes les expériences
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
  
      <Footer/>
      
    </motion.div>
  );
};

export default Home;