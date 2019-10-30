<template>
<v-content align-center>
    <v-card class='card' max-width=300px min-height=300px max-height=300px @click.stop='dialog=true'>
        <v-img :src="card.processList[0].imgAddress+card.processList[0].imgPath" class="align-top" contain height=175px></v-img>
        <v-card-title v-text="card.title" class="headline"></v-card-title>
        <v-card-text>
            <span v-for='(hash) in card.hashtag' :key=hash>{{hash}}</span>
        </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" max-width="700">
      <v-card>
        <v-card-title class="headline">{{card.title}}</v-card-title>

        <v-card-text>설명</v-card-text>

        <v-card-actions>
          <v-btn flat @click="dialog = false">Close</v-btn>
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
    mounted:{
        // ...mapActions('index',['search'])
    }
}
</script>


<style>
.card{
    margin: 10px;   
}
</style>