import AccessTimeIcon from '@mui/icons-material/AccessTime';

function ChallengeDetails (){
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
                    <p>Data Sprint 72 - Butterfly Identification</p>
                </div>
                <div className='text-[20px]'>
                    <p>Identify the class to which each butterfly belongs to</p>
                </div>
                <div className='bg-white text-[#003145] font-bold flex items-center justify-center py-2 space-x-3 w-[110px] rounded-md'>
                    <img src="/assets/icons/carbon_skill-level-basic.svg" alt="" />
                    <div>Easy</div>
                </div>
            </div>

            <div className='flex items-center justify-between px-32 shadow-xl'>
                <div className='pb-3 pt-8 px-4 text-[22px] font-bold border-b-[4px] border-b-green-600'>Overview</div>
                <div className='space-x-7'>
                    <button className='font-bold bg-green-700 border-2 border-green-700 text-white py-[5px] w-[90px] rounded-lg'>Edit</button>
                    <button className='font-bold border-2 border-red-600 text-red-600 py-[5px] w-[90px] rounded-lg'>Delete</button>
                </div>
            </div>

            <div className='px-32 py-20'>
                <p className='whitespace-pre-wrap w-[956px] font-semibold text-[18px] text-[#64607D] leading-10'>
                    Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.

                    An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.

                    Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.
                </p>
            </div>

        </div>
    )
}

export default ChallengeDetails;