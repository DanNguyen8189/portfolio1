<template>
    <div>
        <img id='signature' src='http://i.imgur.com/EglY7hp.png' style='width:10%;height:10%;'>
        <ul id= 'navigationlinks'>
            <!--<li><button @click='goHome'>HOME</button></li>
            <li><button @click='goAbout'>ABOUT</button></li>
            <li><button @click='goAbout'>PROFILE</button></li>
            <li><button @click='goAbout'>PROJECTS</button></li>
            <li><button @click='goAbout'>CONTACT</button></li>-->
            <li v-for='item in menuItems' 
                :key = 'item.id'
                :class="{ 'active': (item === selected) }">
                    <button @click = 'selected = item; goTo(item.route)'>{{ item.id }}</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                selected: 'HOME',
                menuItems: [{id: 'HOME', route: '/'}, 
                            {id: 'ABOUT', route: '/about' },   
                            {id: 'PROFILE', route: '/about'}, 
                            {id: 'PROJECTS', route: '/about'}, 
                            {id: 'CONTACT', route: '/about'}]
            }
        },
        methods:{
            /*goHome(){
                this.$router.push('/');
            },
            goAbout(){
                this.$router.push('/about');
            },*/
            goTo(routeDirection){
                this.$router.push(routeDirection);
            }
        }
    }
</script>

<style scoped>
#signature{
    position: relative;
    left: 15px;
    float: left;
    margin: 0;
    min-width: 100px;
    max-width: 100px;
    min-height: 60px;
    max-height: 60px;
    opacity: 0.6;
}
#navigationlinks{
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-top: 5px;
} 
#navigationlinks li{
    float:left;
    list-style:none;
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
    padding: 12px 32px;
}
#navigationlinks button:hover, #navigationlinks button:active{
    background-color: rgba(255, 255, 255, 0.055);
    text-decoration:underline;
    color:#7ed3b4;
}
button:focus {
    outline-color:aquamarine;
}
.active{
    color:#7ed3b4 !important;
}
</style>

