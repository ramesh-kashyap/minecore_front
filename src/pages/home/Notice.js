import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation, Link } from 'react-router-dom';
import Api from "../../Requests/Api";
import { Toaster, toast } from 'react-hot-toast';
const Notice = () => {
   const navigate = useNavigate(); // Hook for navigation

  const back = () => {
    navigate('/dashboard'); // Navigate to /about route
  };


    return (
        <div data-v-72d7289a="" data-v-53014750="" class="page">
            <div data-v-72d7289a="" class="headers">
                <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                    <div data-v-7401f0fe="" class="left">
                        <div data-v-7401f0fe="" class="back"onClick={() => back('dashboard')} ><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
                    </div>
                    <div data-v-7401f0fe="" class="title overflow1">Platform Announcement</div>
                    <div data-v-7401f0fe="" class="right"></div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
                    <div class="van-pull-refresh__track" style={{transitionDuration: '0ms'}}>
                        <div class="van-pull-refresh__head"></div>
                        <div data-v-53014750="" class="notice">
                            <div data-v-53014750="" class="list">
                                <div data-v-53014750="" class="item">
                                    <img data-v-53014750="" src="./static/img1757786439045/plat-form-B3xC4brN.png" alt=""/> Platform Announcement 
                                </div>
                                <div data-v-53014750="" class="item">
                                    <img data-v-53014750="" src="./static/img1757786439045/site-DjP6BXa4.png" alt=""/> Site message 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem', right: '0.2rem'}}></div>
            </div>
            
        </div>
    );
};

export default Notice;




