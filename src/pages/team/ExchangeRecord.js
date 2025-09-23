import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const ExchangeRecord = () => {

    const navigate = useNavigate(); // Hook for navigation


 const back = (page) => {
      navigate(-1);
   };

   const [isOpen, setIsOpen] = useState(false);

   const openPopup = () => setIsOpen(true);
   const closePopup = () => setIsOpen(false);
    return (
        <div data-v-72d7289a="" data-v-ccc2b075="" class="page">
            <div data-v-72d7289a="" class="headers">
                <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                    <div data-v-7401f0fe="" class="left">
                        <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon" /></div>
                    </div>
                    <div data-v-7401f0fe="" class="title overflow1">Exchange Record</div>
                    <div data-v-7401f0fe="" class="right"></div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
                    <div class="van-pull-refresh__track" style={{ transitionDuration: '0ms' }}>
                        <div class="van-pull-refresh__head"></div>
                        <div data-v-ccc2b075="" class="container wrap">
                            <div data-v-ccc2b075="" class="box-select">
                                <div data-v-ccc2b075="" class="item" onClick={openPopup}><span data-v-ccc2b075="" class="pla overflow1">Select currency</span><img data-v-ccc2b075="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                                <div data-v-ccc2b075="" class="item" onClick={openPopup}><span data-v-ccc2b075="" class="pla overflow1">Select time</span><img data-v-ccc2b075="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                            </div>
                            <div data-v-ccc2b075="" class="cards-con">
                                <div data-v-a998da64="" data-v-ccc2b075="" role="feed" class="van-list" aria-busy="false">
                                    <div data-v-2bd09346="" data-v-ccc2b075="" class="list"></div>

                                    <div class="van-list__finished-text">
                                        <div data-v-43ae51de="" data-v-a998da64="" class="empty">
                                            <div data-v-43ae51de="" class="van-empty custom-image">
                                                <div class="van-empty__image" style={{ width: '2rem', height: '2rem' }}><img src="./static/img1757786439045/empty-BkVz5juj.png" /></div>
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

export default ExchangeRecord;
