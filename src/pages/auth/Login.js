import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../Requests/Api";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      console.log("sagar");
      const response = await Api.post("/login", {
        email,
        password,
      });

      if (response.data.status) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard"); // dashboard ya home page
      } else {
        toast.error(response.data.error || "Login failed!");
      }
    } catch (error) {
      toast.error(error.response?.data?.error || "Server error!");
    } finally {
      setLoading(false);
    }
  };
const back = () => {
    navigate(-1);
  };
  return (
    <div data-v-72d7289a="" data-v-9c414265="" class="page">
      <div data-v-72d7289a="" class="headers">
        <div data-v-293fd8ae="" data-v-9c414265="" class="user-header">
          <div data-v-293fd8ae="" class="left">
            <div data-v-293fd8ae="" class="back"onClick={back}><img data-v-293fd8ae="" class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" /></div>
          </div>

          <div data-v-293fd8ae="" class="right">
            <div data-v-293fd8ae="" class="lang"><img data-v-293fd8ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIkSURBVHgB3ZiNdcIgEMf/dQJHYAQ3kE5QR8gGuoFsoBvoBq0T2E5gN0g2sBtYTskrOTCBAD5ff+/dMx/AnXdwB3nBeKZaFlrmWmZahHlG/GhptHxr+dLyYZ49BKFlo+Ws5RIhO9O3GFNj2CVRNojgJbCd0HKE6wEKG4XxgFtI7TBS2Cn8C8941PbV/CYjtNToeoHCq/A35/qgNpVnjBoZQi48A28RZphvrD0yG8mNU0hHwTVyzB/GGvmNa1FIWDiEgJsicrNlOkRE36tBWSezBwqrnUu3MR3tf1ahHArdzBA0FyskuD4S7sWKN5h4Os2t6zYBl6JN9D7dV3wGzqzrT5TncEe3g4Bba99RNsQStxJqz8OdT+cM/buTNfKz7NFXw/KmgFsxfCKRDxmg72xs6+S8tmLQABUz/Ih88LCujE4Ft+53jFBsIMk6jKqZDJ5n+XZMoRvqwTDa73tXWSCSjdn7foI4cngwilgDH86/MzDH0TFqDDKwse4le89XWIN0GnYv2f2ct+Ubx7XpRLnJri6l8iClksroXMOzURYIO4RL5EMG6Kth1eQZ+svdCvlR6C9zTs4VuB0La6sR7WYkyiGMDl7eBJ4IWoid0mbzDHnwzbpu8GQIPO6AFg3VdXth1ihQ65cY3uye4HpGmOdFvVdhOJf5CoDv42fwoT2GU6SB92SPQqQa1m71i1GPNOqI8I+fSawQZ1xRb92jwvBcrFOM+wXp7n2Zcm6yKQAAAABJRU5ErkJggg==" /></div>

            <div data-v-293fd8ae="" class="lang"><img data-v-293fd8ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMmSURBVHgBxVmLceMgEH1JBboKjlQQd3BcBymBDpKrIOrAugrkq+DcgZwK5KtASgV2BzmIVmO0LAj5M3kzbyQLWJ6WBVb4DudDW64sf9C1IDocLXviP8sd8eZwAl4tD5YfC9lZ1pYKN4ATtj5DVIxXFfqMPI81lk8Yhr7NqO88anAhJK8dBAEboe1GeIFOsLfGGSjIIBdWUpnfUZew0bJ6BdngIlucJlgWuIeccUVlhpWphB3N6hp6rhB6s0Em1kLDIiK+zrDXQBYhjdLscBuk32rFyjXmoWfacJEvMUMKYWzxuKgwH3sSfLslK+MxfUAkHmvMxxYP+oau0uwcZ3vDyqVYU5guZWupwkfkLTWG3aPB/NqWy5ZErLx+SlZn4sUa4dCaK4tKiTXU54E76Y4EdjgN6Y7uFeJwycDW8h1DQnAkcijiI4aRSK11PdlYeX18A8JZJpHH2RbLsUnYi1HfI71U7Cx/Wj7QG47YYzl6dv9Atv8k2nx68y/kuNCssj+DDZbDIL5EKcge3fKOHTeQY8UPYI3leEoIHLFBGFqTjttEB5PYwHJoZiOGxqtzcDHoe+sXvh6/vfvinhUuSnluhMlydc8ePOPr4W9zRy5QI55C9d79pZ6WFvWC+va3v94J5GuawXRnQcTYUii/Y1amMUwOw56/O4FvkI05kTVOM7Zn5UuhvPsjE+a4Etrsx0pLt7pYGKTgbwgtMre6MVnwk8Q93atEZ84DOwynBj3CIQNOJw3K8juGhXouWXDU3u+HsbD0VI9iDfK+by9lg1O6FR2lgjUqvTIXG9WVxTbUh/b6eWV1FBgq5sWgAqbbUEe/W8gnDx2mnwV+/HEo1rYW6gQZbYcwZkpWngtfYCX02zG7KmboBeFQ+NBYnjTwNnw5aVi5mTNYCSKLiMEG86ghD6/04V4hE7yh73aDfC8qyN5RCNfBVKoXgB/8jHxFGDOpgx8eW7ED0AZn7u8V5NnJPVwLbWuEHpJme/awxmCQty2N3zFPyPuedmJfcCUohN8Ll9B57SbJsSKhOR6VPFYuFXaH86GJjzidIPh/Qzi6xOONrjucgf+b23/QDo5kCwAAAABJRU5ErkJggg==" /></div>
          </div>
        </div>
      </div>
      <div data-v-72d7289a="" className="page-container">
        <div data-v-72d7289a="" className="scroll" id="pageScroll">
          <div data-v-9c414265="" className="user">
            <div data-v-9c414265="" className="welcome-text">
              <img data-v-9c414265="" src="./static/img1757786439045/download.png" alt="" />
              <div data-v-9c414265="" className="box">
                <h2 data-v-9c414265="">Hello</h2>
                <p data-v-9c414265="">Welcome to Minecore</p>
              </div>
            </div>
            <div data-v-9c414265="" className="user-con">
              <div data-v-9c414265="" className="boxs">
                <div data-v-9c414265="" className="item" style={{ display: 'none' }}>
                  <div data-v-9c414265="" className="title">mailbox</div>
                  <div data-v-7700cd8a="" data-v-9c414265="" className="inp-con">
                    <div data-v-7700cd8a="" className="inp">
                      <input data-v-7700cd8a="" type="text" maxlength="50" placeholder="Please enter your email address" /></div>
                  </div>
                </div>
                <div data-v-9c414265="" className="item">
                  <div data-v-9c414265="" className="title">Email</div>
                  <div data-v-a2e94f62="" className="inp-con">
                    <div data-v-a2e94f62="" className="inp">
                      <div data-v-a2e94f62="" className="set_area">

                        <i data-v-a2e94f62="" className="van-badge__wrapper van-icon van-icon-arrow-down icon">

                        </i>
                      </div>
                      <input data-v-a2e94f62="" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter your email address" />
                    </div>
                  </div>

                </div>
                <div data-v-9c414265="" className="item">
                  <div data-v-9c414265="" className="title">password</div>
                  <div data-v-877e6773="" data-v-9c414265="" className="inp-con">
                    <div data-v-877e6773="" className="inp">
                      <input data-v-877e6773="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} maxlength="100" placeholder="Please enter password" />
                      <div data-v-877e6773="" className="icon">
                        <img data-v-877e6773="" src="./static/img1757786439045/download (1).png" /></div>
                    </div>
                  </div>
                  <div data-v-9c414265="" className="save-forgot">
                    <div data-v-2d8b0b61="" data-v-9c414265="" role="checkbox" className="van-checkbox" tabindex="0" aria-checked="false">
                      <div className="van-checkbox__icon van-checkbox__icon--square" style={{ fontSize: '0.32rem' }}><img data-v-2d8b0b61="" className="img-icon" src="./static/img1757786439045/download (2).png" /></div>
                      <span className="van-checkbox__label">Remember account</span>
                    </div>
                    <div data-v-9c414265="" className="forgot"> <Link to="/forgot-password">Forgot password？</Link>  </div>
                  </div>
                </div>
              </div>
              <div data-v-9c414265="" className="bot">
                <button
                  data-v-34dc7cc4=""
                  data-v-9c414265=""
                  onClick={handleLogin}
                  className={`van-button van-button--default van-button--normal com-btn on ${loading || !email || !password ? "van-button--disabled" : ""
                    }`}
                  disabled={loading || !email || !password}
                >
                  <div className="van-button__content">
                    <span className="van-button__text">
                      {loading ? "Logging in..." : "Login"}
                    </span>
                  </div>
                </button>
                <p data-v-9c414265="">No account？<span data-v-9c414265=""><Link to="/register">Register now</Link></span></p>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>
      </div>
    </div>
  );
};

export default Login;
