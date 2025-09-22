import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';

const SubmitRecharge = () => {



    return (
     <div data-v-72d7289a="" data-v-9c0d4d50="" class="page">
   <div data-v-72d7289a="" class="headers">
      <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
         <div data-v-7401f0fe="" class="left">
            <div data-v-7401f0fe="" class="back"><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
         </div>
         <div data-v-7401f0fe="" class="title overflow1">TRXStored Value</div>
         <div data-v-7401f0fe="" class="right">
            <div data-v-9c0d4d50="" class="headerRight"><img data-v-9c0d4d50="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7ZjtccIwDIbfch2AbuBOUEZwJ6DdgE5QNiCdoGxAOwF0AugEsEGyQdiAWhf7qhgnkZMQ/vDcvUe4yIosfykBbnTjzujdaI7hORp9Gy3rjCjAE64HBflQZzAy2uF6HJsMKINjI21/h2YDQZA3blyTO1wGWnAzoyejCf4XYIZiUfyg2D0yibMFir0wRosKX9poG+Fna9vUcmopDmVo3cHXykhVBfjVwiE/nmgI04BNbh9Mx+jMam47ErJP64JUkeLtcu9BewiGzQacBjo1QU+owAOWLfwkiMhkDP6cS9CeOc4XTydm6C84R+L51OgAH9q0wVahyJBCM1tUZFFBtigIjbieus7QAmiqmHTI9ydk+5RjCXn2gPhh41lMIAjOKeRAsmpjA+QJ2FJF/SFoxG0Uu96hfw4VzxITm5FYe83b3GNYaO/kJT5dv6Gctc7wo+1FYN80tzeevWb38hHiydi1EtjvIPdH8LM4azPEv8zJFM0r+RnVc4+G2B/eKbs+uNfOuqFyTjL7X6O8yz9CWBkLUCjvra9AuDbzxQOiDvF5uEJ/rBA4BHJBgCfPUYIeD3aLRkUBQgf53kZcJf/j0hjlzFMnFdqjEFeAiNA4LzTbVMMa59NMoyf8QpNExYcStB0jXKgk6JkE1RUQ7Q7uvZikUBS7dC8fIjgHBZJCXhn5orYaF0ahXCpJRFlMMPCnP4ViGNcID2Nu780lgV3q2wzHzT/iiNsHy4H5A4agZoLzoRbgAAAAAElFTkSuQmCC" alt=""/></div>
         </div>
      </div>
   </div>
   <div data-v-72d7289a="" class="page-container">
      <div data-v-72d7289a="" class="scroll" id="pageScroll">
         <div data-v-9c0d4d50="" class="container deposit">
            <div data-v-9c0d4d50="" class="box-con">
               
               <div data-v-9c0d4d50="" class="qr-con">
                  <div data-v-9c0d4d50="" title="TGcBMVw5zm41qLKWw3WToEW2xrbZAU8p3V">
                     <canvas width="180" height="180" style={{display: "none"}}></canvas>
                     <img alt="Scan me!" src="data:image/png;base64,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" style={{display: "block"}}/>
                  </div>
               </div>
               <div data-v-9c0d4d50="" class="qr-tips">This address only supports recharging TRON's TRX</div>
               <div data-v-9c0d4d50="" class="box-con">
                  <div data-v-9c0d4d50="" class="title">Select currency</div>
                  <div data-v-9c0d4d50="" class="inp-con">
                     <div data-v-9c0d4d50="" class="inp input-con">
                        <div data-v-0bf4a1a6="" data-v-9c0d4d50="" class="com-image img">
                           <div data-v-0bf4a1a6="" class="van-image image">
                              <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/4bd3122ec5f26eee8157b3a93b7ae000.png" class="van-image__img" style={{objectFit: "cover"}}/>
                           </div>
                        </div>
                        <span data-v-9c0d4d50="">TRX</span>
                     </div>
                  </div>
               </div>
               <div data-v-9c0d4d50="" class="box-con">
                  <div data-v-9c0d4d50="" class="title">Select mainnet</div>
                  <div data-v-9c0d4d50="" class="inp-con">
                     <div data-v-9c0d4d50="" class="inp input-con fill">
                        <div data-v-0bf4a1a6="" data-v-9c0d4d50="" class="com-image img">
                           <div data-v-0bf4a1a6="" class="van-image image">
                              <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/9262f4793143dd0450e9db32a1b7c1bf.png" class="van-image__img" style={{objectFit: "cover"}}/>
                           </div>
                        </div>
                        <span data-v-9c0d4d50="">TRON</span>
                        <i data-v-9c0d4d50="" class="van-badge__wrapper van-icon van-icon-play chain play">
                           
                        </i>
                     </div>
                  </div>
               </div>
               <div data-v-9c0d4d50="" class="address">
                  <div data-v-9c0d4d50="" class="subTitle">Stored value address</div>
                  <div data-v-9c0d4d50="" class="inp-con">
                     <div data-v-9c0d4d50="" class="inp">TGcBMVw5zm41qLKWw3WToEW2xrbZAU8p3V <img data-v-9c0d4d50="" class="copy-btn" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZbhDYMgEIWfpgN0BEdgg9INukFXYSQ30G7gKN2g5RJMSURKq8f5417yosAl9+U4kmuQlw3mUO895QKM94vZts0A3MAveyoMfOJLuX4QVfY8L0oBKPkV+2hA1FcthDVXwGLZ7Zfov/N2+E/H6PYo3xDtO7qCKt2+diDeAwqgAAqgAAqgAKUT0Vbd8ZkvDAQAuuCFpK+gr1WB0fuR2JtqAVBylzrQZygOQLLgH8vNWvImfCmAazwfg5N6A3XBXqvrQUFJAAAAAElFTkSuQmCC"/></div>
                  </div>
               </div>
            </div>
            <div data-v-9c0d4d50="" class="tips-1">
               <div data-v-9c0d4d50="" class="tips-1-item"><span data-v-9c0d4d50="">Minimum recharge amount</span><span data-v-9c0d4d50="">8 TRX</span></div>
               <div data-v-9c0d4d50="" class="tips-1-item"><span data-v-9c0d4d50="">Number of block confirmations</span><span data-v-9c0d4d50="">6</span></div>
               <div data-v-9c0d4d50="" class="tips-1-item"><span data-v-9c0d4d50="">handling fee</span><span data-v-9c0d4d50="">0 USDT</span></div>
            </div>
            <div data-v-9c0d4d50="" class="not-usdt">
               <div data-v-9c0d4d50="" class="notices"><span data-v-9c0d4d50="">Note：</span>Amount received = deposit amount * exchange rate - handling fee</div>
               <div data-v-9c0d4d50="" class="icon-down"><img data-v-9c0d4d50="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOlSURBVHgB7Z3ddZswGIbfJB3AG/TbIB2By961IyiXvUo3cDZwOoHdCdwNnEzgdAKcCZzbXlF9NjgcAgaE+CRhPee8dY+dA+KJfogA+QpumekkOqRzm79S/hlVfvZNZ1d6fdV50nnJ37sIWNh3nYVOqpNZCm9rmW97hgmS6Kx19rAn7VwKmUHDNWEOOWlNNVPhY3fgNT6IqxM5RwAo2O3bxqqR3kE6G/grrpo1PGrW9/CruXYNl1nBIdzXLRCeuGoWcADpbBGutGq2EGzSBL8HCtOkEJBImKY8EYmEacsbVSLhMuSNJnFKA0bX8DFbmZiYwqmKaQaf4igA2YXnJwwhhPkXhu3sYdgfrgG4Lrwv2aAnCoDrQvsWhR6kgNPC+pgUNaPyDT4yxwSmw0eA5f3D8UJWI4RY+85lj0otvK4ITBDY9QNhWN7Z05oUgr/ROpIkafx5/qwOyTLjWAtPlGsg93uESBvFzQAHygK/IdKV++I/hUC2qhDpSoJ8MLkuvRHpzqkZFwJj8+1Pwv/EGmjOodKxQK6OhEhfSGfGAr8gYkrCAhNETCEWSIiYcssCPyNiChWDSMSM2ISHEmvgMOgakUGIClwsFiAijAVvez6fQxqRicjlcnmY/EzTNNMHan1ClbfJ22Z4X1LHxQJTKXkFhURbAsvyCoQk7kcXWJVXlmhLYNO2BCRuuQ/cYUSen59r37fZFzZtq2nfFnljga8YkdVqhbu7O0jD++R9j8yOBb5gZKQlCsljDpWPr8ZlElFKZW2Y9IFleB9Sx4N8JmsmuMNWiUMECsvLUPorLvVFoqlAB/JSlHgU3nmjRBOBDuRxlmWBYv1gm8S+Ah3Jy1C5g43bspPbeasS+wh0KC9DzSyWs1t6yxK7CnQsb4kaEocFOknsItCxPM6p+X4qCXzCcfkQJxOsXU98BU+Sm9jp/Gn68AFuf7MhROEMzgaTQJKicg2pOiPNTfgXIk38RofZK66FbDqEGiFd+zqjALgusG9R6MkGcFpgn7KGAYQ4oGRoedjwBs3wgMJP5nzFZfMDLU8ntSE+U+NRHmEBHpUv9ZF/axDiohODIcRlTwZDiAvvDIYQl34aDCEuPmaFKZzi8DE4vclUIdwFGI3XhLENIaxlUjbw9N5whbgIrRUe4JfIfV6moG6oJ7ivkUGKq4MvA64gJ4374wQTpPgyghXsfxnBIxx8GcEV3MIHy4/bJjg+s0d4f365KmJXeuX8zV+f4PDrMP4DWUdUqtKhRJIAAAAASUVORK5CYII=" alt=""/></div>
               <div data-v-9c0d4d50="" class="box-con" style={{marginBottom: "0.32rem"}}>
                  <div data-v-9c0d4d50="" class="title">Assets received</div>
                  <div data-v-9c0d4d50="" class="inp-con">
                     <div data-v-9c0d4d50="" class="inp input-con"><img data-v-9c0d4d50="" class="img" alt="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2c161d6ff1fdd3d4b8b19f51866e3a86.png"/><span data-v-9c0d4d50="">USDT</span></div>
                  </div>
               </div>
               <div data-v-9c0d4d50="" class="notices"><span data-v-9c0d4d50="">Note：</span>When depositing TRX, the system will automatically convert it to USDT according to the exchange rate</div>
            </div>
            <div data-v-9c0d4d50="" class="tips-con">
               <div data-v-9c0d4d50="" class="title">Warm reminder</div>
               <div data-v-9c0d4d50="" class="desc">
                  <p data-v-9c0d4d50="">1. Please do not recharge any non-<span>TRON</span> network's <span>TRX</span> currency to the above address, otherwise the assets will not be retrieved.</p>
                  <p data-v-9c0d4d50="">2. After you recharge to the above address, the entire network node needs to confirm, and the account will be credited only after the network confirms.</p>
                  <p data-v-9c0d4d50="">3. The minimum recharge amount is: <span>8 TRX</span>. Recharge amounts less than the minimum amount will not be posted to the account and cannot be refunded.</p>
                  <p data-v-9c0d4d50="">4. Your recharge address will not change frequently and you can recharge repeatedly. If there are any changes, we will try our best to notify you through website announcements or emails.</p>
                  <p data-v-9c0d4d50="">5. Be sure to confirm the security of your computer and browser to prevent information from being tampered with or leaked.</p>
                  <p data-v-9c0d4d50="">6. Please do not send NFT to this address.</p>
                  
               </div>
            </div>
         </div>
         <div data-v-9c0d4d50="" class="bt-list">
            <div data-v-9c0d4d50="" class="bt copy">Copy address</div>
            <div data-v-9c0d4d50="" class="bt save">Save QR code</div>
         </div>
         
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
   </div>
   
</div>
    );
};

export default SubmitRecharge;










