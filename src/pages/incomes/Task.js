import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../../Requests/Api";

const Task = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("");
  const [vipLevel, setVipLevel] = useState(null); // backend se aayega
  const [loading, setLoading] = useState(true);
const [vipProgress, setVipProgress] = useState([]);

  const back = () => {
    navigate(-1);
  };
const vipImages = [
  "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/349ce03f0cc4058bd4fcc30c31db1faa.png", // VIP1
  "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/689b0c037f4f6bfeead78d0aefe91e5d.png", // VIP2
  "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/40e3f438699b15bb96e4e7382a0aa9b2.png", // VIP3
  "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/bba44fa91cac1e2af95e5ca32ba054ce.png", // VIP4
  "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/bd47bae1bbe3038516b5a5e826e7369c.png", // VIP5
  "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/d095315185b14789ea37edca145a0a15.png", // VIP6
  "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/349ce03f0cc4058bd4fcc30c31db1faa.png", // VIP7 (aap yaha last wali image de do jo aapko chahiye)
];

  const handleRewardClick = () => {
    setActiveButton("reward");
    navigate("/reward-details"); // navigate to reward page
  };
         
  
  

  useEffect(() => {
    const fetchVIPProgress = async () => {
      try {
        const response = await Api.get("/checkVIPLevel");
        console.log("response",response);
        setVipProgress(response.data?.vipProgress || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching VIP progress:", error);
        setLoading(false);
      }
    };

    fetchVIPProgress();
  }, []);

  if (loading) return <div>Loading...</div>;
    return (
        <div data-v-72d7289a="" data-v-418f83bb="" class="page task-page-out">
            <div data-v-72d7289a="" class="headers">
                <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                    <div data-v-7401f0fe="" class="left">
                        <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
                    </div>
                    <div data-v-7401f0fe="" class="title overflow1">Task Center</div>
                    <div data-v-7401f0fe="" class="right"></div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
                    <div class="van-pull-refresh__track" style={{transitionDuration: '0ms'}}>
                        <div class="van-pull-refresh__head"></div>
                        <div data-v-418f83bb="" class="task-page">
                            <div data-v-418f83bb="" class="task-info">
                                <ul data-v-418f83bb="">
                                    <li data-v-418f83bb="">
                                        <div data-v-418f83bb="" class="title">Profits to be received</div>
                                        <div data-v-418f83bb="" class="val">0 USDT</div>
                                    </li>
                                    <li data-v-418f83bb="">
                                        <div data-v-418f83bb="" class="title">Total revenue</div>
                                        <div data-v-418f83bb="" class="val">0 USDT</div>
                                    </li>
                                </ul>
                                <div data-v-418f83bb="" class="btn-com">
                                     <div
                    data-v-418f83bb=""
                    className={`btn ${activeButton === "collect" ? "active" : ""}`}
                    onClick={() => setActiveButton("collect")}
                  >
                    One-click collection
                  </div>

                  <div
                    data-v-418f83bb=""
                    className={`btn ${activeButton === "reward" ? "active" : ""}`}
                    onClick={handleRewardClick}
                  >
                    Reward details
                  </div>
                                </div>
                            </div>
                            <div data-v-418f83bb="" class="task-list-con">
                                <div data-v-418f83bb="" class="boxs-ex">
                                    <div data-v-418f83bb="" class="item active">Long-term tasks</div>
                                </div>
                                <div data-v-418f83bb="" class="task-con">
                                    <div data-v-a998da64="" data-v-418f83bb="" role="feed" class="van-list" aria-busy="false">
                                        <div data-v-d42c0b7f="" data-v-418f83bb="" class="list">
                                             {vipProgress.map((vip, index) => (
                                            <div  key={index} data-v-d42c0b7f="" class="item">
                                                <div data-v-d42c0b7f="" class="status"><span data-v-d42c0b7f="" class="btn pending">In progress</span></div>
                                                <div data-v-d42c0b7f="" class="item-top">
                                                                  <img data-v-d42c0b7f="" src={vipImages[index]} alt={`VIP ${index + 1}`}/>

                                                       <div className="box">
              <div className="title">
                <span>{`Upgrade to ${vip.vip}`}</span>
              </div>
              <p>{`Complete tasks to upgrade to ${vip.vip}`}</p>
            </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="amount"><span data-v-d42c0b7f="">0 USDT</span></div>
                                                <div data-v-d42c0b7f="" class="item-bot">
                                                    <div data-v-d42c0b7f="" class="progress">
                                                          <div
                className="van-progress"
                style={{
                  background: "rgb(235, 235, 235)",
                  height: "0.12rem",
                }}
              >
                                                           <span
                  className="van-progress__portion"
                  style={{
                    width: `${vip.overallPercent}%`,
                    background: "rgb(48, 189, 100)",
                  }}
                ></span>
                                                        </div>
                                                    </div>
                                                   <div className="num">
              <span>{vip.overallPercent}</span>% /100
            </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="item-btn"><span data-v-d42c0b7f="" class="pending">Receive</span></div>
                                            </div>
                                                  ))}

                                            {/* <div data-v-d42c0b7f="" class="item">
                                                <div data-v-d42c0b7f="" class="status"><span data-v-d42c0b7f="" class="btn pending">In progress</span></div>
                                                <div data-v-d42c0b7f="" class="item-top">
                                                    <img data-v-d42c0b7f="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/349ce03f0cc4058bd4fcc30c31db1faa.png" alt=""/>
                                                        <div data-v-d42c0b7f="" class="box">
                                                            <div data-v-d42c0b7f="" class="title"><span data-v-d42c0b7f="" class="">Upgrade to VIP2</span></div>
                                                            <p data-v-d42c0b7f="" class="">First upgrade to VIP2 reward 8 USDT</p>
                                                        </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="amount"><span data-v-d42c0b7f="">0 USDT</span></div>
                                                <div data-v-d42c0b7f="" class="item-bot">
                                                    <div data-v-d42c0b7f="" class="progress">
                                                        <div data-v-d42c0b7f="" class="van-progress" style={{background: 'rgb(235, 235, 235)',height: '0.12rem'}}>
                                                            <span class="van-progress__portion" style={{width: '0%',background: 'rgb(48, 189, 100)'}}></span>
                                                        </div>
                                                    </div>
                                                    <div data-v-d42c0b7f="" class="num"><span data-v-d42c0b7f="">0</span> /1</div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="item-btn"><span data-v-d42c0b7f="" class="pending">Receive</span></div>
                                            </div>
                                            <div data-v-d42c0b7f="" class="item">
                                                <div data-v-d42c0b7f="" class="status"><span data-v-d42c0b7f="" class="btn pending">In progress</span></div>
                                                <div data-v-d42c0b7f="" class="item-top">
                                                    <img data-v-d42c0b7f="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/689b0c037f4f6bfeead78d0aefe91e5d.png" alt=""/>
                                                        <div data-v-d42c0b7f="" class="box">
                                                            <div data-v-d42c0b7f="" class="title"><span data-v-d42c0b7f="" class="">Upgrade to VIP3</span></div>
                                                            <p data-v-d42c0b7f="" class="">First upgrade to VIP3 rewards 50 USDT</p>
                                                        </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="amount"><span data-v-d42c0b7f="">0 USDT</span></div>
                                                <div data-v-d42c0b7f="" class="item-bot">
                                                    <div data-v-d42c0b7f="" class="progress">
                                                        <div data-v-d42c0b7f="" class="van-progress" style={{background: 'rgb(235, 235, 235)',height: '0.12rem'}}>
                                                            <span class="van-progress__portion" style={{width: '0%',background: 'rgb(48, 189, 100)'}}></span>
                                                        </div>
                                                    </div>
                                                    <div data-v-d42c0b7f="" class="num"><span data-v-d42c0b7f="">0</span> /1</div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="item-btn"><span data-v-d42c0b7f="" class="pending">Receive</span></div>
                                            </div>
                                            <div data-v-d42c0b7f="" class="item">
                                                <div data-v-d42c0b7f="" class="status"><span data-v-d42c0b7f="" class="btn pending">In progress</span></div>
                                                <div data-v-d42c0b7f="" class="item-top">
                                                    <img data-v-d42c0b7f="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/40e3f438699b15bb96e4e7382a0aa9b2.png" alt=""/>
                                                        <div data-v-d42c0b7f="" class="box">
                                                            <div data-v-d42c0b7f="" class="title"><span data-v-d42c0b7f="" class="">Upgrade to VIP4</span></div>
                                                            <p data-v-d42c0b7f="" class="">First upgrade to VIP4 rewards 150 USDT</p>
                                                        </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="amount"><span data-v-d42c0b7f="">0 USDT</span></div>
                                                <div data-v-d42c0b7f="" class="item-bot">
                                                    <div data-v-d42c0b7f="" class="progress">
                                                        <div data-v-d42c0b7f="" class="van-progress" style={{background: 'rgb(235, 235, 235)',height: '0.12rem'}}>
                                                            <span class="van-progress__portion" style={{width: '0%',background: 'rgb(48, 189, 100)'}}></span>
                                                        </div>
                                                    </div>
                                                    <div data-v-d42c0b7f="" class="num"><span data-v-d42c0b7f="">0</span> /1</div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="item-btn"><span data-v-d42c0b7f="" class="pending">Receive</span></div>
                                            </div>
                                            <div data-v-d42c0b7f="" class="item">
                                                <div data-v-d42c0b7f="" class="status"><span data-v-d42c0b7f="" class="btn pending">In progress</span></div>
                                                <div data-v-d42c0b7f="" class="item-top">
                                                    <img data-v-d42c0b7f="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/bba44fa91cac1e2af95e5ca32ba054ce.png" alt=""/>
                                                        <div data-v-d42c0b7f="" class="box">
                                                            <div data-v-d42c0b7f="" class="title"><span data-v-d42c0b7f="" class="">Upgrade to VIP5</span></div>
                                                            <p data-v-d42c0b7f="" class="">First upgrade to VIP5 rewards 350 USDT</p>
                                                        </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="amount"><span data-v-d42c0b7f="">0 USDT</span></div>
                                                <div data-v-d42c0b7f="" class="item-bot">
                                                    <div data-v-d42c0b7f="" class="progress">
                                                        <div data-v-d42c0b7f="" class="van-progress" style={{background: 'rgb(235, 235, 235)',height: '0.12rem'}}>
                                                            <span class="van-progress__portion" style={{width: '0%',background: 'rgb(48, 189, 100)'}}></span>
                                                        </div>
                                                    </div>
                                                    <div data-v-d42c0b7f="" class="num"><span data-v-d42c0b7f="">0</span> /1</div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="item-btn"><span data-v-d42c0b7f="" class="pending">Receive</span></div>
                                            </div>
                                            <div data-v-d42c0b7f="" class="item">
                                                <div data-v-d42c0b7f="" class="status"><span data-v-d42c0b7f="" class="btn pending">In progress</span></div>
                                                <div data-v-d42c0b7f="" class="item-top">
                                                    <img data-v-d42c0b7f="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/bd47bae1bbe3038516b5a5e826e7369c.png" alt=""/>
                                                        <div data-v-d42c0b7f="" class="box">
                                                            <div data-v-d42c0b7f="" class="title"><span data-v-d42c0b7f="" class="">Upgrade to VIP6</span></div>
                                                            <p data-v-d42c0b7f="" class="">The first upgrade to VIP6 will reward 500 USDT</p>
                                                        </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="amount"><span data-v-d42c0b7f="">0 USDT</span></div>
                                                <div data-v-d42c0b7f="" class="item-bot">
                                                    <div data-v-d42c0b7f="" class="progress">
                                                        <div data-v-d42c0b7f="" class="van-progress" style={{background: 'rgb(235, 235, 235)',height: '0.12rem'}}>
                                                            <span class="van-progress__portion" style={{width: '0%',background: 'rgb(48, 189, 100)'}}></span>
                                                        </div>
                                                    </div>
                                                    <div data-v-d42c0b7f="" class="num"><span data-v-d42c0b7f="">0</span> /1</div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="item-btn"><span data-v-d42c0b7f="" class="pending">Receive</span></div>
                                            </div>
                                            <div data-v-d42c0b7f="" class="item">
                                                <div data-v-d42c0b7f="" class="status"><span data-v-d42c0b7f="" class="btn pending">In progress</span></div>
                                                <div data-v-d42c0b7f="" class="item-top">
                                                    <img data-v-d42c0b7f="" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250622/d095315185b14789ea37edca145a0a15.png" alt=""/>
                                                        <div data-v-d42c0b7f="" class="box">
                                                            <div data-v-d42c0b7f="" class="title"><span data-v-d42c0b7f="" class="">Upgrade to VIP7</span></div>
                                                            <p data-v-d42c0b7f="" class="">The first upgrade to VIP7 will reward 1500 USDT</p>
                                                        </div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="amount"><span data-v-d42c0b7f="">0 USDT</span></div>
                                                <div data-v-d42c0b7f="" class="item-bot">
                                                    <div data-v-d42c0b7f="" class="progress">
                                                        <div data-v-d42c0b7f="" class="van-progress" style={{background: 'rgb(235, 235, 235)',height: '0.12rem'}}>
                                                            <span class="van-progress__portion" style={{width: '0%',background: 'rgb(48, 189, 100)'}}></span>
                                                        </div>
                                                    </div>
                                                    <div data-v-d42c0b7f="" class="num"><span data-v-d42c0b7f="">0</span> /1</div>
                                                </div>
                                                <div data-v-d42c0b7f="" class="item-btn"><span data-v-d42c0b7f="" class="pending">Receive</span></div>
                                            </div> */}
                                        </div>
                                        
                                        <div class="van-list__finished-text"></div>
                                        
                                        <div class="van-list__placeholder"></div>
                                    </div>
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
export default Task;