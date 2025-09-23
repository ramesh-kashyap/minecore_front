import React, { useState, useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
const Trade = () => {
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
         case 'exchangerecord':
        navigate('/exchange-record');
        break;
      default:
        navigate('/not-found'); // fallback route
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div data-v-72d7289a="" data-v-5d7bd4db="" className="page">
      <div data-v-72d7289a="" className="headers">
        <div data-v-349a15ae="" data-v-5d7bd4db="" className="main-header">
          <div data-v-349a15ae="" className="left overflow1" onClick={() => handleNavigation('profile')}><img data-v-349a15ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZXRDUBAEESHCpRwJShBCTpSyrWiAyUoQQmsOB+Evbhkycm8ZBKx3n7I5QbYqCSdZJQMEi9xiGPiuTCYTxkjy808fzHc45XFZt6kfDApi028IjxoFDfvTbxS0ivzT2YN7n9hrcimXovjyR+CGMPcW+8Hh+e87RGSH2x7sO0TPbY92PZse0IygW0Ptn2ix7YH2/5vbb8AJnhQUjyfYQ4AAAAASUVORK5CYII=" alt="" /></div>
          <div data-v-349a15ae="" className="center">Trading</div>
          <div data-v-349a15ae="" className="right" onClick={() => handleNavigation('exchangerecord')}>
            <div data-v-5d7bd4db="" className="headerRight"><img data-v-5d7bd4db="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7ZjtccIwDIbfch2AbuBOUEZwJ6DdgE5QNiCdoGxAOwF0AugEsEGyQdiAWhf7qhgnkZMQ/vDcvUe4yIosfykBbnTjzujdaI7hORp9Gy3rjCjAE64HBflQZzAy2uF6HJsMKINjI21/h2YDQZA3blyTO1wGWnAzoyejCf4XYIZiUfyg2D0yibMFir0wRosKX9poG+Fna9vUcmopDmVo3cHXykhVBfjVwiE/nmgI04BNbh9Mx+jMam47ErJP64JUkeLtcu9BewiGzQacBjo1QU+owAOWLfwkiMhkDP6cS9CeOc4XTydm6C84R+L51OgAH9q0wVahyJBCM1tUZFFBtigIjbieus7QAmiqmHTI9ydk+5RjCXn2gPhh41lMIAjOKeRAsmpjA+QJ2FJF/SFoxG0Uu96hfw4VzxITm5FYe83b3GNYaO/kJT5dv6Gctc7wo+1FYN80tzeevWb38hHiydi1EtjvIPdH8LM4azPEv8zJFM0r+RnVc4+G2B/eKbs+uNfOuqFyTjL7X6O8yz9CWBkLUCjvra9AuDbzxQOiDvF5uEJ/rBA4BHJBgCfPUYIeD3aLRkUBQgf53kZcJf/j0hjlzFMnFdqjEFeAiNA4LzTbVMMa59NMoyf8QpNExYcStB0jXKgk6JkE1RUQ7Q7uvZikUBS7dC8fIjgHBZJCXhn5orYaF0ahXCpJRFlMMPCnP4ViGNcID2Nu780lgV3q2wzHzT/iiNsHy4H5A4agZoLzoRbgAAAAAElFTkSuQmCC" alt="" /></div>
          </div>
        </div>
      </div>
      <div data-v-72d7289a="" className="page-container">
        <div data-v-72d7289a="" className="van-pull-refresh scroll" id="pageScroll">
          <div className="van-pull-refresh__track" style={{ transitionDuration: '0ms' }}>
            <div className="van-pull-refresh__head"></div>
            <div data-v-5d7bd4db="" className="container flash">
              <div data-v-5d7bd4db="" className="flash-box">
                <div data-v-5d7bd4db="" className="top">
                  <div data-v-5d7bd4db="">From</div>
                </div>
                <div data-v-5d7bd4db="" className="inp-val">
                  <div data-v-5d7bd4db="" className="cnt fljb"onClick={openPopup}>
                    <div data-v-5d7bd4db="" className="select"><img data-v-5d7bd4db="" className="icon" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250412/b0faba02c6e1dd72efd1965ba6c6b30d.png" alt="" /><span data-v-5d7bd4db="">MCE</span>
                      <img data-v-5d7bd4db="" className="select-down" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                    <div data-v-5d7bd4db="" className="inp">
                      <input data-v-5d7bd4db="" type="number" placeholder="0" />
                      <div data-v-5d7bd4db="">all</div>
                    </div>
                  </div>
                  <div data-v-5d7bd4db="" className="bot"  style={{ paddingBottom: '0.32rem' }}>
                    <div data-v-5d7bd4db="">Available balance:<span data-v-5d7bd4db="">0 MCE</span><span data-v-5d7bd4db="" className="cz">Recharge</span></div>
                  </div>
                </div>
              </div>
              <div data-v-5d7bd4db="" className="flash-ex">
                <img data-v-5d7bd4db="" src="data:image/png;base64,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" alt="" /></div>
              <div data-v-5d7bd4db="" className="flash-box">
                <div data-v-5d7bd4db="" className="top">
                  <div data-v-5d7bd4db="">To</div>
                </div>
                <div data-v-5d7bd4db="" className="inp-val">
                  <div data-v-5d7bd4db="" className="cnt fljb">
                    <div data-v-5d7bd4db="" className="select" onClick={openPopup}>
                      <img data-v-5d7bd4db="" className="icon" src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2c161d6ff1fdd3d4b8b19f51866e3a86.png" alt="" /><span data-v-5d7bd4db="">USDT</span>
                      <img data-v-5d7bd4db="" className="select-down" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB2SURBVHgB7dM7FcAgEETRkYCElYKkSIiDxEGkIAUJSEgooEiRH+ySZu45079iFyAiIl1b3t64BQqkI6BO0MnlxY6ACCWSlxoDBIp8Q4SHgelDwAxD698BVbgJCBjk6mPUD/GJ4PwxwwMqX0ISjD7hLVdGRETmDonQcWG2MxsLAAAAAElFTkSuQmCC" alt="" /></div>
                    <div data-v-5d7bd4db="" className="inp">
                      <input data-v-5d7bd4db="" type="number" placeholder="0" /></div>
                  </div>
                  <div data-v-5d7bd4db="" className="bot">
                    <div data-v-5d7bd4db="">Available balance:<span data-v-5d7bd4db="">0 USDT</span></div>
                  </div>
                </div>
              </div>
              <div data-v-5d7bd4db="" className="com-btn">
                <button data-v-34dc7cc4="" data-v-5d7bd4db="" type="button" className="van-button van-button--default van-button--normal com-btn on">
                  <div className="van-button__content">
                    <span className="van-button__text">Exchange</span>
                  </div>
                </button>
              </div>
              <div data-v-5d7bd4db="" className="tips-list">
                <div data-v-5d7bd4db="" className="item fljb">
                  <div data-v-5d7bd4db="" className="text">price</div>
                  <div data-v-5d7bd4db="" className="text"> 1 MCE = 0.132669 USDT</div>
                </div>
                <div data-v-5d7bd4db="" className="item fljb">
                  <div data-v-5d7bd4db="" className="text">rate</div>
                  <div data-v-5d7bd4db="" className="text">1%</div>
                </div>
                <div data-v-5d7bd4db="" className="item fljb">
                  <div data-v-5d7bd4db="" className="text">handling fee</div>
                  <div data-v-5d7bd4db="" className="text">0 USDT</div>
                </div>
                <div data-v-5d7bd4db="" className="item fljb">
                  <div data-v-5d7bd4db="" className="text">Estimated acquisition</div>
                  <div data-v-5d7bd4db="" className="text">0 USDT</div>
                </div>
                <div data-v-5d7bd4db="" className="item fljb">
                  <div data-v-5d7bd4db="" className="text">Price refresh</div>
                  <div data-v-5d7bd4db="" className="text">60seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>

        {isOpen && (
          <>
            <div class="van-overlay" role="button" tabindex="0" style={{ zIndex: '2010' }}></div>
            <div role="dialog" tabindex="0" class="van-popup van-popup--bottom" style={{ zIndex: '2010' }}>
              <div class="van-picker">
                <div class="van-picker__toolbar">
                  <button type="button" class="van-picker__cancel van-haptics-feedback" onClick={closePopup}>Cancel</button>
                  <div class="van-picker__title van-ellipsis">Select currency</div>
                  <button type="button" class="van-picker__confirm van-haptics-feedback">Confirm</button>
                </div>
                <div class="van-picker__columns" style={{ height: '264px' }}>
                  <div class="van-picker-column">
                    <ul class="van-picker-column__wrapper" style={{ transform: 'translate3d(0px, 110px, 0px)', transitionDuration: '0ms', transitionProperty: 'none' }}>
                      <li role="button" tabindex="0" class="van-picker-column__item van-picker-column__item--selected" style={{ height: '44px' }}>
                        <div class="van-ellipsis">USDT</div>
                      </li>
                    </ul>
                  </div>
                  <div class="van-picker__mask" style={{ backgroundSize: '100% 110px' }}></div>
                  <div class="van-hairline-unset--top-bottom van-picker__frame" style={{ height: '44px' }}></div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div data-v-72d7289a="" className="footer">
        <div data-v-70088780="" data-v-72d7289a="" className="main-footer">
          <div data-v-70088780="" className="item" onClick={() => handleNavigation('dashboard')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7VjhmdowDFX4+r90goYJSidoOkGvE5Sb4MIERycgTAA3Qa8TXDY4OkHTCZpOQJ9AAiXYToBc+HPv+4IdI9sPyRKSiV7RDSLqCPP5fDgYDO42m02C11iG13j/OZ1OV3QBLibJ5KIoukc3DYgVIPv9XLIXkQTBBASXdNDcnhSeoTwWKyFb0Ak4i6RHeyUILNBmIFGKXCJyiZE7Wasnk8TGY2z8g6ray7HxrU9DmDMRsnZOlqbplLomuVgs2DFmdDBjKVrJmuaCaIxmBrLfzDBr9XOT+VuRFPOy9hIzzJ779dTzhbVSrDW3Y1hnGvqhjSRdziFnb6Zn71SwVrHmE1XN73WqIEmY917Mqyjl7D1SBwDZDGTvzJDT/APfAlmWLWsE2Tk+dkWQgbVS/tG0C1kM1vAzyN9YuchDkM/MPryIGWb0QnCZXxSydpKUcLE0wreX/q21BfZeGe8vEKJG3Dkytw0R4nUr6gnYa4Iml9dYze46k4m0RZv41zX4aGkfCvvCbYWkBFxFQddBoR0Qfset17sh8I+uDGjyLbcVkjY+QeA9XQc2cyr4w6XJwiHcJ2LtwJp/uHWR1L869q5rEI1Nfxsnj0iC/S/PhL4Qm/5WYS5Nrk1/TD0DvvCBalxCZ5LRO0mzZ6lZVlCTGgL6gvjAsM7jiGQtTUqoX1jLFdrxBXMVaPRuTopr/1SXyO33sw7sI6mqHoYW5pSOUyw8vzlBdskyOcg9qRy/kx+JgwO9cUlyEMWC+somKMiNGzOHi6wZCOV0iLU8N67N4bHctVjNs8sgSaqGodgjs6116kUVhc9xgSeU2cfSlprwMnzmzrWj6ZILnMqB6AjPA4WxLX0l2y5cAnJUYnm1SvIXYjDbX9odZN5g1FQZyiYJnrGGLsmkWHPrFvP3FQFbiOsf/c5nbhZ8kEqOiU6YNwUgGlrRmZAbDkXlSAwC8x7tAm3CzLngyEAHU3NFkNvvg3U3hw4y5QTtylo+f43ma4L86LFYK9FxV+EXNSzE1yvP5PfwkkyoaAnXlaASdJbOba5ZYjq+aOoawYuv1rdq6r0g+4l2mvVqpA0p2l2pcObdyvtf0QX+A72LppsO8uSSAAAAAElFTkSuQmCC" /><span data-v-70088780="">Homepage</span></div>
          <div data-v-70088780="" className="item" onClick={() => handleNavigation('earn')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOtSURBVHgB7Zj/ddowEMcPXgdwNlAmqDtB3QlKJogzATBBnAmACepOkHSCqhPEnaDqBGWD9K6c6HFIlgTkv3zf41m29eOj091JBuBNl9Ekt+JqtarwMptMJh/x2uDP8Kst/hz+hpeXl6/L5dLChZUFudls7hFggcUqo7rDug8I28OFNAqJ1jNouUcs1lCuHmGRdbmFMxWFZMDv8H9ZvSwO/g2vg3hWY93PsHMDKXKBT+eCTgoACe4OB3SRNg22mWNxFnhNE9ry5J5ifRRBrtfrL3hp/T37WAfHYNV0Op0X+KsXWXiT67eTwMANWzEFSPVoMgZOl2N3cFACiVYkwMZ3slgsrgN1VnhZBPojl/gJu+V14rlMX0Y34gBbQw4k++Iv0fhOL4l2BVafmyN5Be5BBRk+6+bz+QNkQM445ZC2aMUrBagt6HgiFgqFY7U4FvVXpUCn6l7mQ5li/iV0BUjO/+HUHYZWiNqDcAu878jSkIA0oux8gdyAOoBDwLPzHwUM9SPHomDkLTgKGRRHsRd1fHOJnUSA3olHBlRQvlNtnKoMbP7GP+SU5GBEHBy33IdLtSGXwTYb3gzIKHO8X3tDTEcga25wK9+nEjD67i3n2RZ2k6MAecZBU/t/B7sTFakCkUE05JMoV2zF/TZHFoEEINbpA68qAh8DJatRGvP3fBY4hmTzWlGR0pF0Ygv5gDTopgQUDo3U+AA6ChxlLQk4jBwuZgFAiv6FCgoPaiCsQd2bICTnPauf42C/ISLeQTTgwP31AdD7UD+8kk48qoOQDHSjKhPIH4irlm09oBi8VyvUjPR1lNqCkOzEB0k2oX3HtNXpZMxngoMsAQWKJnNOsvtow/JVrK4KkJr9rhKABwdo2W9AcoLBPKnlfAEHeh+rROdNNbAHbQKA0Y80npgphZS+ZfQyKtA2BBoA7CCuWvVpk5AcANKR20T9NraUGYB6d7O+kDxgxHaBBChFsp/clk/e3Vg7zp1taNycU5DeBdpUAwKiAzMOdE3XsU8Dr0DutPt3kCH13bPlw66DC4m2SjqE+HvtGlnnSVoucUs7xuNYEBUCGvHJQnL462WdLEgKIAVaJ/bgEkCdAZZ6lbIgGXQdyYUGThCfO5/hOEU96brZf/15IVSvUgWpzzmxc/vgJ+1YiiqG5IG6yEmG8ir9QfADDvOr4R2LDtBGNyr6c6AQtGVQA6fLMuAwVulkSK8TYS0vr82pfDakl/8e4mU1cPwNP7Ab2JTl3vRa+gu6GGIYZECWCwAAAABJRU5ErkJggg==" /><span data-v-70088780="">Earn coins</span></div>
          <div data-v-70088780="" className="item" onClick={() => handleNavigation('mining')}><img data-v-70088780="" src="data:image/png;base64,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" /><span data-v-70088780="">Mining</span></div>
          <div data-v-70088780="" className="item on" onClick={() => handleNavigation('trade')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHgB7ZjhbYMwEIVfow7ABqUTlG7ACO0E7QjdIOoI2YBMEGUCskGSCcIGyQbkEDgiDlE4fBaH4k96PzACPfnwOxsgENDFS8dYRPolfWBc/klF142YdCCVCpQaUzPL5Lwxqgrb5BcUYpuMoJAZJsBTmTzBIxImqzz7xJ1M8wEnx45oZRmRMJ8fnJN9KVDP3qY1doKn2XwFnyXpD7ffYYy69H34wXUVWDwqwQEyZPBY7lHCnlvuyuSKtIYbb3CgVKTUmJpEx+GWe0dawI0U9eoezKMS5JAhxwTKzer13HLHqM8/fck6xuZw3FxLrcyqryfWu018qVndEa7bXkzaQuh4Ip11SWPsOODZ1JgassHgkEOglfpe3SK9PhzEpNBs8hL49g+rEjooSO/mQuNMVjP43R6wIyjDuOwbD17P8YGAK2e/IORor8M+tAAAAABJRU5ErkJggg==" /><span data-v-70088780="">Trading</span></div>
          <div data-v-70088780="" className="item" onClick={() => handleNavigation('assets')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgB7ZjhDYIwFIQP4wCMoBPoCLIBI7iBMIFugE4gG8gIjMIIbIDXhB9YtSlQCiTvSwi0peTou/ZRAEEQehN0C1mW7YIgePHyiIlpmiZK07S0uXejlWN4ENgXXWSIBbI1tNUMSQp3hLRShgEYRdIzORyh/K5OGMAGK8A0kiHf/gx36H6P29HtoqJX6B2NIumhJyaCz778qr+TJEk+5sISwx3rFav3ZMVh38MD9OaN4b/+a1/FSIpIV4hIV2zhAc5etfbpGadgdqlt+nsR2WaXU7eOX1gVT6VNf/GkK7yEm5krwggk3K4Qka6QPY4tXOwPpvbZ9jh90MNtlUsn5kuDLjLnUWE+1F+TBwRBGM8bTyc7kD80FX8AAAAASUVORK5CYII=" /><span data-v-70088780="">Asset</span></div>
        </div>
      </div>
    </div>
  );
};

export default Trade;


