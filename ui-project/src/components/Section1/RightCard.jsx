import React from 'react'

const RightCard = (props) => {
  return (
    <div className='h-full w-80 bg-gray-400 relative overflow-hidden rounded-4xl '>
        <img className='h-full w-full object-cover  ' src={props.image} alt="" />
        <div className='absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between'>
            <h2 className='bg-white h-10 w-10 text-2xl font-semibold rounded-full flex justify-center items-center '>{props.number}</h2>
            <div className=''>
                <p className='text-lg leading-normal text-white mb-10 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis consequuntur sequi aperiam adipisci voluptas dolore.</p>
                <div className='flex'>
                    <button style={{backgroundColor:props.color}} className='font-medium  text-white px-8 py-2 rounded-full'>{props.btn}</button>
                    <button style={{backgroundColor:props.color}} className='font-medium  text-white px-4 py-2 rounded-full'><i className="ri-arrow-right-line"></i></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightCard