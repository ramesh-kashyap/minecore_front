import { useState } from "react";
import Api from "../../Requests/Api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';

const ChangePassword = () => {

       const navigate = useNavigate(); // Hook for navigation
         
           const back = (page) => {
           navigate(-1);
           };
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState('');
   const [passwordConfirmation, setPasswordConfirmation] = useState('');
   const [verificationCode, setVerificationCode] = useState('');
   const [message, setMessage] = useState('');
   const [error, setError] = useState('');

   const handleChangePassword = async () => {
      if (password !== passwordConfirmation) {
         toast.error("Passwords do not match!");
         return;
      }

      try {
         const response = await Api.post('/changePassword', {
            password,
            password_confirmation: passwordConfirmation,
            verification_code: verificationCode
         });

         if (response.data.success) {
            toast.success(response.data.message);
            setPassword('');
            setPasswordConfirmation('');
            setVerificationCode('');
         } else {
            toast.error(response.data.message || 'Something went wrong.');
         }
      } catch (err) {
         console.error('Error:', err.response);
         toast.error(err.response?.data?.message || "Server error");
      }
   };


   const handleSendRequest = async () => {
      try {
         const response = await Api.post('/sendotp');
         console.log(response);
         if (response?.data?.success) {
            console.log('OTP sent successfully:', response.data);
            toast.success("OTP sent successfully!");
         } else {
            console.warn('Failed to send OTP:', response.data.message);
            toast.error(response?.data?.message || "Failed to send OTP!");
         }
      } catch (error) {
         console.error('Error sending OTP:', error);
         toast.error(error?.response?.data?.message || "Failed to send OTP!");
      }
   };
   return (
    

      <div data-v-72d7289a="" data-v-464754c1="" class="page">
         <div data-v-72d7289a="" class="headers">
            <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
               <div data-v-7401f0fe="" class="left">
                  <div data-v-7401f0fe="" class="back" onClick={back}><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
               </div>
               <div data-v-7401f0fe="" class="title overflow1">Login password</div>
               <div data-v-7401f0fe="" class="right"></div>
            </div>
         </div>
         <div data-v-72d7289a="" class="page-container">
            <div data-v-72d7289a="" class="scroll" id="pageScroll">
               <div data-v-464754c1="" class="forgot container">
                  <div data-v-464754c1="" class="box">
                     <div data-v-464754c1="" class="box-item">
                        <div data-v-464754c1="" class="title"><span data-v-464754c1="">email</span><span data-v-464754c1="">nocevet393@cerisun.com</span></div>
                        <div data-v-7700cd8a="" data-v-464754c1="" class="inp-con">
                           <div data-v-7700cd8a="" class="inp"><input data-v-7700cd8a="" type="text" maxlength="50" placeholder="mailbox" disabled=""/></div>
                        </div>
                     </div>
                     <div data-v-464754c1="" class="box-item">
                        <div data-v-464754c1="" class="title">New login password</div>
                        <div data-v-877e6773="" data-v-464754c1="" class="inp-con">
                           <div data-v-877e6773="" class="inp">
                              <input data-v-877e6773="" type="password" maxlength="100" placeholder="Please enter new login password"/>
                                 <div data-v-877e6773="" class="icon"> 　<img data-v-877e6773="" src="data:image/png;base64,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"/></div>
                           </div>
                        </div>
                     </div>
                     <div data-v-464754c1="" class="box-item-pass" style={{display: 'none'}}>
                        <div data-v-464754c1="" class="bip bip-title">Your password must contain:</div>
                        <p data-v-464754c1="" class="bip">Length is 8-20 characters</p>
                        <p data-v-464754c1="" class="bip">1 uppercase letter</p>
                        <p data-v-464754c1="" class="bip">1 lowercase letter</p>
                        <p data-v-464754c1="" class="bip">1 number</p>
                        <p data-v-464754c1="" class="bip">1 symbol</p>
                     </div>
                     <div data-v-464754c1="" class="box-item">
                        <div data-v-464754c1="" class="title">Confirm new login password</div>
                        <div data-v-877e6773="" data-v-464754c1="" class="inp-con">
                           <div data-v-877e6773="" class="inp">
                              <input data-v-877e6773="" type="password" maxlength="100" placeholder="Please enter new login password"/>
                                 <div data-v-877e6773="" class="icon"> 　<img data-v-877e6773="" src="data:image/png;base64,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"/></div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div data-v-464754c1="" class="limit-tips">Withdrawals are restricted within 24 hours after changing the login password.</div>
                  <div data-v-464754c1="" class="bot">
                     <button data-v-34dc7cc4="" data-v-464754c1="" type="button" class="van-button van-button--default van-button--normal van-button--disabled com-btn on" disabled="">
                        <div class="van-button__content">
                           <span class="van-button__text">Next</span>
                        </div>
                     </button>
                  </div>
               </div>
            </div>
            <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: '1.3rem',right: '0.2rem'}}></div>
         </div>
         
      </div>
      );
};

export default ChangePassword;
