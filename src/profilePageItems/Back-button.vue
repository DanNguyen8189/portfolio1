/*Back button template*/
<template>
<div>
    <button @click = 'goBack()' ><i class="fa fa-arrow-left"></i></button>
</div>
</template>

<script>
export default{
    methods:{
        goBack(){
            this.$router.go(-1) //go back one step in history stack / back button functionality for routing 
        }
    }
}
</script>
<style scoped>
div{
    /*width:max-content;*/ /*makes it so that the width of the parent div is at most the width of its contents. 
    note: apparently doesn't work on ie or edge*/
}
button{
    background-color: #00806b8a;
    color: rgb(77, 255, 196);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font-size: 30px;
    display: block; /*for whatever reason these 2 lines allow the button to go all the way left.*/
    overflow: auto;
    margin: 5px;
}
</style>