<template>
    <v-parallax
    height="700"
    dark
    src="https://images.unsplash.com/photo-1551656984-88b2a2227383?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  >
    <v-container>
      <v-row
      align="center"
      justify="center"
    >
      <v-col  text-xs-center class="text-center" cols="12">
        <v-flex >
          <h1 class="text-center display-1 font-weight-bold mb-4">STRETCHING</h1>
          <h4 class="subheading">스트레칭은 당신의 건강을 지켜 드립니다.</h4>
        </v-flex>
      </v-col>
    </v-row>
          <v-layout>
          <v-flex xs2 px-2>
            <v-select
            rounded
            solo
            v-model="sel"
            :items="list"
            >
            </v-select>
          </v-flex>
          <v-flex xs10>
            <v-text-field
            v-show="sel !== '스트레칭명'"
            v-model="model"
            clearable
            rounded
            solo
            clear-icon="mdi-close-circle"
            label="Search"
            type="text"
            append-icon="mdi-magnify"
            @click:append="send"
            @keyup.enter="send"
          >
          </v-text-field>
          <v-combobox
      v-show="sel === '스트레칭명'"
      v-model="model"
      :filter="filter"
      :hide-no-data="!search"
      :items="items"
      :search-input.sync="search"
      hide-selected
      label="스트레칭 검색"
      append-icon="mdi-magnify"
      solo
      rounded
      multiple
      :auto-select-first="focus"
      @click:append ="send"
      @keyup.enter="send"
    >
      <template v-slot:no-data>
        <v-list-item>
          <span class="subheading">No matches found</span>
        </v-list-item>
      </template>

      <template v-slot:selection="{ attrs, item, parent, selected }">
        <span
          v-if="item === Object(item)"
          v-bind="attrs"
          :input-value="selected"
        >
          {{item.title}}
        </span>
        <!-- <v-chip
          v-if="item === Object(item)"
          v-bind="attrs"
          :input-value="selected"
          label
          small
        >
        <span class="pr-2">
          {{ item.title }}
        </span>
        <v-icon
          small
          @click="parent.selectItem(item)"
        >mdi-close</v-icon>
        </v-chip> -->
      </template>
      <template v-slot:item="{ index, item }">
          <v-list-item-avatar>
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" style="font-size:16px; font-weight:bold;"></v-list-item-title>
            <v-list-item-subtitle v-text="item.hashtag" style="font-size:12px;"></v-list-item-subtitle>
          </v-list-item-content>
      </template>
    </v-combobox>
    </v-flex>
    </v-layout>
    </v-container>
  </v-parallax>
</template>
<script>
import Api from '@/api/index';

export default {
  name: 'homeBanner',
  data() {
    return {
      stretchings: [],
      items: [
        { header: 'Select an User' },
      ],
      list: ["스트레칭명", "부위", "장소", "상황"],
      sel : "스트레칭명",
      menu: false,
      model: [],
      search: null,
      focus: true,
      message: [],
    };
  },
  mounted() {
    this.getAllStretchings();
  },
  methods: {
    send(){
      let category;
      let value;
      if(this.sel === '부위'){
        category = 'part';
        value = this.model;
      }
      else if(this.sel === '장소'){
        category = 'place';
        value = this.model;
      }
      else if(this.sel == '상황'){
        category = 'situation';
        value = this.model;
      }
      else if(this.sel == '스트레칭명'){
        category = 'title';
        value = this.model[0].title;
      }
      this.$router.push('/search/'+category+'/'+value);
    },
    async getAllStretchings(){
      const result = await Api.getAllStretchings();
      // console.log(result); // eslint-disable-line no-console
      result.data.forEach(data => {
          let imgURL = data.processList[0].imgAddress+data.processList[0].imgPath;
          let hashtag = data.hashtag[0] +" "+ data.hashtag[1] +" "+ data.hashtag[2];
          this.items.push({title : data.title, img: imgURL,  text: `${data.title}`, hashtag: hashtag});
      });
    },
    filter (item, queryText, itemText) {
      if (item.header) return false
      const hasValue = val => val != null ? val : ''
      const text = hasValue(itemText)
      const query = hasValue(queryText)
      return text.toString()
        .toLowerCase()
        .indexOf(query.toString().toLowerCase()) > -1
    },
  },
}
</script>