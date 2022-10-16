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

                    <p className='first'>Meet your Next</p>
                    <p className='second'><span>Creative</span> Developer.</p>
                </div>
                {/* <div className="circle">
                    <span>dot</span>
                </div> */}


            </section >

        </div>



    )
}

export default Main_cover