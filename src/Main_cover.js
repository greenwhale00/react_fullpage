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
                <div className="circle"></div>
                <div className="tit">
                    <div className="text">
                        <p className='first'>Kim Hye Lim's</p>
                        <p className='second'>PORTFOLIO</p>
                    </div>

                </div>
                {/* <div className="circle">
                    <span>dot</span>
                </div> */}


            </section >

        </div>



    )
}

export default Main_cover