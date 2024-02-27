import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data,reference}) => {
    return (
        <>
            <motion.div drag dragConstraints={reference} className=' relative w-60 h-72 rounded-[40px] px-8 py-10 text-white bg-zinc-900/90 overflow-hidden'>
                <FaRegFileAlt />
                <p className=' text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
                <div className='footer absolute bottom-0   w-full  left-0 '>
                    <div className='  flex justify-between items-center py-3  mb-3  px-8'>
                        <h5>{data.filesize}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
                            {data.close? <IoClose />:<LuDownload size=".7em" color='white' />}
                            
                            
                            </span>
                        
                    </div>
                    {data.tag.isOpen?( <div className={`tag w-full py-4 bg-green-600`}>
                      <h3 className=' text-sm flex items-center justify-center font-semibold'>{data.tag.tagTitle}</h3>
                    </div>):null}
                   
                </div>
            </motion.div>
        </>
    )
}

export default Card