(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{150:function(e,t,a){"use strict";a.d(t,"d",function(){return s}),a.d(t,"f",function(){return i}),a.d(t,"e",function(){return c}),a.d(t,"i",function(){return d}),a.d(t,"b",function(){return g}),a.d(t,"g",function(){return u}),a.d(t,"j",function(){return m}),a.d(t,"c",function(){return p}),a.d(t,"h",function(){return h}),a.d(t,"k",function(){return f}),a.d(t,"a",function(){return S});var o=a(17),n=a(11),l=a(10),r=a.n(l),s=function(e,t,a,l,s,i,c){return function(d){r.a.post(n.M,{name:e,email:t,password:a,accessToken:l,phone:s,provider:i,address:c}).then(function(e){var t=e.data;return d({type:o.c,payload:t})}).catch(function(e){console.log(e)})}},i=function(e,t,a,l,s){return function(i){r.a.post(n.T,{name:e,email:t,phone:a,password:l,address:s}).then(function(e){var t=e.data;return i({type:o.e,payload:t})}).catch(function(e){console.log(e)})}},c=function(e){return function(t){e=[];localStorage.removeItem("userSetAddress"),localStorage.removeItem("geoLocation"),localStorage.removeItem("lastSavedNotificationToken"),t({type:o.d,payload:e}),t({type:o.f,payload:!1}),t({type:o.b,payload:[]})}},d=function(e,t,a){return function(l){return r.a.post(n.bb,{token:t,user_id:e,unique_order_id:a}).then(function(e){var t=e.data;return l({type:o.i,payload:t})}).catch(function(e){console.log(e)})}},g=function(e,t){return function(a){r.a.post(n.g,{token:t,user_id:e}).then(function(e){var t=e.data;return a({type:o.f,payload:t})}).catch(function(e){console.log(e)})}},u=function(e,t,a,l){return function(s){return r.a.post(n.X,{email:e,phone:t,accessToken:a,provider:l}).then(function(e){var t=e.data;return s({type:o.g,payload:t})}).catch(function(e){console.log(e)})}},m=function(e,t){return function(a){r.a.post(n.cb,{phone:e,otp:t}).then(function(e){var t=e.data;return a({type:o.j,payload:t})}).catch(function(e){console.log(e)})}},p=function(e,t){return function(a){r.a.post(n.K,{token:e,user_id:t}).then(function(e){var t=e.data;return a({type:o.b,payload:t})}).catch(function(e){console.log(e)})}},h=function(e){return function(t){r.a.post(n.Y,{email:e}).then(function(e){var a=e.data;return t({type:o.h,payload:a})}).catch(function(e){console.log(e)})}},f=function(e,t){return function(a){r.a.post(n.db,{email:e,code:t}).then(function(e){var t=e.data;return a({type:o.k,payload:t})}).catch(function(e){console.log(e)})}},S=function(e,t,a){return function(l){r.a.post(n.d,{email:e,code:t,password:a}).then(function(e){var t=e.data;return l({type:o.a,payload:t})}).catch(function(e){console.log(e)})}}},159:function(e,t,a){"use strict";var o=a(3),n=a(4),l=a(6),r=a(5),s=a(7),i=a(0),c=a.n(i),d=a(15),g=a.n(d),u=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",className:"btn search-navs-btns back-button",style:{position:"relative"},onClick:this.context.router.history.goBack},c.a.createElement("i",{className:"si si-arrow-left"}),c.a.createElement(g.a,{duration:"500"})))}}]),t}(i.Component);u.contextTypes={router:function(){return null}},t.a=u},171:function(e,t,a){"use strict";var o=a(145),n=a(0),l=a.n(n),r=a(177),s=a.n(r);t.a=s()(function(e){var t=e.children,a=e.triggerLogin,n=Object(o.a)(e,["children","triggerLogin"]);return l.a.createElement("button",Object.assign({onClick:a},n,{className:n.className}),t)})},240:function(e,t,a){"use strict";a.r(t);var o=a(3),n=a(4),l=a(6),r=a(5),s=a(7),i=a(0),c=a.n(i),d=a(67),g=a(68),u=a(150),m=a(159),p=a(30),h=a(221),f=a(248),S=a(157),v=a.n(S),b=a(171),y=a(14),I=a(18),E=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(r.a)(t).call(this))).state={loading:!1,email:"",phone:"",password:"",otp:"",accessToken:"",provider:"",error:!1,email_phone_already_used:!1,invalid_otp:!1,showResendOtp:!1,countdownStart:!1,countDownSeconds:15,email_pass_error:!1},e.handleInputChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleLogin=function(t){t.preventDefault(),e.validator.fieldValid("email")&&e.validator.fieldValid("password")?(e.setState({loading:!0}),e.props.loginUser(null,e.state.email,e.state.password,null,null,null,JSON.parse(localStorage.getItem("userSetAddress")))):(console.log("validation failed"),e.validator.showMessages())},e.handleRegisterAfterSocialLogin=function(t){t.preventDefault(),e.setState({loading:!0}),e.validator.fieldValid("phone")?"true"===localStorage.getItem("enSOV")?e.props.sendOtp(e.state.email,e.state.phone,null).then(function(t){t.payload.otp||e.setState({error:!1})}):e.props.loginUser(e.state.name,e.state.email,null,e.state.accessToken,e.state.phone,e.state.provider,JSON.parse(localStorage.getItem("userSetAddress"))):(e.setState({loading:!1}),console.log("Validation Failed"),e.validator.showMessages())},e.resendOtp=function(){e.validator.fieldValid("phone")&&(e.setState({countDownSeconds:15,showResendOtp:!1}),e.props.sendOtp(e.state.email,e.state.phone,null).then(function(t){t.payload.otp||e.setState({error:!1})}))},e.handleVerifyOtp=function(t){t.preventDefault(),console.log("verify otp clicked"),e.validator.fieldValid("otp")&&(e.setState({loading:!0}),e.props.verifyOtp(e.state.phone,e.state.otp))},e.handleOnChange=function(t){e.props.getSingleLanguageData(t.target.value),localStorage.setItem("userPreferedLanguage",t.target.value)},e.handleSocialLogin=function(t){"true"===localStorage.getItem("enSOV")?(e.setState({name:t._profile.name,email:t._profile.email,accessToken:t._token.accessToken,provider:t._provider,social_login:!0}),e.props.sendOtp(t._profile.email,null,t._token.accessToken,t._provider).then(function(t){t.payload.otp||e.setState({error:!1})})):(e.setState({name:t._profile.name,email:t._profile.email,accessToken:t._token.accessToken,provider:t._provider,social_login:!0}),e.props.loginUser(t._profile.name,t._profile.email,null,t._token.accessToken,null,t._provider,JSON.parse(localStorage.getItem("userSetAddress"))))},e.handleSocialLoginFailure=function(e){console.log("Social Login Error",e)},e.handleCountDown=function(){setTimeout(function(){e.setState({showResendOtp:!0}),clearInterval(e.intervalID)},16e3),e.intervalID=setInterval(function(){console.log("interval going on"),e.setState({countDownSeconds:e.state.countDownSeconds-1})},1e3)},e.validator=new v.a({autoForceUpdate:Object(g.a)(Object(g.a)(e)),messages:{required:localStorage.getItem("fieldValidationMsg"),email:localStorage.getItem("emailValidationMsg"),regex:localStorage.getItem("phoneValidationMsg")}}),e}return Object(s.a)(t,e),Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this;"false"===localStorage.getItem("enableFacebookLogin")&&"false"===localStorage.getItem("enableGoogleLogin")&&document.getElementById("socialLoginDiv")&&document.getElementById("socialLoginDiv").classList.add("hidden"),"true"!==localStorage.getItem("enableFacebookLogin")&&"true"!==localStorage.getItem("enableGoogleLogin")||setTimeout(function(){e.refs.socialLogin&&e.refs.socialLogin.classList.remove("hidden"),e.refs.socialLoginLoader&&e.refs.socialLoginLoader.classList.add("hidden")},500)}},{key:"componentWillReceiveProps",value:function(e){if(this.props.user!==e.user&&this.setState({loading:!1}),e.user.success){if(null!==e.user.data.default_address){var t={lat:e.user.data.default_address.latitude,lng:e.user.data.default_address.longitude,address:e.user.data.default_address.address,house:e.user.data.default_address.house,tag:e.user.data.default_address.tag};localStorage.setItem("userSetAddress",JSON.stringify(t))}this.context.router.history.goBack()}if(e.user.email_phone_already_used&&this.setState({email_phone_already_used:!0}),e.user.otp&&(this.setState({email_phone_already_used:!1,error:!1}),document.getElementById("loginForm").classList.add("hidden"),document.getElementById("socialLoginDiv").classList.add("hidden"),document.getElementById("phoneFormAfterSocialLogin").classList.add("hidden"),document.getElementById("otpForm").classList.remove("hidden"),this.setState({countdownStart:!0}),this.handleCountDown(),this.validator.hideMessages()),e.user.valid_otp&&(this.setState({invalid_otp:!1,error:!1,loading:!0}),this.state.social_login?this.props.loginUser(this.state.name,this.state.email,null,this.state.accessToken,this.state.phone,this.state.provider,JSON.parse(localStorage.getItem("userSetAddress"))):this.props.registerUser(this.state.name,this.state.email,this.state.phone,this.state.password,JSON.parse(localStorage.getItem("userSetAddress"))),console.log("VALID OTP, REG USER NOW")),!1===e.user.valid_otp&&(console.log("Invalid OTP"),this.setState({invalid_otp:!0})),e.user||this.setState({error:!0}),e.user.proceed_login&&(console.log("From Social : user already exists"),this.props.loginUser(this.state.name,this.state.email,null,this.state.accessToken,null,this.state.provider,JSON.parse(localStorage.getItem("userSetAddress")))),e.user.enter_phone_after_social_login&&(this.validator.hideMessages(),document.getElementById("loginForm").classList.add("hidden"),document.getElementById("socialLoginDiv").classList.add("hidden"),document.getElementById("phoneFormAfterSocialLogin").classList.remove("hidden"),console.log("ask to fill the phone number and send otp process...")),"DONOTMATCH"===e.user.data&&this.setState({error:!1,email_pass_error:!0}),this.props.languages!==e.languages)if(localStorage.getItem("userPreferedLanguage"))this.props.getSingleLanguageData(localStorage.getItem("userPreferedLanguage"));else if(e.languages.length){console.log("Fetching Translation Data...");var a=e.languages.filter(function(e){return 1===e.is_default})[0].id;this.props.getSingleLanguageData(a)}}},{key:"componentWillUnmount",value:function(){console.log("Countdown cleared"),clearInterval(this.intervalID)}},{key:"render",value:function(){if(window.innerWidth>768)return c.a.createElement(f.a,{to:"/"});if(null===localStorage.getItem("storeColor"))return c.a.createElement(f.a,{to:"/"});if(this.props.user.success)return c.a.createElement(f.a,{to:"/my-account"});var e=this.props.languages;return c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{src:"/assets/img/loading-food.gif",className:"hidden",alt:"prefetching"}),this.state.error&&c.a.createElement("div",{className:"auth-error"},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("loginErrorMessage"))),this.state.email_phone_already_used&&c.a.createElement("div",{className:"auth-error"},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("emailPhoneAlreadyRegistered"))),this.state.invalid_otp&&c.a.createElement("div",{className:"auth-error"},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("invalidOtpMsg"))),this.state.email_pass_error&&c.a.createElement("div",{className:"auth-error"},c.a.createElement("div",{className:"error-shake"},localStorage.getItem("emailPassDonotMatch"))),this.state.loading&&c.a.createElement("div",{className:"height-100 overlay-loading"},c.a.createElement("div",null,c.a.createElement("img",{src:"/assets/img/loading-food.gif",alt:localStorage.getItem("pleaseWaitText")}))),c.a.createElement("div",{style:{backgroundColor:"#f2f4f9"}},c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend"},c.a.createElement(m.a,{history:this.props.history}))),c.a.createElement("img",{src:"/assets/img/login-header.png",className:"login-image pull-right mr-15",alt:"login-header"}),c.a.createElement("div",{className:"login-texts px-15 mt-50 pb-20"},c.a.createElement("span",{className:"login-title"},localStorage.getItem("loginLoginTitle")),c.a.createElement("br",null),c.a.createElement("span",{className:"login-subtitle"},localStorage.getItem("loginLoginSubTitle")))),c.a.createElement("div",{className:"bg-white"},c.a.createElement("form",{onSubmit:this.handleLogin,id:"loginForm"},c.a.createElement("div",{className:"form-group px-15 pt-30"},c.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginEmailLabel")," ",this.validator.message("email",this.state.email,"required|email")),c.a.createElement("div",{className:"col-md-9 pb-5"},c.a.createElement("input",{type:"text",name:"email",onChange:this.handleInputChange,className:"form-control edit-address-input"})),c.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("loginLoginPasswordLabel")," ",this.validator.message("password",this.state.password,"required")),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("input",{type:"password",name:"password",onChange:this.handleInputChange,className:"form-control edit-address-input"}))),c.a.createElement("div",{className:"mt-20 px-15 pt-15 button-block"},c.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("loginLoginTitle")))),c.a.createElement("form",{onSubmit:this.handleVerifyOtp,id:"otpForm",className:"hidden"},c.a.createElement("div",{className:"form-group px-15 pt-30"},c.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("otpSentMsg")," ",this.state.phone,this.validator.message("otp",this.state.otp,"required|numeric|min:4|max:6")),c.a.createElement("div",{className:"col-md-9"},c.a.createElement("input",{name:"otp",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input",required:!0})),c.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("verifyOtpBtnText")),c.a.createElement("div",{className:"mt-30 mb-10"},this.state.showResendOtp&&c.a.createElement("div",{className:"resend-otp",onClick:this.resendOtp},localStorage.getItem("resendOtpMsg")," ",this.state.phone),this.state.countDownSeconds>0&&c.a.createElement("div",{className:"resend-otp countdown"},localStorage.getItem("resendOtpCountdownMsg")," ",this.state.countDownSeconds)))),c.a.createElement("form",{onSubmit:this.handleRegisterAfterSocialLogin,id:"phoneFormAfterSocialLogin",className:"hidden"},c.a.createElement("div",{className:"form-group px-15 pt-30"},c.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("socialWelcomeText")," ",this.state.name,","),c.a.createElement("label",{className:"col-12 edit-address-input-label"},localStorage.getItem("enterPhoneToVerify")," ",this.validator.message("phone",this.state.phone,["required",{regex:["^\\+[1-9]\\d{1,14}$"]},{min:["8"]}])),c.a.createElement("div",{className:"col-md-9 pb-5"},c.a.createElement("input",{defaultValue:null===localStorage.getItem("phoneCountryCode")?"":localStorage.getItem("phoneCountryCode"),name:"phone",type:"tel",onChange:this.handleInputChange,className:"form-control edit-address-input"})),c.a.createElement("button",{type:"submit",className:"btn btn-main",style:{backgroundColor:localStorage.getItem("storeColor")}},localStorage.getItem("registerRegisterTitle")))),c.a.createElement("div",{className:"text-center mt-3 mb-20",id:"socialLoginDiv"},c.a.createElement("p",{className:"login-or mt-2"},localStorage.getItem("socialLoginOrText")),c.a.createElement("div",{ref:"socialLoginLoader"},c.a.createElement(p.a,{height:60,width:400,speed:1.2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},c.a.createElement("rect",{x:"28",y:"0",rx:"0",ry:"0",width:"165",height:"45"}),c.a.createElement("rect",{x:"210",y:"0",rx:"0",ry:"0",width:"165",height:"45"}))),c.a.createElement("div",{ref:"socialLogin",className:"hidden"},"true"===localStorage.getItem("enableFacebookLogin")&&c.a.createElement(b.a,{provider:"facebook",appId:localStorage.getItem("facebookAppId"),onLoginSuccess:this.handleSocialLogin,onLoginFailure:this.handleSocialLoginFailure,className:"facebook-login-button mr-2"},localStorage.getItem("facebookLoginButtonText")),"true"===localStorage.getItem("enableGoogleLogin")&&c.a.createElement(b.a,{provider:"google",appId:localStorage.getItem("googleAppId"),onLoginSuccess:this.handleSocialLogin,onLoginFailure:this.handleSocialLoginFailure,className:"google-login-button"},localStorage.getItem("googleLoginButtonText")))),c.a.createElement("div",{className:"text-center mt-50 mb-20"},localStorage.getItem("loginDontHaveAccount")," ",c.a.createElement(h.a,{to:"/register",style:{color:localStorage.getItem("storeColor")}},localStorage.getItem("firstScreenRegisterBtn")))),"true"===localStorage.getItem("enPassResetEmail")&&c.a.createElement("div",{className:"mt-4 d-flex align-items-center justify-content-center"},c.a.createElement(h.a,{to:"/login/forgot-password",style:{color:localStorage.getItem("storeColor")}},localStorage.getItem("forgotPasswordLinkText"))),"null"!==localStorage.getItem("registrationPolicyMessage")&&c.a.createElement("div",{className:"mt-20 mb-20 d-flex align-items-center justify-content-center",dangerouslySetInnerHTML:{__html:localStorage.getItem("registrationPolicyMessage")}}),e&&e.length>1&&c.a.createElement("div",{className:"mt-4 d-flex align-items-center justify-content-center"},c.a.createElement("div",{className:"mr-2"},localStorage.getItem("changeLanguageText")),c.a.createElement("select",{onChange:this.handleOnChange,defaultValue:localStorage.getItem("userPreferedLanguage")?localStorage.getItem("userPreferedLanguage"):e.filter(function(e){return 1===e.is_default})[0].id,className:"form-control language-select"},e.map(function(e){return c.a.createElement("option",{value:e.id,key:e.id},e.language_name)}))))}}]),t}(i.Component);E.contextTypes={router:function(){return null}};var L=Object(y.b)(function(e){return{user:e.user.user,language:e.languages.language,languages:e.languages.languages}},{loginUser:u.d,registerUser:u.f,sendOtp:u.g,verifyOtp:u.j,getSingleLanguageData:I.b})(E),N=a(25),_=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{seotitle:localStorage.getItem("seoMetaTitle"),seodescription:localStorage.getItem("seoMetaDescription"),ogtype:"website",ogtitle:localStorage.getItem("seoOgTitle"),ogdescription:localStorage.getItem("seoOgDescription"),ogurl:window.location.href,twittertitle:localStorage.getItem("seoTwitterTitle"),twitterdescription:localStorage.getItem("seoTwitterDescription")}),c.a.createElement(L,null))}}]),t}(i.Component);t.default=_}}]);