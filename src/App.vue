<template>
    <div id='app'>  
        <navigation-component></navigation-component>

        <transition name = 'fade' mode='out-in'>
            <router-view id ='view'></router-view>
        </transition>

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
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity, transform;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: translateY(10%);
}

</style>
