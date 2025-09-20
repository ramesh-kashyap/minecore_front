import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useAuth } from "../../components/AuthContext";

import Api from "../../Requests/Api";
import Level from "../../pages/team/Level";

const NodeDetails = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("authToken");
    navigate("/login");
  };

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



  return (
    <div data-v-72d7289a="" class="page-container">
      <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
        <div class="van-pull-refresh__track" style={{transitionDuration: '0ms'}}>
          <div class="van-pull-refresh__head"></div>
          <div data-v-4693b953="" class="container">
            <div data-v-4693b953="" class="banner">
              <img data-v-4693b953="" src="/img1757786439045/banner-Drfxc-fz.png" alt=""/>
                <div data-v-4693b953="" class="abs">
                  <div data-v-4693b953="" class="title">Currency Earning Center</div>
                  <p data-v-4693b953="">Do tasks and earn benefits</p>
                </div>
            </div>
            <div data-v-4693b953="" class="income">
              <div data-v-4693b953="" class="left">
                <div data-v-4693b953="" class="title">Total revenue</div>
                <div data-v-4693b953="" class="val">0 USDT</div>
              </div>
              <div data-v-4693b953="" class="right"><button data-v-4693b953="">Reward details</button></div>
            </div>
            <div data-v-4693b953="" class="fuli">
              <div data-v-4693b953="" class="cname">Popular Benefits</div>
              <ul data-v-4693b953="">
                <li data-v-4693b953="">
                  <div data-v-4693b953="" class="ico"><img data-v-4693b953="" src="/img1757786439045/ico-task-C3ehU6Fh.png" alt=""/></div>
                  <div data-v-4693b953="" class="flex1">
                    <div data-v-4693b953="" class="title">Task Center</div>
                    <p data-v-4693b953="">Make profits when doing tasks</p>
                  </div>
                </li>
                <li data-v-4693b953="">
                  <div data-v-4693b953="" class="ico"><img data-v-4693b953="" src="/img1757786439045/ico-lucky-S82ZvpGd.png" alt=""/></div>
                  <div data-v-4693b953="" class="flex1">
                    <div data-v-4693b953="" class="title">Cash carousel</div>
                    <p data-v-4693b953="">Draw blind boxes and draw grand prizes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem', right: '0.2rem'}}></div>
    </div>
    
    );
};

export default NodeDetails;
