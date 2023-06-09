import React, { useState } from 'react'
// import Navbar from '../components/Navbar'
// import Search3 from "../assets/Search 3.png"
import RahiLogo from "../assets/RahiLogo.png"
import locationoutline from "../assets/locationoutline.png"
import pvr from "../assets/pvr.png"
import verified from "../assets/verified.png"

const LocationCard = () => {
    // const [qty1, setQty1] = useState(0);
    // const [qty2, setQty2] = useState(0);
    // const [qty3, setQty3] = useState(0);
    return (
        <div className='Container flex flex-col h-screen items-end '>
            <div className=" h-[500px] w-[500px] donation bg-background border-gray-200 border-solid border-2 rounded-2xl flex mr-32 drop-shadow-2xl flex-col min-w-[334px] max-w-[432px]  min-h-[600px] max-h-[656px] my-auto">
                <form class="flex items-center mx-5 my-5">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class=" relative w-full rounded-lg ">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required />
                    </div>
                </form>
                <div class="h-[496.65px] w-[400px] px-8 py-2 bg-white rounded-3xl shadow-md my-3 mx-auto">
                    <div class="mt-2 border-yellow-300">
                        <div className="flex flex-row justify-between bor">
                            <img src={RahiLogo} alt="" />
                            <div className='mx-auto'>
                                <div className=' flex flex-row -ml-10'>
                                    <p class="text-xl font-bold text-gray-700 hover:text-gray-600" tabindex="0">Raahi Foundation</p>
                                    <img className=' h-5 w-5 my-auto ml-0' src={verified} alt="" />
                                </div>
                                <div className='flex flex-row'>
                                    <img className='-ml-10' src={locationoutline} alt="" /> <p className=' font-thin'>New Delhi</p>
                                </div>
                                </div>
                            </div>
                            <p class="mt-2 text-black-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis maxime placeat delectus vitae sint expedita laborum reiciendis minima provident facilis!</p>
                            <img className='mt-5 mx-auto' src={pvr} alt="" />
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LocationCard 