<template>
    <div id = 'navigation'>
        <bar-menu id = 'bar-menu' :selected = selected :menuItems = menuItems></bar-menu>
        <drop-down-menu id = 'drop-down' :selected = selected :menuItems = menuItems></drop-down-menu>
    </div>
</template>

<script>
export default{
    data(){
        return{
            selected: 'HOME',
            menuItems: [{id: 'HOME', route: '/'}, 
                        {id: 'ABOUT', route: '/about' },   
                        {id: 'PROFILE', route: '/profile'}, 
                        {id: 'CONTACT', route: '/contact'}]
        }
    },
}
</script>
<style scoped>
#navigation{
    text-align: right;
    font-size: 17px;
    font-family: 'Actor', sans-serif;
    color: #ffffffc2;
    background-color: rgba(0,0,0,0.05);
    transition: color linear 0.15s;
}
@media screen and (min-width: 860px) {
    #bar-menu {
        width:100%;
        box-shadow:0px 1px 1px rgba(255, 255, 255, 0.30);
        border-radius:3px;
    }
}
@media screen and (max-width: 860px) {
    #bar-menu{
        display: none
    }
}
</style>

