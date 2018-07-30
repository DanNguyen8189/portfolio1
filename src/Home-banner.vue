<template>
    <div id = 'homepage'>
        <div id=text>
            <h1>DAN NGUYEN</h1>
            <h4>Software Engineer, Artist</h4>
        </div>
        <ul class=social_media>
            <li id='linkedin'><a href='https://www.linkedin.com/in/dannguyen8189/' target='_blank'><i class='fa fa-linkedin' aria-hidden='true'></i></a></li>
            <li id='github'><a href='https://github.com/DanNguyen8189' target='_blank'><i class='fa fa-github' aria-hidden='true'></i></a></li>
            <li id='instagram'><a href=# target='_blank'><i class='fa fa-instagram' aria-hidden='true'></i></a></li>
            <li id='twitter'><a href=# target='_blank'><i class='fa fa-twitter' aria-hidden='true'></i></a></li>
        </ul>
    </div>
</template>

<script>    
</script>

<style scoped>
#text{
    margin: 0 35px;
    color: white;
    opacity: 0.9;
    display: inline-block;
}
#text h1{
    display: block;
    font-size: 5em;
    font-family: 'Raleway', sans-serif;
    font-weight: lighter; /*why is this not doing anything*/
    color: inherit;
    opacity: inherit;
}

#text h4{
    display: block;
    /*font-family: 'Actor', sans-serif;*/
    font-family: 'Architects Daughter', sans-serif;
    color: inherit;
    opacity: inherit;
}

.social_media{
    /*position: absolute;
    top: 9rem;
    left: 50%;
    transform: translate(-50%, -50%); */
    display: inline-block;
    position: relative;
    margin: auto; 
    /*margin-left: -29px;*/
    right: 20px;
}

.social_media li{
    display: inline-block;
    list-style: none;
    position: relative;
    margin: 35px 20px;
}

.social_media li a{
    width: 70px;
    height: 40px;
    background: #fff;
    display: block;
    text-align: center;
    line-height: 40px;
    font-size: 36px;
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
    #text h1{
        font-size: 3rem;
    }
    #text h4{
        font-size: 13px;
    }
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
