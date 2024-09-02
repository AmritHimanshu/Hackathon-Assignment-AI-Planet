import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

function ExploreChallenges() {
    return (
        <div>
            <div className='bg-[#002A3B] text-white py-16 space-y-16'>
                <div className='text-center text-[30px] font-bold'>Explore Challenges</div>
                <div className=''>
                    <div className='bg-white max-w-min border-2 m-auto flex items-center px-3 rounded-lg'>
                        <SearchIcon sx={{color:'gray'}}/>
                        <input type="text" name="" id="" placeholder='Search' className='w-[700px] outline-0 text-black bg-transparent px-3 py-2 text-[18px]'/>
                    </div>
                    {/* <select name="" id="">

                    </select> */}
                </div>
            </div>

            <div className='bg-[#003145] text-white py-16'>
                <div className='grid grid-cols-3 place-items-center w-[1172px] m-auto gap-y-20 gap-x-10'>

                    <div className='w-[354px] bg-white text-black rounded-xl'>
                        <div className='h-[176px] overflow-hidden'>
                            <img src="/assets/cardimage/Group 1000002466.png" alt="" />
                        </div>
                        <div className='text-center py-7 space-y-4'>
                            <p className='px-7 py-[1px] bg-[#FF3C00] bg-opacity-20 max-w-min m-auto rounded-sm text-[14px]'>Past</p>
                            <div className='font-bold w-[244px] m-auto text-[16px]'>Travel Insurance Claim Prediction</div>
                            <p>Ended on</p>
                            <p className='text-[18px] font-bold text-gray-600'>16th May'22 09:00 PM</p>
                            <button className='bg-green-700 text-white text-[16px] font-semibold px-5 py-2 rounded-md space-x-4'>
                                <TaskAltIcon sx={{fontSize:'18px'}}/>
                                <span>Participate Now</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ExploreChallenges
