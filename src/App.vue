<template>
    <div id='app'>
        <!--vue component, defined in App.vue-->  
        <navigation-component></navigation-component>

        <!--Our pages that we navigate to come to life here-->
        <transition name = 'fade' mode='out-in'>
            <router-view id ='view'></router-view>
        </transition>

        <!--vue component, defined in App.vue--> 
        <image-credit></image-credit>
    </div>
</template>

<script>

</script>

<style>

#view{
    text-align: center;
    margin: 4% auto;
}

/*Router animation properties*/
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity, transform;
    transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: translateY(10%);
}

</style>
