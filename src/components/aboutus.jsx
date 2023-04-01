import React from 'react';

function Aboutus() {
    return (
        <div className='h-96 w-full mt-5 bg-zinc-300 rounded-md flex flex-col justify-evenly items-center'>
            <h1 className='text-3xl underline font-bold mx-5 ' >
                About us
            </h1>
            <div className='flex flex-row justify-evenly '>
            <p className='text-gray-600 pt-10'>
                ---------- hackathon is a student run hackathon by the students of SRMCEM
            </p>
            <img className='h-40 rounded-md shadow-lg' src="https://static.wixstatic.com/media/745f0e_fb16829500784ff19c809ecae7063aaa~mv2.jpeg/v1/crop/x_121,y_0,w_1104,h_933/fill/w_586,h_495,al_c,q_90,enc_auto/1_g3ARV1u4v9b9AKEIyPB7zw.jpeg" alt="img" />
            </div>
        </div>
    )
}

export default Aboutus;