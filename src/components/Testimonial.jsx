import React from 'react'

// Import Data
import {testimonial} from '../data'

// Import components
import TestimonialSlider from './TestimonialSlider';

const Testimonial = () => {

  const {title, image} = testimonial;

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-2'>
          <div className='lg:max-w-[50%]'>
            {/* Title */}
            <h2 className='title mb-9'>{title}</h2>
            {/* Slider */}
            <TestimonialSlider/>
          </div>
          {/* Image */}
          <div className='order-1'>
            <img src={image.type} alt="img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial