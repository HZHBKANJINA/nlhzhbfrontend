<template>
  <form @submit.prevent="dodajIgraca">
    <label for="klub">Odaberi klub</label>
    <select v-model="noviIgrac.klub" id="klub">
      <option value="" disabled selected>Odaberite klub</option>
      <option v-for="klub in klubovi" :value="klub._id" :key="klub._id">{{ klub.naziv }}</option>
    </select>

    <label for="slika">SLIKA</label>
    <input type="text" v-model="noviIgrac.slika" id="slika">

    <label for="ime">IME</label>
    <input type="text" v-model="noviIgrac.ime" id="ime">

    <label for="prezime">PREZIME</label>
    <input type="text" v-model="noviIgrac.prezime" id="prezime">

    <label for="nadimak">NADIMAK</label>
    <input type="text" v-model="noviIgrac.nadimak" id="nadimak">

    <label for="datum_rodjenja">DATUM ROĐENJA</label>
    <input type="date" v-model="noviIgrac.datum_rodjenja" id="datum_rodjenja">

    <label for="broj">BROJ</label>
    <input type="number" v-model="noviIgrac.broj" id="broj">

    <label for="rating">RATING</label>
    <input type="number" v-model="noviIgrac.rating" id="rating">

    <label for="pozicija">POZICIJA</label>
    <input type="text" v-model="noviIgrac.pozicija" id="pozicija">

    <label for="noga">NOGA</label>
    <input type="text" v-model="noviIgrac.noga" id="noga">

    <button type="submit">DODAJ</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddPlayer',
  data() {
    return {
      noviIgrac: {
        slika: '',
        ime: '',
        prezime: '',
        nadimak: '',
        datum_rodjenja: null,
        broj: null,
        rating: null,
        pozicija: '',
        noga: '',
        klub: ''
      },
      klubovi: []
    }
  },
  methods: {
    async dodajIgraca() {
      try {
        if (![95, 97, 99].includes(this.noviIgrac.rating)) {
        alert('Rating može biti samo 95, 97 ili 99.');
        return;
        }
        const response = await axios.post('http://localhost:3000/igraci', this.noviIgrac);
        if (response.status === 201) {
          this.noviIgrac = {
            slika: '',
            ime: '',
            prezime: '',
            nadimak: '',
            datum_rodjenja: null,
            broj: null,
            rating: null,
            pozicija: '',
            noga: '',
            klub: ''
          };
          alert('Igrač je uspešno dodat!');
        } else {
          alert('Došlo je do greške prilikom dodavanja igrača.');
        }
      } catch (error) {
        console.error('Greška:', error);
        alert('Došlo je do greške prilikom komunikacije sa serverom.');
      }
    },
    async dobaviKlubove() {
      try {
        const response = await axios.get('http://localhost:3000/klubovi');
        this.klubovi = response.data;
      } catch (error) {
        console.error('Greška:', error);
        alert('Došlo je do greške prilikom dobavljanja klubova sa servera.');
      }
    }
  },
  mounted() {
    this.dobaviKlubove();
  }
}
</script>
