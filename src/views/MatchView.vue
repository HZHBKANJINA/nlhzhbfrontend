<template>
    <div class="topnav">
        <a href="/">Početna</a>
        <a href="/players">Igrači</a>
        <a href="/table">Tablica</a>
    </div>
    <div>
        <div class="lokacija">
            
        </div>
        <div class="vrijeme">
            <!-- prikaži termin iz komponente AddMatch.vue -->
        </div>
        <div class="stadium">
            <!-- prikaži stadion iz komponente AddMatch.vue -->
        </div>
    </div>
    <div class="rezultat">
        <div class="domacin">
            <!-- prikaži domaćina i njegove golove iz komponente AddMatch.vue -->
        </div>
        <p class="znak">:</p>
        <div class="gost">
            <!-- prikaži gosta i njegove golove iz komponente AddMatch.vue -->
        </div>
    </div>
    <div class="coach">
        <div class="homecoach">
            <!-- prikaz trebera domaćina iz komponente AddMatch.vue-->
        </div>
        <div class="guestcoach">

        </div>
    </div>
    <div class="sudac">
        <div class="glavni"><!--prikaz glavnog sudije--></div>
        <div class="p1var">
            <div class="p1">
                <!--prikaz pomocnog sudije1-->
            </div>
            <div class="var">
                <!--prikaz var sudije-->
            </div>
        </div>
        <div class="p2avar">
            <div class="p2"><!--prikaz pomocnog sudije2--></div>
            <div class="avar"><!--prikaz avar--></div>
        </div>
    </div>
    <div class="delegate"></div>
</template>

<script>
    export default{
        name:'MatchView',
    }
</script>