import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';

const RechargeCurrency = () => {
// const navigate = useNavigate();

//   const handleNavigation = (page) => {
//     switch (page) {
//       case 'dashboard':
//         navigate('/dashboard');
//         break;
//       case 'earn':
//         navigate('/earn');
//         break;
//       case 'wallet':
//         navigate('/wallet');
//         break;
//       case 'trade':
//         navigate('/trade');
//         break;
//       case 'assets':
//         navigate('/assets');
//         break;
//       default:
//         navigate('/not-found'); // fallback route
//     }
//   };


    return (
        <div data-v-72d7289a="" data-v-bca86288="" className="page">
   <div data-v-72d7289a="" className="headers">
      <div data-v-7401f0fe="" data-v-72d7289a="" className="inside-header">
         <div data-v-7401f0fe="" className="left">
            <div data-v-7401f0fe="" className="back"><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" className="icon"/></div>
         </div>
         <div data-v-7401f0fe="" className="title overflow1">Select the currency for deposit</div>
         <div data-v-7401f0fe="" className="right"></div>
      </div>
   </div>
   <div data-v-72d7289a="" className="page-container">
      <div data-v-72d7289a="" className="scroll" id="pageScroll">
         <div data-v-bca86288="" className="container">
            <div data-v-bca86288="" className="title">Currency list</div>
            <div data-v-bca86288="" className="list">
               <div data-v-bca86288="" className="item">
                  <div data-v-bca86288="" className="icon"><img data-v-bca86288="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2c161d6ff1fdd3d4b8b19f51866e3a86.png" alt=""/></div>
                  <div data-v-bca86288="" className="name">USDT</div>
                  <div data-v-bca86288="" className="check"><img data-v-bca86288="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgB7ZjdcYQgFEZvOtgS6CAlJCXQgZRgB9qJ2wHbgUkFTiogHSQdEO5EJoZF5OeiPuw3c2Z8UDhzYUAAeKQsT5AfZuCGZ8Or4TKD+TZ8zrwbbvNz9aBAaxgNOpHJIKBisFoK0sVcFLUoVk0SiLkM8DclssOApmqhajLIDKssVyR52UluKZk03MOOchYJkREHyFl4jKA6UBD7vpy1epY2JDidQHBck2O1O+ecaymlFkJsvct8gm1NuaZp9DKQMcw1tjOvnFJq65vBJ1hl/vnkGGNb3ymf4FdMhzh/IuZQiZyeXe4SJWfTdV0tOUuZYEiSQM4rGDXEfd8HJYnkvEOsYhtYkySSQyaf4DWlEVcSF2AiOeTmE0xeqF1JIjkNKws1y2nMlSSQ0xD4wx5LJInkJggkez8mELOIkODeZxEXBRHhBwoKiEy1P5sAAyTk9MdODIMTH9z3kiySs8HSXyvISSC4PFpGAN31W9QBvUQ053gwwu9GkFQ1iivgl/mZwf8rYOTN8AE7XgE/4uYHNJrN5TmYoCAAAAAASUVORK5CYII=" alt=""/></div>
               </div>
               <div data-v-bca86288="" className="item">
                  <div data-v-bca86288="" className="icon"><img data-v-bca86288="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/3e546c0e62248d9bec26855319dc25dd.png" alt=""/></div>
                  <div data-v-bca86288="" className="name">USDC</div>
                 
               </div>
               <div data-v-bca86288="" className="item">
                  <div data-v-bca86288="" className="icon"><img data-v-bca86288="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/4bd3122ec5f26eee8157b3a93b7ae000.png" alt=""/></div>
                  <div data-v-bca86288="" className="name">TRX</div>
                 
               </div>
               <div data-v-bca86288="" className="item">
                  <div data-v-bca86288="" className="icon"><img data-v-bca86288="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/ebcc1124904e897fb5d2c96c75dd85ca.jpg" alt=""/></div>
                  <div data-v-bca86288="" className="name">DAI</div>
                 
               </div>
               <div data-v-bca86288="" className="item">
                  <div data-v-bca86288="" className="icon"><img data-v-bca86288="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/0318e3072bb3a20b821bc8179c61297c.png" alt=""/></div>
                  <div data-v-bca86288="" className="name">BNB</div>
                 
               </div>
               <div data-v-bca86288="" className="item">
                  <div data-v-bca86288="" className="icon"><img data-v-bca86288="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2719394e5775beb54774bb7d5bd221ef.png" alt=""/></div>
                  <div data-v-bca86288="" className="name">BTC</div>
                 
               </div>
               <div data-v-bca86288="" className="item">
                  <div data-v-bca86288="" className="icon"><img data-v-bca86288="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/19ec55a2e96ff980f0556afefd402a44.png" alt=""/></div>
                  <div data-v-bca86288="" className="name">ETH</div>
                 
               </div>
            </div>
         </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
   </div>
   <div data-v-72d7289a="" className="footer">
      <div data-v-bca86288="" className="footer-con">
         <button data-v-34dc7cc4="" data-v-bca86288="" type="button" className="van-button van-button--default van-button--normal com-btn on submit-btn">
            <div className="van-button__content">
              <span className="van-button__text">Next</span>
            </div>
         </button>
      </div>
   </div>
</div>
    );
};

export default RechargeCurrency;










