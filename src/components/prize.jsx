import React from 'react';

function Prize() {
    return (
        <div className='h-96 flex flex-row justify-evenly pt-16 items-baseline w-full bg-zinc-700 rounded mt-5 '>
            <div className='bg-white  h-56 w-56 rounded-md shadow-lg flex flex-col justify-evenly items-center'>
                <img className='w-20 ' src="https://hackcbs.tech/assets/img/first.png" alt="First prize" />
                <p className='pl-5'>This is for First position holder</p>
            </div>
            <div className='bg-white h-56 w-56 rounded-md shadow-lg flex flex-col justify-evenly items-center'>
                <img className='w-20 ' src="https://hackcbs.tech/assets/img/second.png" alt="First prize" />
                <p className='pl-5'>This is for Second position holder</p>
            </div>
            <div className='bg-white h-56 w-56 rounded-md shadow-lg flex flex-col justify-evenly items-center'>
                <img className='w-20 ' src="https://hackcbs.tech/assets/img/third.png" alt="First prize" />
                <p className='pl-5'>This is for Third position holder</p>
            </div>
        </div>
    );
}

export default Prize;