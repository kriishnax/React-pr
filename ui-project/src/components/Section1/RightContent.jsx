import React from 'react'
import RightCard from './RightCard'

const RightContent = () => {
  return (
    <div className='h-full p-6 w-2/3 flex gap-2 '>
      <RightCard image="https://images.unsplash.com/photo-1587614298171-a223667e51c2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" number="1" btn="Satisfied" color="royalblue"/>
      <RightCard  image="https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfDF8MHx8fDA%3D" number="2" btn="Underserved" color="lightseagreen"/>
      <RightCard image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfDF8MHx8fDA%3D" number="3" btn="Underbanked" color="orange" />
    </div>
  )
}

export default RightContent