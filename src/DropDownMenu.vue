<template>
    <div>
        <nav class='drop-down-menu' style='background-color: rgba(0,0,0,0.4) !important'>
            <transition name="fade">
                <ul v-if='show'>
                    <li class='current-item'><a href='#'>HOME</a></li>
                    <li><a href='#'>ABOUT</a></li>
                    <li><a href='#'>PROFILE</a></li>
                    <li><a href='#'>PROJECTS</a></li>
                    <li><a href='#'>CONTACT</a></li>
                </ul>
            </transition>
            <a class='drop-down-symbol' href='#' v-on:click="show = !show">&#9776;</a>
        </nav>
    </div>
</template>

<script>
</script>

<style>
.drop-down-menu {
    display: none;
    margin-right: 1em;
    z-index: 1;
    position:relative;
}  
/*.drop-down-menu ul.active { //this was needed for the jquery verison
  display:none;
}*/
.drop-down-menu ul {
    display: block;
    text-align: left;
    position:absolute;
    top:120%;
    right: 0; /*forces the menu positioning to expand from right side*/
    padding:10px 18px;
    box-shadow:6px 6px 6px rgba(0,0,0,0.15);
    border-radius:3px;
    background:#303030;
}
.drop-down-menu ul:after {
    width:0px;
    height:0px;
    position:absolute;
    top:0%;
    left:168px;
    content:'';
    transform:translate(0%, -100%);
    border-left:7px solid transparent;
    border-right:7px solid transparent;
    border-bottom:7px solid #303030;
}
.drop-down-menu li {
    margin:10px 5px;
    list-style: none;
    float:none;
    display:block;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
}

.drop-down-menu a {
    display:block;
    text-shadow:0px 1px 0px rgba(0,0,0,0.5);
    color: inherit;
    transition: inherit;
}

.drop-down-menu a:hover, .current-item a {
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
</style>
