<template>
    <div>
        <back-button id='back-button'></back-button>
        <h1>Page under construction</h1>
        <ul>
            <li>
                <h2>Engineers for a Sustainable World <i class="fa fa-globe" aria-hidden="true"></i></h2>
                <p>Info 1</p>
            </li>
            <li>
                <h2>Activity 2</h2>
                <p>Info 2</p>
            </li>
        </ul>
    </div>
</template>
<script>

</script>

<style scoped>
div{
    width: 100%;
    height: 100%;
    text-align: center;
}

ul{
    list-style: none; /*removes the dot in front of list elements*/
    padding-left: 0; /*needed to remove list indentation*/
}
h1{
    color: rgba(255, 255, 255, 0.7);
    display: inline-block;
}
li{
    color: rgba(0, 0, 0, 0.76);
    background: rgba(255, 255, 255, 0.733);
    border-radius: 15%;
    padding: 50px;
    margin: 5%;
}
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.5s;
    transition-property: opacity, transform;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
    transform: scale(0.5);
}
</style>
