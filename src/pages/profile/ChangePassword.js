import { useState } from "react";
import Api from "../../Requests/Api";
import { useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify';

const ChangePassword = () => {
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
    <div data-v-72d7289a="" data-v-90a6cc64="" class="page">
   <div data-v-72d7289a="" class="headers">
      <div data-v-7401f0fe="" data-v-72d7289a="" class="inside-header">
         <div data-v-7401f0fe="" class="left">
            <div data-v-7401f0fe="" class="back"><img data-v-7401f0fe="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFbSURBVHgB7dfRTQJRFIThiTbgo+XYipXsdEItVmALluGbLglEElndhN175l7+LznhBRLyD4QgAQAAAAAAAAAAAAs830Eo4fm+TscIjVk/8RmhMet3fEZoxFqOzwg7s/6Pf75J2JS1Pv77fE/CZizil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlLOKXsYhfxiJ+GYv4ZSzil7GIX8YifhmL+GUs4pexiF/GIn4Zi/hlrPXxR7kYVl/hhhrA6ivaUANYfQWLGuBBt4v4FNy7SX19amO+AVua1Fe44QY4mtRXvOEGOJq0/s3zR2wnjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQgBGCMAIARghACMEYIQAjBCAEQIwQoChR3hUvrfT48uK5z7P93nxGmxozTfhIOzqrxGI38i1EYjf2OUIXcfv4Uf4mvOP7Md8rwIAAAAAAAAAAACWfANcjc2WX+Z5VgAAAABJRU5ErkJggg==" class="icon"/></div>
         </div>
         <div data-v-7401f0fe="" class="title overflow1">Bind email</div>
         <div data-v-7401f0fe="" class="right"></div>
      </div>
   </div>
   <div data-v-72d7289a="" class="page-container">
      <div data-v-72d7289a="" class="scroll" id="pageScroll">
         <div data-v-90a6cc64="" class="container">
            <div data-v-90a6cc64="" class="box">
               <div data-v-90a6cc64="" class="box-title"><span data-v-90a6cc64="">email</span></div>
               <div data-v-90a6cc64="" class="box-item">
                  <div data-v-7700cd8a="" data-v-90a6cc64="" class="inp-con">
                     <div data-v-7700cd8a="" class="inp"><input data-v-7700cd8a="" type="text" maxlength="50" placeholder="mailbox"/></div>
                  </div>
               </div>
            </div>
            <div data-v-90a6cc64="" class="box">
               <div data-v-90a6cc64="" class="box-title"><span data-v-90a6cc64="">Email verification code</span></div>
               <div data-v-90a6cc64="" class="box-item">
                  <div data-v-b521a755="" data-v-90a6cc64="" class="inp-con">
                     <div data-v-b521a755="" class="inp"><input data-v-b521a755="" type="text" maxlength="6" placeholder="Please enter the email verification code"/></div>
                     <div data-v-b521a755="" class="send">Send</div>
                  </div>
               </div>
            </div>
            <div data-v-90a6cc64="" class="bot">
               <button data-v-34dc7cc4="" data-v-90a6cc64="" type="button" class="van-button van-button--default van-button--normal van-button--disabled com-btn on" disabled="">
                  <div class="van-button__content">
                     <span class="van-button__text">Confirm</span>
                  </div>
               </button>
            </div>
            
         </div>
      </div>
      <div data-v-6df70459="" data-v-72d7289a="" class="touch-move-con" style={{bottom: "1.3rem", right: "0.2rem"}}></div>
   </div>
   
</div>
  );
};

export default ChangePassword;
