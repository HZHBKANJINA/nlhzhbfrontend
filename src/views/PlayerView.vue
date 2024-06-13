<template>
  <div>
    <div class="topnav"></div>
    <div>
      <div class="clubDropdown">
        <label for="klub">Odaberi klub:</label>
        <select v-model="selectedKlub">
          <option value="" disabled selected>Odaberi klub</option>
          <option v-for="klub in klubovi" :value="klub._id" :key="klub._id">{{ klub.naziv }}</option>
        </select>
      </div>
      <button @click="otvoriDialog">Dodaj igrača</button>
      
      <ModalComponent v-if="dialogOtvoren" @zatvori="zatvoriDialog">
        <AddPlayer @zatvori="zatvoriDialog" />
        <button @click="zatvoriDialog" class="close">X</button>
      </ModalComponent>
    </div>

    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>

    <div class="grid">
      <div v-for="igrac in igraci" :key="igrac._id">
        <img :src="igrac.slika" alt="Slika igrača">
        <p>{{ igrac.ime }} {{ igrac.prezime }}</p>
        <h2>{{ igrac.nadimak }}</h2>
        <div class="button-group">
          <button @click="azurirajIgraca(igrac)">Ažuriraj
          </button>
          <button @click="obrisiIgraca(igrac._id)">Obriši</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AddPlayer from '../components/AddPlayer.vue';
import ModalComponent from '../components/ModalComponent.vue';

export default {
  name: 'PlayerView',
  components: {
    AddPlayer,
    ModalComponent
  },
  data() {
    return {
      klubovi: [],
      selectedKlub: '',
      igraci: [],
      dialogOtvoren: false,
      errorMessage: '',
      azuriranjeAktivno: false,
    };
  },
  methods: {
    async dobaviKlubove() {
      try {
        const response = await axios.get('http://localhost:3000/klubovi');
        this.klubovi = response.data;
      } catch (error) {
        console.error('Greška prilikom dobavljanja klubova:', error);
        this.errorMessage = 'Došlo je do greške prilikom dobavljanja klubova sa servera.';
      }
    },
    async dobaviIgrace(){
      try{
        const response=await axios.get('http://localhost:3000/igraci');
        this.igraci=response.data
      }catch(error){
        console.error('Greška prilikom dobavljanja klubova:', error);
        this.errorMessage = 'Došlo je do greške prilikom dobavljanja klubova sa servera.';
      }
    },
    azurirajIgraca(igrac) {
      this.azuriranjeAktivno = true;
      this.odabraniIgrac = igrac;
    },
    zatvoriFormuZaAzuriranje() {
      this.azuriranjeAktivno = false;
      this.odabraniIgrac = null;
    },
    async obrisiIgraca(igracId) {
      try {
        const response = await axios.delete(`http://localhost:3000/igraci/${igracId}`);
        if (response.status === 200) {
          // Igrač uspješno obrisan
          this.igraci = this.igraci.filter(igrac => igrac._id !== igracId);
        } else {
          // Greška prilikom brisanja igrača
          console.error('Greška prilikom brisanja igrača:', response.data);
          this.errorMessage = 'Došlo je do greške prilikom brisanja igrača.';
        }
      } catch (error) {
        console.error('Greška prilikom brisanja igrača:', error);
        this.errorMessage = 'Došlo je do greške prilikom brisanja igrača.';
      }
    },
    otvoriDialog() {
      this.dialogOtvoren = true;
    },
    zatvoriDialog() {
      this.dialogOtvoren = false;
    },
    otvoriSliku(igrac) {
      window.open(igrac.slika, '_blank');
    },
  },
  mounted() {
    this.dobaviKlubove();
    this.dobaviIgrace();
  }
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 20px;
}
.close {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 1.5rem;
}
</style>
