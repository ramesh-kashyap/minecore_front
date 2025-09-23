import { EarIcon } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const Earn = () => {
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
     case 'cash-carousel':
        navigate('/cash-carousel');
        break;
       case 'task':
        navigate('/task');
        break;
    case 'reward-details':
        navigate('/reward-details');
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



  return (
    <div data-v-72d7289a="" data-v-4693b953="" className="page">
      <div data-v-72d7289a="" className="headers">
        <div data-v-349a15ae="" data-v-4693b953="" className="main-header">
          <div data-v-349a15ae="" className="left overflow1"onClick={() => handleNavigation('profile')}><img data-v-349a15ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZXRDUBAEESHCpRwJShBCTpSyrWiAyUoQQmsOB+Evbhkycm8ZBKx3n7I5QbYqCSdZJQMEi9xiGPiuTCYTxkjy808fzHc45XFZt6kfDApi028IjxoFDfvTbxS0ivzT2YN7n9hrcimXovjyR+CGMPcW+8Hh+e87RGSH2x7sO0TPbY92PZse0IygW0Ptn2ix7YH2/5vbb8AJnhQUjyfYQ4AAAAASUVORK5CYII=" alt="dd" /></div>
          <div data-v-349a15ae="" className="center">Earn coins</div>
          <div data-v-349a15ae="" className="right"></div>
        </div>
      </div>
      <div data-v-72d7289a="" className="page-container">
        <div data-v-72d7289a="" className="van-pull-refresh scroll" id="pageScroll">
          <div className="van-pull-refresh__track" style={{ transitionDuration: '0ms' }}>
            <div className="van-pull-refresh__head"></div>
            <div data-v-4693b953="" className="container">
              <div data-v-4693b953="" className="banner">
                <img data-v-4693b953="" src="./static/img1757786439045/banner-Drfxc-fz.png" alt="" />
                <div data-v-4693b953="" className="abs">
                  <div data-v-4693b953="" className="title">Currency Earning Center</div>
                  <p data-v-4693b953="">Do tasks and earn benefits</p>
                </div>
              </div>
              <div data-v-4693b953="" className="income">
                <div data-v-4693b953="" className="left">
                  <div data-v-4693b953="" className="title">Total revenue</div>
                  <div data-v-4693b953="" className="val">0 USDT</div>
                </div>
                <div data-v-4693b953="" className="right" onClick={() => handleNavigation('reward-details')}><button data-v-4693b953="">Reward details</button></div>
              </div>
              <div data-v-4693b953="" className="fuli">
                <div data-v-4693b953="" className="cname">Popular Benefits</div>
                <ul data-v-4693b953="">
                  <li data-v-4693b953="" onClick={() => handleNavigation('task')}>
                    <div data-v-4693b953="" className="ico" ><img data-v-4693b953="" src="./static/img1757786439045/ico-task-C3ehU6Fh.png" alt="" /></div>
                    <div data-v-4693b953="" className="flex1">
                      <div data-v-4693b953="" className="title">Task Center</div>
                      <p data-v-4693b953="">Make profits when doing tasks</p>
                    </div>
                  </li>
                  <li data-v-4693b953="" onClick={() => handleNavigation('cash-carousel')}>
                    <div data-v-4693b953="" className="ico"><img data-v-4693b953="" src="./static/img1757786439045/ico-lucky-S82ZvpGd.png" alt="" /></div>
                    <div data-v-4693b953="" className="flex1">
                      <div data-v-4693b953="" className="title">Cash carousel</div>
                      <p data-v-4693b953="">Draw blind boxes and draw grand prizes</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>
      </div>
      <div data-v-72d7289a="" className="footer">
        <div data-v-70088780="" data-v-72d7289a="" className="main-footer">
          <div data-v-70088780="" className="item"onClick={() => handleNavigation('dashboard')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7VjhmdowDFX4+r90goYJSidoOkGvE5Sb4MIERycgTAA3Qa8TXDY4OkHTCZpOQJ9AAiXYToBc+HPv+4IdI9sPyRKSiV7RDSLqCPP5fDgYDO42m02C11iG13j/OZ1OV3QBLibJ5KIoukc3DYgVIPv9XLIXkQTBBASXdNDcnhSeoTwWKyFb0Ak4i6RHeyUILNBmIFGKXCJyiZE7Wasnk8TGY2z8g6ray7HxrU9DmDMRsnZOlqbplLomuVgs2DFmdDBjKVrJmuaCaIxmBrLfzDBr9XOT+VuRFPOy9hIzzJ779dTzhbVSrDW3Y1hnGvqhjSRdziFnb6Zn71SwVrHmE1XN73WqIEmY917Mqyjl7D1SBwDZDGTvzJDT/APfAlmWLWsE2Tk+dkWQgbVS/tG0C1kM1vAzyN9YuchDkM/MPryIGWb0QnCZXxSydpKUcLE0wreX/q21BfZeGe8vEKJG3Dkytw0R4nUr6gnYa4Iml9dYze46k4m0RZv41zX4aGkfCvvCbYWkBFxFQddBoR0Qfset17sh8I+uDGjyLbcVkjY+QeA9XQc2cyr4w6XJwiHcJ2LtwJp/uHWR1L869q5rEI1Nfxsnj0iC/S/PhL4Qm/5WYS5Nrk1/TD0DvvCBalxCZ5LRO0mzZ6lZVlCTGgL6gvjAsM7jiGQtTUqoX1jLFdrxBXMVaPRuTopr/1SXyO33sw7sI6mqHoYW5pSOUyw8vzlBdskyOcg9qRy/kx+JgwO9cUlyEMWC+somKMiNGzOHi6wZCOV0iLU8N67N4bHctVjNs8sgSaqGodgjs6116kUVhc9xgSeU2cfSlprwMnzmzrWj6ZILnMqB6AjPA4WxLX0l2y5cAnJUYnm1SvIXYjDbX9odZN5g1FQZyiYJnrGGLsmkWHPrFvP3FQFbiOsf/c5nbhZ8kEqOiU6YNwUgGlrRmZAbDkXlSAwC8x7tAm3CzLngyEAHU3NFkNvvg3U3hw4y5QTtylo+f43ma4L86LFYK9FxV+EXNSzE1yvP5PfwkkyoaAnXlaASdJbOba5ZYjq+aOoawYuv1rdq6r0g+4l2mvVqpA0p2l2pcObdyvtf0QX+A72LppsO8uSSAAAAAElFTkSuQmCC" /><span data-v-70088780="">Homepage</span></div>
          <div data-v-70088780="" className="item on"onClick={() => handleNavigation('earn')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIESURBVHgB7ZjxcYMgFMa/doKMwAbNCHSCZoMwQjaQDdoNdINcJ7CdoNnAbtBuYHmn3iGC8oSY/pHf3XfeKTw+gScIcGd7dkbKqDRqjNpeP0Zf/X2JG1L0ZtoI0QsobIhA10vtClHP7pCBB8wbrPurzYfRu9HFurc3esF0uKnMs9EvroDAeN6RfIZtJLre8/UqjcbZ6LQQg4XbmA6Uo+HkzFfbtEICMtIglWuY5nxJJrCC2gni4zXRnKsTGAinsvKUKTMbHFQgkgPGH2mX3D24yqjGOJttiisbHCSxQGUVLq37YiODpAbOIvCIOEpsh8BCImlMh1uC3xtUV/V16dow61M+BJdUhWnilMwGKk9capC7Bwj25g7TScxZTSqE4RqtZ2KNPuYpBoclM8VocMglI8ig84yZ0vOsiYy7xwxnpsl9wGAbMKoi4yrMwHnb1qlbB8poq4zIYXIIFGvUnjvUq+5cbjDe7chcJgkdGUw79WyjrkGijIx7QAQqMhjp6DFaewwWjJgSEewZAX1GkWCwBQPur8Exk8EaDN6Ywdve0JBMdF2zD1VgIFc0MKhJqCvApE5obI00VsBNoBQ1SPg3P2Ebk1HfxjkqXNegRiYq/HODAxp5DbIOBzgopB+z1FjYM97SLJmTkfFnzye5SHSZ+YTuEyKsZ9/ozio/0Z1vXnDnBvwB1UsBno2jZssAAAAASUVORK5CYII=" /><span data-v-70088780="">Earn coins</span></div>
          <div data-v-70088780="" className="item"onClick={() => handleNavigation('mining')}><img data-v-70088780="" src="data:image/png;base64,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" /><span data-v-70088780="">Mining</span></div>
          <div data-v-70088780="" className="item"onClick={() => handleNavigation('trade')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7ZeBcYIwFIYfngMwghu0bkAnaJ1AnKBlAq8TABvgBGUD6wTaDTICG9D/ebGX5rT6gBC88t3lkjyC/ryXvAdEIyPDIrANaZqG6OIgCB7II3VdvydJong8NS9A4AzithjOyD8bNMWDiWmFwDUNQ+Avptb8xRiXaBX1S3zOaIsMTwPsiRx74pN6JMuy+Jx9QnfA/xGp05YzWovM83yNrLDn9EWOmFJD2HsQ94EDFvGcx+jm5IBGntRJf49hZJhDV94UexLhXcJ7GRnpSqO4GCCNXP0N3L+RpDeRSPYU/qC4cDmi29kJ1orD3XcFOiLyJEJUwZsLhPWZ2qEki8V7EkK5ppfUI3dRcaQH5xGhfqUW4ODtEI1Cco803Me3dmoBHjLGwypJCvIVblGtl3pSoRWC9bFt0N8uooMnTUEK3eraOl3Xt5a5gsCVVCDjJNycT/mAGCaF+byJQMbZnoSgN3QHtFILVNSQxq9qtwBxT+xVaonT092FQGb8EOuKi3tSv8AuyR8/W+WvgxORP7hsHk6TIYabc+zCNNieLMgjEPfFGrrKCiMjrvgGdnOWJKOVhngAAAAASUVORK5CYII=" /><span data-v-70088780="">Trading</span></div>
          <div data-v-70088780="" className="item"onClick={() => handleNavigation('assets')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgB7ZjhDYIwFIQP4wCMoBPoCLIBI7iBMIFugE4gG8gIjMIIbIDXhB9YtSlQCiTvSwi0peTou/ZRAEEQehN0C1mW7YIgePHyiIlpmiZK07S0uXejlWN4ENgXXWSIBbI1tNUMSQp3hLRShgEYRdIzORyh/K5OGMAGK8A0kiHf/gx36H6P29HtoqJX6B2NIumhJyaCz778qr+TJEk+5sISwx3rFav3ZMVh38MD9OaN4b/+a1/FSIpIV4hIV2zhAc5etfbpGadgdqlt+nsR2WaXU7eOX1gVT6VNf/GkK7yEm5krwggk3K4Qka6QPY4tXOwPpvbZ9jh90MNtlUsn5kuDLjLnUWE+1F+TBwRBGM8bTyc7kD80FX8AAAAASUVORK5CYII=" /><span data-v-70088780="">Asset</span></div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
