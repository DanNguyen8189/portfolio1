<template>
    <div id = 'navigation'>
        <bar-menu id = 'bar-menu'></bar-menu>
        <drop-down-menu id = 'drop-down'></drop-down-menu>
    </div>
</template>

<style scoped>
#navigation{
    text-align: right;
    font-size: 17px;
    font-family: 'Actor', sans-serif;
    color: #ffffffc2;
    transition: color linear 0.15s;
}
@media screen and (min-width: 860px) {
    #bar-menu {
        width:100%;
        box-shadow:0px 1px 1px rgba(255, 255, 255, 0.30);
        border-radius:3px;
    }
    .drop-down-menu{
        display: none;
    }
    .drop-down-symbol{
        display: none;
    }
}
@media screen and (max-width: 860px) {
    #bar-menu{
        display: none
    }

    .drop-down-menu{
        display: inline-block;
    }

    .drop-down-symbol{
        display: inline-block;
    }
    
    /*.drop-down-symbol:hover, .drop-down-symbol.active {
        text-decoration:none;
        color:gray;
    }*/

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
}
</style>

