<template>
  <v-container fluid class='automargin'>
    <v-layout wrap class='automargin' style='width:80%'>
      <template v-if='stretchingList.length===0'>
        <div style='width:100%;text-align:center;padding:10%'>해당하는 검색 결과가 없습니다.</div>
      </template>
      <template v-else>
        <v-flex xs12 sm6 md3 v-for="(item) in stretchingList" :key="item._id" pa-2>
          <StretchingCard :card="item"/>
        </v-flex>
      </template>

    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"; 
import StretchingCard from '../components/stretchingCard.vue'
export default {
    props: {
      category:{
        type:String,
        default:""
      },
      value:{
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
      var params = {category:this.category,value:this.value}
      console.log(params)// eslint-disable-line no-console

      this.search(params);
      // if(this.keyword !== ""){
      //   var params = {category:this.category,value:this.value}
      //   console.log(params)// eslint-disable-line no-console

      //   this.search(params);

      //   // this.search(this.keyword);
      // }else{
      //   this.getAllStretchings();
      // }
      
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
