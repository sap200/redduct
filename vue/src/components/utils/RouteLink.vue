<template>
    <section v-if="!anchor">
		<router-link :to="route"> <span class="bull">{{icon}}</span> {{text}} </router-link>
	</section>
    <section v-else>
		<a :href="route" :target="target"> <span class="bull">{{icon}}</span> {{text}} </a>
	</section>
    
</template>

<script>
export default {
    props: {
       route : String,
       icon : String,
       text : String,
       target: String,
       anchor: Boolean
    }
}
</script>

<style scoped>

    section {
        margin-bottom: 2rem;
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        text-decoration: none;
        font: inherit;
        background: transparent;
        cursor: pointer;
        color: black;
        padding: 0.5rem 0.5rem;
        display: inline-block;
        border-color: #f1a80a;
        border-radius: 0.6rem;
        font-size: 1.7rem;
        width: 100%;
    }

    a:hover {
        color: white;
        font-size: 2rem;
        background-image: linear-gradient(to left, blueviolet, violet, purple);
        border-radius: 0.3rem;
    }

    a.router-link-active {
        color: white;
        font-size: 2rem;
        background-image: linear-gradient(to left, blueviolet, violet, purple);
        border-radius: 0.3rem;
    }

</style>