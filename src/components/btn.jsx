import React from 'react';

function Btn() {
    return (
        <div className=' h-full w-full py-60 p-3 rounded-md flex flex-row justify-evenly items-center' >
            <button className='border transition delay-150 duration-300 ease-in-out text-white shadow-black rounded-md py-2 h-12 w-30 px-4 bg-gradient-to-r from-purple-600 to-pink-600 border-gray-600'>
                Register
            </button>
            <button className='border text-white shadow-md rounded-md py-2 h-12 w-50 px-4 bg-gradient-to-r from-purple-600 to-pink-600 border-gray-600'>
                Join Discord 
            </button>
        </div>

    )
}
export default Btn;