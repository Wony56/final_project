<template>
  <v-container fluid class='automargin'>
    <v-layout wrap class='automargin' style='width:80%'>
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
    props: {
      keyword:{
        type:String,
        default:""
      }
    },
    data () {
        return {
          // keyword:'등'
        }
    },
    components: {
        StretchingCard
    },
    computed: {
       ...mapState({
         stretchingList: state => state.stretching.stretchingList
       }),
    },
    mounted(){
      console.log(this.keyword)// eslint-disable-line no-console
      if(this.keyword !== ""){
        this.search(this.keyword);
      }else{
        this.getAllStretchings();
      }
      
      console.log(this.stretchingList)// eslint-disable-line no-console
    },
    methods:{
      ...mapActions(["getAllStretchings"]),
      ...mapActions(["search"]),
    },

}
</script>

<style>
.automargin{
  margin:0 auto;
}
</style>
