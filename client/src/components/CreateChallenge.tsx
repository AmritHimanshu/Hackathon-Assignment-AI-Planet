import React, { useState } from 'react'

function CreateChallenge() {

    const [challengeData, setChallengeData] = useState<{
        challenge_name: string;
        start_date: string;
        end_date: string;
        description: string;
        file: File | null;
        level: string;
    }>({
        challenge_name: '',
        start_date: '',
        end_date: '',
        description: '',
        file: null,
        level: 'easy'
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)=>{
        let name = e.target.name;
        let value = e.target.value;
        if (e.target instanceof HTMLInputElement && e.target.type === 'file') {
            const file = e.target.files ? e.target.files[0] : null;
            setChallengeData(prevState => ({ ...prevState, file: file }));
        } else {
            setChallengeData(prevState => ({ ...prevState, [name]: value }));
        }
    }

    return (
        <div>
            <div className='px-20 py-5 font-semibold text-[18px]'>
                DPhi
            </div>
            <div className='px-20 py-9 font-semibold text-[25px] bg-slate-100'>
                Challenge Details
            </div>
            <form className='px-20 py-10 space-y-'>
                <div className='space-y-4 text-[17px] mb-8'>
                    <label htmlFor="challenge_name" className='block font-medium'>Challenge Name</label>
                    <input type="text" id="challenge_name" name="challenge_name" value={challengeData.challenge_name} onChange={handleOnChange} placeholder="Challenge Name" className='border-[1px] border-neutral-400 rounded-md w-[500px] p-2 outline-0' />
                </div>
                <div className='space-y-4 text-[17px] my-8'>
                    <label htmlFor="start_date" className='block font-medium'>Start Date</label>
                    <input type="date" id="start_date" name="start_date" value={challengeData.start_date} onChange={handleOnChange} placeholder="Add start date" className='border-[1px] border-neutral-400 rounded-md w-[500px] p-2 outline-0' />
                </div>
                <div className='space-y-4 text-[17px] my-8'>
                    <label htmlFor="end_date" className='block font-medium'>End Date</label>
                    <input type="date" id="end_date" name="end_date" value={challengeData.end_date} onChange={handleOnChange} placeholder="Add end date" className='border-[1px] border-neutral-400 rounded-md w-[500px] p-2 outline-0' />
                </div>
                <div className='space-y-4 text-[17px] my-8'>
                    <label htmlFor="description" className='block font-medium'>Description</label>
                    <textarea id="description" name="description" value={challengeData.description} onChange={handleOnChange} className='resize-none border-[1px] border-neutral-400 rounded-md w-[800px] h-[300px] p-2 outline-0' ></textarea>
                </div>
                <div className='space-y-4 text-[17px] my-8'>
                    <label className='block font-medium'>Image</label>
                    <input type="file" id="file" name="file" onChange={handleOnChange} className='border-2'/>
                </div>
                <div className='space-y-4 text-[17px] my-8'>
                    <label className='block font-medium'>Level Type</label>
                    <select id="level" name="level" className='p-2 bg-transparent border-[1px] border-neutral-400 rounded-md w-[200px] outline-0 cursor-pointer' 
                    onChange={handleOnChange}>
                        <option value="Easy" >Easy</option>
                        <option value="Medium" >Medium</option>
                        <option value="Hard" >Hard</option>
                    </select>
                </div>
                <button className='bg-green-700 text-white text-[17px] font-semibold px-10 py-3 mt-10 rounded-md' >Create Challenge</button>
            </form>
        </div>
    )
}

export default CreateChallenge
