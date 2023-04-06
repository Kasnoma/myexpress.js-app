
<template>
  <header>

   
<!--      <p>first number <input type="text" @change="addNumber" v-model="firstnumber"></p> -->
<!--      <p>second number <input type="text" @change="addNumber" v-model="secondnumber"></p> -->
<!--     <h1>Sum of the two numbers {{this.result}}</h1> -->
    

    <div class="my-modal" :class="show">
      <button @click="closeModal ">Generate Random </button>

    </div>
 
    <div class="d-block text-center">
      <h1 style="display: block">
        The winner for the day is {{ randomStudentData.name }} and he is {{ randomStudentData.age }}
        <p>Congratulations </p>
      </h1>
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {

}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      randomStudentData:{
        name:"",
        age:""
      },
      show: 'show'
    }

     },
     methods: {
        getRandomStudentFromBackend(){
          axios.get( "http://localhost:3000/random-student").then(function(response) {
            this.randomStudentData = response.data 
        }.bind(this));
     },
     closeModal() {
      this.show = 'hide'
      this.getRandomStudentFromBackend()
    }

    // getRandomStudentFromBackend() {
    //   fetch('http://localhost:3000/random-student', {
    //     method: 'GET'
    //   }).then(async (response) => {
    //     this.randomStudentData = await response.json()
    //   })
    // }
   
    }
}
</script>