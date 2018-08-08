<template>
    <div id = 'contact'>
        <h1>Get in touch with me!</h1>
        <center>
        <hr/>
        </center>
        <div id = 'wrapper'>
        <p>I can be reached via email or phone at</p>
        <div class = 'contact_info'>
            <i id = 'envelope' class="fa fa-envelope" aria-hidden="true"></i>
            <p id= 'email'>dannguyen8189@gmail.com</p>
        </div>
        <div class = 'contact_info'>
            <i id = 'phone' class="fa fa-phone" aria-hidden="true"></i>
            <p id = 'number'>(000) 000-0000</p>
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
</style>

