import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Api from "../../Requests/Api";
// import { FaCopy } from 'react-icons/fa'; // Import the copy icon
// import { toast } from "react-toastify";





const Refer = () => {

  const navigate = useNavigate();
    const back = () => {
    navigate(-1); // Navigate to /about route
  };

    const [userDetails, setUserDetails] = useState(null);

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

  const [inviteLink, setInviteLink] = useState(null);
  const [username, setUsername] = useState(null);
  const [serR, setServerR] = useState(null);
  const [income, setIncome] = useState([]);

  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await Api.get(`/getinvate`);

      if (response.data && response.data.data && response.data.data.username) {

        const fetchedUsername = response.data.data.username;

        setUsername(fetchedUsername);

        // Construct the invite link with the username
        const inviteLink = `${window.location.origin}/register?${response.data.data.username}`;
        setInviteLink(inviteLink);
      } else {
        setInviteLink(null);
      }

      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching user data");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  // const copyToClipboard = (text) => {
  //   // Create a dummy input to copy text from
  //   const dummyInput = document.createElement('input');
  //   document.body.appendChild(dummyInput);
  //   dummyInput.value = text;
  //   dummyInput.select();
  //   document.execCommand('copy'); // Execute the copy command
  //   document.body.removeChild(dummyInput); // Remove the dummy input element
  //   toast.success('Invite link copied to clipboard!');
  // };


  // const fetchRef = async () => {
  //   try {
  //     const response = await Api.get(`/totalRef`); // Pass a refid if 
  //     console.log(response.data);
  //     if (response.data?.success) {
  //       setServerR(response.data.totalIncome || 0);
  //     }
  //   } catch (error) {
  //     console.error("Something went wrong fetching the wallet:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchteam();
  // }, []);


  // const fetchteam = async () => {
  //   try {
  //     const response = await Api.get('/team');
  //     if (response.data) {
  //       setIncome(response.data);
  //     }
  //     // console.log(response.data)
  //   } catch (err) {
  //     setError(err.response?.data?.error || "Error fetching income");
  //   }
  // };
  return (

    <div data-v-72d7289a="" data-v-eb8627a1="" className="page">
      <div data-v-72d7289a="" className="headers">
        <div data-v-7401f0fe="" data-v-72d7289a="" className="inside-header">
          <div data-v-7401f0fe="" className="left">
            <div data-v-7401f0fe="" className="back"onClick={() => back()} ><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" className="icon" /></div>
          </div>
          <div data-v-7401f0fe="" className="title overflow1">Invite friends</div>
          <div data-v-7401f0fe="" className="right">
            <div data-v-eb8627a1="" className="headerRight"><img data-v-eb8627a1="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIgSURBVHgB7ZjhVcIwEMf/+BgAN4gTgBMQJ4AN6AbiBOAE4gTFDXQC6gTFCdoNYAPN2fR5pG2atgH80N97B6G5O+4lvcu1QE93Vkq+rySruuAGWvGaDGyTN0oiXI/XOoU8eonLc1SyR0/PPydPEoFmpDXzUslMfwslI309TwySDzhWkBc0L7Bhha9ASdLAT6JtrLQ9BThCSdzBVwLLLq5bOFwz+4WSQ4nOTuvNkW11Lms9Z+oftK5X5hWBSQdboWRbYr+AJwSKK7dEc5YorqSABxLD8QTtmRi+YnQkQPeVMzFXMkAH+OqFNboTrROgHp489B+/hZqKqC17qLi+s99SO8q5g71w8xJyq/1VIQ3fD/ThUr+40abiehXcj3TQ56u4oYZVOBhJNh6z8Sf8w31Oh+rjGVntGVmMeOfLszWCf3gTK9CCplvWVF9ymxtclrIjzlqi2gTIs3CE7swsc8c2AaZs7HJ6vNXMm4km2Xg/RHPIYR7Y1EE/wGn3Y5Iav7nPLyrUAvVVfsscSRSLaQQ/COgThPl26oATwxG3cSnWroRl/3loEWAA/83CI0qaBdriuZ6sgrKWirn5FoCOSJ4k92j/pmCC0xYrRXbGd0LAT8Nqrpy3hpUIULwdQrif77sS+5POaoDuzHVQZtGOkJWkiF0jnTH+HqA4dCs9IasY3hFo9jxsSgyP22ojwBke3M+BRNbY0j3GE4nGsZ6T6LkAP5xrSymCGOC9AAAAAElFTkSuQmCC" alt="" /></div>
          </div>
        </div>
      </div>
      <div data-v-72d7289a="" className="page-container">
        <div data-v-72d7289a="" className="scroll" id="pageScroll">
          <div data-v-eb8627a1="" className="invite">
            <div data-v-eb8627a1="" className="i-top">
              <div data-v-eb8627a1="" className="title"><span data-v-eb8627a1="">Invite friends</span><span data-v-eb8627a1="">Earn coins together</span></div>
              <div data-v-eb8627a1="" className="til">Mining mobile mining is your wealth password</div>
              <div data-v-eb8627a1="" className="pic"><img data-v-eb8627a1="" src="./static/img1757786439045/pic-Dj0nMbn9.png" alt="" /></div>
            </div>
            <div data-v-eb8627a1="" className="i-wrap">
              <div data-v-eb8627a1="" className="i-cen">
                <div data-v-eb8627a1="" className="item">
                  <div data-v-eb8627a1="" className="item-title">Invitation link</div>
                  <div data-v-eb8627a1="" className="line"> {inviteLink ? inviteLink : "Invite link not available"} <img data-v-eb8627a1="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANRSURBVHgB7ZuBdaJAEIZH3xVAB0cqiKkgWEGug0sqMB2oFehVEOzgrECsQK4CSAVnB3Pzw+ojHkRlWVzYfO+Nq8BDZpid3Z3dHZBhmNmXIhC5F/GVeKoskorsVflHJIYMBoOUuoYoHYgsRBLWJxF5wz3JZuQBPZGpyF82RyLyzLlX2UFLip+C/1rc3BDyABNuV/FTEpFnahtYXmTD9pBwW97At3/rVeCZXskknNc725mSCThvirrC26V6DS65SG64k2JE3QKdqIdzFw3PXaCs2TXlwegaTyiF8/a96yyoDpxH+75Q2ToMKpT3pUC996gfYJD1UDawqooBG+qP8gC6lMaD/wzAedfSp/4RlFWFD1VAuT7evk8NEEURbbdbMsHT0xONRlc3TqgKd1IV9qVnucGe3m63Y9zSpGw2G67BrKjzsKC8L8UzNcR6vSbT1PQutG7H+PatcCIgQ4HP87w67lpKHMe03+9JA+iIWDDDj6IBzAwiBCgv7kpNMB6Ps9iiyYSUAbIqwHm+zSd38JTORw/4SRqURfviW0rTlObzOdWhZrS/hB8iUfaNNbK3bUf7IAiOx2ezGWuQQPehiv4+1cTiaH8OpPV8xIAuDnWbInDdACMY4J7cJasCPrnLdxigT8Pea/Fc9wD/bFK073wZgBwHBkjJXVIYQGtw3XH2rnvAOwzwTu4SIx8Qk+WEYXjMLyAl1iCZASKyHCRUIAaIh2q6KKUOgmyRBil0P6TEkNWYkKVIFiiTIo+Pj7qpsggfBwP8JssNMJ02nrRe4SPrCYorRORWfyBVOn/oCv8idzimqIsGWJIbXgAdo8OPowHUjOnVXoBgZBrNaH/KqrhQ4nR6HNkh5MuvyhKhc2IqPQ4Dn7YAGqQi40oDAM4XEdRbWGQ/L6J8WDxQtUYIM5kB9QtE/rvTg1UJkRfqV0CELuOyE6UGUHWk3mymncxrbb2RqrDk7jMjHeQGIXeX8Jx+X4ul6QLUjVbUHVaXKH814glaKxJaYkkmkT94ZVe3zBSMgNUVCdvDhm+xhY7zTYwJ34723vonRoA3LLn9jZOIR/ZM7StDmPYI+xQvg/PN0yE3t3kaHhaQAS7qCOnAeXAaKTlsoT+3fR6zVZgBiUxvn/8HCzQN1AEw0DwAAAAASUVORK5CYII=" alt="" /></div>
                </div>
                <div data-v-eb8627a1="" className="item">
                  <div data-v-eb8627a1="" className="item-title">Invitation Code</div>
                  <div data-v-eb8627a1="" className="line">{userDetails?.username} <img data-v-eb8627a1="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANRSURBVHgB7ZuBdaJAEIZH3xVAB0cqiKkgWEGug0sqMB2oFehVEOzgrECsQK4CSAVnB3Pzw+ojHkRlWVzYfO+Nq8BDZpid3Z3dHZBhmNmXIhC5F/GVeKoskorsVflHJIYMBoOUuoYoHYgsRBLWJxF5wz3JZuQBPZGpyF82RyLyzLlX2UFLip+C/1rc3BDyABNuV/FTEpFnahtYXmTD9pBwW97At3/rVeCZXskknNc725mSCThvirrC26V6DS65SG64k2JE3QKdqIdzFw3PXaCs2TXlwegaTyiF8/a96yyoDpxH+75Q2ToMKpT3pUC996gfYJD1UDawqooBG+qP8gC6lMaD/wzAedfSp/4RlFWFD1VAuT7evk8NEEURbbdbMsHT0xONRlc3TqgKd1IV9qVnucGe3m63Y9zSpGw2G67BrKjzsKC8L8UzNcR6vSbT1PQutG7H+PatcCIgQ4HP87w67lpKHMe03+9JA+iIWDDDj6IBzAwiBCgv7kpNMB6Ps9iiyYSUAbIqwHm+zSd38JTORw/4SRqURfviW0rTlObzOdWhZrS/hB8iUfaNNbK3bUf7IAiOx2ezGWuQQPehiv4+1cTiaH8OpPV8xIAuDnWbInDdACMY4J7cJasCPrnLdxigT8Pea/Fc9wD/bFK073wZgBwHBkjJXVIYQGtw3XH2rnvAOwzwTu4SIx8Qk+WEYXjMLyAl1iCZASKyHCRUIAaIh2q6KKUOgmyRBil0P6TEkNWYkKVIFiiTIo+Pj7qpsggfBwP8JssNMJ02nrRe4SPrCYorRORWfyBVOn/oCv8idzimqIsGWJIbXgAdo8OPowHUjOnVXoBgZBrNaH/KqrhQ4nR6HNkh5MuvyhKhc2IqPQ4Dn7YAGqQi40oDAM4XEdRbWGQ/L6J8WDxQtUYIM5kB9QtE/rvTg1UJkRfqV0CELuOyE6UGUHWk3mymncxrbb2RqrDk7jMjHeQGIXeX8Jx+X4ul6QLUjVbUHVaXKH814glaKxJaYkkmkT94ZVe3zBSMgNUVCdvDhm+xhY7zTYwJ34723vonRoA3LLn9jZOIR/ZM7StDmPYI+xQvg/PN0yE3t3kaHhaQAS7qCOnAeXAaKTlsoT+3fR6zVZgBiUxvn/8HCzQN1AEw0DwAAAAASUVORK5CYII=" alt="" /></div>
                </div>
              </div>
              <div data-v-eb8627a1="" className="i-bot">
                <div data-v-eb8627a1="" className="ib-title">Warm reminder</div>
                <p data-v-eb8627a1="">
                  <p>V1 gets a first-tier rebate of 8%<br/> V2 gets the second-tier rebate, 8% for the first generation and 5% for the second generation<br/> V3 gets three levels of rebates: 8% for the first generation, 5% for the second generation, and 3% for the third generation.<br/> V4 and above three-tier rebate plus unlimited generation 1%</p>
                  </p>
                  </div>
                  </div>
                  <div data-v-eb8627a1="" className="i-bt">
                    <div data-v-eb8627a1="" className="share">Download poster</div>
                    <div data-v-eb8627a1="" className="share">Share pictures</div>
                  </div>
              </div>

            </div>
            <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
          </div>

        </div>
        );
};

        export default Refer;