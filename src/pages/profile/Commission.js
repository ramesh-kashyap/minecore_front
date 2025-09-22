import React, { useEffect, useState } from "react";
// import { useNavigate, Link, Outlet } from "react-router-dom";
// import axios from "axios";
// import Api from "../../Requests/Api";
// import Collapse from 'react-collapse';


// import { SlArrowRight } from "react-icons/sl";
// import TradingChart from "./TradingChart";
// import { jwtDecode } from 'jwt-decode';
// import { useTranslation } from 'react-i18next';

// const symbols = ["dogeusdt", "ethusdt", "dotusdt", "nearusdt"];


const RunRecord = () => {
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

   return (

      <div data-v-72d7289a="" data-v-277f1458="" className="page">
   <div data-v-72d7289a="" className="headers">
      <div data-v-7401f0fe="" data-v-72d7289a="" className="inside-header">
         <div data-v-7401f0fe="" className="left">
            <div data-v-7401f0fe="" className="back"><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" className="icon"/></div>
         </div>
         <div data-v-7401f0fe="" className="title overflow1">My earnings</div>
         <div data-v-7401f0fe="" className="right"></div>
      </div>
   </div>
   <div data-v-72d7289a="" className="page-container">
      <div data-v-72d7289a="" className="van-pull-refresh scroll" id="pageScroll">
         <div className="van-pull-refresh__track" style={{transitionDuration: "0ms"}}>
            <div className="van-pull-refresh__head"></div>
            <div data-v-277f1458="" className="income">
               <div data-v-277f1458="" className="box-ex">
                  <div data-v-277f1458="" className="item active">Run Record</div>
                  <div data-v-277f1458="" className="item">Income Record</div>
               </div>
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
                     <div data-v-b47ca8ab="" className="item"><span data-v-b47ca8ab="" className="overflow1">GPU 64-core computing power package</span><img data-v-b47ca8ab="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt=""/></div>
                     <div data-v-b47ca8ab="" className="item"><span data-v-b47ca8ab="" className="overflow1">2025-06</span><img data-v-b47ca8ab="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt=""/></div>
                  </div>
                  <div data-v-b47ca8ab="" className="cards-con">
                     <div data-v-a998da64="" data-v-b47ca8ab="" role="feed" className="van-list" aria-busy="false">
                        <div data-v-a9233904="" data-v-b47ca8ab="" className="list"></div>
                        
                        <div className="van-list__finished-text">
                           <div data-v-43ae51de="" data-v-a998da64="" className="empty">
                              <div data-v-43ae51de="" className="van-empty custom-image">
                                 <div className="van-empty__image" style={{width: "2rem", height: "2rem"}}><img src="./static/img1757786439045/empty-BkVz5juj.png"/></div>
                                 <p className="van-empty__description">No data yet</p>
                                 
                              </div>
                           </div>
                        </div>
                        
                        <div className="van-list__placeholder"></div>
                     </div>
                  </div>
               </div>
               <div data-v-b81d30cd="" data-v-277f1458="" className="wrap" style={{display: "none"}}>
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
                     <div data-v-b81d30cd="" className="item"><span data-v-b81d30cd="" className="pla">All income types</span><img data-v-b81d30cd="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt=""/></div>
                     <div data-v-b81d30cd="" className="item"><span data-v-b81d30cd="" className="pla overflow1">Select time</span><img data-v-b81d30cd="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt=""/></div>
                  </div>
                  <div data-v-b81d30cd="" className="cards-con">
                     <div data-v-a998da64="" data-v-b81d30cd="" role="feed" className="van-list" aria-busy="false">
                        <div data-v-2de6d9d1="" data-v-b81d30cd="" className="list"></div>
                        
                        <div className="van-list__finished-text">
                           <div data-v-43ae51de="" data-v-a998da64="" className="empty">
                              <div data-v-43ae51de="" className="van-empty custom-image">
                                 <div className="van-empty__image" style={{width: "2rem", height: "2rem"}}><img src="/img1757786439045/empty-BkVz5juj.png"/></div>
                                 <p className="van-empty__description">No data yet</p>
                                 
                              </div>
                           </div>
                        </div>
                        
                        <div className="van-list__placeholder"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
   </div>
   
</div>
   );

};
export default RunRecord;















