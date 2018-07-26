<template>
    <div>
        <img id='signature' src='http://i.imgur.com/EglY7hp.png' style='width:10%;height:10%;'>
        <div class = 'navigation'>
            <bar-menu id = 'bar-menu'></bar-menu>
            <drop-down-menu id = 'drop-down'></drop-down-menu>
        </div>
        <banner id='banner'></banner>
        <image-credit></image-credit>
    </div>
</template>

<script>

</script>

<style>
#signature{
    position: relative;
    left: 15px;
    float: left;
    padding-top: 5px;
    min-width: 100px;
    max-width: 100px;
    min-height: 60px;
    max-height: 60px;
    opacity: 0.6;
}

.navigation{
    text-align: right;
    font-size: 17px;
    font-family: 'Actor', sans-serif;
    color: #ffffffc2;
    transition: color linear 0.15s;
}

#banner{
    text-align: center;
    margin: 8% auto;
}
</style>
