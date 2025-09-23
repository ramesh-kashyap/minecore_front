import { EarIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const CashCarousel = () => {
     const back = (page) => {
               navigate(-1);
               };
                   const navigate = useNavigate();

  const handleNavigation = (page) => {
    switch (page) {
      case 'dashboard':
        navigate('/dashboard');
        break;
      case 'earn':
        navigate('/earn');
        break;
      case 'mining':
        navigate('/mining');
        break;
      case 'trade':
        navigate('/trade');
        break;
       case 'task':
        navigate('/task');
        break;
      case 'assets':
        navigate('/assets');
        break;
         case 'profile':
                navigate('/profile');
                break;
      default:
        navigate('/not-found'); // fallback route
    }
  };



  return (
    <div data-v-72d7289a="" data-v-f67675bd="" class="page lucky">
   <div data-v-72d7289a="" class="headers">
      <div data-v-7401f0fe="" data-v-f67675bd="" class="inside-header">
         <div data-v-7401f0fe="" class="left">
            <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABUSURBVHgB7dKxDYBADARBiwoogf6boQRKMSREJBDY4vUz0uUbXAQAMIvMXK/t+XRc2+JPxFYRW0VsFbFVxL60xCyGusRNdBfRXUR3Ed1lyGgA4IsTC2JxC9Ay0jEAAAAASUVORK5CYII=" class="icon"/></div>
         </div>
         <div data-v-7401f0fe="" class="title overflow1 white">Lucky Wheel</div>
         <div data-v-7401f0fe="" class="right"></div>
      </div>
   </div>
   <div data-v-72d7289a="" class="page-container">
      <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
         <div class="van-pull-refresh__track" style={{transitionDuration: "0ms"}}>
            <div class="van-pull-refresh__head"></div>
            <div data-v-f67675bd="" class="lucky-topbtn">
               <div data-v-f67675bd="" class="topbtn-info">
                  <div data-v-f67675bd="">Lottery Rules</div>
                  <div data-v-f67675bd="">My Prizes</div>
               </div>
               <div data-v-f67675bd="" class="topbtn-info">
                  <div data-v-f67675bd="">Lottery Number Record</div>
               </div>
               <div data-v-f67675bd="" class="lucky-wrappar">
                  <div data-v-f67675bd="" class="lucky-list flex">
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250813/1839e0f4f6a807cd6990431be0e41675.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">500 MCE</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250813/1839e0f4f6a807cd6990431be0e41675.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">50 MCE</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250813/1839e0f4f6a807cd6990431be0e41675.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">1000 MCE</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/5e11c05c4d93a7c259988e1fada5a130.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">Thank you for participating</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/30eed38747a367e917dd569f0e548da0.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">Latest iPhones</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/a355279a9b7a3f21c02da392aa60ff17.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">Come again</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250813/1839e0f4f6a807cd6990431be0e41675.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">200 MCE</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250813/1839e0f4f6a807cd6990431be0e41675.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">5000 MCE</div>
                     </div>
                     <div data-v-f67675bd="" class="list-info">
                        <div data-v-f67675bd="" class="img"><img data-v-f67675bd="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250813/1839e0f4f6a807cd6990431be0e41675.png" draggable="false" alt=""/></div>
                        <div data-v-f67675bd="" class="name overflow2">20 MCE</div>
                     </div>
                  </div>
                  <div data-v-f67675bd="" class="btnbg">START</div>
               </div>
               <div data-v-f67675bd="" class="bnt-list">
                  <div data-v-f67675bd="">Remaining <span>0</span> Lottery Draws</div>
               </div>
               <div data-v-f67675bd="" class="lucky-plan-out">
                  <div data-v-f67675bd="" class="lucky-plan">
                     <div data-v-f67675bd="" class="plan-name">Get a chance to enter a lucky draw</div>
                     <div data-v-f67675bd="" class="plan-desc" dir="">
                        <p><img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250826/dc27c5ce168f4b441161a78b98197b09.png"/></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
   </div>
  
</div>
  );
};

export default CashCarousel;
