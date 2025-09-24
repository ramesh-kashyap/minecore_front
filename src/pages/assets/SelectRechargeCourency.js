import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RechargeCurrency = () => {
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const back = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (selectedCurrency) {
      // Selected currency ko next page me bhej rahe hain
      navigate('/submit-recharge', { state: { currency: selectedCurrency } });
    } else {
      alert("Please select a currency!");
    }
  };

  return (
    <div data-v-72d7289a="" data-v-bca86288="" className="page">
      <div data-v-72d7289a="" className="headers">
        <div data-v-7401f0fe="" data-v-72d7289a="" className="inside-header">
          <div data-v-7401f0fe="" className="left">
            <div data-v-7401f0fe="" className="back" onClick={back}>
              <img
                data-v-7401f0fe=""
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg=="
                className="icon"
              />
            </div>
          </div>
          <div data-v-7401f0fe="" className="title overflow1">Select the currency for deposit</div>
          <div data-v-7401f0fe="" className="right"></div>
        </div>
      </div>

      <div data-v-72d7289a="" className="page-container">
        <div data-v-72d7289a="" className="scroll" id="pageScroll">
          <div data-v-bca86288="" className="container">
            <div data-v-bca86288="" className="title">Currency list</div>
            <div data-v-bca86288="" className="list">
              
              {/* Currency Items */}
              {[
                { name: "USDT", img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2c161d6ff1fdd3d4b8b19f51866e3a86.png" },
                { name: "USDC", img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/3e546c0e62248d9bec26855319dc25dd.png" },
                { name: "TRX", img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/4bd3122ec5f26eee8157b3a93b7ae000.png" },
                { name: "DAI", img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/ebcc1124904e897fb5d2c96c75dd85ca.jpg" },
                { name: "BNB", img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/0318e3072bb3a20b821bc8179c61297c.png" },
                { name: "BTC", img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2719394e5775beb54774bb7d5bd221ef.png" },
                { name: "ETH", img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/19ec55a2e96ff980f0556afefd402a44.png" },
              ].map((currency) => (
                <div
                  key={currency.name}
                  data-v-bca86288=""
                  className={`item ${selectedCurrency?.name === currency.name ? "selected" : ""}`}
                  onClick={() => setSelectedCurrency(currency)}
                  style={{ cursor: "pointer" }}
                >
                  <div data-v-bca86288="" className="icon">
                    <img data-v-bca86288="" src={currency.img} alt={currency.name} />
                  </div>
                  <div data-v-bca86288="" className="name">{currency.name}</div>
                  {selectedCurrency?.name === currency.name && (
                    <div data-v-bca86288="" className="check">
                      <img data-v-bca86288="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgB7ZjdcYQgFEZvOtgS6CAlJCXQgZRgB9qJ2wHbgUkFTiogHSQdEO5EJoZF5OeiPuw3c2Z8UDhzYUAAeKQsT5AfZuCGZ8Or4TKD+TZ8zrwbbvNz9aBAaxgNOpHJIKBisFoK0sVcFLUoVk0SiLkM8DclssOApmqhajLIDKssVyR52UluKZk03MOOchYJkREHyFl4jKA6UBD7vpy1epY2JDidQHBck2O1O+ecaymlFkJsvct8gm1NuaZp9DKQMcw1tjOvnFJq65vBJ1hl/vnkGGNb3ymf4FdMhzh/IuZQiZyeXe4SJWfTdV0tOUuZYEiSQM4rGDXEfd8HJYnkvEOsYhtYkySSQyaf4DWlEVcSF2AiOeTmE0xeqF1JIjkNKws1y2nMlSSQ0xD4wx5LJInkJggkez8mELOIkODeZxEXBRHhBwoKiEy1P5sAAyTk9MdODIMTH9z3kiySs8HSXyvISSC4PFpGAN31W9QBvUQ053gwwu9GkFQ1iivgl/mZwf8rYOTN8AE7XgE/4uYHNJrN5TmYoCAAAAAASUVORK5CYII=" alt="selected" />
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>

      <div data-v-72d7289a="" className="footer">
        <div data-v-bca86288="" className="footer-con">
          <button
            onClick={handleNext}
            disabled={!selectedCurrency}
            data-v-34dc7cc4=""
            data-v-bca86288=""
            type="button"
            className="van-button van-button--default van-button--normal com-btn on submit-btn"
          >
            <div className="van-button__content">
              <span className="van-button__text">Next</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RechargeCurrency;
