import React, { useEffect } from 'react'
import './Detail.scss'
import AOS from "aos";
import "aos/dist/aos.css";




const Main_cover = () => {
    useEffect(() => {
        AOS.init();
    })




    return (
        <section>
            <div data-aos='fade-right' ><p className='tit'>Portfolio</p></div>
            <div data-aos='fade-left' ><p className='tit'>Front End</p></div>
        </section >

    )
}

export default Main_cover