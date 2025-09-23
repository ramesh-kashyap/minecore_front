import React from 'react';

import { useNavigate, Link, Outlet } from "react-router-dom";


const PledgeReload = () => {
         
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
             case 'commission':
                navigate('/commission');
                break;
            case 'vip':
                navigate('/vip');
                break;
            case 'assets':
                navigate('/assets');
                break;
                case 'profile':
                navigate('/profile');
                break;
            default:
                navigate('/'); // fallback route
        }
    }
    return (

    <div data-v-72d7289a="" data-v-d521d281="" class="page">
   <div data-v-72d7289a="" class="headers">
      <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
         <div data-v-7401f0fe="" class="left">
            <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
         </div>
         <div data-v-7401f0fe="" class="title overflow1">Pledge Record</div>
         <div data-v-7401f0fe="" class="right"></div>
      </div>
   </div>
   <div data-v-72d7289a="" class="page-container">
      <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
         <div class="van-pull-refresh__track" style={{transitionDuration: "0ms"}}>
            <div class="van-pull-refresh__head"></div>
            <div data-v-d521d281="" class="income">
               <div data-v-d521d281="" class="box">
                  <div data-v-d521d281="" class="item">
                     <div data-v-d521d281="" class="text">Total pledge amount</div>
                     <div data-v-d521d281="" class="num">0 USDT</div>
                  </div>
                  <div data-v-d521d281="" class="item">
                     <div data-v-d521d281="" class="text">Pledge in progress</div>
                     <div data-v-d521d281="" class="num">0 USDT</div>
                  </div>
                  <div data-v-d521d281="" class="item">
                     <div data-v-d521d281="" class="text">redeemable</div>
                     <div data-v-d521d281="" class="num">0 USDT</div>
                  </div>
                  <div data-v-d521d281="" class="item">
                     <div data-v-d521d281="" class="text">Redeemed</div>
                     <div data-v-d521d281="" class="num">0 USDT</div>
                  </div>
               </div>
               <div data-v-d521d281="" class="box-title">Pledge Record</div>
               <div data-v-d521d281="" class="box-select">
                  <div data-v-d521d281="" class="item"><span data-v-d521d281="" class="pla overflow1">All status</span><img data-v-d521d281="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt=""/></div>
                  <div data-v-d521d281="" class="item"><span data-v-d521d281="" class="pla overflow1">Select time</span><img data-v-d521d281="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt=""/></div>
               </div>
               <div data-v-d521d281="" class="cards-con">
                  <div data-v-a998da64="" data-v-d521d281="" role="feed" class="van-list" aria-busy="false">
                     <div data-v-9fdeb240="" data-v-d521d281="" class="record-list"></div>
                    
                     <div class="van-list__finished-text">
                        <div data-v-43ae51de="" data-v-a998da64="" class="empty">
                           <div data-v-43ae51de="" class="van-empty custom-image">
                              <div class="van-empty__image" style={{width: "2rem", height: "2rem"}}><img src="./static/img1757786439045/empty-BkVz5juj.png"/></div>
                              <p class="van-empty__description">No data yet</p>
                             
                           </div>
                        </div>
                     </div>
                    
                     <div class="van-list__placeholder"></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
   </div>
  
</div>
    )
}

export default PledgeReload;