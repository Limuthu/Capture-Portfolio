import React from 'react';

// Page components
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection.js';
import FaqSection from '../components/FaqSection.js';

// Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation.js'

const AboutUs = () => (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <AboutSection />
        <ServicesSection />
        <FaqSection/>
    </motion.div>
)

export default AboutUs;
