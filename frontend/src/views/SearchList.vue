<template>
  <v-container fluid style='margin-left:25px'>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm3 md3 v-for="(item) in stretchingList" :key="item._id" pa-2>
        <StretchingCard :card="item"/>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"; 
import StretchingCard from '../components/stretchingCard.vue'
export default {
    data () {
        return {
          
          // stretchingList:[{id:0,src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'},
          //   {id:1,src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'},
          //   {id:2,src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'},
          //   {id:3,src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'},
          //   {id:4,src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'},
          //   {id:5,src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'},
          //   {id:6,src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'}
          // ]
        }
    },
    components: {
        StretchingCard
    },
    // computed:mapActions("index", ["getAllStretchings"]) 
    computed: {
       ...mapState({
         stretchingList: state => state.stretching.stretchingList
       }),
    },
    mounted(){
      this.getAllStretchings();
      //console.log(this.stretchingList)// eslint-disable-line no-console
    },
    methods:{
      ...mapActions(["getAllStretchings"]),
      // aaa(){
      //   console.log(this.stretchingList); // eslint-disable-line no-console
      // }
    },

}
</script>
