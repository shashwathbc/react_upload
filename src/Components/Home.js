import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
  return ( 
<div className='home'>
      {/* nackground img of body */}
     <div className="home_container">
         {/* <img className='home_img' src="https://wallpaperaccess.com/full/3847372.jpg" alt="" /> */}
         <img className="home_img" src="https://www.yesdee.com/wp-content/uploads/slider/cache/7e48d2d5d27d93af58c02a011f093f9b/Free-Images-Book-Wallpapers-HD-2-e1626817613434.jpg" alt="" />
     {/* <img src="https://wowslider.com/sliders/demo-9/data/images/2685176_b18ba54c.jpg" alt="" className="home_img" /> */}
    {/* these are the products  */}
     <div className="home_row">
          <Product 
          className="p"
           id="12324325"
           title="The book start" 
           price={25.98} 
           image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306272859l/11105706.jpg"  
           rating={5} 
           />

           <Product 
           id="12324321"
           title="The book start" 
           price={25.98} 
           image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306272859l/11105706.jpg"  
           rating={5} 
           />
     </div>

     <div className="home_row">
           <Product 
           id="12324322"
           title="The book start" 
           price={25.98} 
           image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306272859l/11105706.jpg"  
           rating={5} 
           />

 

           <Product 
           id="12324323"
           title="The book start" 
           price={25.98} 
           image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306272859l/11105706.jpg"  
           rating={5} 
           />
          
 

           <Product 
           id="12324324"
           title="The book start" 
           price={25.98} 
           image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306272859l/11105706.jpg"  
           rating={5} 
           />
     </div>

     <div className="home_row">
         <Product 
           id="12324326"
           title="The book start" 
           price={25.98} 
           image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306272859l/11105706.jpg"  
           rating={5} 
           />
          
          <Product 
           id="12324327"
           title="The book start" 
           price={25.98} 
           image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1306272859l/11105706.jpg"  
           rating={5} 
           />
    
    
     </div>
     </div>
  </div>



  )}

export default Home;
