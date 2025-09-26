import React, { useState, useEffect } from 'react';
import Api from '../../Requests/Api';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SubmitRecharge = () => {
   const navigate = useNavigate(); // Hook for navigation
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();
   const currency = location.state?.currency;
   const openPopup = () => setIsOpen(true);
   const closePopup = () => setIsOpen(false);
   const [loading, setLoading] = useState(false);

   const [wallets, setWallets] = useState();
   const [selectedNetwork, setSelectedNetwork] = useState(); // default

  const networkImages = {
    trc20: 'https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/9262f4793143dd0450e9db32a1b7c1bf.png',
    bep20: 'https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250530/7ce124375011a78279891b7f518808dc.png',

  };

   useEffect(() => {

      fetchWallets("trc20");
   }, []);

   const back = (page) => {
      navigate(-1);
   };
    const drecord = (page) => {
      navigate('/deposit-record');
   };

   const fetchWallets = async (type) => {
      try {
         const res = await Api.get(`/fetchwallet?type=${type}`);
          console.log('Fetched wallets:', res.data.data);
         setSelectedNetwork(type);
         setWallets(res.data.data.address_in);
         closePopup();   // expects { trc20: "...", bep20: "..." }
      } catch (error) {
         console.error('Failed to fetch wallet addresses:', error);
      }
   };


   const handleCopy = () => {
      navigator.clipboard.writeText(wallets);
      toast.success("Copied to clipboard!");
   };

   return (
      <div data-v-72d7289a="" data-v-9c0d4d50="" class="page">
         <div data-v-72d7289a="" class="headers">
            <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
               <div data-v-7401f0fe="" class="left">
                  <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon" /></div>
               </div>
               <div data-v-7401f0fe="" class="title overflow1">TRXStored Value</div>
               <div data-v-7401f0fe="" class="right" onClick={drecord}>
                  <div data-v-9c0d4d50="" class="headerRight" ><img data-v-9c0d4d50="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7ZjtccIwDIbfch2AbuBOUEZwJ6DdgE5QNiCdoGxAOwF0AugEsEGyQdiAWhf7qhgnkZMQ/vDcvUe4yIosfykBbnTjzujdaI7hORp9Gy3rjCjAE64HBflQZzAy2uF6HJsMKINjI21/h2YDQZA3blyTO1wGWnAzoyejCf4XYIZiUfyg2D0yibMFir0wRosKX9poG+Fna9vUcmopDmVo3cHXykhVBfjVwiE/nmgI04BNbh9Mx+jMam47ErJP64JUkeLtcu9BewiGzQacBjo1QU+owAOWLfwkiMhkDP6cS9CeOc4XTydm6C84R+L51OgAH9q0wVahyJBCM1tUZFFBtigIjbieus7QAmiqmHTI9ydk+5RjCXn2gPhh41lMIAjOKeRAsmpjA+QJ2FJF/SFoxG0Uu96hfw4VzxITm5FYe83b3GNYaO/kJT5dv6Gctc7wo+1FYN80tzeevWb38hHiydi1EtjvIPdH8LM4azPEv8zJFM0r+RnVc4+G2B/eKbs+uNfOuqFyTjL7X6O8yz9CWBkLUCjvra9AuDbzxQOiDvF5uEJ/rBA4BHJBgCfPUYIeD3aLRkUBQgf53kZcJf/j0hjlzFMnFdqjEFeAiNA4LzTbVMMa59NMoyf8QpNExYcStB0jXKgk6JkE1RUQ7Q7uvZikUBS7dC8fIjgHBZJCXhn5orYaF0ahXCpJRFlMMPCnP4ViGNcID2Nu780lgV3q2wzHzT/iiNsHy4H5A4agZoLzoRbgAAAAAElFTkSuQmCC" alt="" /></div>
               </div>
            </div>
         </div>
         <div data-v-72d7289a="" class="page-container">
            <div data-v-72d7289a="" class="scroll" id="pageScroll">
               <div data-v-9c0d4d50="" class="container deposit">
                  <div data-v-9c0d4d50="" class="box-con">

                     <div data-v-9c0d4d50="" class="qr-con">
                        <div data-v-9c0d4d50="" title={wallets}>
                           {/* <canvas width="180" height="180" style={{ display: "none" }}></canvas> */}
                           {/* <img alt="Scan me!" src={wallets} style={{ display: "block" }} /> */}
                           {loading && <p>Loading...</p>}
                           <img 
                              src={`https://api.qrserver.com/v1/create-qr-code/?data=${wallets}`}
                              alt="QR Code"
                              onLoad={() => setLoading(false)}
                              onError={() => setLoading(true)}
                              style={{ display: loading ? 'none' : 'block' }} 
                           />
                        </div>
                     </div>
                     <div data-v-9c0d4d50="" class="qr-tips">This address only supports recharging {selectedNetwork}</div>
                     <div data-v-9c0d4d50="" class="box-con">
                        <div data-v-9c0d4d50="" class="title">Select currency</div>
                        <div data-v-9c0d4d50="" class="inp-con">
                           <div data-v-9c0d4d50="" class="inp input-con">
                              <div data-v-0bf4a1a6="" data-v-9c0d4d50="" class="com-image img">
                                 <div data-v-0bf4a1a6="" class="van-image image">
                                    <img src={currency.img} class="van-image__img" style={{ objectFit: "cover" }} />
                                 </div>
                              </div>
                              <span data-v-9c0d4d50="">{currency.name}</span>
                           </div>
                        </div>
                     </div>
                     <div data-v-9c0d4d50="" class="box-con">
                        <div data-v-9c0d4d50="" class="title">Select mainnet</div>
                        <div data-v-9c0d4d50="" class="inp-con">
                           <div data-v-9c0d4d50="" class="inp input-con fill" onClick={openPopup}>
                              <div data-v-0bf4a1a6="" data-v-9c0d4d50="" class="com-image img">
                                 <div data-v-0bf4a1a6="" class="van-image image">
                                    <img src={networkImages[selectedNetwork]} class="van-image__img" style={{ objectFit: "cover" }} />
                                 </div>
                              </div>
                              <span data-v-9c0d4d50="">{selectedNetwork}</span>
                              <i data-v-9c0d4d50="" class="van-badge__wrapper van-icon van-icon-play chain play">

                              </i>
                           </div>
                        </div>
                     </div>
                     <div data-v-9c0d4d50="" class="address">
                        <div data-v-9c0d4d50="" class="subTitle">Stored value address</div>
                        <div data-v-9c0d4d50="" class="inp-con">
                           <div data-v-9c0d4d50="" class="inp">
                              <span data-v-9c0d4d50="">{wallets}</span>

                              <img data-v-9c0d4d50="" class="copy-btn" onClick={handleCopy} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgB7ZbhDYMgEIWfpgN0BEdgg9INukFXYSQ30G7gKN2g5RJMSURKq8f5417yosAl9+U4kmuQlw3mUO895QKM94vZts0A3MAveyoMfOJLuX4QVfY8L0oBKPkV+2hA1FcthDVXwGLZ7Zfov/N2+E/H6PYo3xDtO7qCKt2+diDeAwqgAAqgAAqgAKUT0Vbd8ZkvDAQAuuCFpK+gr1WB0fuR2JtqAVBylzrQZygOQLLgH8vNWvImfCmAazwfg5N6A3XBXqvrQUFJAAAAAElFTkSuQmCC" /></div>
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
                     <div data-v-9c0d4d50="" class="icon-down"><img data-v-9c0d4d50="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOlSURBVHgB7Z3ddZswGIbfJB3AG/TbIB2By961IyiXvUo3cDZwOoHdCdwNnEzgdAKcCZzbXlF9NjgcAgaE+CRhPee8dY+dA+KJfogA+QpumekkOqRzm79S/hlVfvZNZ1d6fdV50nnJ37sIWNh3nYVOqpNZCm9rmW97hgmS6Kx19rAn7VwKmUHDNWEOOWlNNVPhY3fgNT6IqxM5RwAo2O3bxqqR3kE6G/grrpo1PGrW9/CruXYNl1nBIdzXLRCeuGoWcADpbBGutGq2EGzSBL8HCtOkEJBImKY8EYmEacsbVSLhMuSNJnFKA0bX8DFbmZiYwqmKaQaf4igA2YXnJwwhhPkXhu3sYdgfrgG4Lrwv2aAnCoDrQvsWhR6kgNPC+pgUNaPyDT4yxwSmw0eA5f3D8UJWI4RY+85lj0otvK4ITBDY9QNhWN7Z05oUgr/ROpIkafx5/qwOyTLjWAtPlGsg93uESBvFzQAHygK/IdKV++I/hUC2qhDpSoJ8MLkuvRHpzqkZFwJj8+1Pwv/EGmjOodKxQK6OhEhfSGfGAr8gYkrCAhNETCEWSIiYcssCPyNiChWDSMSM2ISHEmvgMOgakUGIClwsFiAijAVvez6fQxqRicjlcnmY/EzTNNMHan1ClbfJ22Z4X1LHxQJTKXkFhURbAsvyCoQk7kcXWJVXlmhLYNO2BCRuuQ/cYUSen59r37fZFzZtq2nfFnljga8YkdVqhbu7O0jD++R9j8yOBb5gZKQlCsljDpWPr8ZlElFKZW2Y9IFleB9Sx4N8JmsmuMNWiUMECsvLUPorLvVFoqlAB/JSlHgU3nmjRBOBDuRxlmWBYv1gm8S+Ah3Jy1C5g43bspPbeasS+wh0KC9DzSyWs1t6yxK7CnQsb4kaEocFOknsItCxPM6p+X4qCXzCcfkQJxOsXU98BU+Sm9jp/Gn68AFuf7MhROEMzgaTQJKicg2pOiPNTfgXIk38RofZK66FbDqEGiFd+zqjALgusG9R6MkGcFpgn7KGAYQ4oGRoedjwBs3wgMJP5nzFZfMDLU8ntSE+U+NRHmEBHpUv9ZF/axDiohODIcRlTwZDiAvvDIYQl34aDCEuPmaFKZzi8DE4vclUIdwFGI3XhLENIaxlUjbw9N5whbgIrRUe4JfIfV6moG6oJ7ivkUGKq4MvA64gJ4374wQTpPgyghXsfxnBIxx8GcEV3MIHy4/bJjg+s0d4f365KmJXeuX8zV+f4PDrMP4DWUdUqtKhRJIAAAAASUVORK5CYII=" alt="" /></div>
                     <div data-v-9c0d4d50="" class="box-con" style={{ marginBottom: "0.32rem" }}>
                        <div data-v-9c0d4d50="" class="title">Assets received</div>
                        <div data-v-9c0d4d50="" class="inp-con">
                           <div data-v-9c0d4d50="" class="inp input-con"><img data-v-9c0d4d50="" class="img" alt="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2c161d6ff1fdd3d4b8b19f51866e3a86.png" /><span data-v-9c0d4d50="">USDT</span></div>
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
                  <div data-v-9c0d4d50="" class="bt copy" onClick={handleCopy}>Copy address</div>
                  <div data-v-9c0d4d50="" class="bt save">Save QR code</div>
               </div>

            </div>
            {isOpen && (
               <>
                  <div class="van-overlay" role="button" tabindex="0" data-v-eb72700e="" style={{ zIndex: '2004' }}> </div>
                  <div role="dialog" tabindex="0" class="van-popup van-popup--round van-popup--bottom popup" data-v-eb72700e="" style={{ zIndex: '2004' }}>
                     <div data-v-eb72700e="" class="popup-head">Select mainnet</div>
                     <div data-v-eb72700e="" class="popup-con">
                        <div data-v-eb72700e="" class="chains">

                           <div data-v-eb72700e="" onClick={() => fetchWallets("trc20")} className={`item ${selectedNetwork === "trc20" ? "on" : ""}`}>
                              <div data-v-eb72700e="" class="item-left">
                                 <img data-v-eb72700e="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/9262f4793143dd0450e9db32a1b7c1bf.png" alt="" /></div>
                              <div data-v-eb72700e="" class="item-right">
                                 <h2 data-v-eb72700e="">TRON</h2>
                                 <div data-v-eb72700e="" class="text">
                                    <p data-v-eb72700e="">Estimated arrival time ≈ 1 minutes</p>
                                    <p data-v-eb72700e="">Minimum deposit≥ 2 USDT</p>
                                 </div>
                              </div>
                              <img data-v-eb72700e="" class="icon-radio" style={{ display: selectedNetwork === "trc20" ? "block" : "none" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgB7ZjdcYQgFEZvOtgS6CAlJCXQgZRgB9qJ2wHbgUkFTiogHSQdEO5EJoZF5OeiPuw3c2Z8UDhzYUAAeKQsT5AfZuCGZ8Or4TKD+TZ8zrwbbvNz9aBAaxgNOpHJIKBisFoK0sVcFLUoVk0SiLkM8DclssOApmqhajLIDKssVyR52UluKZk03MOOchYJkREHyFl4jKA6UBD7vpy1epY2JDidQHBck2O1O+ecaymlFkJsvct8gm1NuaZp9DKQMcw1tjOvnFJq65vBJ1hl/vnkGGNb3ymf4FdMhzh/IuZQiZyeXe4SJWfTdV0tOUuZYEiSQM4rGDXEfd8HJYnkvEOsYhtYkySSQyaf4DWlEVcSF2AiOeTmE0xeqF1JIjkNKws1y2nMlSSQ0xD4wx5LJInkJggkez8mELOIkODeZxEXBRHhBwoKiEy1P5sAAyTk9MdODIMTH9z3kiySs8HSXyvISSC4PFpGAN31W9QBvUQ053gwwu9GkFQ1iivgl/mZwf8rYOTN8AE7XgE/4uYHNJrN5TmYoCAAAAAASUVORK5CYII=" alt="" />

                           </div>
                           <div data-v-eb72700e="" className={`item ${selectedNetwork === "bep20" ? "on" : ""}`} onClick={() => fetchWallets("bep20")}>
                              <div data-v-eb72700e="" class="item-left"><img data-v-eb72700e="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250530/7ce124375011a78279891b7f518808dc.png" alt="" /></div>
                              <div data-v-eb72700e="" class="item-right">
                                 <h2 data-v-eb72700e="">Binance Smart Chain</h2>
                                 <div data-v-eb72700e="" class="text">
                                    <p data-v-eb72700e="">Estimated arrival time ≈ 1 minutes</p>
                                    <p data-v-eb72700e="">Minimum deposit≥ 2 USDT</p>
                                 </div>
                              </div>
                              <img data-v-eb72700e="" class="icon-radio" style={{ display: selectedNetwork === "bep20" ? "block" : "none" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgB7ZjdcYQgFEZvOtgS6CAlJCXQgZRgB9qJ2wHbgUkFTiogHSQdEO5EJoZF5OeiPuw3c2Z8UDhzYUAAeKQsT5AfZuCGZ8Or4TKD+TZ8zrwbbvNz9aBAaxgNOpHJIKBisFoK0sVcFLUoVk0SiLkM8DclssOApmqhajLIDKssVyR52UluKZk03MOOchYJkREHyFl4jKA6UBD7vpy1epY2JDidQHBck2O1O+ecaymlFkJsvct8gm1NuaZp9DKQMcw1tjOvnFJq65vBJ1hl/vnkGGNb3ymf4FdMhzh/IuZQiZyeXe4SJWfTdV0tOUuZYEiSQM4rGDXEfd8HJYnkvEOsYhtYkySSQyaf4DWlEVcSF2AiOeTmE0xeqF1JIjkNKws1y2nMlSSQ0xD4wx5LJInkJggkez8mELOIkODeZxEXBRHhBwoKiEy1P5sAAyTk9MdODIMTH9z3kiySs8HSXyvISSC4PFpGAN31W9QBvUQ053gwwu9GkFQ1iivgl/mZwf8rYOTN8AE7XgE/4uYHNJrN5TmYoCAAAAAASUVORK5CYII=" alt="" />

                           </div>
                        </div>
                        <div data-v-eb72700e="" class="tips">
                           <img data-v-eb72700e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBzZeBcYMwDEW/cx2AbqANSiegI3SEbNJ2gmQDOkJX6ARtJ4ANwgZUSk1KfOSwhInz7n4OuLP1I2xZOMRTsJ5ZFatkkX8mdKyW9c36ZH34Z0kg1o51YPUK1X6smcIH7hdqh/9MRUOsJkHwQQ0U2SgTBx+bKOeC00rBL2bCja7lPX0hPlVvwf0L4mhZj5jYJdoFF6JdmGeQcoKlBnoEma4zGNgPAwvD4BQGpLAVG/yV1xwcS7sYqJCPSgzMFocVKaUOHN8F9LjgvoeezhkHpjKADTIjBpI1DgY6MdAiH+0d//zAthNesRxp4bCFrRKm0FZWsmzBBvqtaD2Ox9wPF3tc/yyox4MpgwEKJ9BmYYmB01F8Uy0ZkKEpnSJrW75WJqL++RSW7Tm14CzH/QlivSuDHnxgmpvcIZ7h8/yJ9YBEn+e/6GGsfMxAvmcAAAAASUVORK5CYII=" alt="" />
                           <div data-v-eb72700e="" class="con">Only the currencies of the above networks are supported. Please check carefully. If you deposit through other networks, your assets will be lost.</div>
                        </div>
                     </div>
                     <i class="van-badge__wrapper van-icon van-icon-cross van-popup__close-icon van-popup__close-icon--top-right van-haptics-feedback" onClick={closePopup} role="button" tabindex="0">

                     </i>
                  </div>
               </>
            )}
            <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{ bottom: "1.3rem", right: "0.2rem" }}></div>
         </div>

      </div>
   );
};

export default SubmitRecharge;










