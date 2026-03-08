import React from 'react'
import Header from '../../Components/Headers/Header'
import MainHeader from '../../Components/Headers/MainHeader'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Play, Leaf, Sprout } from "lucide-react";
import Hero from '../../Components/LandingPage/Hero';
import PreviewHeader from '../../Components/Headers/PreviewHeader';
import AboutSection from '../../Components/LandingPage/AboutSection';



const Home = () => {
    return (
        <>
            {/* PreviewHeader  */}
            <PreviewHeader />

            {/* TopHeader  */}
            <Header />

            {/* MainHeader */}
            <MainHeader />

            {/* Hero section */}
            <Hero />

            {/* About section */}
            <AboutSection />

        </>
    )
}

export default Home