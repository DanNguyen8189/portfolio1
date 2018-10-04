/*template for expandable menu that appears on smaller screens*/
<template>
    <div>
        <img id='signature' src='http://i.imgur.com/EglY7hp.png' style='width:10%;height:10%;'>
        <nav class='drop-down-menu' style='background-color: rgba(0,0,0,0.4) !important'>
            <transition name="fade">
                <ul id = 'navigationlinks' v-if='show'>
                    <!--create a button for each item in menuItems, which was passed down from Navigation-component-->
                    <li v-for='item in menuItems' 
                        :key = 'item.id'
                        :class="{ 'active': (item === selected) }">
                            <button @click = 'selected = item; goTo(item.route)'>{{ item.id }}</button>
                    </li>
                </ul>
            </transition>
            <a class='drop-down-symbol' href='#' v-on:click='show = !show'>&#9776;</a>
        </nav>
    </div>
</template>

<!--Script to toggle appearance and dissappearance of drop down menu-->
<script>
export default{
    data() {
        return{
            show: false
        }
    },
    /*data expected to be passed down from parent component (Navigation-component)*/
    props:{
        selected: {
            type: String,
            required: true
        },
        menuItems: {
            type: Array,
            required: true
        }
    },
    methods:{
        goTo(routeDirection){
            this.$router.push(routeDirection);
        }
    },
    
}
</script>

<style scoped>
#signature{
    left: 15px;
    float: left;
    margin: 0;
    min-width: 250px;
    max-width: 250px;
    min-height: 150px;
    max-height: 150px;
    opacity: 0.6;
}
.drop-down-menu {
    margin-right: 1em;
    z-index: 1;
    position:relative;
}
#navigationlinks {
    display: block;
    text-align: left;
    position: absolute; /*keeps the drop down button in place*/
    top:120%;
    right: 0; /*forces the menu positioning to expand from right side*/
    padding:0;
    box-shadow:6px 6px 6px rgba(0,0,0,0.15);
    border-radius:3px;
    background: rgb(204, 204, 204);
}
#navigationlinks:after {
    /*This is the small arrow*/
    position: absolute;
    top:0%;
    right: 60px;
    content:'';
    transform:translate(0%, -100%);
    border-left:15px solid transparent;
    border-right:15px solid transparent;
    border-bottom:15px solid rgb(204, 204, 204);
}
#navigationlinks li {
    list-style: none;
    float:none;
    display:block;
    font-size: 2.5em;
    font-family: inherit;
    color: rgb(110, 110, 110);
}

@media screen and (min-aspect-ratio: 2/3) {
    #navigationlinks li{
        font-size: 1.5em;
    }
}
#navigationlinks button{
    width: 100%;
    background: none;
    border: none;
    text-shadow:0px 1px 0px rgba(0,0,0,0.5);
    color: inherit;
    transition: inherit;
    padding: 40px 90px;
    text-align: left;
}
#navigationlinks button:hover, #navigationlinks button:active{
    background-color: rgb(18, 56, 43);
    text-decoration:underline;
    outline: 2px double rgba(126, 211, 180, 0.5);
    color:#a8dbc8;
}
button:focus {
    outline-color:white;
}
/*selected button styling*/
.active{
    color:rgb(22, 66, 45) !important;
    background-color: rgb(94, 143, 123);
    font-weight: bold;
}
.drop-down-symbol {
    display: none;
    padding:60px 55px;
        /*float:left;*/
    box-shadow:0px 1px 1px rgba(0,0,0,0.15);
    border-radius:3px;
    background: rgb(204, 204, 204);
    text-shadow:0px 1px 0px rgba(0,0,0,0.5);
    color:rgb(185, 185, 185);
    font-size:60px;
    transition:color linear 0.15s;
}
@media screen and (min-aspect-ratio: 2/3) {
    .drop-down-symbol{
        padding: 40px 35px;
        font-size: 40px;
    }
}
.drop-down-symbol:hover{
    color: #4e816f;
}

/*Cases of different screen sizes*/
@media screen and (min-aspect-ratio: 1/1) {
    .drop-down-menu{
        display: none;
    }
    .drop-down-symbol{
        display: none;
    }
    #signature{
        display: none;
    }
}
@media screen and (max-aspect-ratio: 1/1) {
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
