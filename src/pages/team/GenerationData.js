import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Api from "../../Requests/Api";
const GenerationData = () => {

    const navigate = useNavigate();
      const back = () => {
      navigate(-1); // Navigate to /about route
    };


  return (
    <div data-v-72d7289a="" data-v-191ad456="" className="page">
   <div data-v-72d7289a="" className="headers">
      <div data-v-7401f0fe="" data-v-72d7289a="" className="inside-header">
         <div data-v-7401f0fe="" className="left">
            <div data-v-7401f0fe="" className="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" className="icon"/></div>
         </div>
         <div data-v-7401f0fe="" className="title overflow1">Generation team data</div>
         <div data-v-7401f0fe="" className="right"></div>
      </div>
   </div>
   <div data-v-72d7289a="" className="page-container">
      <div data-v-72d7289a="" className="van-pull-refresh scroll" id="pageScroll">
         <div className="van-pull-refresh__track" style={{transitionDuration: "0ms"}}>
            <div className="van-pull-refresh__head"></div>
            <div data-v-191ad456="" className="gen">
               <div data-v-191ad456="" className="box box-top">
                  <div data-v-191ad456="" className="li2"><span data-v-191ad456="">Team size</span><span data-v-191ad456="">0/0</span></div>
                  <div data-v-191ad456="" className="li2"><span data-v-191ad456="">Accumulated recharge</span><span data-v-191ad456="" className="blue">0</span></div>
                  <div data-v-191ad456="" className="li2"><span data-v-191ad456="">Cumulative income</span><span data-v-191ad456="">0</span></div>
                  <div data-v-191ad456="" className="li2"><span data-v-191ad456="">Cumulative withdrawals</span><span data-v-191ad456="">0</span></div>
                  <div data-v-191ad456="" className="li2"><span data-v-191ad456="">Team Performance</span><span data-v-191ad456="">0</span></div>
               </div>
               <div data-v-191ad456="" className="box box-flex">
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V0 level</span><span data-v-191ad456="">0 person</span></div>
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V1 level</span><span data-v-191ad456="">0 person</span></div>
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V2 level</span><span data-v-191ad456="">0 person</span></div>
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V3 level</span><span data-v-191ad456="">0 person</span></div>
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V4 level</span><span data-v-191ad456="">0 person</span></div>
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V5 level</span><span data-v-191ad456="">0 person</span></div>
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V6 level</span><span data-v-191ad456="">0 person</span></div>
                  <div data-v-191ad456="" className="item"><span data-v-191ad456="">V7 level</span><span data-v-191ad456="">0 person</span></div>
               </div>
               <div data-v-191ad456="" className="title">Today's data</div>
               <div data-v-191ad456="" className="box">
                  <div data-v-191ad456="" className="li"><span data-v-191ad456="">New team members added today</span><span data-v-191ad456="">0</span></div>
                  <div data-v-191ad456="" className="li"><span data-v-191ad456="">Team recharge today</span><span data-v-191ad456="">0</span></div>
                  <div data-v-191ad456="" className="li"><span data-v-191ad456="">Today's team income</span><span data-v-191ad456="">0</span></div>
                  <div data-v-191ad456="" className="li"><span data-v-191ad456="">Team withdrawal today</span><span data-v-191ad456="">0</span></div>
                  <div data-v-191ad456="" className="li"><span data-v-191ad456="">New team performance today</span><span data-v-191ad456="">0</span></div>
               </div>
            </div>
         </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
   </div>
  
</div>
  );
};

export default GenerationData;