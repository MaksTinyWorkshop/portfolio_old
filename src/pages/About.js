import React, { useEffect, useState } from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Buttons from "../components/Buttons";
import SocialNetwork from "../components/SocialNetwork";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const About = () => {
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <div>
      <Mouse />
      <motion.div
        className="about"
        initial="initial"
        animate="visible"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        <Navigation />
        <Logo />
        <div className="about-main">
          <motion.div
            className="img-content"
            initial="initial"
            animate="visible"
            variants={imgAnim}
            transition={{ duration: 1.2 }}
          >
            <div className="img-container hover">
              <span>
                <h3>Maxime Fleury</h3>
                <p>Développeur Junior</p>
                <h4>SKILLS</h4>
                <p>React</p>
                <p>HTML/CSS/JS</p>
                <p>I.A</p>
                <p>U.I Design</p>
              </span>
              <img
                src="./assets/img/portrait-maxime.png"
                alt="Maxime"
                className="img"
              />
            </div>
            <div className="button-container">
              <NavLink to={"/contact"} className="button hover">
                Contactez-moi
              </NavLink>
            </div>
          </motion.div>
          <div className="about-content">
            <h1>Un couteau Suisse Français</h1>
            <p>
              En tant qu'ancien professionnel du secteur de la restauration, ma
              transition vers le monde de la technologie a été guidée par une
              passion profonde pour l'innovation et l'apprentissage continu.
            </p>

            <p>
              Mon parcours atypique m'a doté d'une persévérance et d'une éthique
              de travail inébranlables.
            </p>
            <p>
              Je me nourris constamment de nouvelles connaissances, cherchant à
              repousser les limites de ma compréhension pour offrir des
              expériences web exceptionnelles. Chaque jour est une nouvelle
              opportunité d'apprendre. Mon désir de maîtriser les dernières
              tendances se traduit par une passion pour le code propre,
              l'accessibilité, et des interfaces utilisateur esthétiques.
            </p>
            <p>
              Si vous cherchez un développeur dévoué, créatif et en constante
              évolution, je suis prêt à collaborer avec vous pour créer des
              projets web qui repoussent les frontières de l'innovation. Mettons
              nos idées en action et donnons vie à votre vision numérique.
            </p>
            <p>
              Contactez-moi dès aujourd'hui pour commencer notre voyage vers la
              réalisation de votre projet.
            </p>
            <span
              className="random-circle"
              style={{ left, top, transform: size }}
            ></span>
          </div>
        </div>
        <SocialNetwork />
        <Buttons left={"/"} right={"/projet-1"} />
      </motion.div>
    </div>
  );
};

export default About;
