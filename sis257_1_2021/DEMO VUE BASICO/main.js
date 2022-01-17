
const app= Vue.createApp({
    data(){
        return{
        cart:0,
        product :'Marisol Camiseta', 
        image: './assets/images/t-shirt-green-bolivia.jpg' ,
        inStock: true,
        details: ['50%algodon','30%lana','30%poliester'],
        variants: [
            {id:1548,color :'green'},
            {id:1549,color:'white' }
                 ]
        }
    },
    methods: {
        addToCart (){
            this.cart +=1
        }
    },
        
}
)
