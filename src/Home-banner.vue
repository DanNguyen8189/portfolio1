<template>
    <div id = 'homepage'>
        <div id=text>
            <h1>DAN NGUYEN</h1>
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
