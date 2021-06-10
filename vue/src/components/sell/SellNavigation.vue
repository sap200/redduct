<template>
<header>
    <nav>
        <ul>
             <li>
                <router-link to="/sell/createProduct"><span class="bull">&#9935;</span> Create Product </router-link>
            </li>
            <li>
                <router-link to="/sell/manageProduct"><span class="bull">&#128187;</span> Manage Product </router-link>
            </li>

              <li>
                <router-link to="/sell/manageOrders"> <span class="bull">&#128722;</span> Pending Orders </router-link>
            </li>

             <li>
                <router-link to="/sell/doneOrders"> <span class="bull">&#128666;</span> Fullfilled Orders </router-link>
            </li>
        </ul>
    </nav>
</header>
    
</template>

<script>
export default {

}

</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  margin: auto;
  font-size: 5rem;
}

nav {
  width: 95%;
  height: 5rem;
  margin: 0.2rem auto;
  border-style:groove;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-color: white;
}

ul {
  list-style: none;
  margin: 0.2rem;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: left;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-color: gray;
}

li {
  margin: 0rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 1.4rem;
}

a {
  text-decoration: none;
  font: inherit;
  background: transparent;
  cursor: pointer;
  color: blueviolet;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  border-color: #f1a80a;
  border-radius: 0.6rem;
}

a:hover {
  color: white;
  font-size: 1.5rem;
  background-image: linear-gradient(to right, blueviolet, violet);
  border-radius: 0.3rem;
}

a.router-link-active {
  color: white;
  font-size: 1.5rem;
  background-image: linear-gradient(to right, blueviolet, violet);
  border-radius: 0.3rem;
}


</style>