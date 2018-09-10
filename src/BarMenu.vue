<template>
    <div>
        <img id='signature' src='http://i.imgur.com/EglY7hp.png' style='width:10%;height:10%;'>
        <ul id= 'navigationlinks'>
            <!--create a button for each item in menuItems, which was passed down from Navigation-component-->
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
        }
    },
    /*data expected from parent component (Navigation-component)*/ 
    props:{
        selected: {
            type: String,
            required: true
        },
        menuItems: {
            type: Array,
            required: true
        },
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
div{
    display: inline-table;
}
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
    position: relative;
} 
#navigationlinks li{
    float:left; /*determines order of the links. Floating right does it backwards*/
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
    outline: 2px double rgba(126, 211, 180, 0.5);
    color:#7ed3b4;
}
button:focus {
    outline-color:aquamarine;
}
.active{
    color:#7ed3b4 !important;
}
</style>

