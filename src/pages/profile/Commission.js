import React, { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";



const Commission = () => {
   
    const navigate = useNavigate(); // Hook for navigation
      
        const back = (page) => {
        navigate(-1);
        };
  // State for popup
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [confirmedValue, setConfirmedValue] = useState(""); // For showing confirmed result

  const openPopup = (item) => {
    setSelectedItem(item); // store which one was clicked
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const handleConfirm = () => {
    setConfirmedValue(selectedItem); // update with clicked value
    setIsOpen(false);
  };
    const [activeTab, setActiveTab] = useState('run');

   return (

      <div data-v-72d7289a="" data-v-277f1458="" className="page">
         <div data-v-72d7289a="" className="headers">
            <div data-v-7401f0fe="" data-v-72d7289a="" className="inside-header">
               <div data-v-7401f0fe="" className="left">
                  <div data-v-7401f0fe="" className="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" className="icon" /></div>
               </div>
               <div data-v-7401f0fe="" className="title overflow1">My earnings</div>
               <div data-v-7401f0fe="" className="right"></div>
            </div>
         </div>
         <div data-v-72d7289a="" className="page-container">
            <div data-v-72d7289a="" className="van-pull-refresh scroll" id="pageScroll">
               <div className="van-pull-refresh__track" style={{ transitionDuration: "0ms" }}>
                  <div className="van-pull-refresh__head"></div>
                  <div data-v-277f1458="" className="income">
                     <div data-v-277f1458="" className="box-ex">
                        
                        <div data-v-277f1458=""  className={`item ${activeTab === 'run' ? 'active' : ''}`}
          onClick={() => setActiveTab('run')}>Run Record</div>
                        <div data-v-277f1458="" className={`item ${activeTab === 'income' ? 'active' : ''}`}
          onClick={() => setActiveTab('income')}>Income Record</div>
                     </div>
                      {activeTab === 'run' && (
                     <div data-v-b47ca8ab="" data-v-277f1458="" className="wrap">
                        <div data-v-b47ca8ab="" className="box">
                           <div data-v-b47ca8ab="" className="item">
                              <div data-v-b47ca8ab="" className="text">Number of runs</div>
                              <div data-v-b47ca8ab="" className="num">0</div>
                           </div>
                           <div data-v-b47ca8ab="" className="item">
                              <div data-v-b47ca8ab="" className="text">Total revenue</div>
                              <div data-v-b47ca8ab="" className="num">0 MCE</div>
                           </div>
                        </div>
                        <div data-v-b47ca8ab="" className="box-title">Run Record</div>
                        <div data-v-b47ca8ab="" className="box-select">
                           <div data-v-b47ca8ab="" className="item" onClick={() => openPopup("GPU 64-core computing power package")}><span data-v-b47ca8ab="" className="overflow1">GPU 64-core computing power package</span><img data-v-b47ca8ab="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                           <div data-v-b47ca8ab="" className="item" onClick={() => openPopup("2025-06")}><span data-v-b47ca8ab="" className="overflow1">2025-06</span><img data-v-b47ca8ab="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                        </div>
                        <div data-v-b47ca8ab="" className="cards-con">
                           <div data-v-a998da64="" data-v-b47ca8ab="" role="feed" className="van-list" aria-busy="false">
                              <div data-v-a9233904="" data-v-b47ca8ab="" className="list"></div>

                              <div className="van-list__finished-text">
                                 <div data-v-43ae51de="" data-v-a998da64="" className="empty">
                                    <div data-v-43ae51de="" className="van-empty custom-image">
                                       <div className="van-empty__image" style={{ width: "2rem", height: "2rem" }}><img src="./static/img1757786439045/empty-BkVz5juj.png" /></div>
                                       <p className="van-empty__description">No data yet</p>

                                    </div>
                                 </div>
                              </div>

                              <div className="van-list__placeholder"></div>
                           </div>
                        </div>
                     </div>
                      )}
                        {activeTab === 'income' && (
                     <div data-v-b81d30cd="" data-v-277f1458="" className="wrap" >
                        <div data-v-b81d30cd="" className="box">
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="text">Profits to be withdrawn</div>
                              <div data-v-b81d30cd="" className="num">0 MCE</div>
                           </div>
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="bt">Extract</div>
                           </div>
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="text text-dotted">Total revenue</div>
                              <div data-v-b81d30cd="" className="num">0 MCE</div>
                           </div>
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="text">Computing power income</div>
                              <div data-v-b81d30cd="" className="num">0 MCE</div>
                           </div>
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="text">Team Benefits</div>
                              <div data-v-b81d30cd="" className="num">0 MCE</div>
                           </div>
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="text">Today's total income</div>
                              <div data-v-b81d30cd="" className="num">0 MCE</div>
                           </div>
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="text">Today's computing power income</div>
                              <div data-v-b81d30cd="" className="num">0 MCE</div>
                           </div>
                           <div data-v-b81d30cd="" className="item">
                              <div data-v-b81d30cd="" className="text">Today's team income</div>
                              <div data-v-b81d30cd="" className="num">0 MCE</div>
                           </div>
                        </div>
                        <div data-v-b81d30cd="" className="box-ex">
                           <div data-v-b81d30cd="" className="item on">Income Record</div>
                           <div data-v-b81d30cd="" className="item">Extract records</div>
                        </div>
                        <div data-v-b81d30cd="" className="box-select">
                           <div data-v-b81d30cd="" className="item"><span data-v-b81d30cd="" className="pla">All income types</span><img data-v-b81d30cd="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                           <div data-v-b81d30cd="" className="item"><span data-v-b81d30cd="" className="pla overflow1">Select time</span><img data-v-b81d30cd="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                        </div>
                        <div data-v-b81d30cd="" className="cards-con">
                           <div data-v-a998da64="" data-v-b81d30cd="" role="feed" className="van-list" aria-busy="false">
                              <div data-v-2de6d9d1="" data-v-b81d30cd="" className="list"></div>

                              <div className="van-list__finished-text">
                                 <div data-v-43ae51de="" data-v-a998da64="" className="empty">
                                    <div data-v-43ae51de="" className="van-empty custom-image">
                                       <div className="van-empty__image" style={{ width: "2rem", height: "2rem" }}><img src="./static/img1757786439045/empty-BkVz5juj.png" /></div>
                                       <p className="van-empty__description">No data yet</p>

                                    </div>
                                 </div>
                              </div>

                              <div className="van-list__placeholder"></div>
                           </div>
                        </div>
                     </div>
                        )}
                  </div>
               </div>
            </div>
            <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{ bottom: "1.3rem", right: "0.2rem" }}></div>
         </div>
 {isOpen && (
          <>
            <div class="van-overlay" role="button" tabindex="0" style={{ zIndex: '2010' }}></div>
            <div role="dialog" tabindex="0" class="van-popup van-popup--bottom" style={{ zIndex: '2010' }}>
              <div class="van-picker">
                <div class="van-picker__toolbar">
                  <button type="button" class="van-picker__cancel van-haptics-feedback" onClick={closePopup}>Cancel</button>
                  <div class="van-picker__title van-ellipsis">Select currency</div>
                  <button type="button" class="van-picker__confirm van-haptics-feedback">Confirm</button>
                </div>
                <div class="van-picker__columns" style={{ height: '264px' }}>
                  <div class="van-picker-column">
                    <ul class="van-picker-column__wrapper" style={{ transform: 'translate3d(0px, 110px, 0px)', transitionDuration: '0ms', transitionProperty: 'none' }}>
                      <li role="button" tabindex="0" class="van-picker-column__item van-picker-column__item--selected" style={{ height: '44px' }}>
                        <div class="van-ellipsis">USDT</div>
                      </li>
                    </ul>
                  </div>
                  <div class="van-picker__mask" style={{ backgroundSize: '100% 110px' }}></div>
                  <div class="van-hairline-unset--top-bottom van-picker__frame" style={{ height: '44px' }}></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
   );

};
export default Commission;















