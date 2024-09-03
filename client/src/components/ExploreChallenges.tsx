import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ChallengeCard from './ChallengeCard';

export type Challenge = {
    challenge_name: string;
    start_date: string;
    end_date: string;
    description: string;
    file: string;
    level: string;
};

function ExploreChallenges() {

    const [isFilter,setIsFilter] = useState(false);
    const [challengeList, setChallengeList] = useState<Challenge[]>();

    useEffect(()=>{
        let listObj: Challenge[] = [];
        let list = localStorage.getItem("challenge-list");
        if(list == null) setChallengeList(listObj);
        else{
            listObj = JSON.parse(list);
            setChallengeList(listObj);
        }
    },[]);

    return (
        <div>
            <div className='bg-[#002A3B] text-white py-16 space-y-16'>
                <div className='text-center text-[30px] font-bold'>Explore Challenges</div>
                <div className='flex items-center justify-center space-x-10'>
                    <div className='bg-white max-w-min flex items-center px-3 rounded-lg'>
                        <SearchIcon sx={{color:'gray'}}/>
                        <input type="text" name="" id="" placeholder='Search' className='w-[700px] outline-0 text-black bg-transparent px-3 py-2 text-[18px]'/>
                    </div>

                    <div className='relative'>
                        <div className='bg-white text-black w-[180px] flex items-center justify-between px-3 py-3 rounded-md cursor-pointer' onClick={()=>setIsFilter(!isFilter)}>
                            <span className='font-semibold'>Filter</span> {!isFilter ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                        </div>

                        {isFilter && (
                            <div className={`absolute z-50 top-11 w-[180px] bg-white text-gray-700 ${isFilter ? "opacity-100" : "opacity-0"} duration-300`}>
                                <div className=' px-5 py-3 border-t-[1px] space-y-2'>
                                    <p className='text-[18px]'>Status</p>
                                    <div className='space-x-2'><input type="checkbox" id="all" value="all" /> <label htmlFor='all'>All</label></div>
                                    <div className='space-x-2'><input type="checkbox" id="active" value="active" /> <label htmlFor='active'>Active</label></div>
                                    <div className='space-x-2'><input type="checkbox" id="upcoming" value="upcoming" /> <label htmlFor='upcoming'>Upcoming</label></div>
                                    <div className='space-x-2'><input type="checkbox" id="past" value="past" /> <label htmlFor='past'>Past</label></div>
                                </div>
                                <div className=' px-5 py-3 border-t-[1px] space-y-2'>
                                    <p className='text-[18px]'>Level</p>
                                    <div className='space-x-2'><input type="checkbox" id="easy" value="easy" /> <label htmlFor='easy'>Easy</label></div>
                                    <div className='space-x-2'><input type="checkbox" id="medium" value="medium" /> <label htmlFor='medium'>Medium</label></div>
                                    <div className='space-x-2'><input type="checkbox" id="hard" value="hard" /> <label htmlFor='hard'>Hard</label></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='bg-[#003145] text-white py-16'>
                <div className='grid grid-cols-3 place-items-center w-[1172px] m-auto gap-y-20 gap-x-10'>

                    {challengeList?.map((challenge,index)=>(
                        <ChallengeCard key={index} challenge={challenge} idx={index}/>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ExploreChallenges
