import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  import { toast } from 'react-toastify';

import Api from '../../Requests/Api';
const BindAddress = () => {
    const navigate = useNavigate(); // Hook for navigation
    const back = (page) => {
        navigate(-1);
    }


    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    const [activeChain, setActiveChain] = useState('TRC20');

    const [selectedCurrency, setSelectedCurrency] = useState('USDT');
    const [confirmedCurrency, setConfirmedCurrency] = useState('USDT');
    const handleConfirm = () => {
        setConfirmedCurrency(selectedCurrency);
        closePopup();
    };

    const [address, setAddress] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);


const handleSaveAddress = async () => {
    if (!address) {
        toast.warning('Please enter a withdrawal address');
        return;
    }

    const networkType = activeChain.toLowerCase(); 

    try {
        setLoading(true);
        const res = await Api.post(`/save-address/${networkType}`, {
            address,
        });

        toast.success(res.data.message || 'Address saved successfully!');
    } catch (err) {
        toast.error(err.response?.data?.message || 'Something went wrong');
    } finally {
        setLoading(false);
    }
};


    return (
        <div data-v-72d7289a="" data-v-8be212fc="" class="page">
            <div data-v-72d7289a="" class="headers">
                <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                    <div data-v-7401f0fe="" class="left">
                        <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon" /></div>
                    </div>
                    <div data-v-7401f0fe="" class="title overflow1">Bind address</div>
                    <div data-v-7401f0fe="" class="right"></div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="scroll" id="pageScroll">
                    <div data-v-8be212fc="" class="container">
                        <div data-v-8be212fc="" class="box-con">
                            <div data-v-8be212fc="" class="title">Select currency</div>
                            <div data-v-8be212fc="" class="inp-con" onClick={openPopup}>
                                <div data-v-8be212fc="" class="inp"><span data-v-8be212fc="">{confirmedCurrency} </span><img data-v-8be212fc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACjSURBVHgB7ZYNCYAwEIVvJjCCEaxgBCMYYUkWwQhGsIIRjGCD+Q5W4OaTMbgPxukYvA/2K+I4Tm+klGa0UUgMlsEaHkI4tbEkTAII3lE0eGZJmARyzivKXX4pEkGMIHDSYHxOpeuC2BJjfKQCswBbokqAKVEtwJL4JMCQMO2CP+h3CpouwqbbsOlBxA5XrJfRwQw3CyBwQ3lY4VWwHySO4zTnBdLLgmkYKbGUAAAAAElFTkSuQmCC" alt="" /></div>
                            </div>
                        </div>
                        <div data-v-8be212fc="" class="box-con">
                            <div data-v-8be212fc="" class="title">Select mainnet</div>
                            <div data-v-8be212fc="" class="chain-list">


                                <div data-v-8be212fc=""
                                    class={`chain-item ${activeChain === 'TRC20' ? 'active' : ''}`}
                                    onClick={() => setActiveChain('TRC20')}
                                >
                                    TRC20
                                </div>

                                <div data-v-8be212fc=""
                                    class={`chain-item ${activeChain === 'BEP20' ? 'active' : ''}`}
                                    onClick={() => setActiveChain('BEP20')}
                                >
                                    BEP20
                                </div>

                            </div>
                        </div>
                        <div data-v-8be212fc="" class="box-con">
                            <div data-v-8be212fc="" class="title">Withdrawal address</div>
                            <div data-v-8be212fc="" class="inp-con">
                                <input data-v-8be212fc=""
                                    class="inp"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}

                                    placeholder="Please enter a withdrawal address" /></div>

                        </div>
                        <div data-v-8be212fc="" class="submit-bt">
                            <button data-v-34dc7cc4="" data-v-8be212fc="" onClick={handleSaveAddress}
                                disabled={loading} type="button" class="van-button van-button--default van-button--normal com-btn on submit-btn">
                                <div class="van-button__content">
                                    <span class="van-button__text">OK</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <>
                        <div class="van-overlay" role="button" tabindex="0" style={{ zIndex: '2003' }}></div>
                        <div role="dialog" tabindex="0" class="van-popup van-popup--bottom" style={{ zIndex: '2003' }}>
                            <div class="van-picker">
                                <div class="van-picker__toolbar">
                                    <button type="button" class="van-picker__cancel van-haptics-feedback" onClick={closePopup}>Cancel</button>
                                    <div class="van-picker__title van-ellipsis">Select currency</div>
                                    <button type="button" class="van-picker__confirm van-haptics-feedback" onClick={handleConfirm}>Confirm</button>
                                </div>
                                <div class="van-picker__columns" style={{ height: '264px' }}>
                                    <div class="van-picker-column">
                                        <ul class="van-picker-column__wrapper" style={{ transform: 'translate3d(0px, 110px, 0px)', transitionDuration: '0ms', transitionProperty: 'none' }}>
                                            <li role="button" tabindex="0" className={`van-picker-column__item ${selectedCurrency === 'USDT'
                                                ? 'van-picker-column__item--selected'
                                                : ''
                                                }`}
                                                style={{ height: '44px' }}
                                                onClick={() => setSelectedCurrency('USDT')} >
                                                <div class="van-ellipsis">USDT</div>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="van-picker__mask" style={{ backgroundSize: '100% 110px' }}></div>
                                    <div class="van-hairline-unset--top-bottom van-picker__frame" style={{ height: '44px' }}></div>
                                </div>
                            </div>
                        </div>
                    </>)}
                <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>
            </div>
        </div>
    );
};
export default BindAddress;
