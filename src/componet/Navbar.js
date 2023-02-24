import React from 'react'
import Images from './Lyaouts/Images'
import Flex from './Lyaouts/Flex'
import List from './Lyaouts/List'
import Listitem from './Lyaouts/Listitem'

const Navbar = () => {
  return (
   <nav>
        <div className="max-w-container bg-red-500 mx-auto">
            <Flex className="flex">
                <div className='w-3/12'>
                <Images imgsre="images/OREBI©.png"/>
                </div>
                <div className='w-9/12'>
                <List className="flex justify-end gap-x-24">
                    <Listitem className="text-white" listitem="Home"/>
                    <Listitem listitem="About"/>
                    <Listitem listitem="Contract"/>
                    <Listitem listitem="Blog"/>
                </List>
                </div>
            </Flex>
        </div>
   </nav>
  )
}

export default Navbar