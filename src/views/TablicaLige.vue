<template>
    <div class="league-table">
      <h2>Liga tablica</h2>
      <table>
        <thead>
          <tr>
            <th>Pozicija</th>
            <th>Klub</th>
            <th>Broj utakmica</th>
            <th>Pobjede</th>
            <th>Porazi</th>
            <th>Neriješeno</th>
            <th>Zabijeni golovi</th>
            <th>Primljeni golovi</th>
            <th>Gol razlika</th>
            <th>Broj bodova</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ index + 1 }}</td> <!-- Fiksni broj 1-20.Svaki red ima svoj broj prvi je 1 zadnji 20 -->
            <td>{{ klub.naziv }}</td> <!-- Dohvaća nazive klubova iz http://localhost:3000/klubovi.Poreda ih prema abecednom redu.Prvi klub ide u prvi red,onda abecednim redom do zadnjeg kluba koji ide u zadnji red -->
            <td>{{ klub.brojUtakmica }}</td><!-- Radi count funkciju iz http://localhost:3000/utakmice Prebroji koliko klub ima utakmica(po nazivu) i prikaže broj prilikom svakog dodavanja.Početno je 0 -->
            <td>{{ klub.pobjede }}</td><!-- Prikazuje da li je klub imao više golova od protivnika iz http://localhost:3000/utakmice.Ako jest uvećava se za jedan.Početno 0 -->
            <td>{{ klub.porazi }}</td><!-- Prikazuje da li je klub imao manje golova od protivnika iz http://localhost:3000/utakmice Ako jest onda se uvećava za jedan a protivniku pobjeda za 1.Početno 0 -->
            <td>{{ klub.nerijeseno }}</td><!-- Ako u http://localhost:3000/utakmice oba tima imaju isti broj golova.Klubovima se dodaje neriješeno za 1.Početno 0 -->
            <td>{{ klub.zabijeniGolovi }}</td><!-- Ukupan broj golova koji je klub zabio.Povećava se nakon dodavanja utakmice za broj golova.Početno 0.Napravi neki link zbog mogućeg povezivanja na api -->
            <td>{{ klub.primljeniGolovi }}</td><!-- Ukupan broj golova koji je klub primio.Povećava se nakon dodavanja za broj golova.Početno 0 -->
            <td>{{ klub.golRazlika }}</td><!-- Broj zabijenih golova - broj primljenih golova.Može biti negativno i 0.Početno 0 -->
            <td>{{ klub.brojBodova }}</td><!-- Sintaksa za sve po utakmici. +3 boda za pobjedu +1 za neriješeno + za poraz.U slučaju istog broja bodova.Gledaju se međusobni omjeri 2 kluba.Klub koji je 
            imo više pobjeda ima prednost.U slučaju istog broja pobjeda gleda se gol razlika.Ko ima veću gol razliku taj ima prednost.Ako je razlika ista onda se gledaju kartoni iz
          http://localhost:3000/kartoni po nazivu.Prednost ima crveni karton.Ko ima manje crvenih kartona taj ima prednost.Također ista logika za žuti karton.Ako su oba kartona jednaka 
        gleda se abecedni poredak -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        klubovi: [] // Podaci o klubovima dohvaćeni iz baze
      };
    },
    async created() {
      try {
        const response = await axios.get('http://localhost:3000/klubovi');
        this.klubovi = response.data;
      } catch (error) {
        console.error('Greška prilikom dohvatanja klubova:', error);
      }
    }
  };
  </script>
  
  <style>
  .league-table {
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  