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
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        'https://images.unsplash.com/photo-1631642751439-b3e28f3638e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1216&q=80',
        'https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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
      classBtn1:["pallino", "bg_white", "mx-2"],
      classBtn2:["pallino", "bg_white", "mx-2"],
      classBtn3:["pallino", "bg_white", "mx-2"],
      numero: 0,
    },
    created(){
     
      setInterval(() => this.frecciaAvanti(),  2000)

     
      
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
      },
      frecciaIndietro: function(){
        this.numero= this.numero-1;
        console.log(this.numero)
         if(this.numero < 0){
           this.numero=this.immagini.length - 1
         }
      },
      bottone1: function(){
        this.numero=0
        this.classBtn1.push("bg_blu")
        this.classBtn2 = this.classBtn2.filter(
          (element) => {
            if( element != "bg_blu" ) {
              return true
            }
            return false
          }
        )
        this.classBtn3 = this.classBtn3.filter(
          (element) => {
            if( element != "bg_blu" ) {
              return true
            }
            return false
          }
        )
        
      },
      bottone2: function(){
        this.numero=1
        this.classBtn2.push("bg_blu") 
        this.classBtn1 = this.classBtn1.filter(
          (element) => {
            if( element != "bg_blu" ) {
              return true
            }
            return false
          }
        )
        this.classBtn3 = this.classBtn3.filter(
          (element) => {
            if( element != "bg_blu" ) {
              return true
            }
            return false
          }
        )    
      },
      bottone3: function(){
        this.numero=2 
        this.classBtn3.push("bg_blu")   
        this.classBtn1 = this.classBtn1.filter(
          (element) => {
            if( element != "bg_blu" ) {
              return true
            }
            return false
          }
        )
        this.classBtn2 = this.classBtn2.filter(
          (element) => {
            if( element != "bg_blu" ) {
              return true
            }
            return false
          }
        )   
      }
    }
  }
)
