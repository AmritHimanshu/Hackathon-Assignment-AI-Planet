import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ChallengeDetails (){

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const dataObj = Object.fromEntries(queryParams.entries());
    const data = JSON.stringify(dataObj);

    const params = useParams();
    const navigate = useNavigate();

    const [challenge, setChallenge] = useState(dataObj);

    const handleOnEdit = () => {
        const queryParams = new URLSearchParams(challenge).toString();
        navigate(`/edit-challenge/${parseInt(params.idx || '0',10)}?${queryParams}`);
    }

    const handleOnDelete = () => {
        let listObj = [];
        let list = localStorage.getItem('challenge-list');
        if(list == null) listObj = [];
        else {
            listObj = JSON.parse(list);
            const updatedList = listObj.filter((_:any, index:number) => index !== parseInt(params.idx || '0', 10));
            localStorage.setItem('challenge-list',JSON.stringify(updatedList));
        }
        navigate('/');
    };

    return (
        <div>
            <div className='px-20 py-5 font-semibold text-[18px]'>
                DPhi
            </div>

            <div className="p-32 bg-[#003145] text-white space-y-6 cursor-default">
                <div className='px-3 py-2 bg-yellow-300  text-black w-[464px] rounded-md font-semibold flex items-center space-x-2'>
                    <AccessTimeIcon sx={{fontSize:"18px"}}/> <span>Starts on 17th June'22 09:00 PM (Indian Standard Time)</span>
                </div>
                <div className='text-[42px] font-bold'>
                    <p>{challenge.challenge_name}</p>
                </div>
                <div className='text-[20px]'>
                    <p>Identify the class to which each butterfly belongs to</p>
                </div>
                <div className='bg-white text-[#003145] font-bold flex items-center justify-center py-2 space-x-3 w-[110px] rounded-md'>
                    <img src="/assets/icons/carbon_skill-level-basic.svg" alt="" />
                    <div>{challenge.level}</div>
                </div>
            </div>

            <div className='flex items-center justify-between px-32 shadow-xl'>
                <div className='pb-3 pt-8 px-4 text-[22px] font-bold border-b-[4px] border-b-green-600'>Overview</div>
                <div className='space-x-7'>
                    <button className='font-bold bg-green-700 border-2 border-green-700 text-white py-[5px] w-[90px] rounded-lg' onClick={handleOnEdit}>Edit</button>
                    <button className='font-bold border-2 border-red-600 text-red-600 py-[5px] w-[90px] rounded-lg' onClick={handleOnDelete}>Delete</button>
                </div>
            </div>

            <div className='px-32 py-20'>
                {/* <p className='whitespace-pre-wrap w-[956px] font-semibold text-[18px] text-[#64607D] leading-10'>
                    Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.

                    An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.

                    Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.
                </p> */}
                <p className='whitespace-pre-wrap w-[956px] font-semibold text-[18px] text-[#64607D] leading-10'>{challenge.description}</p>
            </div>

        </div>
    )
}

export default ChallengeDetails;