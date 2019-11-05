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
        <v-card-title class="headline font-weight-bold">
          {{card.title}}
          <v-btn text @click="plusSchedules" color="#F2A640">
            <v-icon>mdi-star</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle style='margin-top:3px'>
            <span v-for='(hash,index) in card.hashtag' :key=index>{{hash}}&nbsp;</span>
        </v-card-subtitle>
        <hr>

        <v-flex v-for='(list,index) in card.processList' :key=index>
          <v-img :src='list.imgAddress+list.imgPath' contain min-height=220 max-height=300 aspect-ratio='4/3' style='margin:25px'></v-img>
          <v-card-text v-for='(description,index) in list.description' :key=index v-text='description'></v-card-text>
        </v-flex>

        <v-card-actions>
            <v-flex style='width:100%;align:center;text-align:center;margin:5px'>
                <v-btn text @click="dialog = false" color="#F8BBD0">Close</v-btn>
            </v-flex>
        </v-card-actions>
      </v-card>
    </v-dialog>
</v-content>
</template>

<script>
import api from "../api";
export default {

    data () {
        return {
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

    },
    methods:{
      plusSchedules: async function(){

        const newUserInfo = {
          username: this.$store.state.user.userInfo.username,
          name: this.$store.state.user.userInfo.name,
          job: this.$store.state.user.userInfo.job,
          age: this.$store.state.user.userInfo.age,
          part: this.$store.state.user.userInfo.part,
          schedules:[]
        };
        newUserInfo.schedules.push(this.card.title);
        console.log(this.$store.state.user.userInfo);
        console.log(newUserInfo);
        this.$store.state.user.userInfo = await api
        .editProfile(newUserInfo)
        .then(res =>{
          if (res.status === 200) {
            alert("성공!");
            return res.data.user;
          }
          this.$router.go(0);
        })
        .catch(err => {
          console.log(err);
        });
      }
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
