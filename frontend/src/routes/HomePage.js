import React from 'react';

//component Main Components
import HeroContent from '../components/HeroContent/HeroContent';
import MissionVisionCulture from '../components/MissionVisionCulture/MissionVisionCulture';
import Timeline from '../components/Timeline/Timeline'
import Offices from '../components/Offices/Offices';
import Investors from '../components/Investors/Investors';
import DemoUseCases from '../components/DemoUseCases/DemoUseCases';
import Footer from '../components/Footer/Footer'

export default function HomePage(){
    return(
        <main className='mt-5'>
            <HeroContent/> 
            <MissionVisionCulture/>
            <Timeline/>
            <Offices/>
            <Investors/>
            <DemoUseCases/>
            <Footer/>
        </main>
    )
}
