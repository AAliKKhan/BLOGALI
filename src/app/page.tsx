import React from 'react';
import Hero from './Components/Hero/hero';

import BlogCarousel from './Components/blogCarousel';
import AuthorSpotlight from './Components/authorSpotlight';
import NewsletterSubscription from './Components/newsletter';
import FAQ from './Components/faq';

const page = () => {
  return (
    <div>
      <div  className='mt-[120px]'><Hero /></div>
      <div  className='mt-[120px] no-scrollbar'><BlogCarousel></BlogCarousel></div>
      <div  className='mt-[120px]'><AuthorSpotlight/></div>
     
      <div  className='mt-[120px]'><FAQ/></div>
   
      <div  className='mt-[120px] mb-[100px]'><NewsletterSubscription/></div>
      
    </div>
  );
};

export default page; 
