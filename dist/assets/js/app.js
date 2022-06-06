$("#login-form").parsley(),window.Parsley.addValidator("uppercase",{requirementType:"number",validateString:function(e,t){return(e.match(/[A-Z]/g)||[]).length>=t}}),window.Parsley.addValidator("lowercase",{requirementType:"number",validateString:function(e,t){return(e.match(/[a-z]/g)||[]).length>=t}}),window.Parsley.addValidator("number",{requirementType:"number",validateString:function(e,t){return(e.match(/[0-9]/g)||[]).length>=t}}),window.Parsley.addValidator("special",{requirementType:"number",validateString:function(e,t){return(e.match(/[^a-zA-Z0-9]/g)||[]).length>=t}});const formSub=document.querySelector(".form__action .button"),inputs=Array.from(document.querySelectorAll(".input input"));function toggleDataFilled(){inputs.forEach(e=>{""===e.value?e.dataset.filled="false":e.dataset.filled="true"})}formSub&&formSub.addEventListener("submit",e=>e.preventDefault),window.Parsley.on("field:error",function(){formSub.disabled=!0}),window.Parsley.on("field:success",function(){formSub.disabled=!1}),inputs&&inputs.forEach(e=>{e.addEventListener("input",toggleDataFilled)}),inputs.forEach(e=>{e.addEventListener("input",e=>{let t=e.currentTarget;console.log(t),"true"===t.dataset.filled?t.parentNode.classList.add("input--line-filled"):t.parentNode.classList.remove("input--line-filled"),t.classList.contains("parsley-error")?(t.parentNode.classList.add("input--line-error"),t.parentNode.classList.remove("input--line-focus"),t.parentNode.classList.remove("input--line-filled")):t.parentNode.classList.remove("input--line-error")}),e.addEventListener("focus",e=>{let t=e.currentTarget;""===t.value&&t.parentNode.classList.add("input--line-focus")}),e.addEventListener("blur",e=>{let t=e.currentTarget;t.parentNode.classList.contains("input--line-focus")&&t.parentNode.classList.remove("input--line-focus")})});const togglePassword=document.querySelector(".input__icon"),passIcon=document.querySelector(".input__icon img"),password=document.querySelector("#login__password");function showHidePassword(){"password"===password.type?(passIcon.src="/assets/images/pass-hidden.png",password.type="text"):(passIcon.src="/assets/images/pass-visible.png",password.type="password")}togglePassword&&togglePassword.addEventListener("click",showHidePassword);const captchaContainer=document.querySelector(".captcha"),captchaRefreshBtn=document.querySelector("#captcha__refresh"),captchaListenBtn=document.querySelector("#captcha__listen"),captchaImage=document.querySelector(".captcha__img figure img"),timer=(captchaContainer&&captchaRefreshBtn.addEventListener("click",()=>{captchaImage.src="https://source.unsplash.com/random/150×72/"}),document.querySelector(".timer")),otpContainer=document.querySelector(".otp"),getNewCode=document.querySelector(".otp a");let time=90;function startTimer(){getNewCode.style.display="none",timer.style.color="#696d80",otpContainer.classList.add("active");const e=setInterval(()=>{displayTime(--time),time<=0&&(clearInterval(e),timer.style.color="#af2246",otpContainer.classList.remove("active"))},1e3)}function displayTime(e){let t=Math.floor(e/60),r=Math.floor(e%60);t=t<10?"0"+t:t,r=r<10?"0"+r:r,timer.innerText=t+":"+r}getNewCode&&getNewCode.addEventListener("click",startTimer);const otpInputs=document.querySelectorAll("#otp-verify .input input");console.log(otpInputs);