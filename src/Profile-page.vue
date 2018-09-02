<template>
    <div>
        <!--<ul class = 'profile_buttons'>
            <li class = 'shift-down'><button class='fa-graduation-cap' @click='goEducation()'><i class="fa fa-graduation-cap"></i><p>Education</p></button></li>
            <li><button class='fa-wrench'><i class="fa fa-wrench"></i><p>Skills</p></button></li>
            <li class = 'shift-down'><button class='fa-leaf'><i class="fa fa-leaf"></i><p>Projects</p></button></li>
        </ul>-->
        <ul class = 'profile_buttons'>
            <li><span class="dot"><div class = 'content'><i class="fa fa-graduation-cap"></i><p>Education</p></div></span></li>
            <li><span class="dot"><div class = 'content'><i class="fa fa-wrench"></i><p>Skills</p></div></span></li>
            <li><span class="dot"><div class = 'content'><i class="fa fa-leaf"></i><p>Projects</p></div></span></li>
        </ul>
        <!--<div class="menu-container">
            
            <div class="hex-wrapper">
                <div class="hex-row shift">
                <div class="hexagon" id="nav-home">
                    <i class="fa fa-graduation-cap"></i>
                    <p>Education</p>
                    <div class="face1"></div>
                    <div class="face2"></div>
                </div>
                </div>
                <div class="hex-row">
                <div class="hexagon" id="nav-about">
                    Skills
                    <div class="face1"></div>
                    <div class="face2"></div>
                </div>
                <div class="hexagon" id="nav-work">
                    Projects
                    <div class="face1"></div>
                    <div class="face2"></div>
                </div>
                </div>
                <div class="hex-row shift">
                <div class="hexagon" id="nav-contact">
                    
                    <div class="face1"></div>
                    <div class="face2"></div>
                </div>
                </div>
            </div>
            </div>-->
    </div>
    
</template>

<script>
export default{
    data(){
        return{
            profileItems:[{id: Education, route: '/profile/education'},
                          {id: Skills, route: '/profile/skills'},
                          {id: Projects, route: '/profile/projects'}]
        }
    },
    methods:{
        goEducation(){
            this.$router.push('/profile/education');
        }
    }
}
</script>

<style scoped>
ul{
    display: block;
    position: relative;
    margin: auto; 
    margin-top: 50px;
    /*margin-left: -29px;*/
    right: 20px;
}
li{
    display: inline-block;
    list-style: none;
    position: relative;
    margin: 35px 30px;
}
.shift-down{
    top: 90px;
}
/*button{
    border: none;
    width: 210px;
    height: 120px;
    background-color: #ccc;
    display: block;
    text-align: center;
    line-height: 32px;
    font-size: 70px;
    transition: 0.5s;
}
button::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
    transform: rotate(60deg);
}
button::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    z-index: -1;
    transform: rotate(-60deg);
}
button:hover{
  color: #fff;
  text-shadow: 0 0 10px white;
  background-color: #888;
}*/
p{
    margin-top: -15px;
    font-size: .5em;
    font-family: 'Amatic SC', cursive;
    font-weight: 800;
}
.fa-graduation-cap{
    color:rgb(68, 71, 255);
}
.fa-wrench{
    color:rgb(255, 119, 70);
}
.fa-leaf{
    color:rgb(67, 202, 96);
}

.dot {
    height: 230px;
    width: 230px;
    padding: 25px;
    background-color:rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    display: inline-block;
    font-size: 70px;
    text-align: center;
    transition: 0.3s;
    /*border-style: double;
    border-width: 20px;*/
    border-radius: 50%;
    border: 3px double rgba(255, 255, 255, 0.5);
    background-clip: content-box;
    margin:0 auto;
}
.content{
    width: 100%;
    margin: 20px auto;
}
.dot:hover {
    color: #fff;
    text-shadow: 0 0 10px rgba(196, 255, 232, 0.8);
    background-color: rgb(105, 105, 105);
    border: 3px solid rgba(196, 255, 232, 0.8);
}

</style>
