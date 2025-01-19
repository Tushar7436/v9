import React from 'react';
import { Suspense } from 'react';

const LandingPage = React.lazy(() => import('../components/LandingPage'))
const Work = React.lazy(() => import('../components/OurWork'))
const AboutUs = React.lazy(() => import('../components/AboutUs'))
const Gallery = React.lazy(() => import('../components/Gallery'))
const ScrollMarquee = React.lazy(() => import('../components/Testimonials'))

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home()  {
    return(
        <Suspense fallback={ null }>
        <div>
            <LandingPage/>
            <AboutUs/>
            <Gallery/>
            <Work/>
            <ScrollMarquee/>
        </div>
        </Suspense>
    )
}

