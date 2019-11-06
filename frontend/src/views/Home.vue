<template>
  <div>
      <HomeBanner/>
      <CardList/>
  </div>
</template>
<script>
import CardList from '@/components/cardList';
import HomeBanner from '@/components/homeBanner';

export default {
  name: 'home',
  data() {
    return {
    }
  },
  components:{
    HomeBanner,
    CardList,
  },
  mounted() {

  },
  methods: {
    
  },
}
</script>