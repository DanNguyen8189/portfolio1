<template>
    <div>
        <p id='image-credit'>Background image by @kellysikkema on Unsplash </p>
    </div>
</template>

<script>
</script>

<style>
#image-credit{
    display: block;
    color: white;
    position: absolute; /*these 3 lines allow us to put at bottom right of page*/
    bottom: 0;
    right: 30px;
    opacity: 0.6;
    font-size: 30px;
    font-family: 'Actor', sans-serif;
}

@media screen and (min-aspect-ratio: 1/1){
    #image-credit{
        font-size: 10px;
    }
}
</style>

