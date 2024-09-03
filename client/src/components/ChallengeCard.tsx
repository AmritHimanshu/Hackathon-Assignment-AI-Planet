import React from "react";
import { Challenge } from './ExploreChallenges';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

type ChallengeCardProps = {
    challenge: Challenge;
    idx: number;
  };

function ChallengeCard({ challenge, idx }: ChallengeCardProps) {

    function formatDate(dateStr: string): string {
        const date = new Date(dateStr);
        
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: '2-digit' };
        const formatter = new Intl.DateTimeFormat('en-GB', options);
    
        const parts = formatter.formatToParts(date);
        const day = parts.find(part => part.type === 'day')?.value;
        const month = parts.find(part => part.type === 'month')?.value;
        const year = parts.find(part => part.type === 'year')?.value;

        const dayWithSuffix = addOrdinalSuffix(day);
    
        return `${dayWithSuffix} ${month}'${year}`;
    };
    
    function addOrdinalSuffix(day: string | undefined): string {
        if (!day) return '';
        const dayNumber = parseInt(day, 10);
        if (dayNumber > 3 && dayNumber < 21) return `${day}th`;
        switch (dayNumber % 10) {
            case 1: return `${day}st`;
            case 2: return `${day}nd`;
            case 3: return `${day}rd`;
            default: return `${day}th`;
        }
    };

  return (
    <div className="w-[354px] bg-white text-black rounded-xl">
        <div className="h-[176px] overflow-hidden">
            <img src="/assets/cardimage/Group 1000002466.png" alt="" />
        </div>
        <div className="text-center py-7 space-y-4">
            <p className="px-7 py-[1px] bg-[#FF3C00] bg-opacity-20 max-w-min m-auto rounded-sm text-[14px]">
                Past
            </p>
            <div className="font-bold w-[244px] m-auto text-[16px]">
                {challenge.challenge_name}
            </div>
            <p>Ended on</p>
            <p className="text-[18px] font-bold text-gray-600">
                {formatDate(challenge.end_date)}
            </p>
            <button className="bg-green-700 text-white text-[16px] font-semibold px-5 py-2 rounded-md space-x-4">
                <TaskAltIcon sx={{ fontSize: "18px" }} />
                <span>Participate Now</span>
            </button>
        </div>
    </div>
  );
}

export default ChallengeCard;
