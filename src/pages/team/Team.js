import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Api from "../../Requests/Api";
const Team = () => {

    const navigate = useNavigate();
      const back = () => {
      navigate(-1); // Navigate to /about route
    };
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
       case 'GenerationData':
        navigate('/GenerationData');
        break;
      case 'task':
        navigate('/task');
        break;
      case 'assets':
        navigate('/assets');
        break;
         case 'profile':
                navigate('/profile');
                break;
      default:
        navigate('/not-found'); // fallback route
    }
  };
  // const navigate = useNavigate();
  // const copyToClipboard = () => {
  //   const textToCopy = document.getElementById('textToCopy').innerText;
  //   navigator.clipboard.writeText(textToCopy).then(() => {
  //     alert('Copied to clipboard!');
  //   });
  // };



  // const [income, setIncome] = useState([]);
  // const [error, setError] = useState("");
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
    <div data-v-72d7289a="" data-v-2f0eba42="" class="page">
      <div data-v-72d7289a="" class="headers">
        <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
          <div data-v-7401f0fe="" class="left">
            <div data-v-7401f0fe="" class="back" onClick={() => back()} ><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
          </div>
          <div data-v-7401f0fe="" class="title overflow1">Team</div>
          <div data-v-7401f0fe="" class="right"></div>
        </div>
      </div>
      <div data-v-72d7289a="" class="page-container">
        <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
          <div class="van-pull-refresh__track" style={{transitionDuration: '0ms'}}>
            <div class="van-pull-refresh__head"></div>
            <div data-v-2f0eba42="" class="team container">
              <div data-v-922e37e2="" data-v-2f0eba42="" class="box">
                <div data-v-922e37e2="" class="bot">
                  Team List
                  <div data-v-922e37e2="" class="bt"><img data-v-922e37e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEdSURBVHgB7VI7TsQwEB0nRFGUhgIhGiTfhKvASajpuAHhErR7DxrEISLbRLF5E9lZi2zDarUudp70NOPx572ZhEggOA00+EyFoMEvMIBvVAC7KB5KmdC0n4CYEBNi4t8mVJY/gP4A5xhDnrdtu+TOubXedZ03xvi+7/04jr5pmvtpmj6wd5vpDODTXwNaKfWJaEAbQrAcmajbVENueO29t1VVmXjGpXuxvsS6rm2sX8/z/IJ4d8hERduJKEYqQDiNbzUMEYKIiutlD+ulzoB4/magLdb3r7LiN7Rc7Ii7dWnN3ePxn9hlOuNSzl1z5Dvodt0Hb0DuPv8E7+AjnQGatj/hQGeCFnERvxhxxq6kOEPTfgIDFYIGX0kgOAK/HnXP0UxC6CQAAAAASUVORK5CYII=" alt=""/></div>
                </div>
                <div data-v-922e37e2="" class="total">
                  <div data-v-922e37e2="" class="item">
                    <div data-v-922e37e2="" class="title">Team size</div>
                    <div data-v-922e37e2="" class="num">0/0</div>
                    <div data-v-922e37e2="" class="add"><img data-v-922e37e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBrZO/FcIgEMbviJ2NIzgCbmAKa93AJs9nmQ1CNoidRQozgrUFjsAIGSELCCIa1AeBvKdfyR2/j/sDwo+il2wJCRTeoMIG4Q/SJgyI16QkwYt8t6U8KyAisaoZKHXwxUgIDlKeQAKLmVC+nwOS9WgDC+8VMDFweeO64fPXURc0cOABExeOLZDJQueWfQ4G4QqF7u35a4AEmEjr0g9PUpEeW8N6Dv5t4IUnU32h6pwtIVCBxM0Q/LNCjMFt8uAq+uE2aj4KAR6CD5uE4aZYvcNX3ecmBn/I7LsdYBzuvI7yfDYyNzdDHqE78zeThnude9kAAAAASUVORK5CYII=" alt=""/>+0</div>
                  </div>
                  <div data-v-922e37e2="" class="item">
                    <div data-v-922e37e2="" class="title">Team Performance</div>
                    <div data-v-922e37e2="" class="num">0</div>
                    <div data-v-922e37e2="" class="add"><img data-v-922e37e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBrZO/FcIgEMbviJ2NIzgCbmAKa93AJs9nmQ1CNoidRQozgrUFjsAIGSELCCIa1AeBvKdfyR2/j/sDwo+il2wJCRTeoMIG4Q/SJgyI16QkwYt8t6U8KyAisaoZKHXwxUgIDlKeQAKLmVC+nwOS9WgDC+8VMDFweeO64fPXURc0cOABExeOLZDJQueWfQ4G4QqF7u35a4AEmEjr0g9PUpEeW8N6Dv5t4IUnU32h6pwtIVCBxM0Q/LNCjMFt8uAq+uE2aj4KAR6CD5uE4aZYvcNX3ecmBn/I7LsdYBzuvI7yfDYyNzdDHqE78zeThnude9kAAAAASUVORK5CYII=" alt=""/>+0</div>
                  </div>
                  <div data-v-922e37e2="" class="item">
                    <div data-v-922e37e2="" class="title">Personal performance</div>
                    <div data-v-922e37e2="" class="num">0</div>
                    <div data-v-922e37e2="" class="add"><img data-v-922e37e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBrZO/FcIgEMbviJ2NIzgCbmAKa93AJs9nmQ1CNoidRQozgrUFjsAIGSELCCIa1AeBvKdfyR2/j/sDwo+il2wJCRTeoMIG4Q/SJgyI16QkwYt8t6U8KyAisaoZKHXwxUgIDlKeQAKLmVC+nwOS9WgDC+8VMDFweeO64fPXURc0cOABExeOLZDJQueWfQ4G4QqF7u35a4AEmEjr0g9PUpEeW8N6Dv5t4IUnU32h6pwtIVCBxM0Q/LNCjMFt8uAq+uE2aj4KAR6CD5uE4aZYvcNX3ecmBn/I7LsdYBzuvI7yfDYyNzdDHqE78zeThnude9kAAAAASUVORK5CYII=" alt=""/>+0</div>
                  </div>
                  <div data-v-922e37e2="" class="item">
                    <div data-v-922e37e2="" class="title">Team Benefits</div>
                    <div data-v-922e37e2="" class="num">0</div>
                    <div data-v-922e37e2="" class="add"><img data-v-922e37e2="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAMCAYAAAB4MH11AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADtSURBVHgBrZO/FcIgEMbviJ2NIzgCbmAKa93AJs9nmQ1CNoidRQozgrUFjsAIGSELCCIa1AeBvKdfyR2/j/sDwo+il2wJCRTeoMIG4Q/SJgyI16QkwYt8t6U8KyAisaoZKHXwxUgIDlKeQAKLmVC+nwOS9WgDC+8VMDFweeO64fPXURc0cOABExeOLZDJQueWfQ4G4QqF7u35a4AEmEjr0g9PUpEeW8N6Dv5t4IUnU32h6pwtIVCBxM0Q/LNCjMFt8uAq+uE2aj4KAR6CD5uE4aZYvcNX3ecmBn/I7LsdYBzuvI7yfDYyNzdDHqE78zeThnude9kAAAAASUVORK5CYII=" alt=""/>+0</div>
                  </div>
                </div>
              </div>
              <div data-v-ac4b19a3="" data-v-2f0eba42="" class="team-income">
                <div data-v-ac4b19a3="" class="income-top">
                  <div data-v-ac4b19a3="" class="top-head">
                    <div data-v-ac4b19a3="" class="title">Data View</div>
                    <div data-v-ac4b19a3="" class="time" onClick={() => handleNavigation('GenerationData')}>all<img data-v-ac4b19a3="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC5SURBVHgBlZPtDQIhDIb5WMARHMERzn+X24UwgucEhBBmgX+emzgJ2F6EeKJHfZOStnmfkLQpYyDn3IDBCBLe+1PO+YYB0KULpJQOpQBo7kEyhPAYx5GDhldvmKaJQf/+FcAnxrhQIVkSKiTfCwokP7/sQQ3QgzjbkbV2BqiOGfKz2AOEELnp/TLjAnGRpYb8qpRaONWstV5r/o+5AXrmDUAxV4BqXgE8HLwFihm1GWvPXGWMOVJP9AkPbKMKbHOE2AAAAABJRU5ErkJggg==" alt=""/></div>
                  </div>
                  <div data-v-ac4b19a3="" class="boxs">
                    <div data-v-ac4b19a3="" class="chart-dom">
                      <div data-v-ac4b19a3="" _echarts_instance_="ec_1758520723024" style={{width: '100%', height: '4rem', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'}}>
                        <div style={{position: 'relative', width: '439px', height: '200px', padding: '0px', margin: '0px', borderWidth: '0px'}}>
                          <canvas data-zr-dom-id="zr_0" width="658" height="300" style={{position: 'absolute', left: '0px', top: '0px', width: '439px', height: '200px', userSelect: 'none', WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)', padding: '0px', margin: '0px', borderWidth: '0px'}}></canvas>
                        </div>
                      </div>
                      <div data-v-ac4b19a3="" class="chart-dom-cent"><span data-v-ac4b19a3="">0</span><span data-v-ac4b19a3="">Team Performance</span></div>
                    </div>
                    <div data-v-ac4b19a3="" class="chart-list">
                      <div data-v-ac4b19a3="" class="cl-item active">
                        <div data-v-ac4b19a3="" class="in"><span data-v-ac4b19a3=""></span></div>
                        Team Performance
                      </div>
                      <div data-v-ac4b19a3="" class="cl-item">
                        <div data-v-ac4b19a3="" class="in"><span data-v-ac4b19a3=""></span></div>
                        Team Benefits
                      </div>
                      <div data-v-ac4b19a3="" class="cl-item">
                        <div data-v-ac4b19a3="" class="in"><span data-v-ac4b19a3=""></span></div>
                        Team size
                      </div>
                      <div data-v-ac4b19a3="" class="cl-item">
                        <div data-v-ac4b19a3="" class="in"><span data-v-ac4b19a3=""></span></div>
                        Team Recharge
                      </div>
                      <div data-v-ac4b19a3="" class="cl-item">
                        <div data-v-ac4b19a3="" class="in"><span data-v-ac4b19a3=""></span></div>
                        Team Withdrawal
                      </div>
                    </div>
                    <div data-v-ac4b19a3="" class="valid-num">
                      <div data-v-ac4b19a3="" class="item">
                        <div data-v-ac4b19a3="" class="text">Effective number of people in a generation</div>
                        <div data-v-ac4b19a3="" class="num">0</div>
                      </div>
                      <div data-v-ac4b19a3="" class="item">
                        <div data-v-ac4b19a3="" class="text">Effective number of people in the second generation</div>
                        <div data-v-ac4b19a3="" class="num">0</div>
                      </div>
                      <div data-v-ac4b19a3="" class="item">
                        <div data-v-ac4b19a3="" class="text">Effective number of people in three generations</div>
                        <div data-v-ac4b19a3="" class="num">0</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-86cad97a="" data-v-2f0eba42="" class="team-generations">
                <div data-v-86cad97a="" class="generations-chart">
                  <div data-v-86cad97a="" class="title">Team data within three generations</div>
                </div>
                <div data-v-86cad97a="" class="generations-data">
                  <div data-v-86cad97a="" class="data-list">
                    <div data-v-86cad97a="" class="item">
                      <div data-v-86cad97a="" class="item-l">
                        <div data-v-86cad97a="" class="logo"><img data-v-86cad97a="" src="data:image/png;base64,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" alt=""/></div>
                        <div data-v-86cad97a="" class="text">Generation data</div>
                        <div data-v-86cad97a="" class="bt" onClick={() => handleNavigation('GenerationData')}>more</div>
                      </div>
                      <div data-v-86cad97a="" class="item-r">
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Team size</div>
                          <div data-v-86cad97a="" class="num">0/0</div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Cumulative recharge</div>
                          <div data-v-86cad97a="" class="num">0</div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Cumulative income</div>
                          <div data-v-86cad97a="" class="num">0 MCE </div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Team Rebate</div>
                          <div data-v-86cad97a="" class="num">0 MCE </div>
                        </li>
                      </div>
                    </div>
                    <div data-v-86cad97a="" class="item">
                      <div data-v-86cad97a="" class="item-l">
                        <div data-v-86cad97a="" class="logo"><img data-v-86cad97a="" src="data:image/png;base64,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" alt=""/></div>
                        <div data-v-86cad97a="" class="text">Second generation data</div>
                        <div data-v-86cad97a="" class="bt" onClick={() => handleNavigation('GenerationData')}>more</div>
                      </div>
                      <div data-v-86cad97a="" class="item-r">
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Team size</div>
                          <div data-v-86cad97a="" class="num">0/0</div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Cumulative recharge</div>
                          <div data-v-86cad97a="" class="num">0</div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Cumulative income</div>
                          <div data-v-86cad97a="" class="num">0 MCE </div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Team Rebate</div>
                          <div data-v-86cad97a="" class="num">0 MCE </div>
                        </li>
                      </div>
                    </div>
                    <div data-v-86cad97a="" class="item">
                      <div data-v-86cad97a="" class="item-l">
                        <div data-v-86cad97a="" class="logo">
                        <img data-v-86cad97a="" src="data:image/png;base64,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" alt=""/></div>
                        <div data-v-86cad97a="" class="text">Three generations of data</div>
                        <div data-v-86cad97a="" class="bt" onClick={() => handleNavigation('GenerationData')}>more</div>
                      </div>
                      <div data-v-86cad97a="" class="item-r">
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Team size</div>
                          <div data-v-86cad97a="" class="num">0/0</div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Cumulative recharge</div>
                          <div data-v-86cad97a="" class="num">0</div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Cumulative income</div>
                          <div data-v-86cad97a="" class="num">0 MCE </div>
                        </li>
                        <li data-v-86cad97a="">
                          <div data-v-86cad97a="" class="text">Team Rebate</div>
                          <div data-v-86cad97a="" class="num">0 MCE </div>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem', right: '0.2rem'}}></div>
      </div>
      <div data-v-72d7289a="" class="footer">
      </div>
    </div>
  );
};

export default Team;