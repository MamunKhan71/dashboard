import React from 'react'
import Navigation from './Navigation'
import Card from './Card'
import Progress from './Progress'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import TableContents from './TableContents';

export default function RightContainer() {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 300, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 200, pv: 2400, amt: 2400 }, { name: 'Page A', uv: 500, pv: 2400, amt: 2400 }]
    return (
        <div className='py-12 px-6 w-full'>
            <Navigation />
            <div className='flex gap-6 mt-5 '>
                <div className='max-w-md space-y-5'>
                    <Card headline={"Foundations of User Experience (UX) Design"} assignment={"4 Assignment"} videos={"20 videos"} percentage={80} isFirst={true} />
                    <Card headline={"Start the UX Design Process: Empathize, Define, and Ideate"} assignment={"4 Assignment"} videos={"20 videos"} percentage={65} />
                    <Card headline={"Build Wireframes and Low-Fidelity Prototypes"} assignment={"4 Assignment"} videos={"20 videos"} percentage={85} />
                    <Card headline={"Build Wireframes and Low-Fidelity Prototypes"} assignment={"4 Assignment"} videos={"20 videos"} percentage={85} />
                </div>
                <div className='w-full space-y-5'>
                    <Progress />
                    <div className='w-full bg-primary p-5 rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <span className='text-lg font-semibold'>Course Activity</span>
                            <div className='flex gap-2 font-semibold'>
                                <div className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                                        <circle cx="4" cy="4.5" r="4" fill="#4163E9" />
                                    </svg>
                                    <span>Video</span>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="9" viewBox="0 0 8 9" fill="none">
                                        <circle cx="4" cy="4.5" r="4" fill="#1E2E69" />
                                    </svg>
                                    <span>Practice</span>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown dropdown-bottom font-semibold">
                                    <div tabIndex={0} role="button" className="btn m-1 font-inter text-black bg-white border-none rounded-full">
                                        Monthly
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                            <path d="M13.7108 0.70925C13.6178 0.615522 13.5072 0.541127 13.3854 0.490359C13.2635 0.43959 13.1328 0.413452 13.0008 0.413452C12.8688 0.413452 12.7381 0.43959 12.6162 0.490359C12.4944 0.541127 12.3838 0.615522 12.2908 0.70925L7.71079 5.28924C7.61783 5.38297 7.50723 5.45736 7.38537 5.50813C7.26351 5.5589 7.13281 5.58504 7.00079 5.58504C6.86878 5.58504 6.73808 5.5589 6.61622 5.50813C6.49436 5.45736 6.38376 5.38297 6.29079 5.28924L1.71079 0.70925C1.61783 0.615522 1.50723 0.541127 1.38537 0.490359C1.26351 0.43959 1.1328 0.413452 1.00079 0.413452C0.868781 0.413452 0.738075 0.43959 0.616216 0.490359C0.494357 0.541127 0.383756 0.615522 0.290792 0.70925C0.104542 0.896612 0 1.15006 0 1.41425C0 1.67843 0.104542 1.93188 0.290792 2.11925L4.88079 6.70924C5.44329 7.27104 6.20579 7.5866 7.00079 7.5866C7.7958 7.5866 8.55829 7.27104 9.12079 6.70924L13.7108 2.11925C13.897 1.93188 14.0016 1.67843 14.0016 1.41425C14.0016 1.15006 13.897 0.896612 13.7108 0.70925Z" fill="#072F33" />
                                        </svg>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li><a>By Date</a></li>
                                        <li><a>By Time</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <BarChart width={750} height={300} data={data}>
                                <XAxis dataKey="name" stroke="#061758" />
                                <YAxis />
                                <Tooltip />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Bar dataKey="uv" fill="#061758" barSize={30} />
                            </BarChart>
                        </div>
                    </div>
                    <div className='w-full bg-primary p-5 rounded-2xl'>
                        <div className='flex justify-between items-center'>
                            <span className='text-lg font-semibold'>Reminders</span>
                            <div>
                                <div className="dropdown dropdown-bottom font-semibold">
                                    <div tabIndex={0} role="button" className="btn m-1 font-inter text-black bg-white border-none rounded-full">
                                        Monthly
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
                                            <path d="M13.7108 0.70925C13.6178 0.615522 13.5072 0.541127 13.3854 0.490359C13.2635 0.43959 13.1328 0.413452 13.0008 0.413452C12.8688 0.413452 12.7381 0.43959 12.6162 0.490359C12.4944 0.541127 12.3838 0.615522 12.2908 0.70925L7.71079 5.28924C7.61783 5.38297 7.50723 5.45736 7.38537 5.50813C7.26351 5.5589 7.13281 5.58504 7.00079 5.58504C6.86878 5.58504 6.73808 5.5589 6.61622 5.50813C6.49436 5.45736 6.38376 5.38297 6.29079 5.28924L1.71079 0.70925C1.61783 0.615522 1.50723 0.541127 1.38537 0.490359C1.26351 0.43959 1.1328 0.413452 1.00079 0.413452C0.868781 0.413452 0.738075 0.43959 0.616216 0.490359C0.494357 0.541127 0.383756 0.615522 0.290792 0.70925C0.104542 0.896612 0 1.15006 0 1.41425C0 1.67843 0.104542 1.93188 0.290792 2.11925L4.88079 6.70924C5.44329 7.27104 6.20579 7.5866 7.00079 7.5866C7.7958 7.5866 8.55829 7.27104 9.12079 6.70924L13.7108 2.11925C13.897 1.93188 14.0016 1.67843 14.0016 1.41425C14.0016 1.15006 13.897 0.896612 13.7108 0.70925Z" fill="#072F33" />
                                        </svg>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li><a>By Date</a></li>
                                        <li><a>By Time</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead className='text-[072F33] font-inter'>
                                        <tr>
                                            <th>Type</th>
                                            <th>Due</th>
                                            <th>Faculty</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <TableContents type={"Assignment - 1"} due={"5 June 2024"} faculty={"Same Jhon"} status={"Done"} />
                                        {/* row 2 */}
                                        <TableContents type={"Quiz- 2"} due={"5 Aug 2024"} faculty={"Jhon Ab"} status={"Coming"} />
                                        <TableContents type={"Last Class"} due={"5 June 2024"} faculty={"Kabir Same"} status={"Done"} />
                                        <TableContents type={"Quiz- 2"} due={"5 June 2024"} faculty={"Lee Jhon"} status={"Coming"} />
                                        <TableContents type={"Assignment -4"} due={"5 June 2024"} faculty={"Abraham Leo"} status={"Done"} />
                                        <TableContents type={"Last Class"} due={"5 June 2024"} faculty={"Atik Saw"} status={"Done"} />

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
