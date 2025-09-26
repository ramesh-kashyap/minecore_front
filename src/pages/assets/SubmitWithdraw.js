import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Api from '../../Requests/Api';
import { toast } from 'react-toastify';
const SubmitWithdraw = () => {
    const [trc20, setTrc20] = useState('');
    const [bep20, setBep20] = useState('');

    const [addressInput, setAddressInput] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    const [isOpen, setIsOpen] = useState(false);
    const [amount, setAmount] = useState('');
    const [charge, setCharge] = useState(0);
    const [payableAmount, setPayableAmount] = useState(0);

    const [network, setNetwork] = useState('trc20'); // or "bep20"
    const [wallet, setWallet] = useState(''); // this is withdrawal address
    const [loading, setLoading] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);
    const navigate = useNavigate(); // Hook for navigation
    useEffect(() => {
        const defaultCurrency = {
            name: 'trc20',
            img: 'https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/9262f4793143dd0450e9db32a1b7c1bf.png',
        };
        setSelectedCurrency(defaultCurrency);
    }, []);

    useEffect(() => {
        if (selectedCurrency?.name === 'trc20') {
            setAddressInput(trc20);
        } else if (selectedCurrency?.name === 'bep20') {
            setAddressInput(bep20);
        }
    }, [selectedCurrency, trc20, bep20]);

    useEffect(() => {
        const fetchAddresses = async () => {
            try {
                const res = await Api.get('/fetch-address');
                const { trc20, bep20 } = res.data;
                setTrc20(trc20);
                setBep20(bep20);


            } catch (err) {
                console.error('Error fetching addresses:', err);
            }
        };

        fetchAddresses();
    }, []);
    const handleWithdraw = async () => {
        if (!amount || parseFloat(amount) <= 0) {
            toast.warning('Please enter a valid amount');
            return;
        }

        if (!selectedCurrency) {
            toast.warning('Please enter or select a wallet address');
            return;
        }

        try {
            setLoading(true);
            const res = await Api.post('/confirm-withdrawal', {
                amount: amount,
                currency: 'USDT',   // or 'AIRO' — depends on UI
                network: selectedCurrency, // ✅ 'trc20' or 'bep20'


                wallet: addressInput,   // from selected address input
            });


            toast.success(res.data.message || 'Withdrawal successful!');
        } catch (error) {
            console.error('Withdrawal error:', error);
            toast.error(error.response?.data?.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        const amt = parseFloat(amount);

        if (!isNaN(amt) && amt > 0) {
            const fee = (amt * 5) / 100;
            setCharge(fee);                   // <-- Set the 5% charge
            setPayableAmount(amt - fee);     // <-- Set the final payable amount
        } else {
            setCharge(0);
            setPayableAmount(0);
        }
    }, [amount]);


    const handleAmountChange = (e) => {
        const enteredAmount = parseFloat(e.target.value) || 0;
        setAmount(enteredAmount);

        const calculatedCharge = (enteredAmount * 5) / 100;
        const calculatedPayable = enteredAmount - calculatedCharge;

        setCharge(calculatedCharge);
        setPayableAmount(calculatedPayable);
    };

    const back = (page) => {
        navigate(-1);
    };
 const wrecord = (page) => {
        navigate('/withdraw-record');
    };
    
    const location = useLocation();
    const currency = location.state?.currency;

    if (!currency) {
        navigate("/withdraw-currency");
        return null;
    }




    return (
        <div data-v-72d7289a="" data-v-826672fc="" class="page">
            <div data-v-72d7289a="" class="headers">
                <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
                    <div data-v-7401f0fe="" class="left">
                        <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon" /></div>
                    </div>
                    <div data-v-7401f0fe="" class="title overflow1">USDTWithdraw</div>
                    <div data-v-7401f0fe="" class="right" onClick={wrecord}>
                        <div data-v-826672fc="" class="headerRight"><img data-v-826672fc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgB7ZmBceMgEEX/Za4AdRBKSAmU4A6Oq+DcgX0V5K4CKxUkHVgdJB1YriDuIGEHNAaM5AUJJZnozeyMRl7QLizLgoGFhe/NjwRdaeUWZThqaaxMyh8tr1reZpKDFoUJqLTsgNkMD+XR2jDIUAhRB6vgXaOlRRkETIi61Fp+IwMFfzSe7QdKI+y33G+vkcEBvvFXp3JCKvhOvCIRCX8EBOZHBDbIPsWbyDtXuUG5mB+ihZ9OZZ9izAERdPRRHJ3n2z6ln0hnhzJkZZscBxTKkOXADb44OTNQ4xOR40DWVJfiy4fQt1wDY6FSgYpEgXN+p5z/YqVFAnM6ILVsMLCrWmotf8Fkyo2sb3HTiJPh3KpSWTlxlKfcyGIOCJhzxV3wnoxzw0VYHbfqZVXAJUOIDNjjsrai8HhCfIQVzGwJMCm5kYWGPMCE0elK3+TcFuYs3pF0HqlxrsNzCzcBv57/l/GdGowzQal9YOM8tzAjmsoafkrdxJRKOCDgL3SKeVZGCTjBT6cSkVAq4cBdYESNfMLFHt6SFHfgBePo0m2HCBVKhVBHCx4S/alz8Gj5kcVc4zwLmD1DIpESDrTOsxjQq7X8D3TJiTDbuKN+BIMtzrl3j3QU/Eupa5vQFpf3ovfO7+7F8goMJMZdbFVBe8VoI+HfBnaFn8q1xfU652pxD/+6nNNeWN1u167gO7VDAmuMu9yVQXvux11H78EY/aHr9VrLr+BdA35qXAUG0chydmVqQ8Yr5x0tdu55wuuIavm3CeWA/jVR2d8OkTapIeyhIp2OFVpje5jQ2tnn2N9YV0N3rj/5uoN8ChQ2W+QVgkUQuKzxY0KzIZl9Js3AVAiYgo+km03aYVv0HzUXFhZ6eAfgbyU+c4zoCQAAAABJRU5ErkJggg==" alt="" /></div>
                    </div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="scroll" id="pageScroll">
                    <div data-v-826672fc="" class="container">
                        <div data-v-826672fc="" class="box-con">
                            <div data-v-826672fc="" class="title">Withdrawal currency</div>
                            <div data-v-826672fc="" class="inp-con">
                                <div data-v-826672fc="" class="inp">
                                    <img data-v-826672fc="" class="img" src={currency.img} alt="" />

                                    <span data-v-826672fc="">{currency.name}</span></div>
                            </div>
                        </div>
                        <div data-v-826672fc="" class="box-con">
                            <div data-v-826672fc="" class="title">
                                <span data-v-826672fc="">Withdrawal amount</span>
                                <div data-v-826672fc="" class="arrived-num">Arrived quantity: <span data-v-826672fc="">{payableAmount.toFixed(2)} USDT</span></div>
                            </div>
                            <div data-v-826672fc="" class="inp-con">

                                <input data-v-826672fc="" class="inp" type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    placeholder="Please enter the quantity" /><span data-v-826672fc="" class="all-bi"><img data-v-826672fc="" class="img" src={currency.img} alt="" /></span><span data-v-826672fc="" class="all">all</span></div>
                            <div data-v-826672fc="" class="available">Available: <span data-v-826672fc="">0 USDT</span></div>
                        </div>
                        <div data-v-826672fc="" class="tips-1">
                            <div data-v-826672fc="" class="tips-1-item"><span data-v-826672fc="">Minimum withdrawal amount</span><span data-v-826672fc="">10 USDT</span></div>
                            <div data-v-826672fc="" class="tips-1-item"><span data-v-826672fc="">Maximum withdrawal amount</span><span data-v-826672fc="">500 USDT</span></div>
                            <div data-v-826672fc="" class="tips-1-item"><span data-v-826672fc="">Fixed Fee</span><span data-v-826672fc="">0 USDT</span></div>
                            <div data-v-826672fc="" class="tips-1-item"><span data-v-826672fc="">Processing rate</span><span data-v-826672fc="">5 %</span></div>
                            <div data-v-826672fc="" class="tips-1-item"><span data-v-826672fc="">Withdrawal fee</span><span data-v-826672fc="">{charge.toFixed(2)} USDT</span></div>
                            <div data-v-826672fc="" class="tips-1-item"><span data-v-826672fc="">Exchange rate</span><span data-v-826672fc="">1 USDT ≈ 1 USDT</span></div>
                        </div>
                        <div data-v-826672fc="" class="notices"><span data-v-826672fc="">Note：</span>Amount received = (withdrawal amount - handling fee) * exchange rate</div>
                        <div data-v-826672fc="" class="icon-down"><img data-v-826672fc="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOlSURBVHgB7Z3ddZswGIbfJB3AG/TbIB2By961IyiXvUo3cDZwOoHdCdwNnEzgdAKcCZzbXlF9NjgcAgaE+CRhPee8dY+dA+KJfogA+QpumekkOqRzm79S/hlVfvZNZ1d6fdV50nnJ37sIWNh3nYVOqpNZCm9rmW97hgmS6Kx19rAn7VwKmUHDNWEOOWlNNVPhY3fgNT6IqxM5RwAo2O3bxqqR3kE6G/grrpo1PGrW9/CruXYNl1nBIdzXLRCeuGoWcADpbBGutGq2EGzSBL8HCtOkEJBImKY8EYmEacsbVSLhMuSNJnFKA0bX8DFbmZiYwqmKaQaf4igA2YXnJwwhhPkXhu3sYdgfrgG4Lrwv2aAnCoDrQvsWhR6kgNPC+pgUNaPyDT4yxwSmw0eA5f3D8UJWI4RY+85lj0otvK4ITBDY9QNhWN7Z05oUgr/ROpIkafx5/qwOyTLjWAtPlGsg93uESBvFzQAHygK/IdKV++I/hUC2qhDpSoJ8MLkuvRHpzqkZFwJj8+1Pwv/EGmjOodKxQK6OhEhfSGfGAr8gYkrCAhNETCEWSIiYcssCPyNiChWDSMSM2ISHEmvgMOgakUGIClwsFiAijAVvez6fQxqRicjlcnmY/EzTNNMHan1ClbfJ22Z4X1LHxQJTKXkFhURbAsvyCoQk7kcXWJVXlmhLYNO2BCRuuQ/cYUSen59r37fZFzZtq2nfFnljga8YkdVqhbu7O0jD++R9j8yOBb5gZKQlCsljDpWPr8ZlElFKZW2Y9IFleB9Sx4N8JmsmuMNWiUMECsvLUPorLvVFoqlAB/JSlHgU3nmjRBOBDuRxlmWBYv1gm8S+Ah3Jy1C5g43bspPbeasS+wh0KC9DzSyWs1t6yxK7CnQsb4kaEocFOknsItCxPM6p+X4qCXzCcfkQJxOsXU98BU+Sm9jp/Gn68AFuf7MhROEMzgaTQJKicg2pOiPNTfgXIk38RofZK66FbDqEGiFd+zqjALgusG9R6MkGcFpgn7KGAYQ4oGRoedjwBs3wgMJP5nzFZfMDLU8ntSE+U+NRHmEBHpUv9ZF/axDiohODIcRlTwZDiAvvDIYQl34aDCEuPmaFKZzi8DE4vclUIdwFGI3XhLENIaxlUjbw9N5whbgIrRUe4JfIfV6moG6oJ7ivkUGKq4MvA64gJ4374wQTpPgyghXsfxnBIxx8GcEV3MIHy4/bJjg+s0d4f365KmJXeuX8zV+f4PDrMP4DWUdUqtKhRJIAAAAASUVORK5CYII=" alt="" /></div>
                        <div data-v-826672fc="" class="box-con mt32">
                            <div data-v-826672fc="" class="title">Select mainnet</div>
                            <div data-v-826672fc="" class="inp-con fill">
                                <div data-v-826672fc="" className="inp" onClick={openPopup}>
                                    <div data-v-0bf4a1a6="" data-v-826672fc="" className="com-image img">
                                        <div data-v-0bf4a1a6="" className="van-image image">
                                            <img
                                                src={selectedCurrency?.img}
                                                className="van-image__img"
                                                style={{ objectFit: 'cover' }}
                                                alt={selectedCurrency?.name}
                                            />
                                        </div>
                                    </div>
                                    <span data-v-826672fc="">{selectedCurrency?.name?.toUpperCase()}</span>
                                    <i data-v-826672fc="" className="van-badge__wrapper van-icon van-icon-play chain play"></i>
                                </div>

                            </div>
                        </div>
                        <div data-v-826672fc="" class="box-con">
                            <div data-v-826672fc="" class="title">Withdrawal address</div>
                            <div data-v-826672fc="" class="inp-con"><input data-v-826672fc=""
                                class="inp"
                                value={addressInput}
                                onChange={(e) => setAddressInput(e.target.value)}
                                disabled="" placeholder="Please select a withdrawal address" /></div>
                            {/* <div data-v-826672fc="" class="choose-address">Select Address</div> */}
                        </div>
                        <div data-v-826672fc="" class="box-con">
                            <div data-v-826672fc="" class="title">Arrived quantity</div>
                            <div data-v-826672fc="" class="inp-con">
                                <div data-v-826672fc="" class="inp">
                                    <div data-v-0bf4a1a6="" data-v-826672fc="" class="com-image img">
                                        <div data-v-0bf4a1a6="" class="van-image image">
                                            <img src={currency.img} class="van-image__img" style={{ objectfit: 'cover' }} />
                                        </div>
                                    </div>
                                    <span data-v-826672fc="">0{currency.name}</span>
                                </div>
                            </div>
                        </div>
                        <div data-v-826672fc="" class="tips-con">
                            <div data-v-826672fc="" class="title">Warm reminder</div>
                            <div data-v-826672fc="" class="desc">
                                <p>The withdrawal fee for all VIP level users is fixed at 5%</p>
                                <p> The withdrawal process is subject to multi-node confirmation and audit, and the estimated arrival time is 24 to 96 hours.</p>
                                <p> Each withdrawal is subject to review, and the next withdrawal can only be performed after the previous withdrawal is completed.</p>
                                <p> You can get one free withdrawal fee every 21 days, and the number of free withdrawals cannot be accumulated.</p>
                                <p> The withdrawal amount must be an integer multiple of 10, such as: 10, 20, 30, etc.</p>
                            </div>
                        </div>
                        <div data-v-826672fc="" class="submit-bt">
                            <button data-v-34dc7cc4="" data-v-826672fc="" type="button"
                                onClick={handleWithdraw}
                                class="van-button van-button--default van-button--normal van-button--disabled com-btn on submit-btn" disabled="">
                                <div class="van-button__content">
                                    <span class="van-button__text">Withdraw</span>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
                {isOpen && (
                    <>
                        <div class="van-overlay" role="button" tabindex="0" data-v-eb72700e="" style={{ zIndex: '2004' }}> </div>
                        <div role="dialog" tabindex="0" class="van-popup van-popup--round van-popup--bottom popup" data-v-eb72700e="" style={{ zIndex: '2004' }}>
                            <div data-v-eb72700e="" class="popup-head">Select mainnet</div>
                            <div data-v-eb72700e="" class="popup-con">
                                <div data-v-eb72700e="" class="chains">
                         

                                    {[
                                        {
                                            name: "trc20",
                                            img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/9262f4793143dd0450e9db32a1b7c1bf.png"
                                        },
                                        {
                                            name: "bep20",
                                            img: "https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250530/7ce124375011a78279891b7f518808dc.png"
                                        },
                                    ].map((currency) => (
                                        <div
                                            key={currency.name}
                                            data-v-eb72700e=""
                                            className={`item ${selectedCurrency?.name === currency.name ? 'on' : ''}`}
                                            onClick={() => {
                                                setSelectedCurrency(currency)
                                                closePopup();
                                            }} // ✅ add click handler
                                            style={{ cursor: 'pointer' }} // optional for better UX
                                        >
                                            <div data-v-eb72700e="" className="item-left">
                                                <img data-v-eb72700e="" src={currency.img} alt="" />
                                            </div>
                                            <div data-v-eb72700e="" className="item-right">
                                                <h2 data-v-eb72700e="">{currency.name.toUpperCase()}</h2>
                                                <div data-v-eb72700e="" className="text">
                                                    <p data-v-eb72700e="">
                                                        {/* Show appropriate address or "add" */}
                                                        {(currency.name === 'trc20' ? trc20 : bep20) || 'Add'} – Minimum withdrawal amount ≥ 10 USDT
                                                    </p>
                                                </div>
                                            </div>

                                            {/* ✅ Check icon for selected */}
                                            {selectedCurrency?.name === currency.name && (
                                                <div data-v-bca86288="" className="check">
                                                    <img
                                                        data-v-bca86288=""
                                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgB7ZjdcYQgFEZvOtgS6CAlJCXQgZRgB9qJ2wHbgUkFTiogHSQdEO5EJoZF5OeiPuw3c2Z8UDhzYUAAeKQsT5AfZuCGZ8Or4TKD+TZ8zrwbbvNz9aBAaxgNOpHJIKBisFoK0sVcFLUoVk0SiLkM8DclssOApmqhajLIDKssVyR52UluKZk03MOOchYJkREHyFl4jKA6UBD7vpy1epY2JDidQHBck2O1O+ecaymlFkJsvct8gm1NuaZp9DKQMcw1tjOvnFJq65vBJ1hl/vnkGGNb3ymf4FdMhzh/IuZQiZyeXe4SJWfTdV0tOUuZYEiSQM4rGDXEfd8HJYnkvEOsYhtYkySSQyaf4DWlEVcSF2AiOeTmE0xeqF1JIjkNKws1y2nMlSSQ0xD4wx5LJInkJggkez8mELOIkODeZxEXBRHhBwoKiEy1P5sAAyTk9MdODIMTH9z3kiySs8HSXyvISSC4PFpGAN31W9QBvUQ053gwwu9GkFQ1iivgl/mZwf8rYOTN8AE7XgE/4uYHNJrN5TmYoCAAAAAASUVORK5CYII="
                                                        alt="selected"
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                </div>
                                <div data-v-eb72700e="" class="tips">
                                    <img data-v-eb72700e="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFHSURBVHgBzZeBcYMwDEW/cx2AbqANSiegI3SEbNJ2gmQDOkJX6ARtJ4ANwgZUSk1KfOSwhInz7n4OuLP1I2xZOMRTsJ5ZFatkkX8mdKyW9c36ZH34Z0kg1o51YPUK1X6smcIH7hdqh/9MRUOsJkHwQQ0U2SgTBx+bKOeC00rBL2bCja7lPX0hPlVvwf0L4mhZj5jYJdoFF6JdmGeQcoKlBnoEma4zGNgPAwvD4BQGpLAVG/yV1xwcS7sYqJCPSgzMFocVKaUOHN8F9LjgvoeezhkHpjKADTIjBpI1DgY6MdAiH+0d//zAthNesRxp4bCFrRKm0FZWsmzBBvqtaD2Ox9wPF3tc/yyox4MpgwEKJ9BmYYmB01F8Uy0ZkKEpnSJrW75WJqL++RSW7Tm14CzH/QlivSuDHnxgmpvcIZ7h8/yJ9YBEn+e/6GGsfMxAvmcAAAAASUVORK5CYII=" alt="" />
                                    <div data-v-eb72700e="" class="con">Only the currencies of the above networks are supported. Please check carefully. If you deposit through other networks, your assets will be lost.</div>
                                </div>
                            </div>
                            <i class="van-badge__wrapper van-icon van-icon-cross van-popup__close-icon van-popup__close-icon--top-right van-haptics-feedback" onClick={() => {
                                setSelectedCurrency(currency);
                                setAddressInput(currency.name === 'trc20' ? trc20 : bep20); // ← update input field
                                closePopup();
                            }}
                                role="button" tabindex="0">

                            </i>
                        </div>
                    </>)}
                <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>
            </div>

        </div>
    );
};

export default SubmitWithdraw;