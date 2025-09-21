import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-toastify";
import { useAuth } from "../../components/AuthContext";

import Api from "../../Requests/Api";
import Level from "../../pages/team/Level";

const NodeDetails = () => {



  return (
<div data-v-72d7289a="" data-v-4693b953="" className="page">
     <div data-v-72d7289a="" className="headers">
      <div data-v-e457753b="" data-v-fee66994="" className="main-header on">
        <div data-v-e457753b="" className="left"><img data-v-e457753b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZXRDUBAEESHCpRwJShBCTpSyrWiAyUoQQmsOB+Evbhkycm8ZBKx3n7I5QbYqCSdZJQMEi9xiGPiuTCYTxkjy808fzHc45XFZt6kfDApi028IjxoFDfvTbxS0ivzT2YN7n9hrcimXovjyR+CGMPcW+8Hh+e87RGSH2x7sO0TPbY92PZse0IygW0Ptn2ix7YH2/5vbb8AJnhQUjyfYQ4AAAAASUVORK5CYII=" alt="" /></div>
        <div data-v-e457753b="" className="right">
          <div data-v-e457753b="" className="customer">
            <img data-v-e457753b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIkSURBVHgB3ZiNdcIgEMf/dQJHYAQ3kE5QR8gGuoFsoBvoBq0T2E5gN0g2sBtYTskrOTCBAD5ff+/dMx/AnXdwB3nBeKZaFlrmWmZahHlG/GhptHxr+dLyYZ49BKFlo+Ws5RIhO9O3GFNj2CVRNojgJbCd0HKE6wEKG4XxgFtI7TBS2Cn8C8941PbV/CYjtNToeoHCq/A35/qgNpVnjBoZQi48A28RZphvrD0yG8mNU0hHwTVyzB/GGvmNa1FIWDiEgJsicrNlOkRE36tBWSezBwqrnUu3MR3tf1ahHArdzBA0FyskuD4S7sWKN5h4Os2t6zYBl6JN9D7dV3wGzqzrT5TncEe3g4Bba99RNsQStxJqz8OdT+cM/buTNfKz7NFXw/KmgFsxfCKRDxmg72xs6+S8tmLQABUz/Ih88LCujE4Ft+53jFBsIMk6jKqZDJ5n+XZMoRvqwTDa73tXWSCSjdn7foI4cngwilgDH86/MzDH0TFqDDKwse4le89XWIN0GnYv2f2ct+Ubx7XpRLnJri6l8iClksroXMOzURYIO4RL5EMG6Kth1eQZ+svdCvlR6C9zTs4VuB0La6sR7WYkyiGMDl7eBJ4IWoid0mbzDHnwzbpu8GQIPO6AFg3VdXth1ihQ65cY3uye4HpGmOdFvVdhOJf5CoDv42fwoT2GU6SB92SPQqQa1m71i1GPNOqI8I+fSawQZ1xRb92jwvBcrFOM+wXp7n2Zcm6yKQAAAABJRU5ErkJggg==" alt="" />
          </div>
          <div data-v-e457753b="" className="ques">
            <div data-v-e457753b="" className="msg ques">
              <div data-v-e457753b="" className="van-badge__wrapper">
                <img data-v-e457753b="" src="data:image/png;base64,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" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-v-72d7289a="" className="page-container">
      <div data-v-72d7289a="" className="van-pull-refresh scroll" id="pageScroll">
        <div className="van-pull-refresh__track" style={{transitionDuration: '0ms'}}>
          <div className="van-pull-refresh__head"></div>
          <div data-v-4693b953="" className="container">
            <div data-v-4693b953="" className="banner">
              <img data-v-4693b953="" src="/img1757786439045/banner-Drfxc-fz.png" alt="hj"/>
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
              <div data-v-4693b953="" className="right"><button data-v-4693b953="">Reward details</button></div>
            </div>
            <div data-v-4693b953="" className="fuli">
              <div data-v-4693b953="" className="cname">Popular Benefits</div>
              <ul data-v-4693b953="">
                <li data-v-4693b953="">
                  <div data-v-4693b953="" className="ico"><img data-v-4693b953="" src="/img1757786439045/ico-task-C3ehU6Fh.png" alt="w"/></div>
                  <div data-v-4693b953="" className="flex1">
                    <div data-v-4693b953="" className="title">Task Center</div>
                    <p data-v-4693b953="">Make profits when doing tasks</p>
                  </div>
                </li>
                <li data-v-4693b953="">
                  <div data-v-4693b953="" className="ico"><img data-v-4693b953="" src="/img1757786439045/ico-lucky-S82ZvpGd.png" alt="w"/></div>
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
          <div data-v-72d7289a="" className="footer">
      <div data-v-70088780="" data-v-72d7289a="" className="main-footer">
        <div data-v-70088780="" className="item on"><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGeSURBVHgB7ZiBUYQwEEW/NCB2kBKuA9OBVwIdaAd3HZxWgB2oFWAJZwVgBdDBmTWgDENgcwRYnXszP8McsPNnkz02AS6E4QrhiI3ujbSRqn87Gr0ZPWNlyNzB6DSg3CjBSujawImpFL9Znh1O9lbN6gZ+2XPpgJmgwigx3WA7qwqBoOnNAprr6gET0QgzvbMV1W4Bc5OmP13YYCNa81uGv7P/XkJqM2QwEWCwmXonmRCTJOe0SzFISslQ1DGoIIsbGiLI5pqGrskCsihoiFw3hPBJQ5/JCnKgzr7X5Afk8J2wPpNHyMGZyQIyqPAHMvnjQ3Imi+YiGnuAwTvzee5zDaMF/ALet7Xd9u/R38FnsN19Q8aMrTHCIzOQ6nlXw3YvW8d9buzBfpJImIF8t6UKvP1SyQ3GbadyjG/2abe5A387nLVfHjqwKuvgXArY4qAFX7XM3cFOnU+sJzC3udy1M4c0mOiVDObwJMPyJhN4EmOZ04tGe5yJgj2pndMcFamzUHyOoxXsOr2tr2P4VWwbqv4CtvN+hW0mJDXb/5QvTppI5gp1gesAAAAASUVORK5CYII="/><span data-v-70088780="">Homepage</span></div>
        <div data-v-70088780="" className="item"><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOtSURBVHgB7Zj/ddowEMcPXgdwNlAmqDtB3QlKJogzATBBnAmACepOkHSCqhPEnaDqBGWD9K6c6HFIlgTkv3zf41m29eOj091JBuBNl9Ekt+JqtarwMptMJh/x2uDP8Kst/hz+hpeXl6/L5dLChZUFudls7hFggcUqo7rDug8I28OFNAqJ1jNouUcs1lCuHmGRdbmFMxWFZMDv8H9ZvSwO/g2vg3hWY93PsHMDKXKBT+eCTgoACe4OB3SRNg22mWNxFnhNE9ry5J5ifRRBrtfrL3hp/T37WAfHYNV0Op0X+KsXWXiT67eTwMANWzEFSPVoMgZOl2N3cFACiVYkwMZ3slgsrgN1VnhZBPojl/gJu+V14rlMX0Y34gBbQw4k++Iv0fhOL4l2BVafmyN5Be5BBRk+6+bz+QNkQM445ZC2aMUrBagt6HgiFgqFY7U4FvVXpUCn6l7mQ5li/iV0BUjO/+HUHYZWiNqDcAu878jSkIA0oux8gdyAOoBDwLPzHwUM9SPHomDkLTgKGRRHsRd1fHOJnUSA3olHBlRQvlNtnKoMbP7GP+SU5GBEHBy33IdLtSGXwTYb3gzIKHO8X3tDTEcga25wK9+nEjD67i3n2RZ2k6MAecZBU/t/B7sTFakCkUE05JMoV2zF/TZHFoEEINbpA68qAh8DJatRGvP3fBY4hmTzWlGR0pF0Ygv5gDTopgQUDo3U+AA6ChxlLQk4jBwuZgFAiv6FCgoPaiCsQd2bICTnPauf42C/ISLeQTTgwP31AdD7UD+8kk48qoOQDHSjKhPIH4irlm09oBi8VyvUjPR1lNqCkOzEB0k2oX3HtNXpZMxngoMsAQWKJnNOsvtow/JVrK4KkJr9rhKABwdo2W9AcoLBPKnlfAEHeh+rROdNNbAHbQKA0Y80npgphZS+ZfQyKtA2BBoA7CCuWvVpk5AcANKR20T9NraUGYB6d7O+kDxgxHaBBChFsp/clk/e3Vg7zp1taNycU5DeBdpUAwKiAzMOdE3XsU8Dr0DutPt3kCH13bPlw66DC4m2SjqE+HvtGlnnSVoucUs7xuNYEBUCGvHJQnL462WdLEgKIAVaJ/bgEkCdAZZ6lbIgGXQdyYUGThCfO5/hOEU96brZf/15IVSvUgWpzzmxc/vgJ+1YiiqG5IG6yEmG8ir9QfADDvOr4R2LDtBGNyr6c6AQtGVQA6fLMuAwVulkSK8TYS0vr82pfDakl/8e4mU1cPwNP7Ab2JTl3vRa+gu6GGIYZECWCwAAAABJRU5ErkJggg=="/><span data-v-70088780="">Earn coins</span></div>
        <div data-v-70088780="" className="item"><img data-v-70088780="" src="data:image/png;base64,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"/><span data-v-70088780="">Mining</span></div>
        <div data-v-70088780="" className="item"><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7ZeBcYIwFIYfngMwghu0bkAnaJ1AnKBlAq8TABvgBGUD6wTaDTICG9D/ebGX5rT6gBC88t3lkjyC/ryXvAdEIyPDIrANaZqG6OIgCB7II3VdvydJong8NS9A4AzithjOyD8bNMWDiWmFwDUNQ+Avptb8xRiXaBX1S3zOaIsMTwPsiRx74pN6JMuy+Jx9QnfA/xGp05YzWovM83yNrLDn9EWOmFJD2HsQ94EDFvGcx+jm5IBGntRJf49hZJhDV94UexLhXcJ7GRnpSqO4GCCNXP0N3L+RpDeRSPYU/qC4cDmi29kJ1orD3XcFOiLyJEJUwZsLhPWZ2qEki8V7EkK5ppfUI3dRcaQH5xGhfqUW4ODtEI1Cco803Me3dmoBHjLGwypJCvIVblGtl3pSoRWC9bFt0N8uooMnTUEK3eraOl3Xt5a5gsCVVCDjJNycT/mAGCaF+byJQMbZnoSgN3QHtFILVNSQxq9qtwBxT+xVaonT092FQGb8EOuKi3tSv8AuyR8/W+WvgxORP7hsHk6TIYabc+zCNNieLMgjEPfFGrrKCiMjrvgGdnOWJKOVhngAAAAASUVORK5CYII="/><span data-v-70088780="">Trading</span></div>
        <div data-v-70088780="" className="item"><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgB7ZjhDYIwFIQP4wCMoBPoCLIBI7iBMIFugE4gG8gIjMIIbIDXhB9YtSlQCiTvSwi0peTou/ZRAEEQehN0C1mW7YIgePHyiIlpmiZK07S0uXejlWN4ENgXXWSIBbI1tNUMSQp3hLRShgEYRdIzORyh/K5OGMAGK8A0kiHf/gx36H6P29HtoqJX6B2NIumhJyaCz778qr+TJEk+5sISwx3rFav3ZMVh38MD9OaN4b/+a1/FSIpIV4hIV2zhAc5etfbpGadgdqlt+nsR2WaXU7eOX1gVT6VNf/GkK7yEm5krwggk3K4Qka6QPY4tXOwPpvbZ9jh90MNtlUsn5kuDLjLnUWE+1F+TBwRBGM8bTyc7kD80FX8AAAAASUVORK5CYII="/><span data-v-70088780="">Asset</span></div>
      </div>
    </div>
      <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{bottom: '1.3rem', right: '0.2rem'}}></div>

      
    </div>
    </div>
    );
};

export default NodeDetails;
