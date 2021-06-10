<template>
<div>
    <section id="main">
         <section id="details">
            <div id="content">  
                <h1>Redduct</h1><h1>Store</h1>
                <p>
                Your painting or a handicraft have value. So get it directly in IPCP. 
                Usually a person needs to work, earn money (fiat) then hardly exchange it in crypto. 
                This market makes it extremely easy for seller to buy and sell in IPCP.
                Promoting Token economy
                </p>
            </div> 
            
             <img :src="currentImage" @click="slideImage()"/>
         </section>


          <a href="https://ipfs.io/ipfs/Qmdhyf5dBPoQs5fmX6rk4TyjaCWKPAAG5ucmDWMvsiZcTq?filename=redduct-wp.pdf" target="blank"> <strong>White Paper</strong> </a>

    </section>

    </div>
</template>

<script>
export default {
    data() {
        return {
            currentImage: "https://miro.medium.com/max/6000/1*5kRCNXmpxrRwTgR2hNJxvg.jpeg",
            imageArray: [
                'https://miro.medium.com/max/6000/1*5kRCNXmpxrRwTgR2hNJxvg.jpeg',
                'https://devops.com/wp-content/uploads/2020/04/Blockchain-Debate-1280x720.jpg',
                "https://s27389.pcdn.co/wp-content/uploads/2019/08/four-unexpected-blockchain-use-cases.jpeg",
            ],
        }
    },

    methods: {
        slideImage() {
            const randomNumber = Math.floor(Math.random() * this.imageArray.length);
            this.currentImage = this.imageArray[randomNumber];
        },

        seeWhitePaper() {
            console.log("White Paper")
            location.href="https://www.javascripttutorial.net/"
            location.target="blank"
        }
    }

}

</script>

<style scoped>
#main {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 1);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 4rem;
  width: 85%;
  max-width: 100%;
  background-color: white;
  margin-top: 3rem;
}

#details {
    width: 95%;
    color: blueviolet;
    padding: 1rem;
    font-size: 1rem;
    display: flex;
    justify-content: left;
    align-items: left;
}

#details:hover {
    color: blue;
}

h1 {
    font-size: 5rem;
    margin-top: 5rem;
    text-align: left;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

#content {
    text-align: left;
    font-size: 2.5rem;
    font-family: cursive;
    width: 30%;
}

a {
  border-style:hidden;
  border-radius: 2.6rem;
  background-image: linear-gradient(pink, magenta);
  padding: 2;
  display: inline-block;
  width: 20rem;
  height: 5rem;
  cursor: pointer;
  color: white;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  margin-left: 10px;
  text-align: center;
  font-size: 1.6rem;
  text-decoration: none;
}

img {
    margin-top: 2rem;
    margin-left: 3rem;
    width: 90%;
    height: 80%;
    border-radius: 4rem;
    padding: 2px;
    opacity: 0.9;
    background-color: magenta;
    border-style: hidden;

}

img:hover {
    transform: scaleX(-1);
    cursor: pointer;
}

a:hover {
    background-image: linear-gradient(magenta, pink);
}

</style>