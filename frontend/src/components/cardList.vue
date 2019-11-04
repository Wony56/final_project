<template>
  <div>
    <h1 class="text-center st-title"> 추천 스트레칭 </h1>
    <v-container hidden-sm-and-down>
        <vueper-slides :visible-slides="3" :slide-ratio="1/4" :dragging-distance="70" :arrows="true">
          <vueper-slide class="vueperslide_image" v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" :image="slide.image" :link="'search/title/'+slide.title">
          </vueper-slide>
        </vueper-slides>
    </v-container>
    <v-container hidden-md-and-up>
        <vueper-slides arrows-inside bullets-outside :dragging-distance="50" :slide-ratio="0.8">
        <vueper-slide
            class="vueperslide_image_solo"
            v-for="(slide, i) in slides"
            :key="i"
            :image="slide.image"
            :title="slide.title"
            :link="'search/title/'+slide.title"></vueper-slide>
        </vueper-slides>
    </v-container>
  </div>
</template>
<script>
import Api from '@/api/index.js';
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';

//import {mapActions, mapState} from "vuex";

export default {
  name: 'cardList',
  components: { VueperSlides, VueperSlide },
  data(){
    return{
     items: [],
     slides: []
    }
  },
  created(){
    this.recommend();
  },
  methods: {
    // ...mapActions(['getAllStretchings']),
    async recommend(){
const result = await Api.recommend(); 
      this.$nextTick(function() {
        
      console.log(result); // eslint-disable-line no-console
      result.data.datas.forEach(data => {
          let imgURL = data.processList[0].imgAddress+data.processList[0].imgPath;
          let hashtag = data.hashtag[0] +" "+ data.hashtag[1] +" "+ data.hashtag[2];
          this.slides.push({title : data.title, image: imgURL,  text: `${data.title}`, hashtag: hashtag});
      });
    });
      
    },
  },
  // computed:{
  //   ...mapState({
  //     items: state => state.stretching.stretchingList
  //   })
  // }
}
</script>
<style>
  .lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }
  .white--text{
    color : #FFFFFF !important;
    caret-color: #FFFFFF !important;
  }
  .vueperslide_image{
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    color: #fff; 
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    font-weight: 600;
  }
  .st-title{
    padding-top: 50px;
    padding-bottom: 50px;
    font-weight: 900;
    font-size: 48px;
  }
  .vueperslide_image_solo{
    font-size: 16px;
    color: #fff;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    font-weight: 600;
  }
  .vueperslides__arrow{
    color: #000;
  }
</style>