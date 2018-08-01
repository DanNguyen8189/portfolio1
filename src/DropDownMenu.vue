<template>
    <div>
        <nav class='drop-down-menu' style='background-color: rgba(0,0,0,0.4) !important'>
            <transition name="fade">
                <ul id = 'navigationlinks' v-if='show'>
                    <li><button @click='goHome'>HOME</button></li>
                    <li><button @click='goAbout'>ABOUT</button></li>
                    <li><button @click='goAbout'>PROFILE</button></li>
                    <li><button @click='goAbout'>PROJECTS</button></li>
                    <li><button @click='goAbout'>CONTACT</button></li>
                </ul>
            </transition>
            <a class='drop-down-symbol' href='#' v-on:click='show = !show'>&#9776;</a>
        </nav>
    </div>
</template>

<!--Script to toggle appearance and dissappearance of drop down menu-->
<script>
    var listElements = document.querySelectorAll('li'); 
    var maxWidth = 0;
    //document.getElementById("navigationlinks").style.background = white;
    /*
    for (i = 0; i < listElements.length; ++i) {
        
    };
    
    // write
    for (i = 0; i < listElements.length; ++i) {
        listElements[i].style.width = maxWidth + "px";
    };*/

export default{
    data() {
        return{
            show: false
        }
    },
    methods:{
        goHome(){
            this.$router.push('/');
        },
        goAbout(){
            this.$router.push('/about');
         }
    },
    
}
</script>

<style scoped>
.drop-down-menu {
    margin-right: 1em;
    z-index: 1;
    position:relative;
}  
/*#drop-down-menu ul.active { //this was needed for the jquery verison
  display:none;
}*/
#navigationlinks {
    display: block;
    text-align: left;
    position:absolute;
    top:120%;
    right: 0; /*forces the menu positioning to expand from right side*/
    padding:0;
    box-shadow:6px 6px 6px rgba(0,0,0,0.15);
    border-radius:3px;
    background:#303030;
}
#navigationlinks:after {
    width:0px;
    height:0px;
    position:absolute;
    top:0%;
    right: 21px;
    content:'';
    transform:translate(0%, -100%);
    border-left:7px solid transparent;
    border-right:7px solid transparent;
    border-bottom:7px solid #303030;
}
#navigationlinks li {
    list-style: none;
    float:none;
    display:block;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
}

#navigationlinks button{
    background: none;
    border: none;
    text-shadow:0px 1px 0px rgba(0,0,0,0.5);
    color: inherit;
    transition: inherit;
    padding: 10px 25px;
}
#navigationlinks button:hover, #navigationlinks button:active{
    background-color: rgba(255, 255, 255, 0.055);
    text-decoration:underline;
    color:#7ed3b4;
}
.drop-down-symbol {
    display: none;
    padding:20px;
        /*float:left;*/
    box-shadow:0px 1px 1px rgba(0,0,0,0.15);
    border-radius:3px;
    background:#303030;
    text-shadow:0px 1px 0px rgba(0,0,0,0.5);
    color:#777;
    font-size:20px;
    transition:color linear 0.15s;
}

@media screen and (min-width: 860px) {
    .drop-down-menu{
        display: none;
    }
    .drop-down-symbol{
        display: none;
    }
}
@media screen and (max-width: 860px) {
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
