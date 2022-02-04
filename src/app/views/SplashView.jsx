import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.png'


const SplashView = () => {

    return (
        <div className='splashView h-full relative'>
            <div className='top-52 relative w-full flex justify-center'>
                <img alt="logo" src={logoImg} />
            </div>

            <div className='px-8 absolute w-full flex justify-center bottom-0 flex-col'>
                <Link to={"/about"} className='w-full mb-6'>
                   <button className='bg-white leading-2xl text-base text-black w-full h-btnHeight font-semibold rounded-btnRadius focus:bg-gray-300'>Create New account</button> 
                </Link>
                <Link to={"/about"} className='w-full mb-6'>
                   <button className='bg-primary leading-2xl text-base text-white w-full h-btnHeight font-semibold rounded-btnRadius focus:bg-gray-300 border border-white' >Login</button> 
                </Link>
                <div className='mt-2 mb-8 text-center'>
                    <p className='text-white font-medium text-xs'>
                    Powered by <img className='inline-block ml-2' alt="logo-poweredby" width="94px" src={logoImg} />
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SplashView;