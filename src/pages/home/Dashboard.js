import React, { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import axios from "axios";
import Api from "../../Requests/Api";
import Collapse from 'react-collapse';


import { SlArrowRight } from "react-icons/sl";
import TradingChart from "./TradingChart";
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';

const symbols = ["dogeusdt", "ethusdt", "dotusdt", "nearusdt"];


const Dashboard = () => {
   const [selectedSymbol, setSelectedSymbol] = useState(null);
   const navigate = useNavigate();
   const [user, setUser] = useState(null);

   const [isOpen, setIsOpen] = useState(true); // Modal visibility state

   const closeModal = () => {
      setIsOpen(false);
   };

   const handleAccept = () => {
      console.log("Account connected with Telegram!");
      setIsOpen(false); // Close the modal after accepting
   };
   const [cryptoData, setCryptoData] = useState({});
   const [binanceSymbols, setBinanceSymbols] = useState([]);
   const [showAll, setShowAll] = useState(false); // toggle state
   const toggleDropdown = () => setIsOpen(!isOpen);


   useEffect(() => {
      const fetchCrypto = async () => {
         try {
            const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
               params: {
                  vs_currency: "usd",
                  order: "market_cap_desc",
                  per_page: 20,
                  page: 1,
                  sparkline: false
               }
            });

            const formatted = {};
            const binanceSyms = [];

            res.data.forEach((coin) => {
               const symbol = `${coin.symbol}usdt`.toUpperCase();
               formatted[symbol] = {
                  id: coin.id,
                  name: coin.name,
                  symbol: symbol,
                  image: coin.image,
                  price: coin.current_price,
                  change: coin.price_change_24h,
                  percent: coin.price_change_percentage_24h,
                  volume: (coin.total_volume / 1_000_000).toFixed(2) + "M"
               };
               binanceSyms.push(symbol.toLowerCase());
            });

            setCryptoData(formatted);
            setBinanceSymbols(binanceSyms);
         } catch (error) {
            console.error("CoinGecko fetch error:", error);
         }
      };

      fetchCrypto();
   }, []);

   useEffect(() => {
      if (binanceSymbols.length === 0) return;

      const ws = new WebSocket(
         `wss://stream.binance.com:9443/stream?streams=${binanceSymbols
            .map((s) => `${s}@ticker`)
            .join("/")}`
      );

      ws.onmessage = (event) => {
         const msg = JSON.parse(event.data);
         const data = msg.data;

         setCryptoData((prev) => {
            const existing = prev[data.s];
            if (!existing) return prev;

            return {
               ...prev,
               [data.s]: {
                  ...existing,
                  price: parseFloat(data.c),
                  change: parseFloat(data.p),
                  percent: parseFloat(data.P),
                  volume: (parseFloat(data.v) / 1_000_000).toFixed(2) + "M"
               }
            };
         });
      };

      return () => ws.close();
   }, [binanceSymbols]);

   const allCoins = Object.values(cryptoData);
   const coinsToShow = showAll ? allCoins : allCoins.slice(0, 5);
   const [loading, setLoading] = useState(true);
   const [availbal, setAvailableBal] = useState();



   const [userDetails, setUserDetails] = useState(null);
   const token = localStorage.getItem('authToken'); // Retrieve token from localStorage

   useEffect(() => {
      fetchUserDetails();
   }, []);

   const fetchUserDetails = async () => {
      try {
         const response = await Api.get('/user');
         setUserDetails(response.data); // This should be your user object
      } catch (error) {
         console.error("Error fetching user details:", error);
      }
   };
   // }, [token]);
   useEffect(() => {
      withfatch();
   }, []);

   const withfatch = async () => {
      try {
         const response = await Api.get("/availbal");
         if (response.data?.AvailBalance !== undefined) {
            setAvailableBal(response.data.AvailBalance);
         }
      } catch (error) {
         console.error("Error:", error);
      }
   };

   const { t } = useTranslation();

   return (

      <div data-v-fee66994="" class="home">
         <div data-v-fee66994="" class="home-con">
            <div data-v-fee66994="" class="container-home-out">
               <div data-v-fee66994="" class="container-home">

                  <div data-v-fee66994="" class="nav-ex">
                     <div data-v-fee66994="" class="nav-item"><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/9cf16e751f4e149163c9327e0b32f943.png" alt="" /><span data-v-fee66994="">P2P</span></div>
                     <div data-v-fee66994="" class="nav-item"><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/df5ccecf89e31849444e314ad767099d.png" alt="" /><span data-v-fee66994="">Level</span></div>
                     <div data-v-fee66994="" class="nav-item"><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/ba8dee81b91822ed9005d636d5ce05bb.png" alt="" /><span data-v-fee66994="">Team</span></div>
                     <div data-v-fee66994="" class="nav-item"><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/faf40caea66a8ae8c30c8b0e2d997e66.png" alt="" /><span data-v-fee66994="">Tutorial</span></div>
                  </div>
                  <div data-v-381cb7c5="" data-v-fee66994="" class="swiper-banner">
                     <div data-v-381cb7c5="" class="swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                        <div class="swiper-wrapper" style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}>
                           <div data-v-381cb7c5="" class="swiper-slide swiper-slide-active" style={{ width: '468px' }}>
                              <div data-v-381cb7c5="" class="item"><img data-v-381cb7c5="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250507/3dba3bfa067d5a4848e7e5feff60f33f.png" alt="" /></div>
                           </div>
                           <div data-v-381cb7c5="" class="swiper-slide swiper-slide-next" style={{ width: '468px' }}>
                              <div data-v-381cb7c5="" class="item"><img data-v-381cb7c5="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250507/c7b9925a8184df15bf8d1a073a549c63.png" alt="" /></div>
                           </div>
                           <div data-v-381cb7c5="" class="swiper-slide" style={{ width: '468px' }}>
                              <div data-v-381cb7c5="" class="item"><img data-v-381cb7c5="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250507/679e62054bb44c623b9e8f9715a67c8c.png" alt="" /></div>
                           </div>
                           <div data-v-381cb7c5="" class="swiper-slide" style={{ width: '468px' }}>
                              <div data-v-381cb7c5="" class="item"><img data-v-381cb7c5="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250806/02af219ae733b4477512639b70ad309a.png" alt="" /></div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div data-v-fee66994="" class="train">

                     <div data-v-fee66994="" class="train-content">
                        <div data-v-fee66994="" class="li"><span data-v-fee66994="">Today's earnings(MCE)</span><span data-v-fee66994="">0</span></div>
                        <div data-v-fee66994="" class="li"><span data-v-fee66994="">Cumulative income(MCE)</span><span data-v-fee66994="">0</span></div>
                     </div>
                  </div>
                  <div data-v-fee66994="" class="datamain">
                     <div data-v-fee66994="" class="com-title">
                        <div data-v-fee66994="" class="left">Data browsing</div>
                     </div>
                     <div data-v-fee66994="" class="boxs">
                        <div data-v-fee66994="" class="pic"><img data-v-fee66994="" src="/img1757786439045/img1-C-wJsAhx.png" alt="" /></div>
                        <div data-v-fee66994="" class="mining">
                           <div data-v-fee66994="" class="m-l">
                              <div data-v-fee66994="" class="logo">
                                 Mining income
                                 <div data-v-fee66994="" class="title">To be collected</div>
                              </div>
                              <div data-v-fee66994="" class="price blue">--</div>
                              <div data-v-fee66994="" class="price">0 <span data-v-fee66994="">USDT</span></div>
                           </div>
                           <div data-v-fee66994="" class="m-l m-l-1">
                              <div data-v-fee66994="" class="logo">
                                 Computing power income
                                 <div data-v-fee66994="" class="title">To be collected</div>
                              </div>
                              <div data-v-fee66994="" class="price">0 <span data-v-fee66994="">MCE</span></div>
                           </div>
                        </div>
                        <button data-v-fee66994="" class="btn">Claim All</button>
                     </div>
                  </div>
                  <div data-v-00658257="" data-v-fee66994="" class="close-chart-card">
                     <div data-v-00658257="" class="header">
                        <img data-v-00658257="" class="mce-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgB1VjblYIwEJ19fOwnJVCCdqB/2wVYgXagVuBagVKBdqBbAXQAHeDvfrFz2Q0nRoQQQOI953ogJOEyM5mMIbqGw1wyY2b2YIbMDdOlO/CY6QDCVMZMXxXnWyBMpSfEuTSMS+sIbzpv/LNifpJ9+GD+4ALBaZv1inh8+b+wFq91HRzHocViQV1jNBpp960082QyyYAwDDPXdVu7jT8422w2+ZyYW2OMnkAgjuNWIjEWHyqgI7DWxTL4BXQ6nRq5R4DFGI/VtqAMjktty83n89I5OnexiuVyWfsCEW+DCAQgAIFPNfH2MIEcR1mapldt6grnOMsXlAzcIyx6FYiXVAmASMSb+gHy6pfH9SZQuFAVWQZYXA6BpgIbpRkZSZLQeDym8/l8t08QBDSdTulyuZApjAUCeDEEbLfbm2fr9Zp836cuYORilavVquhXlSObuvidDIFdBbvDfr/P71kgRVGUW7XK7U3RyMVyLMF9u92OOA8WbcfjsVNxgLFAAZRifZRjAq0WiQBqxr7QicA+8fwCsTKRlLsAakGsfgBz6sxbK1AkY5FCTOF5Xl6wAljp2IV0PzwzoZyYcV3VF3Wjbl/qKlHrAnkSaQjWn81mea5sCiMLyltgmVVQwRwOh/x5y3+EZDqwqAt5V7l5hjaAt8LSivshAoWlytphsTLhTfkURx8J2YsIAgOyF9/4wU5vw9Gvypik82rfQoG+Ys28IbZAWFomTsBlftEwp64x/R1HXxWXv/iJJP8j9BNeAAAAAElFTkSuQmCC" alt="coin" /><span data-v-00658257="" class="title">MCE</span>
                        <div data-v-00658257="" class="kline-icon">
                           <img data-v-00658257="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgB7ZfhDYIwEIVfjP91hDqBbiBOoBuIE+gG6iQ6ghuIE6gT2BHcQNv0iE0phULBhPAlL8V6hdfSuwagpxgmNIY/Yxpbi5XQR+gFf140NnIFDeAmnTmDP8xoKxlonN6AzcAWvw100vo/pCsC7O48Yu1BLkmDRamZxsauoKHxe00tFzpa4mdQK8Sg0uti/C/7loY5ec+50E0ooXvnckV26U3yZrZHuZVj+qAhwiBX5kDXb6GHJSaih+9IwQ2kTMiEyRnqdUz1zibS8O0T3BeiThrIK1AjW2eoLODa9R3ZYiNNzSyxGeoUogMCFKI0hSLYa/jUEqsb4FAzHWnjE+p/QtUCZ5pGKH8YFVHqMDI3YSK0gfs9yZgFWiLGbya+VFqB1ukNFBngRusDp9brdLTB8MdPs+7zBeQ5ZtqVaqtAAAAAAElFTkSuQmCC" alt="" />
                           <i data-v-00658257="" class="van-badge__wrapper van-icon van-icon-arrow arrow">

                           </i>
                        </div>
                     </div>
                     <div data-v-00658257="" class="price">$ 0.131906</div>
                     <div data-v-00658257="" class="chart" _echarts_instance_="ec_1758370788606" style={{ userSelect: "none", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", position: "relative" }}>
                        <div style={{ position: "relative", width: "443px", height: "100px", padding: "0px", margin: "0px", borderWidth: "0px", cursor: "default" }}
                        >
                           <canvas data-zr-dom-id="zr_0" width="664" height="150" style={{ position: 'absolute', left: '0px', top: '0px', width: '443px', height: '100px', userSelect: 'none', padding: '0px', margin: '0px', borderWidth: '0px' }}></canvas>
                        </div>
                        <div class="" style={{
                           position: "absolute",
                           display: "block",
                           borderStyle: "solid",
                           whiteSpace: "nowrap",
                           zIndex: 9999999,
                           boxShadow: "rgba(0, 0, 0, 0.2) 1px 2px 10px",
                           transition:
                              "opacity 0.2s cubic-bezier(0.23, 1, 0.32, 1), visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
                           backgroundColor: "rgb(255, 255, 255)",
                           borderWidth: "1px",
                           borderRadius: "4px",
                           color: "rgb(102, 102, 102)",
                           font: '14px / 21px "Microsoft YaHei"',
                           padding: "10px",
                           top: "0px",
                           left: "0px",
                           transform: "translate3d(91px, 34px, 0px)",
                           borderColor: "rgb(255, 255, 255)",
                           pointerEvents: "none",
                           visibility: "hidden",
                           opacity: 0
                        }}>09-20 07:03<br />Close: 0.133888</div>
                     </div>
                  </div>
                  <ul data-v-fee66994="" class="list10">
                     <li data-v-fee66994="">
                        <div data-v-fee66994="" class="title">Computing power income</div>
                        <div data-v-fee66994="" class="val"><span data-v-fee66994="">0</span> MCE </div>
                     </li>
                     <li data-v-fee66994="">
                        <div data-v-fee66994="" class="title">Task benefits</div>
                        <div data-v-fee66994="" class="val"><span data-v-fee66994="">0</span> USDT </div>
                     </li>
                     <li data-v-fee66994="">
                        <div data-v-fee66994="" class="title">Team Benefits</div>
                        <div data-v-fee66994="" class="val"><span data-v-fee66994="">0</span> MCE </div>
                     </li>
                     <li data-v-fee66994="">
                        <div data-v-fee66994="" class="title">Direct push</div>
                        <div data-v-fee66994="" class="val"><span data-v-fee66994="">0</span> person</div>
                     </li>
                     <li data-v-fee66994="">
                        <div data-v-fee66994="" class="title">2+3 generations</div>
                        <div data-v-fee66994="" class="val"><span data-v-fee66994="">0</span> person</div>
                     </li>
                     <li data-v-fee66994="">
                        <div data-v-fee66994="" class="title">Team size</div>
                        <div data-v-fee66994="" class="val"><span data-v-fee66994="">0</span> person</div>
                     </li>
                  </ul>
                  <div data-v-fee66994="" class="luckyBox">
                     <img data-v-fee66994="" src="/img1757786439045/bg-lucky-BA2hLIqi.png" alt="" />
                     <div data-v-fee66994="" class="abs">
                        <div data-v-fee66994="" class="title">The wheel of luck</div>
                        <div data-v-fee66994="" class="val">Get cash, luxury prizes</div>
                        <div data-v-fee66994=""><button data-v-fee66994="">Lottery</button></div>
                     </div>
                  </div>
                  <div data-v-fee66994="" class="step">
                     <div data-v-fee66994="" class="step-title">Mining Process</div>
                     <div data-v-fee66994="" class="step-wrap">
                        <div data-v-fee66994="" class="step-top step-line">
                           <div data-v-fee66994="" class="step-icon">
                              <div data-v-fee66994="" class="van-circle">
                                 <svg viewBox="0 0 1040 1040">

                                    <path class="van-circle__layer" d="M 520 520 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" style={{
                                       fill: "none",
                                       stroke: "rgb(144, 144, 144)",
                                       strokeWidth: "40px"
                                    }}></path>
                                    <path d="M 520 520 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" class="van-circle__hover" stroke="#30BD64" style={{ stroke: 'rgb(48, 189, 100)', strokeWidth: '41px', strokeDasharray: '0px 3140px' }}></path>
                                 </svg>
                                 <div class="van-circle__text">0/5</div>
                              </div>
                           </div>
                           <div data-v-fee66994="" class="step-box">
                              <div data-v-fee66994="" class="step-til">Your progress</div>
                              <div data-v-fee66994="" class="step-tips">Complete the following tasks to start your journey to wealth</div>
                           </div>
                        </div>
                        <ul data-v-fee66994="" class="ul-step">
                           <li data-v-fee66994="">
                              <div data-v-fee66994="" class="step-level"><img data-v-fee66994="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVLSURBVHgB7Z1LTuNYFIZPTMgEkMIgCYzaYcKwKDFhRLvEAppaQXevAFhBNSsAVlD0ChpW0B4yqzQwgAncGiAUHiISCoPw6v9Y15Ed4sR2nNiO7ycZ24kh4uc87vOQoxh5eHgotlotQ9M0/f39/RNe0uVBjrNFLpdr4BmBywYOgeuf+D4zn8/XZmdnGxQTORohtmAQ41fcrlOHSAMgcJgQ9bBQKJijFHQkAt7e3ho4beAw8EsWafjss5iVSuWAhszQBGRre3l5YdE2RyRaNwSO7cnJSbZKQUMgcgETIlwnAmFjv1QqbVPERCrgzc3NHzh9o+hiW9QIHNvlcnmfIiISAWF1+vPz83dcGpQC4BkHSDZbUbi1RgNyf3+/AZf9QSkRj4E7r+MP/kN6zGA/i0IiY903/DU3KcVAzF3Exi0KSSgBpcv+g8slGg9qyNRfw7h0YAGleP9SchNFWARE/BJUxEACjrF4NoFF9C1gBsSzCSSiLwEzJJ6NbxF9NWNkwtApO1hJklsa/R7sKyAGAnZofLJtEJa4mdbvoZ4uLBua3ynDvL29bc3Nze16ve8pIMc97mEkaEAgLhqIh5+94qGnC0O8HSWeRVH287vSVUB2XYi3Tgobw6vf3NWF8fAlZSvr+kFIV3ZNF3ywQGTdJI/nxYmO+ZwPAycuC8xggzkonFCqTit0WSDEM0iJ14tipxW6LFDFPl80MCUwa9+0LfDu7i7KedpxpiinaS3aAqLF/RspfAGtNuxry4W504z490AJ5OLiwnW/sLBACaCdTPJ89/r6alDCqNfrdHR0RM1m0/V6QgQsSs0OLAGT5L4s3OnpqXVOMujqGmQLSAmYkkQIoePjYzo/P6c0oGkaG91mXsY/nWLk7OyMTk5OLBFThM7aaTDF2AdLr66u0iaeBcdBDfHPoIRRqVRobW3NOicZGJ/OMVCnhDA1NUUrKytt4TiZJBnEwU/5XC73C8UM2lS0vLxMi4uLlDJ0FrCIwVOKk9XVVUopugbxdFKEhvvCat4jPPrA6wOzjhJwQJSAA8ICClKEpaEscDCEssDBaHA78CcpwiLQndNqpAiFtWMUXTlBilDwdlttYmLCJEUoeK+yJpcpCFIERbB2djPmkBRBMfmLNanEvuycLE4KPMzVarUoiUAzy+gsATkOQkB25USNzPBAKx9JxM4dlguzLyMbm6Twy769xM3ZldsjhS9s92U6l7fx+hg1wNobUS6Xq/aNazABLWtlhf1x1V1wCVgoFHhDSWxFbFKAwGS66XzBJSAHRmWF3kCbv+fn54XztQ/bHORaGa6BoJPCiSv22XwYUJXpOfL6KmNAV00898ohI/N2B4MUVpmUSqXytdt7nkP6CJZ/kkooVtU43rHp9b6ngBws8Y2Zd2VY31Zn4nDSc1JJ7pPNbFaGAe31KxPVt2aCzMocD7O2a70G8T73e6jvtCZnZcRDDqCCsoOQv3NffJc9ub6+1jGEk4myJxDvS6+45yRQ4Z0MiBhIPCZw6acxFjGweEzgpR38AfxBuByn+eRaGPGYUGtj+INkhkp9E4ebKs1mM5R4zMAVLGUxBi7Ok6qBWO5hwOq2e9WE8fVzKAI4LmKSeSdFlT5M7qqGtTonkQhoo4rQRkS9Xv8LLvI7JURIOSCw9/T0tFutViMdIBmKgIxs7hgUo0UOU7j2Z9AI4HoMiDnr0iqHihTNxNTjXqlUMmnIjERAm8vLy+LMzIwhxeR/SKBTNPDQ2yESmfn4+GgOy9q6MVIBO2FBp6enl3jHqNyzp+Mo4lrvUvhMOM5c2v0/Xts4asE6+R84HIMAxVez5QAAAABJRU5ErkJggg==" alt="" /></div>
                           </li>
                           <li data-v-fee66994="" class="x"></li>
                           <li data-v-fee66994="">
                              <div data-v-fee66994="" class="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                           </li>
                           <li data-v-fee66994="" class="x"></li>
                           <li data-v-fee66994="">
                              <div data-v-fee66994="" class="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                           </li>
                           <li data-v-fee66994="" class="x"></li>
                           <li data-v-fee66994="">
                              <div data-v-fee66994="" class="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                           </li>
                           <li data-v-fee66994="" class="x"></li>
                           <li data-v-fee66994="">
                              <div data-v-fee66994="" class="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                           </li>
                        </ul>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

};
export default Dashboard;















