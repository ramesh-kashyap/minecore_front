import React, { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   Tooltip,
   CartesianGrid,
   ResponsiveContainer,
} from "recharts";

const data = [
   { time: "02:53", price: 0.132 },
   { time: "03:10", price: 0.128 },
   { time: "03:27", price: 0.134 },
   { time: "03:44", price: 0.133 },
   { time: "04:01", price: 0.129 },
   { time: "04:18", price: 0.131 },
];

// import axios from "axios";
// import Api from "../../Requests/Api";
// import Collapse from 'react-collapse';


// import { SlArrowRight } from "react-icons/sl";
// import TradingChart from "./TradingChart";
// import { jwtDecode } from 'jwt-decode';
// import { useTranslation } from 'react-i18next';

// const symbols = ["dogeusdt", "ethusdt", "dotusdt", "nearusdt"];


const Dashboard = () => {
   // const [selectedSymbol, setSelectedSymbol] = useState(null);
   // const navigate = useNavigate();
   // const [user, setUser] = useState(null);

   // const [isOpen, setIsOpen] = useState(true); // Modal visibility state

   // const closeModal = () => {
   //    setIsOpen(false);
   // };

   // const handleAccept = () => {
   //    console.log("Account connected with Telegram!");
   //    setIsOpen(false); // Close the modal after accepting
   // };
   // const [cryptoData, setCryptoData] = useState({});
   // const [binanceSymbols, setBinanceSymbols] = useState([]);
   // const [showAll, setShowAll] = useState(false); // toggle state
   // const toggleDropdown = () => setIsOpen(!isOpen);


   // useEffect(() => {
   //    const fetchCrypto = async () => {
   //       try {
   //          const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets", {
   //             params: {
   //                vs_currency: "usd",
   //                order: "market_cap_desc",
   //                per_page: 20,
   //                page: 1,
   //                sparkline: false
   //             }
   //          });

   //          const formatted = {};
   //          const binanceSyms = [];

   //          res.data.forEach((coin) => {
   //             const symbol = `${coin.symbol}usdt`.toUpperCase();
   //             formatted[symbol] = {
   //                id: coin.id,
   //                name: coin.name,
   //                symbol: symbol,
   //                image: coin.image,
   //                price: coin.current_price,
   //                change: coin.price_change_24h,
   //                percent: coin.price_change_percentage_24h,
   //                volume: (coin.total_volume / 1_000_000).toFixed(2) + "M"
   //             };
   //             binanceSyms.push(symbol.toLowerCase());
   //          });

   //          setCryptoData(formatted);
   //          setBinanceSymbols(binanceSyms);
   //       } catch (error) {
   //          console.error("CoinGecko fetch error:", error);
   //       }
   //    };

   //    fetchCrypto();
   // }, []);

   // useEffect(() => {
   //    if (binanceSymbols.length === 0) return;

   //    const ws = new WebSocket(
   //       `wss://stream.binance.com:9443/stream?streams=${binanceSymbols
   //          .map((s) => `${s}@ticker`)
   //          .join("/")}`
   //    );

   //    ws.onmessage = (event) => {
   //       const msg = JSON.parse(event.data);
   //       const data = msg.data;

   //       setCryptoData((prev) => {
   //          const existing = prev[data.s];
   //          if (!existing) return prev;

   //          return {
   //             ...prev,
   //             [data.s]: {
   //                ...existing,
   //                price: parseFloat(data.c),
   //                change: parseFloat(data.p),
   //                percent: parseFloat(data.P),
   //                volume: (parseFloat(data.v) / 1_000_000).toFixed(2) + "M"
   //             }
   //          };
   //       });
   //    };

   //    return () => ws.close();
   // }, [binanceSymbols]);

   // const allCoins = Object.values(cryptoData);
   // const coinsToShow = showAll ? allCoins : allCoins.slice(0, 5);
   // const [loading, setLoading] = useState(true);
   // const [availbal, setAvailableBal] = useState();



   // const [userDetails, setUserDetails] = useState(null);
   // const token = localStorage.getItem('authToken'); // Retrieve token from localStorage

   // useEffect(() => {
   //    fetchUserDetails();
   // }, []);

   // const fetchUserDetails = async () => {
   //    try {
   //       const response = await Api.get('/user');
   //       setUserDetails(response.data); // This should be your user object
   //    } catch (error) {
   //       console.error("Error fetching user details:", error);
   //    }
   // };
   // // }, [token]);
   // useEffect(() => {
   //    withfatch();
   // }, []);

   // const withfatch = async () => {
   //    try {
   //       const response = await Api.get("/availbal");
   //       if (response.data?.AvailBalance !== undefined) {
   //          setAvailableBal(response.data.AvailBalance);
   //       }
   //    } catch (error) {
   //       console.error("Error:", error);
   //    }
   // };

   // const { t } = useTranslation();
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
         case 'assets':
            navigate('/assets');
            break;
         case 'profile':
            navigate('/profile');
            break;
         case 'notice':
            navigate('/notice');
            break;
         case 'langauge':
            navigate('/langauge');
            break;
         case 'team':
            navigate('/team');
            break;
         case 'vip':
            navigate('/vip');
            break;
         case 'P2P':
            navigate('/P2P');
            break;
         case 'commission':
            navigate('/commission');
            break;
         default:
            navigate('/not-found'); // fallback route
      }
   };

   return (

      <div data-v-72d7289a="" data-v-fee66994="" className="page">
         <div data-v-72d7289a="" className="headers">
            <div data-v-e457753b="" data-v-fee66994="" className="main-header on">

               <div data-v-e457753b="" className="left" onClick={() => handleNavigation('profile')}><img data-v-e457753b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZXRDUBAEESHCpRwJShBCTpSyrWiAyUoQQmsOB+Evbhkycm8ZBKx3n7I5QbYqCSdZJQMEi9xiGPiuTCYTxkjy808fzHc45XFZt6kfDApi028IjxoFDfvTbxS0ivzT2YN7n9hrcimXovjyR+CGMPcW+8Hh+e87RGSH2x7sO0TPbY92PZse0IygW0Ptn2ix7YH2/5vbb8AJnhQUjyfYQ4AAAAASUVORK5CYII=" alt="" /></div>

               <div data-v-e457753b="" className="right">

                  {/* <div data-v-e457753b="" className="customer"><img data-v-e457753b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIkSURBVHgB3ZiNdcIgEMf/dQJHYAQ3kE5QR8gGuoFsoBvoBq0T2E5gN0g2sBtYTskrOTCBAD5ff+/dMx/AnXdwB3nBeKZaFlrmWmZahHlG/GhptHxr+dLyYZ49BKFlo+Ws5RIhO9O3GFNj2CVRNojgJbCd0HKE6wEKG4XxgFtI7TBS2Cn8C8941PbV/CYjtNToeoHCq/A35/qgNpVnjBoZQi48A28RZphvrD0yG8mNU0hHwTVyzB/GGvmNa1FIWDiEgJsicrNlOkRE36tBWSezBwqrnUu3MR3tf1ahHArdzBA0FyskuD4S7sWKN5h4Os2t6zYBl6JN9D7dV3wGzqzrT5TncEe3g4Bba99RNsQStxJqz8OdT+cM/buTNfKz7NFXw/KmgFsxfCKRDxmg72xs6+S8tmLQABUz/Ih88LCujE4Ft+53jFBsIMk6jKqZDJ5n+XZMoRvqwTDa73tXWSCSjdn7foI4cngwilgDH86/MzDH0TFqDDKwse4le89XWIN0GnYv2f2ct+Ubx7XpRLnJri6l8iClksroXMOzURYIO4RL5EMG6Kth1eQZ+svdCvlR6C9zTs4VuB0La6sR7WYkyiGMDl7eBJ4IWoid0mbzDHnwzbpu8GQIPO6AFg3VdXth1ihQ65cY3uye4HpGmOdFvVdhOJf5CoDv42fwoT2GU6SB92SPQqQa1m71i1GPNOqI8I+fSawQZ1xRb92jwvBcrFOM+wXp7n2Zcm6yKQAAAABJRU5ErkJggg==" alt="" /></div> */}

                  <div data-v-e457753b="" className="ques" onClick={() => handleNavigation('langauge')}>
                     <img data-v-e457753b="" src="data:image/png;base64,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" alt="" /></div>
                  <div data-v-e457753b="" className="msg ques">
                     <div data-v-e457753b="" className="van-badge__wrapper" >
                        <img data-v-e457753b="" onClick={() => handleNavigation('notice')} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZySURBVHgB7Z09cxNHGMf/e7IMIQXyBAxVvBSZSYYCpaOL/AnsCcGhi12mgpSpLHfpMN8AdwwwsSipIn+CiJmQoWOh8gAznIt4bF10m+eR5Ixt7uSz7vb2Tt7fjF/m9kbSPf99eZ59eQQ4HA6Hw+FwOBwOh8NxlhAoMVflHdlDeNfToq5FqDwEa9uqpVAiSisAGz/U4R/0rzx0WXVF91tftXyUBA8lhWs+jhqfkVVUf0KJKK0AAqIWfR11lIhSdEE1uVibxnSDjD6n+wbWNWg0uOj4vUKINt23toe9Thm6osIKQH18I0TYIEMvYPxa3dECbRJs47160kEBKZQAXNPP4Rz34Yta6wayhcVYf68eb6BAFEaAK3LpntZYRUS3kjGKhGgWRQjrAnBX09O9+9Rv5z14Kk90523HDVa9oMvy9jr78haMz1AcMf169sulJixipQUM+/rNU/TzPn1S9m7a9L/aF0HHf/37myOvee37uSldkRV4dQ3diPOSoqD72xURrNhoDbkLEBPBRsKG4f76g3qyhTG4JG9/J0JvWQi9nOB2K11SrgIkNT61jIeBF6z5GRmjRu9bDfVqAiFyFyE3ARIaX4VkpHFr/EmwENMJPkOe80m5DcLk6WxixINrHa7zg5syPuOrR+rdm8fXyN1dH3GbrOrqJnKighyYlUtNGkDvxJVTy2h+ePv01z3/1R5yYHfn5fPPZr7h+aRGVDldlxdmrtd2/ZfPYRjjAnDXQ316bI0aGn8NObPr/701WgTcpPItuk/BIMa7oGG/H1dmxfgHfFBP10IRNuPKhRb3YRijLYACrWWqYctRZezpkPF/gWW4JXw+c50Dwa+Pl9Fnv0pdkaKu6AUMYbQFUA1ajSlS7GaiIHTRXQEHexEIjSYMYkwArv2I8Xo4uPILtHbLLqcWOq41yivyxwUYwpgAHry4pUFVtClhhtYLHpII7agyGqvuwRBGBBh6Po2oMq79KC6RFYM9JZ6/ggGMCNBDrxFTVMjaf0CAoIWYscDUYr8RAajGRPaZ1CraKDCDsQAPo8pMLfabGQN09If1PK+FwuNFu5w6OmBL/W7ImGFfKaPK9rFvzJ/OCgqM2jFF0sQ4kLkA53E+svbT3L5fJNczjm2asEP8OCCRMbnNhtK4oFAaRKQA5FrPIWMyF6AXF3xRC0BJEAIq6nrIG8IyprRbEycFJ4BlnACWcQJYxglgGSeAZZwAlnECWMYJYBkngGWcAJZxAljGgADhDUwuma+KZSYAHzWanVt6LTSM7SCwDT8bP+MX8tYiMiITAXjzbdJDFxOArOjKZlZHm1ILwKcbMTjdeLYQWL0kf0jd2lMJMNj/A+MbWIsKb728KhclUjCFFNAK0Uk1v0M1RQ1Ww/oH7EpBiHADg1UxSUbmVbDIwZfzVYSosg1WMCZjH1Hq52/Q0x9jio0eNcqbUUebuHIFIrg27pGmsbuguN0PTFd05yfF+AwfbeoKbz6qjFvBFKbGdk/HFmDE4nu7DNtPTguLELd5V6TYLZF5IBa3o2ASIEMrZEz2kbC2knYgH7SO3nIZs48oCSkE6MXl36lflrdKlTYsCf14J8YbIq/pDcYk1UFtCsvZC4rerKSxpj3dKmqipKT0D5gjXB4RbPbPHmNMUsUBJN864s5QUaTIgQqJhDJDUywjy2lgXkcKUo0BXXQf0B+Fs4uiFv4AKUglAAcfQ/9Y4ezBOSXmkZJMknUkTIIxSfSNn0W8k8lB7T3/L78689WGpyvnKQ64icnFpzHht8ALVsj428iAzNPV9HPz8CG9UNyAp0sfE9BUg38wmRig+6xMaZEdDofjBAqVOfeyvF2nCa+7tPgtB98HUNnYVo/ayIh+jlKEC54Wi/1+XePZu7ePm7BIYQQY5pT7E59ObfyfspJ+XvTQ85NMbwynEOqc8BuDVMj1iNfGMJ2xtbQ5hRFgVi5tUo1MvN2DT11yLRZHZyIl/6LrEqeAfPoZW95NurkgixwYmf6izBRpa6KtWdOWTd8+l6yJSfjHf7l14eL1Wp6RNC+f0oL6z3v+K2sCFO4LHDiSPge9QAPoosg+QQZHtR1PeK197G8UIaot9FeY8NaXKVRvHErILTEYaJOcWGfj8kJ6x4PXIfez8y+CF0WbSijFd8gcp5+1RHgXOVv64ev0MDuB6H2EDnfcnI3D4XA4HA6Hw+FwOBwOh8PhOMJ/k2apxajx+DwAAAAASUVORK5CYII=" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div data-v-72d7289a="" className="page-container">
            <div data-v-72d7289a="" className="van-pull-refresh scroll" id="pageScroll">
               <div className="van-pull-refresh__track" style={{ transitionDuration: "0ms" }}
               >
                  <div className="van-pull-refresh__head"></div>
                  <div data-v-fee66994="" className="home">
                     <div data-v-fee66994="" className="home-con">
                        <div data-v-fee66994="" className="container-home-out">
                           <div data-v-fee66994="" className="container-home">

                              <div data-v-fee66994="" className="nav-ex">
                                 <div data-v-fee66994="" className="nav-item" onClick={() => handleNavigation('P2P')} ><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/9cf16e751f4e149163c9327e0b32f943.png" alt="" /><span data-v-fee66994="">P2P</span></div>
                                 <div data-v-fee66994="" className="nav-item" onClick={() => handleNavigation('vip')} ><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/df5ccecf89e31849444e314ad767099d.png" alt="" /><span data-v-fee66994="">Level</span></div>
                                 <div data-v-fee66994="" className="nav-item" onClick={() => handleNavigation('team')}><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/ba8dee81b91822ed9005d636d5ce05bb.png" alt="" /><span data-v-fee66994="">Team</span></div>
                                 <div data-v-fee66994="" className="nav-item"><img data-v-fee66994="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250807/faf40caea66a8ae8c30c8b0e2d997e66.png" alt="" /><span data-v-fee66994="">Tutorial</span></div>
                              </div>
                              <Swiper
                                 modules={[Autoplay]}
                                 spaceBetween={0}
                                 slidesPerView={1}
                                 autoplay={{ delay: 3000, disableOnInteraction: false }}
                                 allowTouchMove={false} // ✅ disables manual swipe/click
                                 loop
                                 className="swiper-banner"
                              >
                                 <SwiperSlide>
                                    <div className="item">
                                       <img
                                          src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250507/3dba3bfa067d5a4848e7e5feff60f33f.png"
                                          alt=""
                                       />
                                    </div>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="item">
                                       <img
                                          src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250507/c7b9925a8184df15bf8d1a073a549c63.png"
                                          alt=""
                                       />
                                    </div>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="item">
                                       <img
                                          src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250507/679e62054bb44c623b9e8f9715a67c8c.png"
                                          alt=""
                                       />
                                    </div>
                                 </SwiperSlide>
                                 <SwiperSlide>
                                    <div className="item">
                                       <img
                                          src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250806/02af219ae733b4477512639b70ad309a.png"
                                          alt=""
                                       />
                                    </div>
                                 </SwiperSlide>
                              </Swiper>

                              <div data-v-fee66994="" className="train">

                                 <div data-v-fee66994="" className="train-content">
                                    <div data-v-fee66994="" className="li" onClick={() => handleNavigation('commission')}><span data-v-fee66994="">Today's earnings(MCE)</span><span data-v-fee66994="">0</span></div>
                                    <div data-v-fee66994="" className="li" onClick={() => handleNavigation('commission')}><span data-v-fee66994="">Cumulative income(MCE)</span><span data-v-fee66994="">8</span></div>
                                 </div>
                              </div>
                              <div data-v-fee66994="" className="datamain">
                                 <div data-v-fee66994="" className="com-title">
                                    <div data-v-fee66994="" className="left">Data browsing</div>
                                 </div>
                                 <div data-v-fee66994="" className="boxs">
                                    <div data-v-fee66994="" className="pic"><img data-v-fee66994="" src="./static/img1757786439045/img1-C-wJsAhx.png" alt="" /></div>
                                    <div data-v-fee66994="" className="mining">
                                       <div data-v-fee66994="" className="m-l">
                                          <div data-v-fee66994="" className="logo">
                                             Mining income
                                             <div data-v-fee66994="" className="title">To be collected</div>
                                          </div>
                                          <div data-v-fee66994="" className="price blue">--</div>
                                          <div data-v-fee66994="" className="price">0 <span data-v-fee66994="">USDT</span></div>
                                       </div>
                                       <div data-v-fee66994="" className="m-l m-l-1">
                                          <div data-v-fee66994="" className="logo">
                                             Computing power income
                                             <div data-v-fee66994="" className="title">To be collected</div>
                                          </div>
                                          <div data-v-fee66994="" className="price">0 <span data-v-fee66994="">MCE</span></div>
                                       </div>
                                    </div>
                                    <button data-v-fee66994="" className="btn">Claim All</button>
                                 </div>
                              </div>
                              <div data-v-00658257="" data-v-fee66994="" className="close-chart-card">
                                 <div data-v-00658257="" className="header">
                                    <img data-v-00658257="" className="mce-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI4SURBVHgB1VjblYIwEJ19fOwnJVCCdqB/2wVYgXagVuBagVKBdqBbAXQAHeDvfrFz2Q0nRoQQQOI953ogJOEyM5mMIbqGw1wyY2b2YIbMDdOlO/CY6QDCVMZMXxXnWyBMpSfEuTSMS+sIbzpv/LNifpJ9+GD+4ALBaZv1inh8+b+wFq91HRzHocViQV1jNBpp960082QyyYAwDDPXdVu7jT8422w2+ZyYW2OMnkAgjuNWIjEWHyqgI7DWxTL4BXQ6nRq5R4DFGI/VtqAMjktty83n89I5OnexiuVyWfsCEW+DCAQgAIFPNfH2MIEcR1mapldt6grnOMsXlAzcIyx6FYiXVAmASMSb+gHy6pfH9SZQuFAVWQZYXA6BpgIbpRkZSZLQeDym8/l8t08QBDSdTulyuZApjAUCeDEEbLfbm2fr9Zp836cuYORilavVquhXlSObuvidDIFdBbvDfr/P71kgRVGUW7XK7U3RyMVyLMF9u92OOA8WbcfjsVNxgLFAAZRifZRjAq0WiQBqxr7QicA+8fwCsTKRlLsAakGsfgBz6sxbK1AkY5FCTOF5Xl6wAljp2IV0PzwzoZyYcV3VF3Wjbl/qKlHrAnkSaQjWn81mea5sCiMLyltgmVVQwRwOh/x5y3+EZDqwqAt5V7l5hjaAt8LSivshAoWlytphsTLhTfkURx8J2YsIAgOyF9/4wU5vw9Gvypik82rfQoG+Ys28IbZAWFomTsBlftEwp64x/R1HXxWXv/iJJP8j9BNeAAAAAElFTkSuQmCC" alt="coin" /><span data-v-00658257="" className="title">MCE</span>
                                    <div data-v-00658257="" className="kline-icon">
                                       <img data-v-00658257="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE5SURBVHgB7ZfhDYIwEIVfjP91hDqBbiBOoBuIE+gG6iQ6ghuIE6gT2BHcQNv0iE0phULBhPAlL8V6hdfSuwagpxgmNIY/Yxpbi5XQR+gFf140NnIFDeAmnTmDP8xoKxlonN6AzcAWvw100vo/pCsC7O48Yu1BLkmDRamZxsauoKHxe00tFzpa4mdQK8Sg0uti/C/7loY5ec+50E0ooXvnckV26U3yZrZHuZVj+qAhwiBX5kDXb6GHJSaih+9IwQ2kTMiEyRnqdUz1zibS8O0T3BeiThrIK1AjW2eoLODa9R3ZYiNNzSyxGeoUogMCFKI0hSLYa/jUEqsb4FAzHWnjE+p/QtUCZ5pGKH8YFVHqMDI3YSK0gfs9yZgFWiLGbya+VFqB1ukNFBngRusDp9brdLTB8MdPs+7zBeQ5ZtqVaqtAAAAAAElFTkSuQmCC" alt="" />
                                       <i data-v-00658257="" className="van-badge__wrapper van-icon van-icon-arrow arrow">

                                       </i>
                                    </div>
                                 </div>
                                 <div data-v-00658257="" className="price">$ 0.13381</div>
                                 <div data-v-00658257="" className="chart" _echarts_instance_="ec_1758517109480" style={{
                                    userSelect: "none",
                                    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                    position: "relative"
                                 }}
                                 >
                                    <ResponsiveContainer>
                                       <LineChart data={data}>
                                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                          <XAxis dataKey="time" />
                                          <YAxis domain={["auto", "auto"]} />
                                          <Tooltip />
                                          <Line
                                             type="monotone"
                                             dataKey="price"
                                             stroke="#00c853"
                                             strokeWidth={2}
                                             dot={false}
                                          />
                                       </LineChart>
                                    </ResponsiveContainer>

                                    <div className=""></div>
                                 </div>
                              </div>
                              <ul data-v-fee66994="" className="list10">
                                 <li data-v-fee66994="">
                                    <div data-v-fee66994="" className="title">Computing power income</div>
                                    <div data-v-fee66994="" className="val"><span data-v-fee66994="">20</span> MCE </div>
                                 </li>
                                 <li data-v-fee66994="">
                                    <div data-v-fee66994="" className="title">Task benefits</div>
                                    <div data-v-fee66994="" className="val"><span data-v-fee66994="">0</span> USDT </div>
                                 </li>
                                 <li data-v-fee66994="">
                                    <div data-v-fee66994="" className="title">Team Benefits</div>
                                    <div data-v-fee66994="" className="val"><span data-v-fee66994="">8</span> MCE </div>
                                 </li>
                                 <li data-v-fee66994="">
                                    <div data-v-fee66994="" className="title">Direct push</div>
                                    <div data-v-fee66994="" className="val"><span data-v-fee66994="">40</span> person</div>
                                 </li>
                                 <li data-v-fee66994="">
                                    <div data-v-fee66994="" className="title">2+3 generations</div>
                                    <div data-v-fee66994="" className="val"><span data-v-fee66994="">50</span> person</div>
                                 </li>
                                 <li data-v-fee66994="">
                                    <div data-v-fee66994="" className="title">Team size</div>
                                    <div data-v-fee66994="" className="val"><span data-v-fee66994="">567</span> person</div>
                                 </li>
                              </ul>
                              <div data-v-fee66994="" className="luckyBox">
                                 <img data-v-fee66994="" src="./static/img1757786439045/bg-lucky-BA2hLIqi.png" alt="" />
                                 <div data-v-fee66994="" className="abs">
                                    <div data-v-fee66994="" className="title">The wheel of luck</div>
                                    <div data-v-fee66994="" className="val">Get cash, luxury prizes</div>
                                    <div data-v-fee66994=""><button data-v-fee66994="">Lottery</button></div>
                                 </div>
                              </div>
                              <div data-v-fee66994="" className="step">
                                 <div data-v-fee66994="" className="step-title">Mining Process</div>
                                 <div data-v-fee66994="" className="step-wrap">
                                    <div data-v-fee66994="" className="step-top step-line">
                                       <div data-v-fee66994="" className="step-icon">
                                          <div data-v-fee66994="" className="van-circle">
                                             <svg viewBox="0 0 1040 1040">

                                                <path className="van-circle__layer" d="M 520 520 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" style={{
                                                   fill: "none",
                                                   stroke: "rgb(144, 144, 144)",
                                                   strokeWidth: "40px"
                                                }}
                                                ></path>
                                                <path d="M 520 520 m 0, -500 a 500, 500 0 1, 1 0, 1000 a 500, 500 0 1, 1 0, -1000" className="van-circle__hover" stroke="#30BD64" style={{
                                                   stroke: "rgb(48, 189, 100)",
                                                   strokeWidth: "41px",
                                                   strokeDasharray: "0px, 3140px"
                                                }}
                                                ></path>
                                             </svg>
                                             <div className="van-circle__text">0/5</div>
                                          </div>
                                       </div>
                                       <div data-v-fee66994="" className="step-box">
                                          <div data-v-fee66994="" className="step-til">Your progress</div>
                                          <div data-v-fee66994="" className="step-tips">Complete the following tasks to start your journey to wealth</div>
                                       </div>
                                    </div>
                                    <ul data-v-fee66994="" className="ul-step">
                                       <li data-v-fee66994="">
                                          <div data-v-fee66994="" className="step-level"><img data-v-fee66994="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVLSURBVHgB7Z1LTuNYFIZPTMgEkMIgCYzaYcKwKDFhRLvEAppaQXevAFhBNSsAVlD0ChpW0B4yqzQwgAncGiAUHiISCoPw6v9Y15Ed4sR2nNiO7ycZ24kh4uc87vOQoxh5eHgotlotQ9M0/f39/RNe0uVBjrNFLpdr4BmBywYOgeuf+D4zn8/XZmdnGxQTORohtmAQ41fcrlOHSAMgcJgQ9bBQKJijFHQkAt7e3ho4beAw8EsWafjss5iVSuWAhszQBGRre3l5YdE2RyRaNwSO7cnJSbZKQUMgcgETIlwnAmFjv1QqbVPERCrgzc3NHzh9o+hiW9QIHNvlcnmfIiISAWF1+vPz83dcGpQC4BkHSDZbUbi1RgNyf3+/AZf9QSkRj4E7r+MP/kN6zGA/i0IiY903/DU3KcVAzF3Exi0KSSgBpcv+g8slGg9qyNRfw7h0YAGleP9SchNFWARE/BJUxEACjrF4NoFF9C1gBsSzCSSiLwEzJJ6NbxF9NWNkwtApO1hJklsa/R7sKyAGAnZofLJtEJa4mdbvoZ4uLBua3ynDvL29bc3Nze16ve8pIMc97mEkaEAgLhqIh5+94qGnC0O8HSWeRVH287vSVUB2XYi3Tgobw6vf3NWF8fAlZSvr+kFIV3ZNF3ywQGTdJI/nxYmO+ZwPAycuC8xggzkonFCqTit0WSDEM0iJ14tipxW6LFDFPl80MCUwa9+0LfDu7i7KedpxpiinaS3aAqLF/RspfAGtNuxry4W504z490AJ5OLiwnW/sLBACaCdTPJ89/r6alDCqNfrdHR0RM1m0/V6QgQsSs0OLAGT5L4s3OnpqXVOMujqGmQLSAmYkkQIoePjYzo/P6c0oGkaG91mXsY/nWLk7OyMTk5OLBFThM7aaTDF2AdLr66u0iaeBcdBDfHPoIRRqVRobW3NOicZGJ/OMVCnhDA1NUUrKytt4TiZJBnEwU/5XC73C8UM2lS0vLxMi4uLlDJ0FrCIwVOKk9XVVUopugbxdFKEhvvCat4jPPrA6wOzjhJwQJSAA8ICClKEpaEscDCEssDBaHA78CcpwiLQndNqpAiFtWMUXTlBilDwdlttYmLCJEUoeK+yJpcpCFIERbB2djPmkBRBMfmLNanEvuycLE4KPMzVarUoiUAzy+gsATkOQkB25USNzPBAKx9JxM4dlguzLyMbm6Twy769xM3ZldsjhS9s92U6l7fx+hg1wNobUS6Xq/aNazABLWtlhf1x1V1wCVgoFHhDSWxFbFKAwGS66XzBJSAHRmWF3kCbv+fn54XztQ/bHORaGa6BoJPCiSv22XwYUJXpOfL6KmNAV00898ohI/N2B4MUVpmUSqXytdt7nkP6CJZ/kkooVtU43rHp9b6ngBws8Y2Zd2VY31Zn4nDSc1JJ7pPNbFaGAe31KxPVt2aCzMocD7O2a70G8T73e6jvtCZnZcRDDqCCsoOQv3NffJc9ub6+1jGEk4myJxDvS6+45yRQ4Z0MiBhIPCZw6acxFjGweEzgpR38AfxBuByn+eRaGPGYUGtj+INkhkp9E4ebKs1mM5R4zMAVLGUxBi7Ok6qBWO5hwOq2e9WE8fVzKAI4LmKSeSdFlT5M7qqGtTonkQhoo4rQRkS9Xv8LLvI7JURIOSCw9/T0tFutViMdIBmKgIxs7hgUo0UOU7j2Z9AI4HoMiDnr0iqHihTNxNTjXqlUMmnIjERAm8vLy+LMzIwhxeR/SKBTNPDQ2yESmfn4+GgOy9q6MVIBO2FBp6enl3jHqNyzp+Mo4lrvUvhMOM5c2v0/Xts4asE6+R84HIMAxVez5QAAAABJRU5ErkJggg==" alt="" /></div>
                                       </li>
                                       <li data-v-fee66994="" className="x"></li>
                                       <li data-v-fee66994="">
                                          <div data-v-fee66994="" className="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                                       </li>
                                       <li data-v-fee66994="" className="x"></li>
                                       <li data-v-fee66994="">
                                          <div data-v-fee66994="" className="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                                       </li>
                                       <li data-v-fee66994="" className="x"></li>
                                       <li data-v-fee66994="">
                                          <div data-v-fee66994="" className="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                                       </li>
                                       <li data-v-fee66994="" className="x"></li>
                                       <li data-v-fee66994="">
                                          <div data-v-fee66994="" className="step-level"><img data-v-fee66994="" src="data:image/png;base64,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" alt="" /></div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{ bottom: "1.3rem", right: "0.2rem" }}
            ></div>
         </div>
         <div data-v-72d7289a="" className="footer">
            <div data-v-70088780="" data-v-72d7289a="" className="main-footer">

               <div data-v-70088780="" className="item on" onClick={() => handleNavigation('dashboard')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGeSURBVHgB7ZiBUYQwEEW/NCB2kBKuA9OBVwIdaAd3HZxWgB2oFWAJZwVgBdDBmTWgDENgcwRYnXszP8McsPNnkz02AS6E4QrhiI3ujbSRqn87Gr0ZPWNlyNzB6DSg3CjBSujawImpFL9Znh1O9lbN6gZ+2XPpgJmgwigx3WA7qwqBoOnNAprr6gET0QgzvbMV1W4Bc5OmP13YYCNa81uGv7P/XkJqM2QwEWCwmXonmRCTJOe0SzFISslQ1DGoIIsbGiLI5pqGrskCsihoiFw3hPBJQ5/JCnKgzr7X5Afk8J2wPpNHyMGZyQIyqPAHMvnjQ3Imi+YiGnuAwTvzee5zDaMF/ALet7Xd9u/R38FnsN19Q8aMrTHCIzOQ6nlXw3YvW8d9buzBfpJImIF8t6UKvP1SyQ3GbadyjG/2abe5A387nLVfHjqwKuvgXArY4qAFX7XM3cFOnU+sJzC3udy1M4c0mOiVDObwJMPyJhN4EmOZ04tGe5yJgj2pndMcFamzUHyOoxXsOr2tr2P4VWwbqv4CtvN+hW0mJDXb/5QvTppI5gp1gesAAAAASUVORK5CYII=" /><span data-v-70088780="">Homepage</span></div>

               <div data-v-70088780="" className="item" onClick={() => handleNavigation('earn')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOtSURBVHgB7Zj/ddowEMcPXgdwNlAmqDtB3QlKJogzATBBnAmACepOkHSCqhPEnaDqBGWD9K6c6HFIlgTkv3zf41m29eOj091JBuBNl9Ekt+JqtarwMptMJh/x2uDP8Kst/hz+hpeXl6/L5dLChZUFudls7hFggcUqo7rDug8I28OFNAqJ1jNouUcs1lCuHmGRdbmFMxWFZMDv8H9ZvSwO/g2vg3hWY93PsHMDKXKBT+eCTgoACe4OB3SRNg22mWNxFnhNE9ry5J5ifRRBrtfrL3hp/T37WAfHYNV0Op0X+KsXWXiT67eTwMANWzEFSPVoMgZOl2N3cFACiVYkwMZ3slgsrgN1VnhZBPojl/gJu+V14rlMX0Y34gBbQw4k++Iv0fhOL4l2BVafmyN5Be5BBRk+6+bz+QNkQM445ZC2aMUrBagt6HgiFgqFY7U4FvVXpUCn6l7mQ5li/iV0BUjO/+HUHYZWiNqDcAu878jSkIA0oux8gdyAOoBDwLPzHwUM9SPHomDkLTgKGRRHsRd1fHOJnUSA3olHBlRQvlNtnKoMbP7GP+SU5GBEHBy33IdLtSGXwTYb3gzIKHO8X3tDTEcga25wK9+nEjD67i3n2RZ2k6MAecZBU/t/B7sTFakCkUE05JMoV2zF/TZHFoEEINbpA68qAh8DJatRGvP3fBY4hmTzWlGR0pF0Ygv5gDTopgQUDo3U+AA6ChxlLQk4jBwuZgFAiv6FCgoPaiCsQd2bICTnPauf42C/ISLeQTTgwP31AdD7UD+8kk48qoOQDHSjKhPIH4irlm09oBi8VyvUjPR1lNqCkOzEB0k2oX3HtNXpZMxngoMsAQWKJnNOsvtow/JVrK4KkJr9rhKABwdo2W9AcoLBPKnlfAEHeh+rROdNNbAHbQKA0Y80npgphZS+ZfQyKtA2BBoA7CCuWvVpk5AcANKR20T9NraUGYB6d7O+kDxgxHaBBChFsp/clk/e3Vg7zp1taNycU5DeBdpUAwKiAzMOdE3XsU8Dr0DutPt3kCH13bPlw66DC4m2SjqE+HvtGlnnSVoucUs7xuNYEBUCGvHJQnL462WdLEgKIAVaJ/bgEkCdAZZ6lbIgGXQdyYUGThCfO5/hOEU96brZf/15IVSvUgWpzzmxc/vgJ+1YiiqG5IG6yEmG8ir9QfADDvOr4R2LDtBGNyr6c6AQtGVQA6fLMuAwVulkSK8TYS0vr82pfDakl/8e4mU1cPwNP7Ab2JTl3vRa+gu6GGIYZECWCwAAAABJRU5ErkJggg==" /><span data-v-70088780="">Earn coins</span></div>

               <div data-v-70088780="" class="item" onClick={() => handleNavigation('mining')}><img data-v-70088780="" src="data:image/png;base64,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" /><span data-v-70088780="">Mining</span></div>

               <div data-v-70088780="" className="item" onClick={() => handleNavigation('trade')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7ZeBcYIwFIYfngMwghu0bkAnaJ1AnKBlAq8TABvgBGUD6wTaDTICG9D/ebGX5rT6gBC88t3lkjyC/ryXvAdEIyPDIrANaZqG6OIgCB7II3VdvydJong8NS9A4AzithjOyD8bNMWDiWmFwDUNQ+Avptb8xRiXaBX1S3zOaIsMTwPsiRx74pN6JMuy+Jx9QnfA/xGp05YzWovM83yNrLDn9EWOmFJD2HsQ94EDFvGcx+jm5IBGntRJf49hZJhDV94UexLhXcJ7GRnpSqO4GCCNXP0N3L+RpDeRSPYU/qC4cDmi29kJ1orD3XcFOiLyJEJUwZsLhPWZ2qEki8V7EkK5ppfUI3dRcaQH5xGhfqUW4ODtEI1Cco803Me3dmoBHjLGwypJCvIVblGtl3pSoRWC9bFt0N8uooMnTUEK3eraOl3Xt5a5gsCVVCDjJNycT/mAGCaF+byJQMbZnoSgN3QHtFILVNSQxq9qtwBxT+xVaonT092FQGb8EOuKi3tSv8AuyR8/W+WvgxORP7hsHk6TIYabc+zCNNieLMgjEPfFGrrKCiMjrvgGdnOWJKOVhngAAAAASUVORK5CYII=" /><span data-v-70088780="">Trading</span></div>

               <div data-v-70088780="" className="item" onClick={() => handleNavigation('assets')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgB7ZjhDYIwFIQP4wCMoBPoCLIBI7iBMIFugE4gG8gIjMIIbIDXhB9YtSlQCiTvSwi0peTou/ZRAEEQehN0C1mW7YIgePHyiIlpmiZK07S0uXejlWN4ENgXXWSIBbI1tNUMSQp3hLRShgEYRdIzORyh/K5OGMAGK8A0kiHf/gx36H6P29HtoqJX6B2NIumhJyaCz778qr+TJEk+5sISwx3rFav3ZMVh38MD9OaN4b/+a1/FSIpIV4hIV2zhAc5etfbpGadgdqlt+nsR2WaXU7eOX1gVT6VNf/GkK7yEm5krwggk3K4Qka6QPY4tXOwPpvbZ9jh90MNtlUsn5kuDLjLnUWE+1F+TBwRBGM8bTyc7kD80FX8AAAAASUVORK5CYII=" /><span data-v-70088780="">Asset</span></div>
            </div>
         </div>
      </div>
   );

};
export default Dashboard;















