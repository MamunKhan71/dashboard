import React from 'react'
import Navigation from './Navigation'
import Card from './Card'

export default function RightContainer() {
    return (
        <div className='py-12 px-6 w-full'>
            <Navigation />
            <div className='max-w-md mt-5 space-y-5'>
                <Card headline={"Foundations of User Experience (UX) Design"} assignment={"4 Assignment"} videos={"20 videos"} percentage={80} isFirst={true}/>
                <Card headline={"Start the UX Design Process: Empathize, Define, and Ideate"} assignment={"4 Assignment"} videos={"20 videos"} percentage={65} />
                <Card headline={"Build Wireframes and Low-Fidelity Prototypes"} assignment={"4 Assignment"} videos={"20 videos"} percentage={85} />
                <Card headline={"Build Wireframes and Low-Fidelity Prototypes"} assignment={"4 Assignment"} videos={"20 videos"} percentage={85} />
            </div>
        </div>
    )
}
