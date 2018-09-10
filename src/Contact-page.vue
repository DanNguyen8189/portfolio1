<template>
    <div id = 'contact'>
        <h1>Get in touch with me!</h1>
        <center>
        <hr/>
        </center>
        <div id = 'wrapper'>
        <!--<div class = 'contact_info'>
            <i id = 'envelope' class="fa fa-envelope" aria-hidden="true"></i>
            <p id= 'email'>dannguyen8189@gmail.com</p>
        </div>
        <div class = 'contact_info'>
            <i id = 'phone' class="fa fa-phone" aria-hidden="true"></i>
            <p id = 'number'>(000) 000-0000</p>
        </div>-->

        <!--Contact form-->
        <form class="vue-form" @submit.prevent="submit">

            <div class="error-message">
                <p v-show="!email.valid">Oh, please enter a valid email address.</p>
            </div>

            <fieldset>
            <div>
                <label class="label" for="name">Name</label>
                <input type="text" name="name" id="name" required="" v-model="name">
            </div>
            <div>
                <label class="label" for="email">Email</label>
                <input type="email" name="email" id="email" required=""
                    :class="{ email , error: !email.valid }"
                    v-model="email.value">
            </div>

            <div>
                <label class="label" for="textarea">Message with Counter</label>
                <textarea class="message" name="textarea" id="textarea" required="" 
                        v-model="message.text" 
                        :maxlength="message.maxlength"></textarea>
                <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
            </div>
            <div>
                <input type="submit" value="Send">
            </div>
            </fieldset>
        </form>

        <!--window for debugging purposes-->
        <div class="debug">
            <pre><code>{{ $data }}</code></pre>
        </div>

        <ul class=social_media>
            <li id='linkedin'><a href='https://www.linkedin.com/in/dannguyen8189/' target='_blank'><i class='fa fa-linkedin' aria-hidden='true'></i></a></li>
            <li id='github'><a href='https://github.com/DanNguyen8189' target='_blank'><i class='fa fa-github' aria-hidden='true'></i></a></li>
            <li id='instagram'><a href=# target='_blank'><i class='fa fa-instagram' aria-hidden='true'></i></a></li>
            <li id='twitter'><a href=# target='_blank'><i class='fa fa-twitter' aria-hidden='true'></i></a></li>
        </ul>
        </div>
        <center>
        <hr/>
        </center>
    </div>
</template>

<script>
//email validation variable. Entered email is compared to this in isEmail() method
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
export default{
    data() {
        return {
            //default data
            name: "John Doe",
            email: {
                value: "jo@hnd.oe",
                valid: true
            },
            message: {
                text: `Hello`,
                maxlength: 255
            },
            submitted: false
        };
    },    
    methods: {
        // submit form handler
        submit: function() {
            this.submitted = true;
        },
        // validate by type and value
        validate: function(type, value) {
            if (type === "email") {
                this.email.valid = this.isEmail(value) ? true : false;
            }
        },
        // check for valid email adress
        isEmail: function(value) {
            return emailRegExp.test(value);
        },

        },
    //continously watches the email field to confirm validity
    watch: {
        "email.value": function(value) {
            this.validate("email", value);
        }
    }
}
</script>

<style scoped>
#contact{
    height: 100%;
    width: 100%;
}
h1{
    color: rgba(183, 255, 219, 0.863);
    font-size: 50px;
    font-family: 'Open Sans Condensed', sans-serif;
}
hr {
    width: 90%;
    display: block;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
    margin: 1em 0;
    padding: 0;
}
#wrapper{
    background: rgba(0, 0, 0, 0.5);
    padding: 20px 20px;
    margin: 0 5%;
    border-radius: 5px;
}
p{
    color: rgba(255, 255, 255, 0.9);
    font-size: 18px;
    font-family: 'Quicksand', sans-serif;
}
#phone, #envelope{
    font-size: 18px;
    color: white;
    display: inline;
    margin: 0 10px;
}
#number, #email{
    display: inline;
}
.contact_info{
    display: inline-block;
    margin: 10px 30px;
}
@media only screen and (max-width: 510px){
    h1{
        font-size: 40px;
    }
    p{
        font-size: 12px;
    }
}
.social_media{
    /*position: absolute;
    top: 9rem;
    left: 50%;
    transform: translate(-50%, -50%); */
    display: block;
    position: relative;
    margin: auto; 
    margin-top: 50px;
    /*margin-left: -29px;*/
    right: 20px;
    color: black;
}

.social_media li{
    display: inline-block;
    list-style: none;
    position: relative;
    margin: 35px 20px;
}

.social_media li a{
    /*original width: 70 height: 40*/
    width: 56px;
    height: 32px;
    background: #fff;
    display: block;
    text-align: center;
    line-height: 32px;
    font-size: 28.8px;
    transition: 0.5s;
    color: black;
    opacity: 0.75;
}

.social_media li a:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
    transform: rotate(60deg);
}

.social_media li a:after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
    transform: rotate(-60deg);
}

.social_media li a:hover{
    transition: transform 0.25s;
    transform: rotate(7deg);
    opacity: 1;
    /*color: #59316e;*/
    /*background: #aefade;*/
}

#linkedin a:hover{
    background: #007bb5;
    color: white;
}

#github a:hover{
    background: black;
    color: white;
}

#instagram a:hover{
    background: #c32aa3;
    color: white;
}

#twitter a:hover{
    background:#1da1f2; 
    color: white;
}

/*On-click for social media buttons*/
.social_media li a:active{
    transition: transform 0.2s;
    transform: rotate(15deg) scale(0.9);
    opacity: 0.4;
}


@media only screen and (max-width: 510px) {

    .social_media li{
        margin: 26.25px 15px;
    }
    .social_media li a{
        width: 52.5px;
        height: 30px;
        line-height: 30px;
        font-size: 27px;
    }
}

*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    color: #fff;
    background: #949c4e;
    background: linear-gradient(
        115deg,
        rgba(86, 216, 228, 1) 10%,
        rgba(159, 1, 234, 1) 90%
    );
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html,
body,
.container {
    min-height: 100vh;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    color: #2c3e50;
    text-decoration: none;
}

header {
    position: relative;
    height: 0px;
    padding-top: 100px;
}

header h1 {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 300;
}

.vue-form {
    font-size: 16px;
    width: 500px;
    padding: 15px 30px;
    border-radius: 4px;
    margin: 50px auto;
    width: 500px;
    background-color: #fff;
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
.vue-form fieldset {
    margin: 24px 0 0 0;
}
.vue-form legend {
    padding-bottom: 10px;
    border-bottom: 1px solid #ecf0f1;
}
.vue-form div {
    position: relative;
    margin: 20px 0;
}
.vue-form h4,
.vue-form .label {
    color: #94aab0;
    margin-bottom: 10px;
}
.vue-form .label {
    display: block;
}
.vue-form input,
.vue-form textarea,
.vue-form label {
    color: #2b3e51;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea,
.vue-form legend {
    display: block;
    width: 100%;
}
.vue-form input[type="text"],
.vue-form input[type="email"],
.vue-form textarea{
    padding: 12px;
    border: 1px solid #cfd9db;
    background-color: #ffffff;
    border-radius: 0.25em;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="text"]:focus,
.vue-form input[type="email"]:focus,
.vue-form textarea:focus{
    outline: none;
    border-color: #2c3e50;
    box-shadow: 0 0 5px rgba(44, 151, 222, 0.2);
}

.vue-form .vue-form-list {
    margin-top: 16px;
}
.vue-form .vue-form-list::after {
    clear: both;
    content: "";
    display: table;
}
.vue-form .vue-form-list li {
    display: inline-block;
    position: relative;
    user-select: none;
    margin: 0 26px 16px 0;
    float: left;
}
.vue-form input[type="radio"],
.vue-form input[type="checkbox"] {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 2;
}
.vue-form input[type="radio"] + label,
.vue-form input[type="checkbox"] + label {
    padding-left: 24px;
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="radio"] + label::after,
.vue-form input[type="checkbox"] + label::before,
.vue-form input[type="checkbox"] + label::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -8px;
    width: 16px;
    height: 16px;
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="checkbox"] + label::before {
    border: 1px solid #cfd9db;
    background: #ffffff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.08);
}
.vue-form input[type="radio"] + label::before,
.vue-form input[type="radio"] + label::after {
    border-radius: 50%;
}
.vue-form input[type="checkbox"] + label::before,
.vue-form input[type="checkbox"] + label::after {
    border-radius: 0.25em;
}
.vue-form input[type="radio"] + label::after,
.vue-form input[type="checkbox"] + label::after {
    background-color: #2c3e50;
    background-position: center center;
    background-repeat: no-repeat;
    box-shadow: 0 0 5px rgba(44, 151, 222, 0.4);
    display: none;
}
.vue-form input[type="radio"] + label::after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Ccircle%20fill%3D%22%23FFFFFF%22%20cx%3D%228%22%20cy%3D%228%22%20r%3D%223%22%2F%3E%0D%0A%3C%2Fsvg%3E");
}
.vue-form input[type="checkbox"] + label::after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0D%0A%3C%21--%20Generator%3A%20Adobe%20Illustrator%2018.1.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200%29%20%20--%3E%0D%0A%3C%21DOCTYPE%20svg%20PUBLIC%20%22-%2F%2FW3C%2F%2FDTD%20SVG%201.1%2F%2FEN%22%20%22http%3A%2F%2Fwww.w3.org%2FGraphics%2FSVG%2F1.1%2FDTD%2Fsvg11.dtd%22%3E%0D%0A%3Csvg%20version%3D%221.1%22%20id%3D%22Layer_1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%0D%0A%09%20width%3D%2216px%22%20height%3D%2216px%22%20viewBox%3D%220%200%2016%2016%22%20enable-background%3D%22new%200%200%2016%2016%22%20xml%3Aspace%3D%22preserve%22%3E%0D%0A%3Cpolyline%20fill%3D%22none%22%20stroke%3D%22%23FFFFFF%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20points%3D%225%2C8%207%2C10%2011%2C6%20%22%2F%3E%0D%0A%3C%2Fsvg%3E");
}
.vue-form input[type="radio"]:focus + label::before,
.vue-form input[type="checkbox"]:focus + label::before {
    box-shadow: 0 0 5px rgba(44, 151, 222, 0.6);
}
.vue-form input[type="radio"]:checked + label::after,
.vue-form input[type="checkbox"]:checked + label::after {
    display: block;
}
.vue-form input[type="radio"]:checked + label::before,
.vue-form input[type="radio"]:checked + label::after,
.vue-form input[type="checkbox"]:checked + label::before,
.vue-form input[type="checkbox"]:checked + label::after {
    animation: cd-bounce 0.3s;
}
.vue-form textarea {
    min-height: 120px;
    resize: vertical;
    overflow: auto;
}
.vue-form input[type="submit"] {
    border: none;
    background: #2c3e50;
    border-radius: 0.25em;
    padding: 12px 20px;
    color: #ffffff;
    font-weight: bold;
    float: right;
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    appearance: none;
}
.no-touch .vue-form input[type="submit"]:hover {
    background: #42a2e1;
}
.vue-form input[type="submit"]:focus {
    outline: none;
    background: #2b3e51;
}
.vue-form input[type="submit"]:active {
    transform: scale(0.9);
}
.vue-form .error-message {
    height: 35px;
    margin: 0px;
}
.vue-form .error-message p {
    background: #e94b35;
    color: #ffffff;
    font-size: 1.4rem;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: 0.25em;
    padding: 16px;
}
.vue-form .error {
    border-color: #e94b35 !important;
}
.vue-form .counter {
    background-color: #ecf0f1;
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 10px;
    padding: 4px;
}

/*debugging window*/
.debug {
    border-radius: 4px;
    margin: 50px auto;
    width: 500px;
    background-color: #000;
    padding: 50px;
    background: rgba(0, 0, 0, 0.8);
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}

.debug pre {
    color: black;
    font-size: 18px;
    line-height: 30px;
    font-family: "Source Code Pro", monospace;
    font-weight: 300;
    white-space: pre-wrap;
}

@-webkit-keyframes cd-bounce {
    0%,
    100% {
        -webkit-transform: scale(1);
    }
    50% {
        -webkit-transform: scale(0.8);
    }
}
@-moz-keyframes cd-bounce {
    0%,
    100% {
        -moz-transform: scale(1);
    }
    50% {
        -moz-transform: scale(0.8);
    }
}
@keyframes cd-bounce {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(0.8);
    }
}
</style>

