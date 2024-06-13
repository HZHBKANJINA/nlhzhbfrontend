<template>
    <div>
      <h2>Uredi igrača</h2>
      <form @submit.prevent="spremiIgraca">
        <label for="nadimak">Nadimak:</label>
        <input type="text" v-model="igrac.nadimak" id="nadimak" required>
        <button type="submit">Spremi</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UpdatePlayer',
    methods: {
      async spremiIgraca() {
        try {
          const response = await axios.put(`http://localhost:3000/igraci/${this.igrac._id}`, { nadimak: this.igrac.nadimak });
          if (response.status === 200) {
            console.log('Igrač je uspješno ažuriran.');
          } else {
            console.error('Greška prilikom ažuriranja igrača.');
          }
        } catch (error) {
          console.error('Greška prilikom ažuriranja igrača:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Dodajte stilove po potrebi */
  </style>
  