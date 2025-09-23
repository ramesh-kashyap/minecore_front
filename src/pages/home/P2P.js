import React from "react";
import { useNavigate } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';

const P2P = () => {
    const navigate = useNavigate(); // Hook for navigation   
    const back = (page) => {

        navigate(-1);
    }
    return (
        <div data-v-6e21fec0="" class="">
            <div data-v-72d7289a="" data-v-6e21fec0="" class="page" style={{backgroundColor: 'rgb(254, 254, 254)'}}>
                <div data-v-72d7289a="" class="headers">
                    <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                        <div data-v-7401f0fe="" class="left">
                            <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
                        </div>
                        <div data-v-7401f0fe="" class="title overflow1">P2P Trading</div>
                        <div data-v-7401f0fe="" class="right"></div>
                    </div>
                </div>
                <div data-v-72d7289a="" class="page-container">
                    <div data-v-72d7289a="" class="scroll" id="pageScroll">
                        <div data-v-6e21fec0="" class="main">
                            <div data-v-6e21fec0="" class="container" style={{paddingBottom: '0px'}}>
                                <div data-v-f2e796ca="" data-v-6e21fec0="" class="banner">
                                    <div data-v-f2e796ca="" class="flex1">
                                        <div data-v-f2e796ca="" class="title">P2P Buy and Sell Digital Assets</div>
                                        <p data-v-f2e796ca="">Safe, Convenient, Low Fees</p>
                                    </div>
                                </div>
                            </div>
                            <div data-v-6e21fec0="" >
                                <div class="van-sticky" >
                                    <div data-v-6e21fec0="" class="sticky">
                                        <div data-v-6e21fec0="" class="container">
                                            <div data-v-6e21fec0="" class="tab">
                                                <ul data-v-6e21fec0="">
                                                    <li data-v-6e21fec0="" class="on">Buy</li>
                                                    <li data-v-6e21fec0="" class="">Sell</li>
                                                </ul>
                                            </div>
                                            <ul data-v-6e21fec0="" class="com-select">
                                                <li data-v-6e21fec0=""><span data-v-6e21fec0="">Amount</span><img data-v-6e21fec0="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACeSURBVHgB7c67DYMwFIXhc+MBYqVL5zKlR2CFbJIRkg2yQVYhG7ikoHBJhVgAGRAgGWQbuwOJX0Li+vHJwNnuInsQDynQml//myEuBUZPXSg9L1wW2y1eCdiQnO7ADRI40rv6QYMc6f3tgdlDU1eK3+7UvzRDTIY+ulRfLziheRQ6Yu/1MnOd3UQ9mBcMogEsCDrRDSw6ISQfPpwdsw6/PTnxZY1YeQAAAABJRU5ErkJggg==" alt=""/></li>
                                                <li data-v-6e21fec0=""><span data-v-6e21fec0="">Quantity</span><img data-v-6e21fec0="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACeSURBVHgB7c67DYMwFIXhc+MBYqVL5zKlR2CFbJIRkg2yQVYhG7ikoHBJhVgAGRAgGWQbuwOJX0Li+vHJwNnuInsQDynQml//myEuBUZPXSg9L1wW2y1eCdiQnO7ADRI40rv6QYMc6f3tgdlDU1eK3+7UvzRDTIY+ulRfLziheRQ6Yu/1MnOd3UQ9mBcMogEsCDrRDSw6ISQfPpwdsw6/PTnxZY1YeQAAAABJRU5ErkJggg==" alt=""/></li>
                                                <li data-v-6e21fec0=""><span data-v-6e21fec0="">Time</span><img data-v-6e21fec0="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACeSURBVHgB7c67DYMwFIXhc+MBYqVL5zKlR2CFbJIRkg2yQVYhG7ikoHBJhVgAGRAgGWQbuwOJX0Li+vHJwNnuInsQDynQml//myEuBUZPXSg9L1wW2y1eCdiQnO7ADRI40rv6QYMc6f3tgdlDU1eK3+7UvzRDTIY+ulRfLziheRQ6Yu/1MnOd3UQ9mBcMogEsCDrRDSw6ISQfPpwdsw6/PTnxZY1YeQAAAABJRU5ErkJggg==" alt=""/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-a998da64="" data-v-6e21fec0="" role="feed" class="van-list" aria-busy="false">
                                <div data-v-6e21fec0="" class="list">
                                    <div data-v-6e21fec0="" class="container">
                                        <div data-v-8ffd7e1e="" data-v-6e21fec0="" class="list">
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/32a3a910508b4d1b5dc6837f69d12752.png" alt=""/>Ahmed48 </div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 14.9279 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-22 18:09:17</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.134</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>111.4028 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>1 - 14.9279 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/2024-03-18/148b702adf8a40d2803106d3375b6da4.png" alt=""/>12120</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 451.1849 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-17 07:53:48</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13530286</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>3334.63 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>10 - 451.1849 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>mko333</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 406.4208 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-17 07:59:28</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13547363</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>3000 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>30 - 400 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>Louis </div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 256.7251 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-17 08:05:27</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13561812</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>1893 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>10 - 250 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>mko333</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 176.85 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-20 08:24:21</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13603848</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>1300 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>5 - 176.85 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>Ethan</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 68.0652 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-17 08:06:25</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13613044</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>500 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>10 - 68.0652 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>Lucia</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 680.7835 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-17 07:55:08</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13615671</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>5000 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>10 - 660 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>Peter886</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 531.6771 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-20 08:53:35</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13632748</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>3900 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>20 - 500 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>Koko88</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 410.677 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-20 08:40:48</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13689234</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>3000 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>10 - 410.677 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-v-8ffd7e1e="" class="list-item">
                                                <div data-v-8ffd7e1e="" class="title"><img data-v-8ffd7e1e="" src="https://mpool-all.s3.ap-southeast-1.amazonaws.com/upload/20240318/5b9e94c805612c3ae19a12f44835db98.png" alt=""/>Claire</div>
                                                <div data-v-8ffd7e1e="" class="line">
                                                    <p data-v-8ffd7e1e="">Advertisement total 547.5693 USDT</p>
                                                    <p data-v-8ffd7e1e="">Publish time 2025-09-17 07:56:22</p>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line2">
                                                    <div data-v-8ffd7e1e="" class="price"><span data-v-8ffd7e1e="">0.13689234</span> / USDT </div>
                                                    <div data-v-8ffd7e1e="" class="txt">Platform transfer <span data-v-8ffd7e1e=""></span></div>
                                                </div>
                                                <div data-v-8ffd7e1e="" class="line3">
                                                    <div data-v-8ffd7e1e="" class="left">
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Quantity</span>4000 MCE</p>
                                                        <p data-v-8ffd7e1e=""><span data-v-8ffd7e1e="">Limit</span>10 - 530 USDT</p>
                                                    </div>
                                                    <div data-v-8ffd7e1e="" class="right">
                                                        <button data-v-8ffd7e1e="">Buy</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="van-list__placeholder"></div>
                            </div>
                        </div>
                    </div>
                    <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem',right: '0.2rem'}}></div>
                </div>
                <div data-v-72d7289a="" class="footer">
                    <div data-v-da70bd34="" data-v-6e21fec0="" class="bottom-nav">
                        <div data-v-da70bd34="" class="nav-item active">
                            <div data-v-da70bd34="" class="icon"><img data-v-da70bd34="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJKSURBVHgB7VjtcdswDH2doN6g3KDpBhihnSDsBtnAygTOBlYn6AjOBs0GVidIO0FKxOQVohkJIJmPH3l3OFsSAT4SIEgCeEcffEAfuCAX8XcT3/0JMkW5wyuBguyC3Ad5WJFjkH3UeTFyB6wTWyLsYYDF3ezGnyjPBrv2Nsjv+D+1/4xTGGwKOmOQa5zCoQu4I54BOSPs5hvoXHgRSeWhcYzfuhDMjTO5jd3U48IacT7YSzQgJ8j/Ce0gzD1zj8oZdZmhY3zXC66H/T2ej2CCw5zowaD7mCJk3Hw16npDe8r6Iq2iHN0eemyFHqcr7eK6gZEkYT4yBx22KCdup9T3MHhMxqJ2FksEu+dCCelqUrTPCY5BrnBO9gqVyLdFHvEv8Xy9rI5PmC+SH+KZbXFcOvF9UNhcBcfEQ6WMBXsO59upRyMI/QgmpINJNcnSKcjDlrgnLJOUdqFsO0PLydwbOuW2DnpMqBhMqVNt0t6iLoQIHUkuJe1agrOtuMXdQySRMAX5hv+Xrm1skzDidHJfgrT3BZ0ucE8l7XwGB4UtwtwzXVG6WlgJMvaoONRwTHhlW4cy0cGgb140JBR20CFP2gP0kLOodjWhPh14tB16PQw4YD3FtMKh/oBdNNCbqOtlP7/SsiFCOwidrrQJpeIAu8XBDl5cu8xWM0EIoqUUw2RJoU8oV+COUBC0bIsOp7RyWfjGRaq7KH/ju49Rh1A+gNwG+Y6OBSsJj+UdZk0OeOE65agkbKnAnaFXOTqVollkOTrVLSe84w3gH539ZTUnlH6rAAAAAElFTkSuQmCC" alt="icon"/></div>
                            <div data-v-da70bd34="" class="label">P2P</div>
                        </div>
                        <div data-v-da70bd34="" class="nav-item">
                            <div data-v-da70bd34="" class="icon"><img data-v-da70bd34="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG+SURBVHgB7ZjvVYMwFMUvPf1uR8ARnECcoCNYJ5BO0BHaDbQb6ATFCRzBjFAnwPs8oQQKJZAA1cPvnJz8obxcXsijecCEG0Hdhe12G7GK4IdkvV4n6MCZQBEWBMELmyH8otI0fWortCBQizugRyjyoY3IudnRnss40thearixoN0l9IroOW5tbz55sOQ9pZ9UwQO0HdL2p4iVfhsvzox2lDVo4N2XOEFs6dU4m6uJWc2467J6sznDlTPHSJTibG2cHEUgN8yG1cYY2ux2u8o4aS2QT7yCffBWnOgV7ZCdfuA8hR1uJVDElWKkzT1oEJnFWVyKk2NtElnOOz5ALEXiIvJdHur38xcrD4onxCPwtMTlOCtt2t/Te896KGJJrAVmIuGPo+XY9cfBSaArPuKg8vx+FvASBy1iXmf+xxI3xMHxl1joU8QlpjDjyiTQlUmgK39W4ALDUzmnKTDJGvzuPkq6AgOhUyNLVGkxf8ij3xfyz5lieePf8294gALuYZyDafdDj9+wWiH3oIrj+HRoKnzq5FxqJJBClph99IAkqqKqC6LB7BfeQTmP6hOWwvCoqqzXUCngJjqniCea+AGV6ckKTe8ApAAAAABJRU5ErkJggg==" alt="icon"/></div>
                            <div data-v-da70bd34="" class="label">Order</div>
                        </div>
                        <div data-v-da70bd34="" class="nav-item">
                            <div data-v-da70bd34="" class="icon"><img data-v-da70bd34="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALeSURBVHgB7VjRcdswDIV8/a+7gbJBOkGVCeJOkHQCyxPEncDyBHYmSDtBtEG9QTSCOoH7cAFlmKUoiqL90747nSiKpJ4eQAIk0b+OzWYzx5VTJDK6AJjUbDZbHo/HBR5vpbrF9QN131erVRM6VnKCIPeYZdkTinlPkwYkv4LkgQKQjKCHWCv3uapjkp9Bsh0YlmY0EUysqqo3kNtZ5Fo2J66bsiw/4X6nyHK7MmT8aAV9ioHMFvfKVgh91tLHtLsZUvEDXYGYQoXrQfqyyVnFNXkQrOBEYvY4O9XXq+IgQQy4wICbqcQ02GfNeLLsrGksQRArRLGCEhFTYwermF2TmEaoimcEt9vtExqve4jxwnpLiQARvtBJhF4VO4IcL9HpzUWsxwdTgxfvbyBZ68puoRYSBgf+I9xr1L9cgRyDBXplF9OVeh3sXkisbOEnO/WeFX2mUzRIhTmI3ZOIIJPnxrzsTAwyR1NGaMpksrxKFct/NyYLGQNxr18k8Vq+VXNZx+JGdSjoXNGflyLH4LHFOgaFKcwUia6BipcGsetdyWteYHPnN7QPcpxc0rvMbF6KhbhHl93gmVXaUwQ6BXlSyLJiUNBIsC/Bl1/Ed3NKADsfZBWjzMmLvDj6QlXzT69i1SOboEPFQbA5OWxJBNJZ816iQ2W1H+OXznxQ+6KPWC6L+8J6dRDVaqt9lF/+RZBVROetYyZ3gDmXDsVaCfpV4I8EoW9P0uuLbB4QqSjAnCn80pnyi4rPGHw50N9rTrzLrfZ7aR88EX17Eucg/OfsP6ZM58RG+eVUgr1wmWeMX45BFEEbyi81RpvThSQELUSb04UkBH1+ORWhBOdDDRIQc37DdzZTmwJm5sOUM74hyOy/d37b11FvDek9oeXzvd+UECD2EbdHOinYIKPvUn6viXmXpdL+HFc5JU8MAX9TP3uP33gmyrFZQ5dHo/ciBmMOjwqKSGIDUadalv7Dxh9SGe/owrFwLwAAAABJRU5ErkJggg==" alt="icon"/></div>
                            <div data-v-da70bd34="" class="label">Advertisement</div>
                        </div>
                        <div data-v-da70bd34="" class="nav-item">
                            <div data-v-da70bd34="" class="icon"><img data-v-da70bd34="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKbSURBVHgB7ZgxltMwEIbHgYISbuA9AaGjzFYp2RusU1LZOcEuJ/CmoyM5AaFMhTkBvgE+QjhB+GffaDMskq2x1+G9ffne04vkSPbvkTUzEtGZYSQ0kLIsZ0mSfED1CiWVyzWXw+HwablcNjSA3gIh7DWEfRFhbayHCO0lEOJSiPtOR4t10UDkZR+RE+qBRxxb6RLlTVEUidQ36n9+oa9sdTLykoysVqsbPDx1bdQXsMxa90G7wk8FQTWElXJ5ilKg3JIB0xTL1P5S4qBledcxplAi9xhzgTF7isQ6xTNVb7rEMdKnkiZPcUYGTAJhiWtX55UZOw59v6nmjAxYLZiqek3xbF0FL/mWDPQWiKmLFvjIvaRkoJebOSVWgY2r8IqOHMN9p757xGAVqKe1K8RpTiMQq/GHq0uCEAX63qh7bMiA1YJrFOdkZ+yEuwYg8uT098KoyIBJIEcAWGDl2hwh2kRC3DX6PzjzPlmNOZuRNIuTBf1dcbKw4RgsCcFUnHqm+jRIJC7IyPNMt/hBnpQqxBb93p00YdWIP7yVEOamvZH4u5XU68x/o3OKeVVOJpMcU5aRMdC3EL3raxWo/Jh5LxHJXkQGE9+gQI4A2smOCRZYlue51yN4BYqf+0lHy/GqXOC3tuwnQuD+V7JPSeVScK/i9YMS3LU49mPVU4hjcJ9730jHzIaf5Q2ZIUf9EMZk5/YkwjQS1xeurfc7ZBHIb0vjofPL1NehM9T1OQ2IJWZmQgIbVZ/SSPBiUU3vJswrUCcBfII1hhUlbSupj0DA/s+Z/97lPHrbQcLkTJHdWCqX96GDgKTlRpmc/41O2xnPi9Cg3W5Xz+fz3xD5Hs1XNA5suY8Q9znUISZZSOnffG8ojXznd2P42DOaPxP0TrDT1rosAAAAAElFTkSuQmCC" alt="icon"/></div>
                            <div data-v-da70bd34="" class="label">Mine</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default P2P;