import React from 'react'

export default function
    ({ headline, assignment, videos, percentage, isFirst }) {
    return (
        <div className={`w-full rounded-[20px] ${isFirst ? 'bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] text-white' : 'bg-[#F7F7FF] text-black'}  p-6 `}>
            <div className='space-y-2'>
                <h1 className='max-w-80 text-lg font-poppins font-medium'>{headline}</h1>
                <section className='flex items-center justify-start gap-2 font-inter text-sm'>
                    <span>{assignment}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                        <circle cx="4" cy="4.5" r="4" fill={`${isFirst? "white": "black"}` }/>
                    </svg>
                    <span>{videos}</span>
                </section>
            </div>
            <div className='flex justify-between items-end'>
                <button className={`btn btn-wide btn-circle ${!isFirst ? 'bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] text-white' : 'bg-[#F7F7FF] text-black'}`}>
                    Continue Course
                </button>
                <div className="relative w-28 h-28">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                            className={`${isFirst? "text-primary": "text-white"} stroke-current`}
                            strokeWidth={10}
                            cx={50}
                            cy={50}
                            r={40}
                            fill="transparent"
                        />
                        <circle
                            className="text-[#061758] font-medium progress-ring__circle stroke-current p-4"
                            strokeWidth={10}
                            strokeLinecap="round"
                            cx={50}
                            cy={50}
                            r={40}
                            fill="transparent"
                            strokeDasharray="251.2"
                            strokeDashoffset={`calc(251.2px - (251.2px * ${percentage}) / 100)`}
                        />
                        <text
                            x={50}
                            y={50}
                            fontFamily="Verdana"
                            fontSize={12}
                            className='text-[#061758] font-medium'
                            textAnchor="middle"
                            alignmentBaseline="middle"
                        >
                            {percentage}%
                        </text>
                    </svg>
                </div>
            </div>

        </div>
    )
}
