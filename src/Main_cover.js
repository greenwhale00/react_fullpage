import React, { useEffect } from 'react'
import './Detail.scss'
import AOS from "aos";
import "aos/dist/aos.css";




const Main_cover = () => {
    useEffect(() => {
        AOS.init();
    })




    return (
        <div>
            <section className='front'>

                <div className="tit">

                    <p className='first'>Portfolio</p>
                    <p className='second'>Kim Hye Lim</p>
                </div>
                <div className="circle">
                    <span>dot</span>
                </div>


            </section >

        </div>



    )
}

export default Main_cover