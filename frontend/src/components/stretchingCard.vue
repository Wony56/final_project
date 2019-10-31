<template>
<v-content>
    <v-card class='card' max-width=300px min-height=300px max-height=300px @click.stop='dialog=true'>
        <div style='height:12px'/>
        <v-img :src="card.processList[0].imgAddress+card.processList[0].imgPath" class="align-top" contain height=175px></v-img>
        <v-card-title v-text="card.title" class="oneline headline font-weight-bold"></v-card-title>
        <v-card-text class='twoline'>
            <span v-for='(hash,index) in card.hashtag' :key=index>{{hash}}</span>
        </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-card-title class="headline font-weight-bold">{{card.title}}</v-card-title>
        <v-card-subtitle style='margin-top:3px'>
            <span v-for='(hash,index) in card.hashtag' :key=index>{{hash}}</span>
        </v-card-subtitle>
        <hr>

        <v-flex v-for='(list,index) in card.processList' :key=index>
          <v-img :src='list.imgAddress+list.imgPath' contain height=300 style='margin:25px'></v-img>
          <v-card-text v-for='(description,index) in list.description' :key=index v-text='description'></v-card-text>
        </v-flex>
        <!-- <v-card-text>설명</v-card-text> -->

        <v-card-actions>
          <v-btn text @click="dialog = false" color="#F8BBD0">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-content>
</template>

<script>
// import {mapActions} from 'vuex'
export default {

    data () {
        return {
            // card:{src:'https://cdn.vuetifyjs.com/images/cards/house.jpg',title:'aaa'},
            dialog: false,
        }
    },
    props:{
        card : {
            type : Object,
            default:null
        }
    },
    mounted(){
        // ...mapActions('index',['search'])
    }
}
</script>


<style>
.card{
    margin: auto;
}

.oneline{
  white-space: nowrap;
  overflow : hidden;
  text-overflow:ellipsis;
  margin-right: 20px;
}
.twoline{
  overflow : hidden;
  text-overflow:ellipsis;
  line-height: 1.2em;
  max-height: 2.4em;
  margin-right: 20px;
}

</style>
