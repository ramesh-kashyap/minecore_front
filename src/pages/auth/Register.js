import React, { useState } from "react";
import Api from "../../Requests/Api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { PhoneInput } from "react-international-phone";
import 'react-phone-input-2/lib/style.css';
import '../../index.css'
export default function Register() {

   const [formData, setFormData] = useState({
      sponsor: "",
      name: "",
      email: "",
      // phone: "",
      password: "",
      password_confirmation: "",
      // countryCode: "",
      // country: "",
   });

   const navigate = useNavigate();
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleRegister = async () => {
      if (formData.password !== formData.password_confirmation) {
         toast.error("Passwords do not match");
         return;
      }


      try {
         const res = await Api.post("/register", {
            sponsor: formData.sponsor,
            name: formData.name,
            email: formData.email,
            // phone: formData.phone,
            password: formData.password,
            // countryCode: formData.countryCode,
         });
         if (res.status === 201) {
            toast.success(res.data.message);
            navigate("/login");
         }
      } catch (err) {
         toast.error(err.response?.data?.error || "Registration failed");
      }
   };

   const back = () => {
      navigate(-1);
   };
   return (
      <div>
         <div data-v-72d7289a="" data-v-7d2ee121="" class="page">
            <div data-v-72d7289a="" class="headers">
               <div data-v-293fd8ae="" data-v-7d2ee121="" class="user-header">
                  <div data-v-293fd8ae="" class="left">
                     <div data-v-293fd8ae="" class="back" onClick={back}><img data-v-293fd8ae="" class="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" /></div>
                  </div>

                  <div data-v-293fd8ae="" class="right">
                     <div data-v-293fd8ae="" class="lang"><img data-v-293fd8ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIkSURBVHgB3ZiNdcIgEMf/dQJHYAQ3kE5QR8gGuoFsoBvoBq0T2E5gN0g2sBtYTskrOTCBAD5ff+/dMx/AnXdwB3nBeKZaFlrmWmZahHlG/GhptHxr+dLyYZ49BKFlo+Ws5RIhO9O3GFNj2CVRNojgJbCd0HKE6wEKG4XxgFtI7TBS2Cn8C8941PbV/CYjtNToeoHCq/A35/qgNpVnjBoZQi48A28RZphvrD0yG8mNU0hHwTVyzB/GGvmNa1FIWDiEgJsicrNlOkRE36tBWSezBwqrnUu3MR3tf1ahHArdzBA0FyskuD4S7sWKN5h4Os2t6zYBl6JN9D7dV3wGzqzrT5TncEe3g4Bba99RNsQStxJqz8OdT+cM/buTNfKz7NFXw/KmgFsxfCKRDxmg72xs6+S8tmLQABUz/Ih88LCujE4Ft+53jFBsIMk6jKqZDJ5n+XZMoRvqwTDa73tXWSCSjdn7foI4cngwilgDH86/MzDH0TFqDDKwse4le89XWIN0GnYv2f2ct+Ubx7XpRLnJri6l8iClksroXMOzURYIO4RL5EMG6Kth1eQZ+svdCvlR6C9zTs4VuB0La6sR7WYkyiGMDl7eBJ4IWoid0mbzDHnwzbpu8GQIPO6AFg3VdXth1ihQ65cY3uye4HpGmOdFvVdhOJf5CoDv42fwoT2GU6SB92SPQqQa1m71i1GPNOqI8I+fSawQZ1xRb92jwvBcrFOM+wXp7n2Zcm6yKQAAAABJRU5ErkJggg==" /></div>

                     <div data-v-293fd8ae="" class="lang"><img data-v-293fd8ae="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMmSURBVHgBxVmLceMgEH1JBboKjlQQd3BcBymBDpKrIOrAugrkq+DcgZwK5KtASgV2BzmIVmO0LAj5M3kzbyQLWJ6WBVb4DudDW64sf9C1IDocLXviP8sd8eZwAl4tD5YfC9lZ1pYKN4ATtj5DVIxXFfqMPI81lk8Yhr7NqO88anAhJK8dBAEboe1GeIFOsLfGGSjIIBdWUpnfUZew0bJ6BdngIlucJlgWuIeccUVlhpWphB3N6hp6rhB6s0Em1kLDIiK+zrDXQBYhjdLscBuk32rFyjXmoWfacJEvMUMKYWzxuKgwH3sSfLslK+MxfUAkHmvMxxYP+oau0uwcZ3vDyqVYU5guZWupwkfkLTWG3aPB/NqWy5ZErLx+SlZn4sUa4dCaK4tKiTXU54E76Y4EdjgN6Y7uFeJwycDW8h1DQnAkcijiI4aRSK11PdlYeX18A8JZJpHH2RbLsUnYi1HfI71U7Cx/Wj7QG47YYzl6dv9Atv8k2nx68y/kuNCssj+DDZbDIL5EKcge3fKOHTeQY8UPYI3leEoIHLFBGFqTjttEB5PYwHJoZiOGxqtzcDHoe+sXvh6/vfvinhUuSnluhMlydc8ePOPr4W9zRy5QI55C9d79pZ6WFvWC+va3v94J5GuawXRnQcTYUii/Y1amMUwOw56/O4FvkI05kTVOM7Zn5UuhvPsjE+a4Etrsx0pLt7pYGKTgbwgtMre6MVnwk8Q93atEZ84DOwynBj3CIQNOJw3K8juGhXouWXDU3u+HsbD0VI9iDfK+by9lg1O6FR2lgjUqvTIXG9WVxTbUh/b6eWV1FBgq5sWgAqbbUEe/W8gnDx2mnwV+/HEo1rYW6gQZbYcwZkpWngtfYCX02zG7KmboBeFQ+NBYnjTwNnw5aVi5mTNYCSKLiMEG86ghD6/04V4hE7yh73aDfC8qyN5RCNfBVKoXgB/8jHxFGDOpgx8eW7ED0AZn7u8V5NnJPVwLbWuEHpJme/awxmCQty2N3zFPyPuedmJfcCUohN8Ll9B57SbJsSKhOR6VPFYuFXaH86GJjzidIPh/Qzi6xOONrjucgf+b23/QDo5kCwAAAABJRU5ErkJggg==" /></div>
                  </div>
               </div>
            </div>
            <div data-v-72d7289a="" class="page-container">
               <div data-v-72d7289a="" class="scroll" id="pageScroll">
                  <div data-v-7d2ee121="" class="user">
                     <div data-v-7d2ee121="" class="welcome-text">
                        <img data-v-7d2ee121="" src="data:image/png;base64,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" alt="" />
                        <div data-v-7d2ee121="" class="box">
                           <h2 data-v-7d2ee121="">Hello</h2>
                           <p data-v-7d2ee121="">Welcome to Minecore</p>
                        </div>
                     </div>
                     <div data-v-7d2ee121="" class="user-con">
                        <div data-v-7d2ee121="" class="box">
                           <div data-v-7d2ee121="" class="box-item">

                              <div data-v-7d2ee121="" class="title">Sponsor</div>

                              <div data-v-a2e94f62="" class="inp-con">

                                 <div data-v-a2e94f62="" class="inp">


                                    <input data-v-a2e94f62=""

                                       value={formData.sponsor}
                                       onChange={handleChange}
                                       type="text"
                                       name="sponsor"
                                       placeholder="Please enter your sposnor"

                                    />
                                 </div>
                              </div>

                           </div>
                           <div data-v-7d2ee121="" class="box-item">

                              <div data-v-7d2ee121="" class="title">Name</div>

                              <div data-v-a2e94f62="" class="inp-con">

                                 <div data-v-a2e94f62="" class="inp">


                                    <input data-v-a2e94f62=""

                                       value={formData.name}
                                       onChange={handleChange}
                                       type="text"
                                       name="name"
                                       placeholder="Please enter your name"

                                    />
                                 </div>
                              </div>

                           </div>
                           <div data-v-7d2ee121="" class="box-item">

                              <div data-v-7d2ee121="" class="title">Email</div>

                              <div data-v-a2e94f62="" class="inp-con">

                                 <div data-v-a2e94f62="" class="inp">


                                    <input data-v-a2e94f62=""

                                       value={formData.email}
                                       onChange={handleChange}
                                       type="text"
                                       name="email"
                                       placeholder="Please enter your email"

                                    />
                                 </div>
                              </div>

                           </div>
                           {/* <div data-v-7d2ee121="" class="box-item">

                              <div data-v-7d2ee121="" class="title">Mobile phone number</div>

                              <div data-v-a2e94f62="" class="inp-con">

                                 <div data-v-a2e94f62="" class="inp">
                                    <div className="relative w-[100px]">
                                       <PhoneInput
                                          defaultCountry="IN"
                                          value={formData.countryCode}
                                          onChange={(value, meta) => {
                                             setFormData({
                                                ...formData,
                                                countryCode: meta.country.dialCode,
                                                country: meta.country.iso2.toUpperCase(),
                                             });
                                          }}
                                          inputClassName="pointer-events-none select-none bg-transparent w-16"
                                          containerClassName="w-full custom-phone-wrapper"
                                          buttonClassName="react-international-phone-country-selector-button"
                                          inputProps={{
                                             readOnly: true,
                                          }}
                                       />
                                    </div>

                                    <input data-v-a2e94f62=""

                                       value={formData.name}
                                       onChange={handleChange}
                                       type="text"
                                       name="phone"
                                       placeholder="Please enter your mobile phone number"

                                    />
                                 </div>
                              </div>

                           </div> */}
                           <div data-v-7d2ee121="" class="box-item">
                              <div data-v-7d2ee121="" class="title">password</div>
                              <div data-v-877e6773="" data-v-7d2ee121="" class="inp-con">
                                 <div data-v-877e6773="" class="inp">
                                    <input data-v-877e6773=""
                                       type="password"
                                       value={formData.password}
                                       onChange={handleChange}
                                       name="password"
                                       placeholder="Enter your password"
                                       required
                                    />
                                    <div data-v-877e6773="" class="icon"> 　<img data-v-877e6773="" src="data:image/png;base64,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" /></div>
                                 </div>
                              </div>
                           </div>
                           <div data-v-7d2ee121="" class="box-item">
                              <div data-v-7d2ee121="" class="title">Confirm password</div>
                              <div data-v-877e6773="" data-v-7d2ee121="" class="inp-con">
                                 <div data-v-877e6773="" class="inp">
                                    <input data-v-877e6773=""
                                       type="password"
                                       name="password_confirmation"

                                       value={formData.password_confirmation}
                                       onChange={handleChange}

                                       required
                                       placeholder="Please enter confirm password"
                                    />
                                    <div data-v-877e6773="" class="icon"> 　<img data-v-877e6773="" src="data:image/png;base64,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" /></div>
                                 </div>
                              </div>
                           </div>
                           {/* <div data-v-7d2ee121="" class="box-item-pass" style={{ display: 'none' }}>
                              <div data-v-7d2ee121="" class="bip bip-title">Your password must contain:</div>
                              <p data-v-7d2ee121="" class="bip">Length is 8-20 characters</p>
                              <p data-v-7d2ee121="" class="bip">1 uppercase letter</p>
                              <p data-v-7d2ee121="" class="bip">1 lowercase letter</p>
                              <p data-v-7d2ee121="" class="bip">1 number</p>
                              <p data-v-7d2ee121="" class="bip">1 symbol</p>
                           </div>
                           <div data-v-7d2ee121="" class="box-item">
                              <div data-v-7d2ee121="" class="title">Captcha</div>
                              <div data-v-7700cd8a="" data-v-7d2ee121="" class="inp-con">
                                 <div data-v-7700cd8a="" class="inp"><input data-v-7700cd8a="" type="text" maxlength="50" placeholder="Please enter the Captcha code" /></div>
                              </div>
                              <img data-v-7d2ee121="" class="captcha-img" src="data:image/jpg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAiAFADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3eqt9qVlplq91f3cNtbp96WZwij8TWX4q/tCbQLy20u7W0vZY9kc7DPl56n64zj3xXgXi7QLxdHub/wAVeJbrU54Iz9nhBKxq/bv1J9hQB9J2t9a31tHc2k8c8EgykkbBlYexFVLnxHotnqMWnXWq2UN7LjZbyTqrtnp8pOee3rXgfgW+8TR/DRLDQ7qO2uJb5iJpefKhK8kZB53VleN9B0TQ/DrTST3Fzr8siv8AbJZSXkbI3cdABz79OaAPqIuoGSeKq2eq6fqLSrZXtvcNC22QRSBih9Dg8V5ZZX154q+GOmWt3ey2/nxILuSMkSSRrnKg9t2Bk+hPrXn3wwS0T4p6hfWatbWdmsiwxI5wQTsUNzzxk898UAfTxdVGSQBQHUjIYEdc181+PviBb+JPFEmlXl9d2/h+y4dLP79zJ3J7YHPX09+LWhaHNq3kpofjjUH0J3BltHlYOq55XrwfwFAH0WGDAEEEHoRS1UsnUwIqKFRQAqgYAHpVugDL1cRx2ks0rbY0Usx9AOtfMfjvxLYeIfE0dgt15Wk2zbpZRk+YfYDr6D65r6b1gt9mcAZyOleDD4d6bZ6zNPHaNKrSFljlwyRgnoBjp9c0Ab3hK+0OfRJJrC8hNtap+8H3TGP9oHkdDz3ryW91Sy8VeLZrrU7z7NabtkCkHG0HjPYepNesx+DbCO4a8gtfs8kkTQzxxDbHPGwwVZenvkYOR3rLtvAenQR/ZhpsTxHgmRdzH33dfyoA6a3NlpXhUTvOkdlDED5mcrt9eOteR+CdTtrTxrfRwS7re63+S+CM4bcOvtmvTNB8C2ehx3y20t1LbXkeyS0nYPFj6Yz3I69CetYesfD+xv5f+PX7M4PyyWyhCPwxg/lQBxcKHwz4qu7m7gZ7OZ2C3CruCZbPPp71Nrqx6HqGn67oN0iC4k+ZIW+Un1wOx5z716JongyHSdPNtAkjxsSzmU7txPBz2rNt/htpsevR3iRShVcOIMgx7vpjP4UAe6aRKJbSNwMZUHHpWnWPokTR2yhvStigCpeAGM5Fc28aecfkXr6UUUATbEx91fypvlp/cX8qKKAJIkXH3R+VQTxpv+4v5UUUATwonl/dX8qjRE88fKvX0oooA6K1AEYwKs0UUAf/2Q==" alt="" />
                           </div>
                           <div data-v-7d2ee121="" class="box-item">
                              <div data-v-7d2ee121="" class="title">Invitation Code</div>
                              <div data-v-7700cd8a="" data-v-7d2ee121="" class="inp-con">
                                 <div data-v-7700cd8a="" class="inp"><input data-v-7700cd8a="" type="text" maxlength="50" placeholder="Please enter the invitation code" /></div>
                              </div>
                           </div> */}
                        </div>
                        <div data-v-7d2ee121="" class="bot">

                           <button data-v-34dc7cc4="" onClick={handleRegister} data-v-7d2ee121="" type="button" class="van-button van-button--default van-button--normal  com-btn" >
                              <div class="van-button__content">
                                 <span class="van-button__text">Register</span>
                              </div>
                           </button>
                           <div data-v-7d2ee121="" class="bot-tips">Registering means that I agree to Minecore <span data-v-7d2ee121="">Service Agreement</span> and <span data-v-7d2ee121="">Privacy Policy</span></div>
                           <p data-v-7d2ee121="">Already have an account？<span data-v-7d2ee121=""><Link to="/login">Log in now</Link></span></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{ bottom: '1.3rem', right: '0.2rem' }}></div>
            </div>

         </div>
         <div data-v-6570e20a="" class="page-loading-con" style={{ display: 'none' }}>
            <div data-v-6570e20a="" class="loader loader-3 page-loading">
               <div data-v-6570e20a="" class="dot dot1"></div>
               <div data-v-6570e20a="" class="dot dot2"></div>
               <div data-v-6570e20a="" class="dot dot3"></div>
            </div>
            <p data-v-6570e20a="">Loading...</p>
         </div>

      </div>
   );
}
