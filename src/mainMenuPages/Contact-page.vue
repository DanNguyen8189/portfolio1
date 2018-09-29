<template>
    <div id = 'contact'>
        <h1>Get in touch!</h1>
        <!--<center>
        <hr/>
        </center>-->
        <div id = 'wrapper'>
        <!--<div class = 'contact_info'>
            <i id = 'envelope' class="fa fa-envelope" aria-hidden="true"></i>
            <p id= 'email'>dannguyen8189@gmail.com</p>
        </div>
        <div class = 'contact_info'>
            <i id = 'phone' class="fa fa-phone" aria-hidden="true"></i>
            <p id = 'number'>(000) 000-0000</p>
        </div>-->

        <ul class=social_media>
            <li id='linkedin'><a href='https://www.linkedin.com/in/dannguyen8189/' target='_blank'><i class='fa fa-linkedin' aria-hidden='true'></i></a></li>
            <li id='github'><a href='https://github.com/DanNguyen8189' target='_blank'><i class='fa fa-github' aria-hidden='true'></i></a></li>
            <li id='instagram'><a href=# target='_blank'><i class='fa fa-instagram' aria-hidden='true'></i></a></li>
            <li id='twitter'><a href='https://twitter.com/Danimalspirit' target='_blank'><i class='fa fa-twitter' aria-hidden='true'></i></a></li>
        </ul>

        <!--Contact form-->
        <form class="vue-form" @submit.prevent="submit">
            <legend>Feel free to drop a line</legend>
            <div class="error-message">
                <!--Conditional rendering-->
                <p v-show="!email.valid && !submitted" class='red'>Please enter a valid email address.</p>
                <p v-show="submitted" class='green'>Thank you!</p>
            </div>

            <fieldset>
                <!--The v-model lines allow us to bind the input to our data-->
            <div>
                <label class="label" for="name">Name</label>
                <input type="text" name="name" id="name" required="" 
                    v-model="name"
                    placeholder="Name">
            </div>
            <div>
                <label class="label" for="email">Email</label>
                <input type="email" name="email" id="email" required=""
                    :class="{ email , error: !email.valid }"
                    v-model="email.value"
                    placeholder="example@domain.com">
            </div>

            <div>
                <label class="label" for="textarea">Message</label>
                <textarea class="message" name="textarea" id="textarea" required="" 
                    v-model="message.text" 
                    placeholder="Enter message"
                    :maxlength="message.maxlength"></textarea>
                <span class="counter">{{ message.text.length }} / {{ message.maxlength }}</span>
            </div>
            <div>
                <input type="submit" value="Send">
            </div>
            </fieldset>
        </form>

        <!--window for debugging purposes-->
        <!--<div class="debug">
            <pre><code>{{ $data }}</code></pre>
        </div>-->

        
        </div>
        <!--<center>
        <hr/>
        </center>-->
    </div>
</template>
<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>
<script>
//email validation variable. Entered email is compared to this in isEmail() method
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

import Firebase from 'firebase'
import apiConfig from 'C:/Users/DanXa/Documents/apiKeys';
let config = {
    apiKey: `${apiConfig.myKey}`,
    authDomain: `${apiConfig.myDomain}`,
    databaseURL: `${apiConfig.myDatabaseURL}`,
    projectId: `${apiConfig.myProjectId}`,
    storageBucket: `${apiConfig.myStorageBucket}`,
    messagingSenderId: `${apiConfig.myMessengingSenderId}`
};

//connect to firebase
let contactPage = Firebase.initializeApp(config);
let db = contactPage.database();
let messagesRef = db.ref('messages'); //acess to messages node in firebase


export default{
    name: 'contact',
    /*firebase properties*/
    firebase:{
        messages: messagesRef
    },
    data() {
        return {
            //default data
            name: "",
            email: {
                value: "",
                valid: true
            },
            message: {
                text: ``,
                maxlength: 255
            },
            submitted: false,
        };
    },    
    methods: {
        // submit form handler
        submit: function() {
            this.submitted = true;
            this.addMessage();
            this.name = ''
            this.email.value = ''
            this.message.text = ''
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
        addMessage: function(){
            /*var newMessage = messagesRef.push();
            newMessage.set(
                {
                    name: this.data.name,
                    email: this.data.email.value,
                    message: this.data.message.text
                }
            );*/
            /*var newMessage;
            newMessage.set(
                {
                    name: this.data.name,
                    email: this.data.email.value,
                    message: this.data.message.text
                }
            );*/
            messagesRef.push({
                name: this.name,
                email: this.email.value,
                text: this.message.text
            });
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
h1{
    color: rgba(183, 255, 219, 0.863);
    font-size: 50px;
    font-family: 'Dosis', sans-serif;
    display: block;
    text-align: center;
}
@media screen and (max-width: 510px){
    h1{
        margin: auto; /*shoft closer to top*/
    }
}
hr {
    width: 90%;
    display: block;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
    margin: 0;
    padding: 0;
}
/*#wrapper{
    background: rgba(0, 0, 0, 0.5);
    padding: 20px 20px;
    margin: 0 5%;
    border-radius: 5px;
}*/
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
        font-size: 35px;
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
    text-align: center;
    padding: 0; /*needed to correectly center*/
    position: relative;
    margin: 10px auto; 
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
        margin: 7% 3%;
    }
    .social_media li a{
        width: 52.5px;
        height: 30px;
        line-height: 30px;
        font-size: 27px;
    }
}

.vue-form {
    font-size: 16px;
    width: 500px;
    padding: 15px 30px;
    border-radius: 4px;
    margin: 0 auto 25px;
    width: 500px;
    background-color: rgb(127, 182, 148);
    box-shadow: 0 4px 6px 0 rgba(0, 0, 0, 0.3);
}
@media screen and (max-width: 500px){
    .vue-form{
        width: 96%;
        padding: 10px 25px;
    }
}
.vue-form fieldset {
    margin: 0 0 0 0;
}
.vue-form legend {
    padding-bottom: 10px;
    border-bottom: 1px solid #ecf0f1;
    font-family: 'Architects Daughter', sans-serif;
}
@media screen and (max-width: 500px){
    .vue-form legend{
        font-size: 15px;
    } 
}
.vue-form div {
    position: relative;
    margin: 20px 0;
}
@media screen and (max-width: 500px){
    .vue-form div{
        margin: 5px 0;
    }
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
    /*background: #a03527;*/
    color: #ffffff;
    font-size: 1.4rem;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    border-radius: 0.25em;
    padding: 16px;
}
.vue-form .error {
    border-color: #a7392a !important;
}
.vue-form .counter {
    background-color: #ecf0f1;
    position: absolute;
    right: 0px;
    top: 0px;
    font-size: 10px;
    padding: 4px;
}
.vue-form .red{
    background-color: #a03527;
}
.vue-form .green{
    background-color: rgb(0, 128, 58);
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

