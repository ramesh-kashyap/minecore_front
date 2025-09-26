import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
    const navigate = useNavigate(); // Hook for navigation
    const back = (page) => {
        navigate(-1);
    };
    return (
     <div data-v-72d7289a="" data-v-6c4222e7="" class="page">
   <div data-v-72d7289a="" class="headers">
      <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
         <div data-v-7401f0fe="" class="left">
            <div data-v-7401f0fe="" class="back"onClick={back}>
               <img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon" />
            </div>
         </div>
         <div data-v-7401f0Afe="" class="title overflow1"></div>
         <div data-v-7401f0fe="" class="right"></div>
      </div>
   </div>
   <div data-v-72d7289a="" class="page-container">
      <div data-v-72d7289a="" class="scroll" id="pageScroll">
         <div data-v-6c4222e7="" class="wrap">
            <div data-v-6c4222e7="" class="title">about Us</div>
            <div data-v-6c4222e7="" class="content">
               <p></p>
               <p>about Us</p>
               <p> Minecore Technologies Inc. is a blockchain technology company registered in the United States, dedicated to building the world's leading mobile mining platform and decentralized computing power ecosystem.</p>
               <p> We believe that in the future digital economy, every mobile phone can become a computing node, and every user should have the right to participate equally in value creation.</p>
               <p> What we do</p>
               <p> Minecore combines smartphones with blockchain technology, allowing users around the world to participate in the mining process of digital assets by simply completing simple staking and operation operations.</p>
               <p> Users will receive the platform token MCE (Minecore Energy) after running the device every day, which can be exchanged for USDT within the platform. All earnings are open and transparent and can be checked on the chain.</p>
               <p> Features</p>
               <ul>
                  <li>
                     <p> Mobile mining, easy to participate, runs once a day</p>
                  </li>
                  <li>
                     <p> AI-driven profit mechanism, dynamic regulation, stable and controllable</p>
                  </li>
                  <li>
                     <p> All income is issued in MCE and is truly redeemable</p>
                  </li>
                  <li>
                     <p> Connect DeFi, NFT, and blockchain gaming ecosystems to create diverse scenarios</p>
                  </li>
                  <li>
                     <p> Registered company in the United States, safe and compliant, perfect user information protection</p>
                  </li>
               </ul>
               <p> Our Mission</p>
               <p> Break the centralized monopoly and promote the inclusive sharing of computing power so that every user can own their own digital asset rights and income space through mobile devices</p>
               <p></p>
               <p></p>
               <p></p>
               <p></p>
            </div>
         </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem',right: '0.2rem'}}>
   </div>
</div>
</div>
    );
};
export default About;