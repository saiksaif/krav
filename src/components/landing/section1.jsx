import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {motion} from 'framer-motion'

const Section1 = () => {
    useEffect(() => {
      AOS.init({
           duration: 800,
           once: false,
         })
    }, [])

    return (
        // <div>
            <div className="text-[50px] md:text-[100px] lg:text-[150px] xl:text-[200px] flex flex-col items-center justify-center h-full">
                <div className="letterSpacingLess" data-aos="fade-right" data-aos-once="false">
                    OWN YOUR CULTURE
                </div>
                <div className="letterSpacingLess" data-aos="fade-left">
                    TELL YOUR STORIES
                </div>
            </div>
        // </div>
    )
}

export default Section1