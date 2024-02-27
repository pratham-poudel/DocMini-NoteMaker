import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
    const ref = useRef(null);


    const data = [
        {
            desc: "Hello My Name Is Pratham POudel.",
            filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Hello My Name Is Birat Belbase.",
            filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "Hello My Name Is Adesh Singh.",
            filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },
        },
    ];
    return (
       
            <div ref = {ref} className=' w-full h-full fixed z-[3] flex gap-10 flex-wrap p-5'>
                {data.map((item, index) => (
                    <Card data={item} reference={ref} />
                ))}

            </div>
       
    )
}

export default Foreground