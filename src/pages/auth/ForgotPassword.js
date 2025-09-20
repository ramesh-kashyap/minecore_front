import { useState } from "react";
import Api from "../../Requests/Api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';

const ForgotPassword = () => {


  return (
    <div data-v-72d7289a="" data-v-e38c6d11="" className="page">
      <div data-v-72d7289a="" className="headers">
        <div data-v-293fd8ae="" data-v-e38c6d11="" className="user-header">
          <div data-v-293fd8ae="" className="left">
            <div data-v-293fd8ae="" className="back"><img data-v-293fd8ae="" className="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" /></div>
          </div>
          <div data-v-293fd8ae="" className="title">Retrieve password</div>
          <div data-v-293fd8ae="" className="right">
            <div data-v-293fd8ae="" className="lang"><img data-v-293fd8ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIkSURBVHgB3ZiNdcIgEMf/dQJHYAQ3kE5QR8gGuoFsoBvoBq0T2E5gN0g2sBtYTskrOTCBAD5ff+/dMx/AnXdwB3nBeKZaFlrmWmZahHlG/GhptHxr+dLyYZ49BKFlo+Ws5RIhO9O3GFNj2CVRNojgJbCd0HKE6wEKG4XxgFtI7TBS2Cn8C8941PbV/CYjtNToeoHCq/A35/qgNpVnjBoZQi48A28RZphvrD0yG8mNU0hHwTVyzB/GGvmNa1FIWDiEgJsicrNlOkRE36tBWSezBwqrnUu3MR3tf1ahHArdzBA0FyskuD4S7sWKN5h4Os2t6zYBl6JN9D7dV3wGzqzrT5TncEe3g4Bba99RNsQStxJqz8OdT+cM/buTNfKz7NFXw/KmgFsxfCKRDxmg72xs6+S8tmLQABUz/Ih88LCujE4Ft+53jFBsIMk6jKqZDJ5n+XZMoRvqwTDa73tXWSCSjdn7foI4cngwilgDH86/MzDH0TFqDDKwse4le89XWIN0GnYv2f2ct+Ubx7XpRLnJri6l8iClksroXMOzURYIO4RL5EMG6Kth1eQZ+svdCvlR6C9zTs4VuB0La6sR7WYkyiGMDl7eBJ4IWoid0mbzDHnwzbpu8GQIPO6AFg3VdXth1ihQ65cY3uye4HpGmOdFvVdhOJf5CoDv42fwoT2GU6SB92SPQqQa1m71i1GPNOqI8I+fSawQZ1xRb92jwvBcrFOM+wXp7n2Zcm6yKQAAAABJRU5ErkJggg==" /></div>

          </div>
        </div>
      </div>
      <div data-v-72d7289a="" className="page-container">
        <div data-v-72d7289a="" className="scroll" id="pageScroll">
          <div data-v-e38c6d11="" className="banner">
            <img data-v-e38c6d11="" className="watch" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJgSURBVHgB7Ze/b9NAFMe/7xIogUbxzIDCwloQG0JqmEGiHYGhqQRUGdm6VZ3gP4goDGVhLUgwk0pITKhFbExWB+aDtAoU+R7vUtLEPxKfizFD+5EinZ07v6997959DzjuUJbOvWdeg2FuM1ODmesy2LP3GdCKaBvE2wT1uvJAd1yf6SRgt+01SfGKhKrDDZ+JV6cfdtfTOk4U0Gt7dVPiDTBfxtHwlVE3Ki3tj+ugxv3Re15dCJTZ+ovglrqRZ+w99ebGdUj8AgcDzAZyRJW4WbnffYE0Afaz2zcfJFiOaJmOK9HpiE2BUfzOJXj50j1UFnZQufNZ2nfhgNfPpwghATbbXTO9fHUZNFUDVS/g1LUncELyaXet2hwr4GCpuUGna8OLn99ch0mpoJVEAV0pMhnWOfY/LMN0d8AS/NfHx8hAXfKsMbgoHyoLzFyWuhh8edn/HYWgZOyy7Nj2cAoUzaAgZBpmB+3hF8hYcM7cegt1/nq/bb6+x483NzOMHk71aBLmve4n4SUJ+C+MCtAoDh0XQPBREGS9Q1QAG2yiIAz4U1wAq1coiFIwjHUooNrSHQL5+MdIrfNlR+zEBFiMoVU4wvvu9T8UQ6wawoLC7K3VnFyQ3QWnZtt9IXZfYNkXUsfI259d+n5x9F452kkFNC+eYAsphckGzFb9oEn8YSxe9IZ1LGzUI+SOWkwyp4mVcLql1wOoeeRTnDQbXjy3pBNXWaotZ7FonMEnhB4uBYdkSifZcueDiRK35CrEJpvJ42ASpStOhvpmgmb+bN+DRNXyur4I3GQpMtWW+9HshN+5fussbAP5IwAAAABJRU5ErkJggg==" alt="" /> Please check the box first to agree to "Withdrawals are restricted within 24 hours after changing the login password" <img data-v-e38c6d11="" className="close" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADWSURBVHgB7ZUxDsIwDEU/IJYODMzlEEhwAY4E5+BcLKxwgq4wMHTpgi25UqmSxrGCEJKf9Kda8c+vrQCO4zh/REXaKOpqqVWxUNbxgSfSgXQnvRBvznVb0pXUIcEcOtYiNnJEOIm+eTWoT6JNgG98I+2lwQ6fSQybt6QzqdEcrDUwZWJlbc7MkM/4trA2Z3IS6BknsbQ2Z7RDqMGSpimB8S/oEB7MrxgITfsF8e0oaiC2aqkVLWIgtedmE9ohfIqmpr2Rb63UPlAYvlmtqMt6jBzHcX7OGxWKPO83fWwVAAAAAElFTkSuQmCC" alt="" /></div>
          <div data-v-e38c6d11="" className="forgot container">
            <div data-v-e38c6d11="" className="box-title">Reset password</div>
            <div data-v-e38c6d11="" className="box-item">
              <div data-v-e38c6d11="" className="title">Mobile phone number</div>
              <div data-v-a2e94f62="" className="inp-con">
                <div data-v-a2e94f62="" className="inp">
                  <div data-v-a2e94f62="" className="set_area">

                    <i data-v-a2e94f62="" className="van-badge__wrapper van-icon van-icon-arrow-down icon">

                    </i>
                  </div>
                  <input data-v-a2e94f62="" type="text" placeholder="Please enter your mobile phone number" />
                </div>
              </div>

            </div>
            <div data-v-e38c6d11="" className="check-box">
              <div data-v-2d8b0b61="" data-v-e38c6d11="" role="checkbox" className="van-checkbox" tabindex="0" aria-checked="false">
                <div className="van-checkbox__icon van-checkbox__icon--square" style={{ fontSize: '0.32rem' }}><img data-v-2d8b0b61="" className="img-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKDSURBVHgB7ZsxctNAFIb/tw7BAzOJaWhRThDlBCRDEZgU2OQAmBOEnIAcwZwg7qhA4yITKBjICaKcIKKlQXFmElDsfexTiEdaUlBivf1m7JGe1sX7pN11oZ/gkSRJ5wrtbotoFQYRGPGfSxHmi4yBHIScLFIiSsnao17vWVYdRDcH0rg17dcEs8PgDpoK02C7u7l7czoT8GH08dgZi6EA12d6bi83XvV6uZGCa36gpXnB3fV4ydzbKY+T5DCyhk69MZm7NHTTIb27YFIpfC/GZ2IMc8LBwedHRTF9wC0sM/O6u+991NYxzsf25wq9Tw77MLRf+W02tpdr89Tsv5AkX9wa9+sYFQkM6huQWa0PpWHTmhd6vQ0332lYrRFzbMhwbe677eIrGsrU4sQrRcZtC7UtbzK9OkNDacGmtQIhNv6ef3+x/QOKkG0wqha2tp58Q2Np+2tbZKAIWQj9mioBtxEEQDlBAJQTBEA5QQCUEwRAOUEAlBMEQDlBAJQTBEA5QQCUEwRAOUEAlBMEQDlBAJQTBEA5QQCUEwRAOUEAlBMEQDlBAJTzl4D9JGluXugWREBWLTxcXFpGQ5F0jFfKlE0BW3u6mUlCFKi9Q38xsY0NT01gvOnNToClrFpyhcYKMMY8rp4TkJop25N6kftNXAglGErXybEZLGlSSVOxKU6ryREqY6c0tNYeMWx+Byb3I6f/M0l5A9tlPwU4XjAUE+gle+GQwvJKmRxNRp/eWPAeNMEYbHef7l7vAnbxrTOUQgkSnZXm5bgUIFGSF8831yRYjEZDufvsSW54VvGHvHN/FlrAusTnJWNrQR2icn2IMF9k5TfLk82ZLHjn9mLkh0J/AyyR1lB/LuW2AAAAAElFTkSuQmCC" /></div>
                <span className="van-checkbox__label">Withdrawals are restricted within 24 hours after changing the login password.</span>
              </div>
            </div>
            <div data-v-e38c6d11="" className="bot">
              <button data-v-34dc7cc4="" data-v-e38c6d11="" type="button" className="van-button van-button--default van-button--normal van-button--disabled com-btn on" disabled="">
                <div className="van-button__content">
                  <span className="van-button__text">Next</span>
                </div>
              </button>
            </div>
          </div>

        </div>
        <div data-v-6df70459="" data-v-72d7289a="" className="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>
      </div>

    </div>
  );
};

export default ForgotPassword;

