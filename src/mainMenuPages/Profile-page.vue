<template>
    <div>
        <ul class = 'profile_buttons'>
            <li><button class="spin circle" @click = 'goSkills()'><i class="fa fa-wrench"></i><p>Skills</p></button></li>
            <li><button class="spin circle" @click = 'goProjects()'><i class="fa fa-leaf"></i><p>Projects</p></button></li>
            <li><button class="spin circle" @click = 'goEducation()'><i class="fa fa-bicycle"></i><p>Activities</p></button></li>
        </ul>

    </div>
    
</template>

<script>
export default{
    data(){
        return{
            /*Not currently in use*/
            profileItems:[{id: Education, route: '/profile/education'},
                          {id: Skills, route: '/profile/skills'},
                          {id: Projects, route: '/profile/projects'}]
        }
    },
    methods:{
        goEducation(){
            this.$router.push('/profile/activites')
        },
        goSkills(){
            this.$router.push('/profile/skills')
        },
        goProjects(){
            this.$router.push('/profile/projects')
        }
    }
}
</script>

<style scoped>
ul{
    display: block;
    position: relative; 
    margin: 50px auto;
    /*margin-left: -29px;*/
    right: 20px;
}
li{
    display: inline-block;
    list-style: none;
    position: relative;
    margin: 15px 30px;
}

p{
    margin-top: -15px;
    font-size: .5em;
    font-family: 'Amatic SC', cursive;
    font-weight: 800;
}

/*Button image styling*/
.fa-bicycle{
    color:rgb(68, 71, 255);
}
.fa-wrench{
    color:rgb(255, 119, 70);
}
.fa-leaf{
    color:rgb(67, 202, 96);
}

button {
    box-sizing: border-box; /*The width and height properties (and min/max properties) 
                            includes content, padding and border*/
    background-color:rgba(255, 255, 255, 0.7);
    border-radius: 100%;
    display: inline-block;
    font-size: 70px;
    text-align: center;
    transition: 0.3s;
    /*border-style: double;
    border-width: 20px;*/
    border: 3px double rgba(255, 255, 255, 0.5);
    background-clip: content-box; /*clips the background at the edge of the content box*/
    margin:0 auto;
}
button::before, button::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
}
/*On click animation, may change later*/
button:active{
    transition: rotate(25deg);
    transition-duration: .4s;
}
.spin {
    width: 230px;
    height: 230px;
    padding: 25px;
}
@media screen and (max-width: 700px){
    .spin{
        width: 150px;
        height:150px;
        padding: 15px;
    }
    button{
        font-size: 50px;
    }
}
@media screen and (max-width: 470px){
    li{
        margin: 7.5px 15px;
    }
    .spin{
        width: 100px;
        height: 100px;
        padding: 10px;
    }
    button{
        font-size: 40px;
    }
}
.spin:hover {
    color: #6fffc8;
    text-shadow: 0 0 10px rgba(196, 255, 232, 0.8);
    background-color: rgb(105, 105, 105);
}
.spin::before, .spin::after {
    top: 0;
    left: 0;
}
.spin::before {
    border: 2px solid transparent;
}
.spin:hover::before {
    border-top-color: #6fffc8;
    border-right-color: #6fffc8;
    border-bottom-color: #6fffc8;
    transition: border-top-color 0.15s linear, border-right-color 0.15s linear 0.1s, border-bottom-color 0.15s linear 0.2s;
}
.spin::after {
    border: 0 solid transparent;
}
.spin:hover::after {
    border-top: 4px solid #6fffc8;
    border-left-width: 0px;
    border-right-width: 4px;
    transform: rotate(270deg);
    transition: transform 0.4s linear 0s, border-left-width 0s linear 0.35s;
}

.circle {
    border-radius: 100%;
    box-shadow: none;
}
.circle::before, .circle::after {
    border-radius: 100%;
}

/*Strangely overrides the router animations set in App.vue*/
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.7s;
    transition-property: opacity, transform;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: scale(1.5);
}
</style>
