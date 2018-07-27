<template id = 'bar-menu-root'>
    <div>
        <img id='signature' src='http://i.imgur.com/EglY7hp.png' style='width:10%;height:10%;'>
        <ul id= 'navigationlinks'>
            <li class='current-item'><a href='#'>HOME</a></li>
            <li><a href='#'>ABOUT</a></li>
            <li><a href='#'>PROFILE</a></li>
            <li><a href='#'>PROJECTS</a></li>
            <li><a href='#'>CONTACT</a></li>
        </ul>
    </div>
</template>

<script>
</script>

<style scoped>
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
#navigationlinks{
    display: inline-block;
} 
#navigationlinks li{
    margin:6px 30px;
    margin-top: 20px; /*override, was uneven*/
    float:left;
    list-style:none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
} 
#navigationlinks a{
    text-shadow:0px 1px 0px rgba(0,0,0,0.5);
    color: inherit;
    transition: inherit;
}
#navigationlinks a:hover, #navigationlinks a:active, .current-item a {
    text-decoration:underline;
    color:#7ed3b4;
}
</style>

