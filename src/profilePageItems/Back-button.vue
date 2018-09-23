/*Back button template*/
<template>
<div>
    <button @click = 'goBack()' >Back</button>
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