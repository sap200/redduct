<template>
    <div id="logo">
        <h2> <span id="red">Red</span><span id="duct">Duct</span></h2>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
#red {
    color: red;
}

#duct {
    color: yellow;
}

#logo {
    background-image: linear-gradient(to left, blueviolet,skyblue, blue, darkblue);
    padding: 0.75rem;
    margin: 1rem auto;
    margin-top: 0rem;
    margin-bottom: 0rem;
    width: 100%;
    text-align: left;
    font-size: 1.7rem;
}
</style>