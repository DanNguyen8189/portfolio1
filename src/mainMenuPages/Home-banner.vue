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
    margin: 20vh auto;
    color: white;
    opacity: 0.95;
    display: block;
    text-align: center;
}
#text h1{
    display: block;
    font-size: 1100%;
    font-family: 'Raleway', sans-serif;
    opacity: inherit;
}
@media screen and (min-aspect-ratio: 1/1){
    #text h1{
        display: inline-block;
        font-size: 600%;
    }
}
#first_name{
    color: inherit;
}
#last_name{
    color: #94ffd8;
}

#text h4{
    display: block;
    /*font-family: 'Actor', sans-serif;*/
    font-family: 'Architects Daughter', sans-serif;
    font-size: 300%;
    color: inherit;
    opacity: inherit;
}
@media screen and (min-aspect-ratio: 1/1){
    #text h4{
        font-size: 200%;
    }
}
</style>
