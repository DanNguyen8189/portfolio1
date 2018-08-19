<template>
    <div id = 'homepage'>
        <div id=text>
            <h1 id='first_name'>DAN</h1>
            <h1 id='last_name'>NGUYEN</h1>
            <h4>Software Engineer, Artist</h4>
        </div>
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
    display: inline-block;
    font-size: 5em;
    font-family: 'Raleway', sans-serif;
    font-weight: lighter; /*why is this not doing anything*/
    opacity: inherit;
}
#first_name{
    color: inherit;
    margin-right: 10px;
}
#last_name{
    color: #7ed3b4;
}

#text h4{
    display: block;
    /*font-family: 'Actor', sans-serif;*/
    font-family: 'Architects Daughter', sans-serif;
    color: inherit;
    opacity: inherit;
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
