import React from 'react'

// Import Data
import {products} from '../data'

// Import components
import ProductSlider from './ProductSlider';

const Products = () => {

  const {title, subtitle} = products;

  return (
    <section className="section text-center">
      <div className="container mx-auto">
        <div>
          <h2 className='title'>{title}</h2>
          <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
        </div>
        {/* Slider */}
        <ProductSlider/>
      </div>
    </section>
  )
}

export default Products