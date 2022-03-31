/*
1 milestone: aggiungere un array di oggetti per i prodotti
2 milestone: stampare nel dom i dati delle scarpe
3 milestone: aggiungere il prodotto al carrello
4 milestone: visualizzare nel carrello del DOM i prodotti
5 milestone: rimuovi il prodotto dal carrello
6 milestone: somma elementi nel carrello per il prezzo totale
*/

var app = new Vue(
  {
    el: '#root',
    data: {
      immagini: [
        'https://source.unsplash.com/random/?shoes',
        'https://source.unsplash.com/random/?fruits',
        'https://source.unsplash.com/random/?city'
      ],
      products: [
        {
          id: 1,
          name: 'nike',
          price: 120,
          media: 'https://source.unsplash.com/random/?shoes'
        },
        {
          id: 2,
          name: 'adidas',
          price: 80,
          media: 'https://source.unsplash.com/random/?shoes'
        },
        {
          id: 3,
          name: 'borriello',
          price: 1300,
          media: 'https://source.unsplash.com/random/?shoes'
        },
        {
          id: 4,
          name: 'vans',
          price: 95,
          media: 'https://source.unsplash.com/random/?shoes'
        },
        {
          id: 5,
          name: 'all-star',
          price: 70,
          media: 'https://source.unsplash.com/random/?shoes'
        },
      ],
      carrello: [],
      numero: 0,
    },
    created(){
      this.prova()
    },
    methods: {
      addToCart: function(element){
        console.log( element );
        this.carrello.push( element );
      },
      removeToCarrello: function( id ) {
        console.log( id );

        this.carrello = this.carrello.filter(
          (element) => {
            if( element.id != id ) {
              return true
            }
            return false
          }
        )
      },
      sommaPrezzo: function(){
        let total = 0;
        this.carrello.forEach(
          ( element ) => {
            total += element.price;
          }
        );
        return total;
      },
      frecciaAvanti: function(){
            this.numero= this.numero+1;
            console.log(this.numero)
             if(this.numero > this.immagini.length - 1){
               this.numero=0
             }
            return this.numero
      },
      frecciaIndietro: function(){
        this.numero= this.numero-1;
        console.log(this.numero)
         if(this.numero < 0){
           this.numero=this.immagini.length - 1
         }
        return this.numero
      }

    }
  }
)
