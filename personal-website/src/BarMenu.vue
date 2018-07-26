<template>
    <div>
        <ul>
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

<style>
ul{
    display: inline-block;
} 
li{
    margin:6px 30px;
    margin-top: 20px; /*override, was uneven*/
    float:left;
    list-style:none;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
} 
a{
    text-shadow:0px 1px 0px rgba(0,0,0,0.5);
    color: inherit;
    transition: inherit;
}
a:hover, a:active, .current-item a {
    text-decoration:underline;
    color:#7ed3b4;
}
</style>

