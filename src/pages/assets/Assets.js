import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';

const Assets = () => {
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
          case 'RechargeCurrency':
        navigate('/recharge-currency');
        break;
            case 'BillRecord':
        navigate('/bill-record');
        break;
          case 'profile':
        navigate('/profile');
        break;
      default:
        navigate('/not-found'); // fallback route
    }
  };


    return (
        <div data-v-72d7289a="" data-v-0b60bd9b="" class="page">
            <div data-v-72d7289a="" class="headers">
                <div data-v-349a15ae="" data-v-0b60bd9b="" class="main-header">
                    <div data-v-349a15ae="" class="left overflow1" onClick={() => handleNavigation('profile')}><img data-v-349a15ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZXRDUBAEESHCpRwJShBCTpSyrWiAyUoQQmsOB+Evbhkycm8ZBKx3n7I5QbYqCSdZJQMEi9xiGPiuTCYTxkjy808fzHc45XFZt6kfDApi028IjxoFDfvTbxS0ivzT2YN7n9hrcimXovjyR+CGMPcW+8Hh+e87RGSH2x7sO0TPbY92PZse0IygW0Ptn2ix7YH2/5vbb8AJnhQUjyfYQ4AAAAASUVORK5CYII=" alt=""/></div>
                    <div data-v-349a15ae="" class="center">Assets</div>
                    <div data-v-349a15ae="" class="right">
                        <div data-v-0b60bd9b="" class="headerRight"><img data-v-0b60bd9b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAApCAYAAABHomvIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIvSURBVHgB7ZjtccIwDIbfch2AbuBOUEZwJ6DdgE5QNiCdoGxAOwF0AugEsEGyQdiAWhf7qhgnkZMQ/vDcvUe4yIosfykBbnTjzujdaI7hORp9Gy3rjCjAE64HBflQZzAy2uF6HJsMKINjI21/h2YDQZA3blyTO1wGWnAzoyejCf4XYIZiUfyg2D0yibMFir0wRosKX9poG+Fna9vUcmopDmVo3cHXykhVBfjVwiE/nmgI04BNbh9Mx+jMam47ErJP64JUkeLtcu9BewiGzQacBjo1QU+owAOWLfwkiMhkDP6cS9CeOc4XTydm6C84R+L51OgAH9q0wVahyJBCM1tUZFFBtigIjbieus7QAmiqmHTI9ydk+5RjCXn2gPhh41lMIAjOKeRAsmpjA+QJ2FJF/SFoxG0Uu96hfw4VzxITm5FYe83b3GNYaO/kJT5dv6Gctc7wo+1FYN80tzeevWb38hHiydi1EtjvIPdH8LM4azPEv8zJFM0r+RnVc4+G2B/eKbs+uNfOuqFyTjL7X6O8yz9CWBkLUCjvra9AuDbzxQOiDvF5uEJ/rBA4BHJBgCfPUYIeD3aLRkUBQgf53kZcJf/j0hjlzFMnFdqjEFeAiNA4LzTbVMMa59NMoyf8QpNExYcStB0jXKgk6JkE1RUQ7Q7uvZikUBS7dC8fIjgHBZJCXhn5orYaF0ahXCpJRFlMMPCnP4ViGNcID2Nu780lgV3q2wzHzT/iiNsHy4H5A4agZoLzoRbgAAAAAElFTkSuQmCC" alt=""/></div>
                    </div>
                </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
                <div data-v-72d7289a="" class="van-pull-refresh scroll" id="pageScroll">
                    <div class="van-pull-refresh__track" style={{transitionDuration: '0ms'}}>
                        <div class="van-pull-refresh__head"></div>
                        <div data-v-0b60bd9b="" class="info-top">
                            <div data-v-0b60bd9b="" class="box">
                                <div data-v-0b60bd9b="" class="box-title">
                                    <div data-v-0b60bd9b="" class="left">Total asset valuation <img data-v-0b60bd9b="" src="./static/img1757786439045/eye-open-DkqCxuTo.png"/></div>
                                </div>
                                <div data-v-0b60bd9b="" class="money"> $ <span data-v-0b60bd9b="">0</span></div>
                                <ul data-v-0b60bd9b="" class="income">
                                    <li data-v-0b60bd9b="">
                                        <div data-v-0b60bd9b="" class="title">Available amount:</div>
                                        <div data-v-0b60bd9b="" class="val">$0</div>
                                    </li>
                                    <li data-v-0b60bd9b="">
                                        <div data-v-0b60bd9b="" class="title">Pledge amount <img data-v-0b60bd9b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgBtVTLbYQwFMRWDnCjBEpIOlgu/E5JB0kHSwVsKoBU4pz4nEgHuyWQDsgFiQtk3gqQtTKsUZSREPaTZ3iesTGMP4KpikVROIyxhHN+8TzvY0uAK1UZS/F6HYYhq6oq3S0wjuOPND6WZXncJWCaJhEaqZRiWwdtAdd1W3zZxVbaZSHngrzREiCEYdjAg5d5DkEbgrUQwtYSmES+IBJLJceyLKEtQIiiKMNLjvIgJ8MMTSCJmshSKQ6CINMWqOva7vv+jKEz165GGztAKSCNMxlKc0rprgdbgFCr3cF0P8gHZ66hmyftDkAWMhmIcdEuWgJTbI/zHK2/UwJXYQ1yAsJJ6uTT9/3lhG52kOf5s0wGmq7r3uQ1qx3cRkZkyp3uyF2BNcfJtNu1a3+kxFA4rlq75sFyZWXHVXhQFUGK8XzTUcWeT8Z/4hdg/ZU7L+bCYQAAAABJRU5ErkJggg==" alt=""/></div>
                                        <div data-v-0b60bd9b="" class="val">$0</div>
                                    </li>
                                    <li data-v-0b60bd9b="">
                                        <div data-v-0b60bd9b="" class="title">Amount to be released <img data-v-0b60bd9b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAYCAYAAADzoH0MAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgBtVTLbYQwFMRWDnCjBEpIOlgu/E5JB0kHSwVsKoBU4pz4nEgHuyWQDsgFiQtk3gqQtTKsUZSREPaTZ3iesTGMP4KpikVROIyxhHN+8TzvY0uAK1UZS/F6HYYhq6oq3S0wjuOPND6WZXncJWCaJhEaqZRiWwdtAdd1W3zZxVbaZSHngrzREiCEYdjAg5d5DkEbgrUQwtYSmES+IBJLJceyLKEtQIiiKMNLjvIgJ8MMTSCJmshSKQ6CINMWqOva7vv+jKEz165GGztAKSCNMxlKc0rprgdbgFCr3cF0P8gHZ66hmyftDkAWMhmIcdEuWgJTbI/zHK2/UwJXYQ1yAsJJ6uTT9/3lhG52kOf5s0wGmq7r3uQ1qx3cRkZkyp3uyF2BNcfJtNu1a3+kxFA4rlq75sFyZWXHVXhQFUGK8XzTUcWeT8Z/4hdg/ZU7L+bCYQAAAABJRU5ErkJggg==" alt=""/></div>
                                        <div data-v-0b60bd9b="" class="val"> $0</div>
                                    </li>
                                </ul>
                            </div>
                            <div data-v-0b60bd9b="" class="ex">
                                <div data-v-0b60bd9b="" class="ex-item" onClick={() => handleNavigation('RechargeCurrency')}><img data-v-0b60bd9b="" src="data:image/png;base64,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" alt=""/><span data-v-0b60bd9b="">Recharge</span></div>
                                <div data-v-0b60bd9b="" class="ex-item"onClick={() => handleNavigation('RechargeCurrency')}><img data-v-0b60bd9b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABYCAYAAACeV1sKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAsBSURBVHgB7Z1RbFtXGcc/p2mbNHHrZEmbFBUlE1DGC26p9lDQ5m48IFVdESAhUYmmmgpICDWdJgESLAlCAkRR0weQtjEtfRisEg/rShEP2xomyNNoPCExLZvWaN3iNEkTt0mbpI3tff/jc7zjG9/r63uvnXtt/6Xbe+1rp/bPn//nO+ee8zlEPtPMzEyUd9i+zFtEHkdCoVAkk8lE9MfyfUm+L8mHk3L/Nm9xvn9y586dcfKJQrTBmp2djfHuUYYUYzhRI0inkh8AgF/k/ehGQt8QyADLb/woA+gzQm1oaKAtW7aI/aZNm3KbOqcrnU6LfSqVIv47dP/+fXGMbW1tzfjfTvI2ytu5SgOvGOSFhYUIv3FAPco3Y7kXEApRU1OTANvY2LgOpFPhAwDo1dXVHHxNgAzYI1QBlR2yhHuKD/tV1CqwW7dupc2bN1MlBNArKytG4JO8DZUbdlkh37x58xRH1KCCC6Aqar2KWCcC7Lt371YMdlkgS88dIGkLgNvS0lKxqLWrQrD5NR5qa2ubJA/lKWRpDQMMuB+30WABLmzBzzLCZjsb7OzsHCKP5BlkBtzDfneFD3twG3BhDRtpC6UKoO/cuaNuehbVnhCYm5s7zhE8zoc9iF5+YbRt27ZAAYbwmtvb21XKiKAZn56e7ieXch3J7L+wh0EcNzc3BxKuUci5EdXYILf24Qoyd4Ff5F0fjltbWwXkapJuHwx6mEGfJgdyDFkBRs67Y8cO32UOXgl59a1bt0R0s0Y4zTtBJcoRZAUY3rV9+3bRU6tmoed4+/ZtlX2UDLpk82QPPksSMCK42gFDeI94r7JB7JNBZlslQZaNXD8sAhGsBm5qQepbi/fO6gMLu8+1bRfoIvPXZRjHkUikaj24mODRyWRSHHMW1dfR0XG+2HNsQUZHA3kwxiDQyUCaVstaXl6mpaUlHCY52PYV67DYsgv05ABY5cG1Lo1DBGwwnGD1+KKQpfeInlwd8KcCC9UzxHiN1WMt7UKOR1zDsdbdrEsKqR0zEsfcIB7izspoocdZRrIc8BGDPXXA64XUTn275dBuQZlC5lywj+o2UVSabcTMBpNM7YIhwyZ6wuGwGLJ0oudeOE9/v/xPmkpMkx8Ve+Rr9FT/j2l3dxe50b1790TXm7LZRi9nG0n9fMFI1qPYKeA/DP+RnvvziG8BQ6Nv/puOff+k69eIy2my3xBh4Oui2cwuhL84tYn/Xo3TXy/8jYKgRc53h379O3IrtFsQN4CnjCndOsheRDEgB0kTE++TWyGSVTSvrq726efWQcYngb2bxi7hY4sopMVs7821VFByd/uofn8eZMxD41Qk6iaKa1m4YCwHkGJy+pmQcZxSRLHbwZ/Ud3ZR6qufo1qTmrSDsQ0eTPsmZaeFrbOLGP6pR7FzqekPbBnH1X05yHLKqmjwanUY0wuBnbSMiLKMHGQ+EVMPqsudlBOk0+kY9jnIcralSKzrcifFkAP3Uex1T4Zd1CPZA2kMBVORXUg/jng1Pzi0nKJQco1qVfBkcGS7iICtgMx39GDStFczfxouz1HDPyYpUPoWeSpEMyags6KCKud02bCugcv7lZIaf+fgzULmCMZKozpkD6Wtc9khIKuZ8EGfKOgnaSyj6qjHcKIul9Iu10WUP+QWzAReDzZT+ostYp9p41SqKRs4oQQ3Qol7FLq2TKGrt6mCyocc5EjO7N9O6cfbtbdkON/NYwq8ZfaHiR5rp4Y35ssKu1AkB1ccqWke9cs81GL/OW2NlP72TgF70wsfEy3cp3Iq2CbMdpD6yWdLA5z3/EZKPfkZ8XfKqUBDTh3rKvplfPrz36Uf9h4xf4AEvbh2l8olBVlcwjYsjfW1MvDf7uJL1/aG99Dupg7rBzHogf+PkJeSM/OhpAoDQPZkdX5FxF/vNPupmcKN2+h7ex6nJ7oPZgHzO9vd/IAAObUyV/A5V+bG6a3ku3Qgspe8kFpcz0qKSEbZAsMJX8sKMASL+FHvE3kRDHgvP/xL2tu6x/R5z35wibySvspVQGa4bxtO+FqZB81XWQEiIhiaWrlJj7x5is5MXBC3EeFW/oxI9tqbme2tvEgOBGT4sEVjF2789AN4ayEL7aWPXhMAsxCXyUp4jhfCjHyI2cbVqxWzUYJgF5ki2cS7Sx8JsIjaQ51RBnuQLiXG6OTVM2RHiH4vpAKWOyVxlV0IyIq+r9VsPYUXgJW3AvSvHjpBlw/+lo5ICymmqeU58kIKMgdu1pNluZgkTgSl8bMS7OHw2M/oyuy4uL276QEB++WHnxHgyy2kb7I8TxJs9c5IcKLZhvC1f+p/f8qDjUYRqZ2VwpvdfwgaQ8FUv1r9L8MDfCmMollpSNjDb8SGFA6wB94ZyZ0/0GadB1uleHYlLzvBFS5in4PMI3Cj2KPAhq+FwZwVc0tDZwNwsamoLQVcsQ/BjlSgKqY5yHJRSVKV/nKj1nArlVMNY0nTc3+5/nquV3dsz9dp/LHn6fn9T+fOvzo1ZvrcWOc+156NWfey0csVADQOEInVlSrcnQrLBMqp0H+SptGM7ALp2quJfJgAf+a9C3Rp2hzysSJ+bUcau1F1kAeZE+dXsIdluMkyvrI/SkcOf4PKJgZsFc1ZH36R9r1xUsB9ho8Pj/2cXrr+mulz0Ev0YtxCc4Fz6iAPsrSMUVgGwt6NBn7xU/rBk8ddL3oxU+j1+ewlpSKaWLpOiWXrDgZSPMvhUJtCcEqriOtVFNdd1JudnUWRvLOYnIGF6n4WIhbWYDayZkcADM8uOhxqQ/Pz8wryCb3G3DrIWFQiV6FGglANAB78e3htYqzk5x6IfIGGvnTCE8CI4sXFRRyiwevVzxW8PH3jxo1B9ueBIESzEhq6Z69dshXVajQO2YdXMotiqCBkPZpRSMPvxfN0YfD9ymycJhY/ZODzucEijM4hB451RMXey+61VRRDphMtsISVk+mzuLSNaK5PfDGXVRRDlrNZZmZmsIA9huVmajFgXflCSTNZP65gFEOW4cm+LArO4Y8UKPpc80JfQhXo40g+ZPY4S8gybxZJNUp2VcMwqFdCX0LVIuLjoe7u7kmzxxad/CYbQVGHE2VhUMmwLhI1iLBejyxsQqloa4ayAvKrkMQfVV+PWhZ8GCxwbdTKJpRspQzyq3Ba/QfVMrDvRBhu0HzY0iaUbOdlSE3gPThGAY1abAhVOUkILLq6uobtPK/kCcncGxzhr8nxWsuf0eijoZPXQc8xYNt1lR3N+tZB11pBVI7g87t27eor5fmOp9Yr0NVe2hceDMBI2ZwAhtwWqYYn5YqQVFuvUCsX6Rgw5MpQuTHsV40hWly8oGrosCBq8V40wENOAUOerMSRg0koDhUJeoOo+6/8ka7Tbn/kxbPlTolEArUycj+BETT7MP5YAGsSHQ07eXAxeb6mTA3441hVR/R7JRhcYUYnS5u/do79eLC3tzdJHqgsC/eMUe1X2Kr3pvVgRzHyaFbY1KnKujpS1pgTpYFx2w+wYQuIXPWLZpAcg7DdgytVFVmCWgg28mpc1qpUpRhELTbAVYtmABfWwNE87JU1FFJF1/lK2Miro+o+BRywsXm19FjNHVG/w6etRoJgCxc5RRspJ1ylDVlMLYv89csaPT36OVU9BntsgI4PAvcZPwDVUKmf7ESOjg1wjfm6tITz/Lde8dpzi2nDV6wDOCp5yd9M9fyHaDElGLMrKw0277WQzwToKNeDajIodiKh9xT5SWVscbHSqKEB06PifvpJ5U8Aot2T00A2HDkAAAAASUVORK5CYII=" alt=""/><span data-v-0b60bd9b="">Withdraw</span></div>
                                <div data-v-0b60bd9b="" class="ex-item"onClick={() => handleNavigation('BillRecord')}><img data-v-0b60bd9b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAABYCAYAAACeV1sKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlaSURBVHgB7Z1PbBRVHMd/XaAU2MKCpbREdJtAiV6ohBMXl3AwMUEgJIp4oE1EDx4Ag4kX01Y9aEICHDQxmtBeTDxRFY0elNV4VFy9GEhMF41goC1Lu7QFSuvv+/p+69vtbvfPvNnZ7swnmb7Z2S0p3/3N9/3em3m/aaAa4/bt25GZmZku3u2am5t7nLdoQ0NDlF9HuI3w60jOryR5S+ktye9f4zbR2NiYWL9+fZJqgAbyGBGVxdnPL2O8dZE9IHqCv5zPV6xYEfdKdM9EvnXrVowF6GUBuszo5Ne0bNkyWr58udqwHwqF1AakFWZnZ9XG/wbxl0UPHz5ULTYcyyHO22C1Ba+qyDpqj/PuCVNY/k8Tn96qFVFtIGLfv39fbTmiD/AXOrhx48Y4uUxVRGZxow8ePOjl3W45BkFXrlypNluiFmN6elqJfe/ePfNwnLfB1tbWAXIJV0XWkdvLEXRCjiFiV69erUT2ClgKBIfY2NfE+W/qccNGXBN5dHT0OHtln9hCU1OTEhd2UEtA7MnJSVPsARa736bY1kXW1nCe5jMFFbHNzc01J64JBEZU3717Vw4leeu3ZSFWRTajF6JCXC9toVwg9sTEBHGQqNfcMZ7lDAdRnSIHWBE513thDWvWrKlah2abqakpFdU6G0lyoOxxYh+ORdb2cIF3u5DjQtxVq1bRUgdRfefOHfHqJG8H2T4SVAGORNYCX+LdKOxh7dq1agBRLyCSYR+S8vGZ2d3S0jJIZVLx+WwKDGHXrVtXVwIDnJkIHJydgPubAR6p9lKZVBTJ+QReqv5bKkjzJPtgsU+2tbWdLfV3yxbZjwILptDlWEdZIiOLYIF/JR8KLBhCI63bU0pnWJZCLPAZMjo5vwkMMGrFxmAkewFndrHfKVklbfjdEBgRXMsjOLdBR6gHWTK6XZSS7EL78DD2EcGYOfM7SO9YF5VHY2TIU6YnC322pEjWHZ36BgOB50F6h2kDgJEuLkIU+mxRkbVNKB/WXhSggWWIJiz0eSQG+T63qMiwCf7lPuzDhwMWYkzfRvmCwIl8n1lUZJ70QTahJnz83NEthmkbvH88XzQXFHlkZOQAR/GBwCaKA9vQ2UZEp7lZFMwubt68iWwiGg6HK55Vu5L+m05f/Uy1E7fGqeGPNIW+G+PLEbNUbTq3baUjLxyinTu7aHN7G9kGWcbY2JjaZ8E7zKnRvCLry/WXEMUbNmygSoCwxy6fpomZyazjDcNTFPrkH/IKCHz6vXeos3Mr2QYzdricxXMb53huI+PPee0C90OgdWITr//+4QKB1b/dsYrmdq4lr7h+41969bWTqrWN6MUj4aOmNy8QWQ8TY9iv9NLRz6krdH16pOD7ENpLJtJp6n/3fbINznzxZjPTWCCyvj/CUUZxfWqUap1fLifUZhuZe+ZM46gcy2cXMfyAyPVO/MefyDaIZKR1TFRGgVki64NRI+zrmvREmtxAApQzjgNos0RGXozWDwK7iczvcAe4X7XmmxzmT6P1g1W4iWkZN27ciGZERsrBkdwlHwpwBu75Ayz2gczlZfaPGFovBd737DPU+9abZIuLX31DfS6kaqUAHXErAVvGjkwks8gqiuvtsr5XSCQzsYyiUByz/TYi+bn23WorxMUpjjDyJsKqhTHGiJodXzTnzQCHyIXmTCRLp+elXXz59bdqqxcyvowXSDPQ6rQjwBKZxUT4wdEbRRtYhV0kaEP5DgbYQYK2pvK1cvNkL/PgclCRjKW1aAO7cAf/3czmAUpk7gXVwhMsnw2wj/JktouUbslL6i1PFsSTa0LkekMWYIb0i0BkFxA9lcjt7e1JtFA+8GV7iJZmdpHEjyCa7ZFlF4BHe+r6uCx5DXAOam0AcxbumvmGl+AOo9lDreQ2Q/QnDX1/bMHxU9sO00tb9pITjKoDiUwkc64cR1sLInvN1fRf5BQULwHsy9cyIvOQOo4WIvu98wsvc34bmdguB+9QRmSUG4Avo+MzQt2XbG9+jJwijsBaxnNvbvkBbU6NHt+xa30nOQFWIdUFkB7nzicPocU9tn5lV6STNje1kBOMII3jR5bIunxXCpbhZiqHu95rlVOdh8kpRuUXtfZ6wVQnC3wOrZuWgbvcm5vDVGsceXQvbQ9vISeYViE15xaI3NjYqEoM6NvyyS1efP4Q1RIQ9w0LUWxYbb/sLBBZFzWKwzJQi8ctXnm5u+C6jWrfib+vbTd9vPMUOQVBKQ6ArEKO570ywl6ivgWI7GY0f/TBGXVdL4v2lTzia6Zq0Lx8NfU/0UNvP9mj9p1ilDwbkEk3sNgSM6ynjmGxidyi7xa4IPrpFxfoysYRmt0dIWpy76rY5qZHOEXbTrGWLtXaEBcgGEdH55dxcBR3lCSyLDPDbQJYZubH2hblIMvLmIHW1tYe872CyumeUXkzqpUEFAajO+nwOIr7c98vFp6qhgO8OZgCLcz4+LhqOSD7TZsQFhUZ9XXwi9hPp9PBVZM8oLOTvHjTpk19+T5T1Gh13pzEKRHYRjamJiz0nkKfKyqyzpsPYj+wjf/BWV3MJoSSUgbYBgrOYR/1KwPbmPdhbROJQjYhlJyXoaIff2ODyDZSqZSvhYYP6zM6yUIfLPb5spJf9mcsyk5IRVY/Cg2B4cM8flA2uphNCGWJDH/W35zqCP0mtAgM+Iw+WWqp37KHcfjmdE/qK6FNgdE/lVOKvaKxcq7Q9e7RORHcX07FWeBo/QIW9PBV7kyR6kgkUldzHLlFqpmeSh4m4HiRiBY6U27dKBi6pMGZiTNUl4lUnVylT9exthKHp0ZxCuGRQ3X34ABYYylZRCGsqcCn0Qk9YElhRgpRsNSuekv0Yp4GAqMqFov9lBOBgfU1ZaZP4/VSiGqZzkUEYx/2wAL38EhuiCzg2sI9to9ublQxVbyuRbFzxQWIXn7d19HR4egBLiauro5UVUtCoT6zshTERvkYo1RB1cknLhPHtU03Hh1XlSWo+cSWGqAQuxrRLTfsQNycmUTXxBWqus7XEBu1jqJyXAqKysMPbYH0S56/l+dJk66LK3i2mBpVbVHSCxWnch8uC7HNR3fKIz1l30TuQJVbfos9vhPPS+XsYcCm5xajJlasQ3AWJcYiIsKtPYgWWQILPcTtb9UWNuvvoBpjeHg4Eg6H1SOVOSphLzv0W1EyLMYgabRJCMpbkn034TS/tcV/S9sh4dtBKaQAAAAASUVORK5CYII=" alt=""/><span data-v-0b60bd9b="">Bill</span></div>
                            </div>
                        </div>
                        <div data-v-0b60bd9b="" class="info-cen">
                            <ul data-v-0b60bd9b="" class="tab">
                                <li data-v-0b60bd9b="" class="on">Asset List</li>
                                <li data-v-0b60bd9b="" class="">My earnings</li>
                            </ul>
                            <div data-v-0b60bd9b="">
                                <div data-v-a998da64="" data-v-0b60bd9b="" role="feed" class="van-list" aria-busy="false">
                                    <div data-v-4afb37b5="" data-v-0b60bd9b="" class="list">
                                        <div data-v-4afb37b5="" class="head">
                                            <div data-v-4afb37b5="" class="left">currencyType</div>
                                            <div data-v-4afb37b5="" class="right">numberOfCurrencies</div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250412/b0faba02c6e1dd72efd1965ba6c6b30d.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">MCE</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2c161d6ff1fdd3d4b8b19f51866e3a86.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">USDT</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/3e546c0e62248d9bec26855319dc25dd.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">USDC</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/4bd3122ec5f26eee8157b3a93b7ae000.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">TRX</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/ebcc1124904e897fb5d2c96c75dd85ca.jpg" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">DAI</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/0318e3072bb3a20b821bc8179c61297c.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">BNB</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/2719394e5775beb54774bb7d5bd221ef.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">BTC</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/fc51ff0601c7238228528eccb3f8f511.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">DOGE</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/19ec55a2e96ff980f0556afefd402a44.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">ETH</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                        <div data-v-4afb37b5="" class="item">
                                            <div data-v-4afb37b5="" class="left">
                                                <div data-v-0bf4a1a6="" data-v-4afb37b5="" class="com-image img">
                                                    <div data-v-0bf4a1a6="" class="van-image image">
                                                        <img src="https://minecore-all.s3.ap-southeast-1.amazonaws.com/upload/20250621/3e2ad94f83a629b7a0177ec73ebc7181.png" class="van-image__img" style={{objectFit: 'cover'}}/>
                                                    </div>
                                                </div>
                                                <div data-v-4afb37b5="" class="name-con">
                                                    <div data-v-4afb37b5="" class="coinName">SOL</div>
                                                    <div data-v-4afb37b5="" class="coinFullName"></div>
                                                </div>
                                            </div>
                                            <div data-v-4afb37b5="" class="right">
                                                <div data-v-4afb37b5="" class="total">0</div>
                                                <div data-v-4afb37b5="" class="value">≈ 0 USDT</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="van-list__finished-text"></div>
                                    
                                    <div class="van-list__placeholder"></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem', right: '0.2rem'}}></div>
            </div>
            <div data-v-72d7289a="" class="footer">
                <div data-v-70088780="" data-v-72d7289a="" class="main-footer">
                    <div data-v-70088780="" class="item"onClick={() => handleNavigation('dashboard')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAM3SURBVHgB7VjhmdowDFX4+r90goYJSidoOkGvE5Sb4MIERycgTAA3Qa8TXDY4OkHTCZpOQJ9AAiXYToBc+HPv+4IdI9sPyRKSiV7RDSLqCPP5fDgYDO42m02C11iG13j/OZ1OV3QBLibJ5KIoukc3DYgVIPv9XLIXkQTBBASXdNDcnhSeoTwWKyFb0Ak4i6RHeyUILNBmIFGKXCJyiZE7Wasnk8TGY2z8g6ray7HxrU9DmDMRsnZOlqbplLomuVgs2DFmdDBjKVrJmuaCaIxmBrLfzDBr9XOT+VuRFPOy9hIzzJ779dTzhbVSrDW3Y1hnGvqhjSRdziFnb6Zn71SwVrHmE1XN73WqIEmY917Mqyjl7D1SBwDZDGTvzJDT/APfAlmWLWsE2Tk+dkWQgbVS/tG0C1kM1vAzyN9YuchDkM/MPryIGWb0QnCZXxSydpKUcLE0wreX/q21BfZeGe8vEKJG3Dkytw0R4nUr6gnYa4Iml9dYze46k4m0RZv41zX4aGkfCvvCbYWkBFxFQddBoR0Qfset17sh8I+uDGjyLbcVkjY+QeA9XQc2cyr4w6XJwiHcJ2LtwJp/uHWR1L869q5rEI1Nfxsnj0iC/S/PhL4Qm/5WYS5Nrk1/TD0DvvCBalxCZ5LRO0mzZ6lZVlCTGgL6gvjAsM7jiGQtTUqoX1jLFdrxBXMVaPRuTopr/1SXyO33sw7sI6mqHoYW5pSOUyw8vzlBdskyOcg9qRy/kx+JgwO9cUlyEMWC+somKMiNGzOHi6wZCOV0iLU8N67N4bHctVjNs8sgSaqGodgjs6116kUVhc9xgSeU2cfSlprwMnzmzrWj6ZILnMqB6AjPA4WxLX0l2y5cAnJUYnm1SvIXYjDbX9odZN5g1FQZyiYJnrGGLsmkWHPrFvP3FQFbiOsf/c5nbhZ8kEqOiU6YNwUgGlrRmZAbDkXlSAwC8x7tAm3CzLngyEAHU3NFkNvvg3U3hw4y5QTtylo+f43ma4L86LFYK9FxV+EXNSzE1yvP5PfwkkyoaAnXlaASdJbOba5ZYjq+aOoawYuv1rdq6r0g+4l2mvVqpA0p2l2pcObdyvtf0QX+A72LppsO8uSSAAAAAElFTkSuQmCC"/><span data-v-70088780="">Homepage</span></div>
                    <div data-v-70088780="" class="item"onClick={() => handleNavigation('earn')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOtSURBVHgB7Zj/ddowEMcPXgdwNlAmqDtB3QlKJogzATBBnAmACepOkHSCqhPEnaDqBGWD9K6c6HFIlgTkv3zf41m29eOj091JBuBNl9Ekt+JqtarwMptMJh/x2uDP8Kst/hz+hpeXl6/L5dLChZUFudls7hFggcUqo7rDug8I28OFNAqJ1jNouUcs1lCuHmGRdbmFMxWFZMDv8H9ZvSwO/g2vg3hWY93PsHMDKXKBT+eCTgoACe4OB3SRNg22mWNxFnhNE9ry5J5ifRRBrtfrL3hp/T37WAfHYNV0Op0X+KsXWXiT67eTwMANWzEFSPVoMgZOl2N3cFACiVYkwMZ3slgsrgN1VnhZBPojl/gJu+V14rlMX0Y34gBbQw4k++Iv0fhOL4l2BVafmyN5Be5BBRk+6+bz+QNkQM445ZC2aMUrBagt6HgiFgqFY7U4FvVXpUCn6l7mQ5li/iV0BUjO/+HUHYZWiNqDcAu878jSkIA0oux8gdyAOoBDwLPzHwUM9SPHomDkLTgKGRRHsRd1fHOJnUSA3olHBlRQvlNtnKoMbP7GP+SU5GBEHBy33IdLtSGXwTYb3gzIKHO8X3tDTEcga25wK9+nEjD67i3n2RZ2k6MAecZBU/t/B7sTFakCkUE05JMoV2zF/TZHFoEEINbpA68qAh8DJatRGvP3fBY4hmTzWlGR0pF0Ygv5gDTopgQUDo3U+AA6ChxlLQk4jBwuZgFAiv6FCgoPaiCsQd2bICTnPauf42C/ISLeQTTgwP31AdD7UD+8kk48qoOQDHSjKhPIH4irlm09oBi8VyvUjPR1lNqCkOzEB0k2oX3HtNXpZMxngoMsAQWKJnNOsvtow/JVrK4KkJr9rhKABwdo2W9AcoLBPKnlfAEHeh+rROdNNbAHbQKA0Y80npgphZS+ZfQyKtA2BBoA7CCuWvVpk5AcANKR20T9NraUGYB6d7O+kDxgxHaBBChFsp/clk/e3Vg7zp1taNycU5DeBdpUAwKiAzMOdE3XsU8Dr0DutPt3kCH13bPlw66DC4m2SjqE+HvtGlnnSVoucUs7xuNYEBUCGvHJQnL462WdLEgKIAVaJ/bgEkCdAZZ6lbIgGXQdyYUGThCfO5/hOEU96brZf/15IVSvUgWpzzmxc/vgJ+1YiiqG5IG6yEmG8ir9QfADDvOr4R2LDtBGNyr6c6AQtGVQA6fLMuAwVulkSK8TYS0vr82pfDakl/8e4mU1cPwNP7Ab2JTl3vRa+gu6GGIYZECWCwAAAABJRU5ErkJggg=="/><span data-v-70088780="">Earn coins</span></div>
                    <div data-v-70088780="" class="item"onClick={() => handleNavigation('mining')}><img data-v-70088780="" src="data:image/png;base64,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"/><span data-v-70088780="">Mining</span></div>
                    <div data-v-70088780="" class="item"onClick={() => handleNavigation('trade')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGtSURBVHgB7ZeBcYIwFIYfngMwghu0bkAnaJ1AnKBlAq8TABvgBGUD6wTaDTICG9D/ebGX5rT6gBC88t3lkjyC/ryXvAdEIyPDIrANaZqG6OIgCB7II3VdvydJong8NS9A4AzithjOyD8bNMWDiWmFwDUNQ+Avptb8xRiXaBX1S3zOaIsMTwPsiRx74pN6JMuy+Jx9QnfA/xGp05YzWovM83yNrLDn9EWOmFJD2HsQ94EDFvGcx+jm5IBGntRJf49hZJhDV94UexLhXcJ7GRnpSqO4GCCNXP0N3L+RpDeRSPYU/qC4cDmi29kJ1orD3XcFOiLyJEJUwZsLhPWZ2qEki8V7EkK5ppfUI3dRcaQH5xGhfqUW4ODtEI1Cco803Me3dmoBHjLGwypJCvIVblGtl3pSoRWC9bFt0N8uooMnTUEK3eraOl3Xt5a5gsCVVCDjJNycT/mAGCaF+byJQMbZnoSgN3QHtFILVNSQxq9qtwBxT+xVaonT092FQGb8EOuKi3tSv8AuyR8/W+WvgxORP7hsHk6TIYabc+zCNNieLMgjEPfFGrrKCiMjrvgGdnOWJKOVhngAAAAASUVORK5CYII="/><span data-v-70088780="">Trading</span></div>
                    <div data-v-70088780="" class="item on"onClick={() => handleNavigation('assets')}><img data-v-70088780="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAoCAYAAABjPNNTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADOSURBVHgB7ZfbDcIwDEWvqg7ACBmBERihI7ACG7ABYgNGYAPYgBEYgWwA8a+Rkqi13ES9R7ofdX+OajcPgBCymJDySvk65IBKBvU8pezRGFpyhwYZM+9iygl2yAe4YAYlyRvsCJgpOaADcl9S2nOEHXre5ScNqibdu6PAGT7LTy5/I9Fiuydd6GImKWkFJa2gpBUjfJBdJKqarIdVpy4vyWvKU9UCKg++nEkrvNr9wALYbisoaQUlrehSMmJ9ig6y4b+x3k3xA9trNCHb5QeDrWlnAen/tgAAAABJRU5ErkJggg=="/><span data-v-70088780="">Asset</span></div>
                </div>
            </div>
        </div>
    );
};

export default Assets;










