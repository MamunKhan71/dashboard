import React from 'react'

export default function TableContents({ type, due, faculty, status }) {
    return (
        <tr>
            <td>
                <div className='flex gap-2 items-center'>
                    <button className='btn bg-white border-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_17_284)">
                                <path d="M17.0002 0H8.00024V16H22.0002V5C22.0002 3.67392 21.4735 2.40215 20.5358 1.46447C19.5981 0.526784 18.3263 0 17.0002 0V0Z" fill="#4163E9" />
                                <path d="M4.39524 16.061C4.59434 16.0203 4.79704 15.9999 5.00024 16H6.00024V0.0999756C4.87088 0.330506 3.85585 0.944157 3.12694 1.83707C2.39803 2.72999 2.00001 3.84732 2.00024 4.99998V17.025C2.6993 16.4975 3.52572 16.1649 4.39524 16.061Z" fill="#4163E9" />
                                <path d="M22.0002 18H5.00024C4.20459 18 3.44153 18.3161 2.87892 18.8787C2.31631 19.4413 2.00024 20.2044 2.00024 21C2.00024 21.7956 2.31631 22.5587 2.87892 23.1213C3.44153 23.6839 4.20459 24 5.00024 24H17.0002C17.6569 24 18.307 23.8707 18.9137 23.6194C19.5203 23.3681 20.0715 22.9998 20.5358 22.5355C21.0001 22.0712 21.3684 21.52 21.6196 20.9134C21.8709 20.3068 22.0002 19.6566 22.0002 19V18Z" fill="#4163E9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_17_284">
                                    <rect width="24" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <div>
                        <p className='text-[#072F33] font-medium'>{type}</p>
                        <p className='w-2xl'>Foundations of user...</p>
                    </div>
                </div>
            </td>
            <td>{due}</td>
            <td>
                <div className='flex gap-2 items-center'>
                    <img src="profile.jpeg" className='w-6 h-6 object-cover rounded-full' alt="profile" />
                    <span className='text-secondary'>{faculty}</span>
                </div>
            </td>
            <td>
                <button className={`btn btn-sm ${status === "Done" ? "bg-[#272B8F]" : "bg-[#AA571B]"} bg-[#272B8F] text-[#C4C7FF]`}>{status}</button>
            </td>
        </tr>
    )
}
