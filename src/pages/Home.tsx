import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectBox from '../components/ProjectBox';
import Footer from '../components/Footer';


const projects = [
  {
    title: "Site pour le flocage de textiles",
    categories: ["Web", "Backend", "Frontend"],
    description: "Réalisation d’un site pour mon activité entrepreneuriale de flocage de textiles.",
    longDescription: "Une perte de temps pour mon activité de flocage était de comprendre les attentes des clients par messages ou appels, puis de réaliser des devis manuellement. Cette étape devait être répétée pour chaque nouveau client potentiel ! Pour résoudre ce problème, j’ai décidé de créer un site qui présente les principaux textiles que je propose à la vente, accompagné d’un système de dépôt de logos. Le client peut personnaliser sa commande en choisissant l’emplacement des logos et obtenir instantanément une estimation du prix. Une fois satisfait, il remplit ses informations, ce qui génère automatiquement un email envoyé à la fois au client et à moi-même avec les détails de sa commande. Ce système me fait gagner un temps précieux, que je peux consacrer à d’autres aspects de mon activité.",
    date: "Novembre - Décembre 2024",
    images: ["images/capture printcool 1.jpeg", "images/capture printcool 2.jpeg", "images/capture printcool 3.jpeg", "images/capture printcool 4.jpeg", "images/capture printcool 5.jpeg"],
    technologies: ["React", "Vite", "Tailwind", "Node.js", "Nodemailer"],
    duration: "2 mois à temps partiel",
    link:"https://print-cool.vercel.app/"
  },
  {
    title: "Site Internet Junior Entreprise",
    categories: ["Web", "Full Stack"],
    description: "Refonte et gestion du site web de la Junior Entreprise.",
    longDescription: "En tant que DSI, j'ai conçu une nouvelle version du site web de la Junior Entreprise. Le site propose deux interfaces : une pour les étudiants (pour rejoindre l'association et réaliser des missions) et une pour les entreprises (présentation des services et missions réalisées). Cette refonte a permis d'améliorer la gestion et l'accès aux informations.",
    date: "Décembre 2023 - Décembre 2024",
    images: [
      "images/capture_junior.jpeg",
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
     "images/capture_comptoire_1 (1).jpeg",
     "images/capture_comptoire_1 (2).jpeg",
     "images/capture_comptoire_1 (4).jpeg",
     "images/capture_comptoire_1 (3).jpeg",
     "images/capture_comptoire_1 (5).jpeg",
     "images/capture_comptoire_1 (6).jpeg"
    ],
    technologies: ["React", "Next.js", "MongoDB", "Node.js", "Tailwind CSS"],
    duration: "1 mois et demi à temps plein"
  },

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
              <span className="block gradient-text">Jérémy Lamour</span>
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-600"
            >
              Étudiant / Développeur Full Stack & Entrepreneur
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
              src="images/image_jérémy.JPG"
              alt="Jérémy Lam"
              className="relative z-10 w-96 h-96 object-cover rounded-full mx-auto border-4 border-white shadow-xl"
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
                Actuellement étudiant en école d'ingénieur, je suis passionné par le développement web et l'entrepreneuriat. Mon parcours m'a permis d'acquérir une solide expertise technique tout en développant une vision business.                </p>
                <p>
                Spécialisé dans les technologies modernes comme React et Node.js, je crée des applications web performantes et innovantes. Ma double compétence en développement et en gestion de projet me permet d'avoir une approche globale des projets.                </p>
                <p>
                En parallèle de mes études, j'ai lancé plusieurs projets entrepreneuriaux, notamment dans le domaine du textile personnalisé et des services numériques. Cette expérience m'a appris à gérer des projets de A à Z et à m'adapter aux besoins des clients.
                </p>
              </div>
              <div className="flex gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm rounded-full lg:text-lg ">Full Stack</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm  rounded-full lg:text-lg  ">Entrepreneur</span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 text-sm  rounded-full lg:text-lg ">Ingénieur</span>
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
                      {["React", "Node.js", "Wordpress","C++", "JS","JAVA"].map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Formation</h3>
                    <p className="text-gray-600">École d'Ingénieur - JUNIA ISEN Lille - 3ème année</p>
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
              to="/projets"
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