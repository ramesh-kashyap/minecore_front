import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';

const BillRecord = () => {
   const navigate = useNavigate(); // Hook for navigation

   const back = (page) => {
      navigate(-1);
   };

   const [isOpen, setIsOpen] = useState(false);

   const openPopup = () => setIsOpen(true);
   const closePopup = () => setIsOpen(false);
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
      <div data-v-72d7289a="" data-v-c77b46c7="" class="page">
         <div data-v-72d7289a="" class="headers">
            <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
               <div data-v-7401f0fe="" class="left">
                  <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon" /></div>
               </div>
               <div data-v-7401f0fe="" class="title overflow1">Fund flow</div>
               <div data-v-7401f0fe="" class="right" onClick={openPopup}>
                  <div data-v-c77b46c7="" class="headerRight" ><img data-v-c77b46c7="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAECSURBVHgB7ZiBCcIwEEU/0gEcoU6gI+gm3cAR2hHcRDewG+gGdoRuoAlFqKGEI5e7RJoHBw25woNLck0B4J1JNFhgg8zJXrByxqOJJ3TYmjhQEufr4A49GpQ1qEAR5PJ3gjWm7a/BnprotpwH5CVbEFudpYOu5JLcC1P1kFoySE5LkiUnLRlFTkoyqlxsSRG5WJKicj7JjvBeDQW5LxfwBYPlKL34Bj69iQEBVNCnhqetuaQSbKnJ5XuQS4oS22vtiZqcQtDevXtqcinxAvZvwpmanELQ9vKGmlyOGS5SJR5M7GbjcfbcO3NeJNfgEDj3w2pLbHfqFRGQFDwiAuWY4fIBwh6hDpWin2QAAAAASUVORK5CYII=" alt="" /></div>
               </div>
            </div>
         </div>
         <div data-v-72d7289a="" class="page-container">
            <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
               <div class="van-pull-refresh__track" style={{ transitionDuration: "0ms" }}>
                  <div class="van-pull-refresh__head"></div>
                  <div data-v-a998da64="" data-v-c77b46c7="" role="feed" class="van-list van-list container" aria-busy="false">
                     <div data-v-e0bb1637="" data-v-c77b46c7="" class="list"></div>

                     <div class="van-list__finished-text">
                        <div data-v-43ae51de="" data-v-a998da64="" class="empty">
                           <div data-v-43ae51de="" class="van-empty custom-image">
                              <div class="van-empty__image" style={{ width: "2rem", height: "2rem" }}><img src="./static/img1757786439045/empty-BkVz5juj.png" /></div>
                              <p class="van-empty__description">No data yet</p>

                           </div>
                        </div>
                     </div>

                     <div class="van-list__placeholder"></div>
                  </div>
               </div>
            </div>
            <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{ bottom: "1.3rem", right: "0.2rem" }}></div>
         </div>
         {isOpen && (
            <>
         <div class="van-overlay" role="button" tabindex="0" data-v-c77b46c7="" style={{ zIndex: '2019' }}></div>
         <div role="dialog" tabindex="0" class="van-popup van-popup--round van-popup--bottom" data-v-c77b46c7="" style={{ zIndex: '2019', background: 'none' }}>
            <div data-v-c77b46c7="" class="popup-choose">
               <div data-v-c77b46c7="" class="title">
                  <div data-v-c77b46c7="" class="left">Filter</div>
                  <div data-v-c77b46c7="" class="close" onClick={closePopup}><img data-v-c77b46c7="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADWSURBVHgB7ZUxDsIwDEU/IJYODMzlEEhwAY4E5+BcLKxwgq4wMHTpgi25UqmSxrGCEJKf9Kda8c+vrQCO4zh/REXaKOpqqVWxUNbxgSfSgXQnvRBvznVb0pXUIcEcOtYiNnJEOIm+eTWoT6JNgG98I+2lwQ6fSQybt6QzqdEcrDUwZWJlbc7MkM/4trA2Z3IS6BknsbQ2Z7RDqMGSpimB8S/oEB7MrxgITfsF8e0oaiC2aqkVLWIgtedmE9ohfIqmpr2Rb63UPlAYvlmtqMt6jBzHcX7OGxWKPO83fWwVAAAAAElFTkSuQmCC" alt="" /></div>
               </div>
               <div data-v-c77b46c7="" class="til">Set time range</div>
               <div data-v-c77b46c7="" class="time">
                  <div data-v-c77b46c7="" class="time-item">
                     <img data-v-c77b46c7="" src="./static/img1757786439045/time-icon-D4YZlVuR.png" alt="" />
                     <div data-v-c77b46c7="" class="text pla">Start Time</div>
                  </div>
                  <div data-v-c77b46c7="" class="time-item">
                     <img data-v-c77b46c7="" src="./static/img1757786439045/time-icon-D4YZlVuR.png" alt="" />
                     <div data-v-c77b46c7="" class="text pla">end time</div>
                  </div>
               </div>
               <div data-v-c77b46c7="" class="til">Currency</div>
               <div data-v-c77b46c7="" class="select">all</div>
               <div data-v-c77b46c7="" class="til">Transaction Type</div>
               <div data-v-c77b46c7="" class="tabs">
                  <div data-v-c77b46c7="" class="tabs-item active">all</div>
                  <div data-v-c77b46c7="" class="tabs-item">top up</div>
                  <div data-v-c77b46c7="" class="tabs-item">Withdraw</div>
               </div>
               <div data-v-c77b46c7="" class="bt-list">
                  <div data-v-c77b46c7="" class="bt copy">Reset</div>
                  <div data-v-c77b46c7="" class="bt save">OK</div>
               </div>
            </div>

         </div>
         </>
         )} 
         <div data-v-72d7289a="" class="footer">

         </div>
      </div>
   );
};

export default BillRecord;










