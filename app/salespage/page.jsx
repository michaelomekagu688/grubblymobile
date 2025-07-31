

import React from 'react'
import './page.scss'
import Image from 'next/image'
import Card from '@/components/cards/Card'

const page = () => {
  return (
    <div className='salespage'>
        <header>
            <h1 className='header'> Find your  </h1>
            <h1 className='header'> Dream Furniture </h1>
        </header>
        <section className='second-cont'>
            <div className='left'>
                <h2 className='percentage'> 30% off </h2>
                <h5 className='date'> Until September 24 </h5>
                <button className='buy-btn'> Buy Now </button>
            </div>
            <div className='right'>
                <Image alt='chair' className='top-chair' src='/chair-5.jpg' height={100} width={100} />
            </div>
        </section>
        <section className='third-cont'>
            <button className='btn'> Sofas </button>
            <button className='btn'> Chairs </button>
            <button className='btn'> Tables </button>
            <button className='btn'> Kitchen </button>
        </section>
        <section className='fourth-cont'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
     </div>
  )
}

export default page