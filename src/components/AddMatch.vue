<template>
  <header>
    <h1>DODAJ UTAKMICU</h1>
  </header>
  <form @submit.prevent="spremiUtakmicu">
    <div>
      <div>
        <!-- Select za odabir datuma i unos vremena -->
        <label for="termin">Odaberi datum i vrijeme</label>
        <input type="datetime-local" v-model="novaUtakmica.termin" id="termin">
      </div>
      <div class="lokacija">
        <label for="podrucje">MJESTO UTAKMICE: </label>
        <select v-model="novaUtakmica.lokacija" id="lokacija" required>
          <option value="" disabled selected>Odaberi Klub</option>
          <option v-for="adresa in adrese" :value="adresa._id" :key="adresa._id">{{ adresa.selo }} {{ adresa.grad }} {{ adresa.drzava }}</option>
        </select>
      </div>
    </div>
    <div>
      <!-- Select za domaći klub -->
      <div>
        <label for="domacin">Domaćin:</label>
        <select v-model="novaUtakmica.domacin" id="domacin" required>
          <option value="" disabled selected>Odaberi klub</option>
          <option v-for="klub in klubovi" :value="klub._id" :key="klub._id">{{ klub.naziv }}</option>
        </select>
        <input type="number" v-model="statistikaKluba.broj_golova_domacina" min="0" required>
        <div>
          <label for="zaledja">BROJ ZALEĐA</label>
          <input type="number" v-model="statistikaKluba.zaledja_domacina" id="zaledja">

          <label for="korneri">BROJ KORNERA</label>
          <input type="number" v-model="statistikaKluba.korneri_domacina" id="korneri">
        </div>
        <div>
          <label for="trener_domacina">Trener Domaćina: </label>
          <select v-model="trenerKluba._id" id="trener_domacina" required>
            <option value="" disabled selected>Odaberi Trenera: </option>
            <option v-for="trener in treneri" :value="trener._id" :key="trener._id">{{ trener.ime }} {{ trener.prezime }}</option>
          </select>
        </div>
      </div>
      <!-- Select za gostujući klub -->
      <div>
        <input type="number" v-model="statistikaKluba.broj_golova_gosta" min="0" required>
        <select v-model="novaUtakmica.gost" id="gost" required>
          <option value="" disabled selected>Odaberi klub</option>
          <option v-for="klub in klubovi" :value="klub._id" :key="klub._id">{{ klub.naziv }}</option>
        </select>
        <label for="gost">:Gost</label>
        <div>
          <label for="zaledja">BROJ ZALEĐA</label>
          <input type="number" v-model="statistikaKluba.zaledja_gosta" id="zaledja">

          <label for="korneri">BROJ KORNERA</label>
          <input type="number" v-model="statistikaKluba.korneri_gosta" id="korneri">
          <div>
            <label for="trener_gosta">Trener Gosta: </label>
            <select v-model="trenerKluba._id" id="trener_gosta" required>
              <option value="" disabled selected>Odaberi Trenera: </option>
              <option v-for="trener in treneri" :value="trener._id" :key="trener._id">{{ trener.ime }} {{ trener.prezime }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div>
      <!-- Selecti za sudije -->
      <div>
        <label for="glavni_sudac">Glavni sudac:</label>
        <select v-model="novaUtakmica.glavni_sudac" id="glavni_sudac" required>
          <option value="" disabled selected>Odaberi suca</option>
          <option v-for="sudac in sudije" :value="sudac._id" :key="sudac._id">{{ sudac.ime }} {{ sudac.prezime }}</option>
        </select>
      </div>
      <div>
        <label for="pomocni_sudac1">Pomoćni sudac 1:</label>
        <select v-model="novaUtakmica.pomocni_sudac1" id="pomocni_sudac1" required>
          <option value="" disabled selected>Odaberi suca</option>
          <option v-for="sudac in sudije" :value="sudac._id" :key="sudac._id">{{ sudac.ime }} {{ sudac.prezime }}</option>
        </select>
      </div>
      <div>
        <label for="pomocni_sudac2">Pomoćni sudac 2:</label>
        <select v-model="novaUtakmica.pomocni_sudac2" id="pomocni_sudac2" required>
          <option value="" disabled selected>Odaberi suca</option>
          <option v-for="sudac in sudije" :value="sudac._id" :key="sudac._id">{{ sudac.ime }} {{ sudac.prezime }}</option>
        </select>
      </div>
      <div>
        <label for="cetvrti_sudac">Četvrti sudac:</label>
        <select v-model="novaUtakmica.cetvrti_sudac" id="cetvrti_sudac" required>
          <option value="" disabled selected>Odaberi suca</option>
          <option v-for="sudac in sudije" :value="sudac._id" :key="sudac._id">{{ sudac.ime }} {{ sudac.prezime }}</option>
        </select>
      </div>
      <div>
        <label for="var_sudac">VAR sudac:</label>
        <select v-model="novaUtakmica.var_sudac" id="var_sudac" required>
          <option value="" disabled selected>Odaberi suca</option>
          <option v-for="sudac in sudije" :value="sudac._id" :key="sudac._id">{{ sudac.ime }} {{ sudac.prezime }}</option>
        </select>
      </div>
      <div>
        <label for="avar_sudac">AVAR sudac:</label>
        <select v-model="novaUtakmica.avar_sudac" id="avar_sudac" required>
          <option value="" disabled selected>Odaberi suca</option>
          <option v-for="sudac in sudije" :value="sudac._id" :key="sudac._id">{{ sudac.ime }} {{ sudac.prezime }}</option>
        </select>
      </div>
    </div>
    <div>
      <!-- Select za delegata -->
      <label for="delegat">Delegat:</label>
      <select v-model="novaUtakmica.delegat" id="delegat" required>
        <option value="" disabled selected>Odaberi delegata</option>
        <option v-for="delegat in delegati" :value="delegat._id" :key="delegat._id">{{ delegat.ime }} {{ delegat.prezime }}</option>
      </select>
    </div>
    <div>
      <label for="stadiums">Stadion: </label>
      <select v-model="novaUtakmica.stadion" id="stadiums" required>
        <option value="" disabled selected>Odaberi Stadion: </option>
        <option v-for="stadion in stadioni" :value="stadion._id" :key="stadion._id">{{ stadion.naziv }}</option>
      </select>
    </div>
    <button type="submit">Spremi utakmicu</button>
  </form>
</template>

<script>

import axios from 'axios';

export default {
  name: 'AddMatch',
  data(){
    return{
      klubovi:[],
      sudije:[],
      delegati:[],
      adrese:[],
      stadioni:[],
      treneri:[],
      novaUtakmica:{
        lokacija:'',
        stadion:'',
        termin:'',
        domacin:'',
        gost:'',
        glavni_sudac:'',
        pomocni_sudac1:'',
        pomocni_sudac2:'',
        cetvrti_sudac:'',
        var_sudac:'',
        avar_sudac:'',
        delegat:'',
      },
      statistikaKluba:{
        broj_golova_domacina:0,
        broj_golova_gosta:0,
        zaledja_domacina:0,
        zaledja_gosta:0,
        korneri_domacina:0,
        korneri_gosta:0
      },
      trenerKluba:{
        ime:'',
        prezime:'',
        datum_rodjenja:''
      }
    };
  },
  methods:{
    async dodajUtakmicu(){
      try{
        const responseUtakmica = await axios.post('http://localhost:3000/utakmice', this.novaUtakmica);
      if (responseUtakmica.status === 201) 
      {
        alert('Utakmica je uspješno dodana!');
        
        // Dodavanje statistike za domaćina
        const responseStatistikaDomacin = await axios.post('http://localhost:3000/statistika_kluba', {
          klub: this.novaUtakmica.domacin,
          utakmica: responseUtakmica.data._id,
          broj_golova: this.statistikaKluba.broj_golova_domacina,
          zaledja: this.statistikaKluba.zaledja_domacina,
          korneri: this.statistikaKluba.korneri_domacina
        });
        
        // Dodavanje statistike za gosta
        const responseStatistikaGost = await axios.post('http://localhost:3000/statistika_kluba', {
          klub: this.novaUtakmica.gost,
          utakmica: responseUtakmica.data._id,
          broj_golova: this.statistikaKluba.broj_golova_gosta,
          zaledja: this.statistikaKluba.zaledja_gosta,
          korneri: this.statistikaKluba.korneri_gosta
        });

        if(responseStatistikaDomacin.status === 201 && responseStatistikaGost.status === 201)
        {
          alert('Statistika kluba je uspješno dodana!');
          this.resetForme();
        }else{
          console.error('Greška prilikom dodavanja statistike kluba.');
          alert('Došlo je do greške prilikom dodavanja statistike kluba.');
        }
        

      }else{
        console.error('Greška prilikom dodavanja utakmice.');
        alert('Došlo je do greške prilikom dodavanja utakmice.');
      }
      this.$emit('spremiUtakmicu', this.novaUtakmica, this.statistikaKluba, this.trenerKluba);
       }catch(error){
        console.error('Greška prilikom dodavanja utakmice ili statistike kluba:', error);
        alert('Došlo je do greške prilikom dodavanja utakmice ili statistike kluba.');
       }
    },
    resetForme() {
    this.novaUtakmica = {
      termin: '',
      domacin: '',
      gost: '',
      glavni_sudac: '',
      pomocni_sudac1: '',
      pomocni_sudac2: '',
      cetvrti_sudac: '',
      var_sudac: '',
      avar_sudac: '',
      delegat: ''
    };
    this.statistikaKluba = {
      broj_golova: 0,
      zaledja: 0,
      korneri: 0
    };
  },
  async dobaviKlubove() {
      try {
        const response = await axios.get('http://localhost:3000/klubovi');
        this.klubovi = response.data;
      } catch (error) {
        console.error('Greška:', error);
        alert('Došlo je do greške prilikom dobavljanja klubova sa servera.');
      }
    },
    async dobaviDelegate(){
      try{
        const response=await axios.get('http://localhost:3000/delegati');
        this.delegati=response.data;
      }catch(error){
        console.error('Greška: ',error);
        alert('Greška prilikom dobavljanja delegata');
      }
    },
    async dobaviSudije(){
      try{
        const response=await axios.get('http://localhost:3000/sudije');
        this.sudije=response.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška prilikom dobavljanja delegata');
      }
    },
    async dobaviAdrese(){
      try{
        const response=await axios.get('http://localhost:3000/adrese');
        this.adrese=response.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška prilikom dobavljanja adrese');
      }
    },
    async dobaviStadione(){
      try{
        const response=await axios.get('http://localhost:3000/stadioni');
        this.stadioni=response.data;
      }catch(error){
        console.error('Greška',error);
        alert('Greška prilikom dobavljanja stadiona')
      }
    },
    async dobaviTrenera(){
      try{
        const response=await axios.get('http://localhost:3000/treneri');
        this.treneri=response.data
      }catch(error){
        console.error('Greška',error);
        alert('Greška prilikom dobavljanja trenera')
      }
    }
  },
  mounted(){
    this.dobaviKlubove();
    this.dobaviSudije();
    this.dobaviDelegate();
    this.dobaviAdrese();
    this.dobaviStadione();
    this.dobaviTrenera();
  }
};
</script>

<style scoped>
/* Dodajte stilove po potrebi */
</style>
