

import Image from 'next/image'
import './card.scss'
import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <div className='ch'>
            <Image src='/chair-1.jpg' alt='chair' height={100} className='ch-one' width={100} />
        </div>
        <div className='span-div'>
            <div className='span-one'> Soft Element Jack </div>
            <div className='span-two'> $60.50 </div>
            <div className='span-three'> 
                <label className='span-label yellow'></label>
                <label className='span-label green'></label>
                <label className='span-label black'></label>
            </div>
        </div>
    </div>
  )
}

export default Card