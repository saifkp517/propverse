import React from 'react';

const Speedometer: React.FC<{riskPercentage: number}> = ({ riskPercentage }) => {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (riskPercentage / 100) * circumference;


    //just for git
    return (
        <div className="">
            <svg width="120" height="60" viewBox="0 0 120 60" className="mb-2">
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke="#e6e6e6"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={0}
                    transform="rotate(-90 60 60)"
                />
                <circle
                    cx="60"
                    cy="60"
                    r={radius}
                    fill="transparent"
                    stroke="green"
                    strokeWidth="10"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    transform="rotate(90 60 60)"
                    strokeLinecap="round"
                />
            
            </svg>
            <h1 className="text-sm font-bold text-gray-600">Risk Percentage</h1>
        </div>
    );
};

export default Speedometer;
