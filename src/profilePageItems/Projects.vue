<template>
    <div>
        <back-button id = "back"></back-button>
        <p> 
            UCSD Solar Car
            <br/>
            11/2017 – 09/2019 
            <br/>
            • Developed wireless communication system/monitoring system for a solar powered car to race in a team of 24 
            <br/>
            • Co-lead of the software side of the electrical half of team as of December 2018 and mentored junior members of the team 
            <br/>
            • Utilized: Python, Arduino, Raspberry pi  
            <br/>
            • Worked on team website https://tritonsolarcar.github.io/SolarCarWebsite/ utilizing Node.js and React.js  
        </p>

        <p>
            UC San Diego Web Components Library
            <br/>
            04/2019 - 06/2019     
            <br/>  
            • Developed part of UC San Diego web components library in a team of 10 using agile methodologies and compiled them to form a service called Rate-it: https://github.com/ucsd-cse112/team7 
            <br/>  
            • Constructed part of the build pipeline, managed team documentation and kept teammates accountable for keeping documentation updated 
            <br/>  
            • Utilized: HTML, CSS, JavaScript, Node.js 
        </p>
        <p>
            SurfStore
            <br/>
            02/2019 - 03/2019
            <br/>       
            • Made a cloud-based file storage service; a networked file storage application that lets you sync files to and from the cloud  
            <br/>  
            • Utilized: C++, Amazon Web Services 
        </p>
        <p>
            Router Implementation
            <br/>  
            11/2018 - 12/2018
            <br/>                          
            • Built a simple router that runs in a virtual machine given a static network topology and routing table, which processes raw ethernet frames and forwards them to the correct outgoing interface 
            <br/>  
            • Utilized: C, VMWare
        </p>
    </div>
</template>
<script>
</script>

<style scoped>
h1{
    color: rgba(255, 255, 255, 0.7)
}
#back{
    margin-left: 5%;
}
p{
    color: #7a7a7a;
    background: white;

    padding: 50px;
    margin: 1% 5%;
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