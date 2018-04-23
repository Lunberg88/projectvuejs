<template>
  <div class="my-3 mx-4 py-2 px-auto">
    <!--<v-data-table
      v-bind:headers="headers"
      :items="items"
      class="elevation-1 body-content"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.sodium }}</td>
        <td class="text-xs-right">{{ props.item.calcium }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
      </template>
    </v-data-table>-->
    <div class="d-block float-left">
      Total records: {{total}}
    </div>
    <div class="float-left">
      <input type="text" v-model="searchQuery" class="form-control">
    </div>
    <div class="float-left">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index, key) in search" :key="key">
          <span class="d-block-inline mr-2">{{item.type}}</span>
          <span class="d-block-inline">{{item.name}}</span>
          <span class="d-block-inline">{{item.actions}}</span>
        </li>
      </ul>
    </div>
    <div class="text-xs-center">
      <v-pagination :length="2" circle></v-pagination>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'Tables',
    data () {
      return {
        dataJson: [],
        total: '',
        totalPages: '',
        searchQuery: '',
        currentPage: ''
      }
    },
    computed: {
      search() {
        let filterKey = this.searchQuery && this.searchQuery.toLowerCase()
        let dataJson = this.dataJson
        if (filterKey) {
          dataJson = dataJson.filter(function (row) {
            return Object.keys(row).some(function (key) {
              return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
          })
        }
        return dataJson;
      }
    },
    methods: {
      getJsonData() {
        axios.get('http://ajax-lv/api/test')
          .then(res => {
            this.dataJson = res.data.data
            this.total = res.data.total
            this.currentPage = res.data.current_page
            this.totalPages = res.data.last_page
          })
          .catch(e => {
            console.log('Fetching error: ' + e.statusText)
          })
      }
    },
    created() {
      this.getJsonData()
    }
  }
</script>
<style scoped>
  @import url('../../node_modules/vuetify/dist/vuetify.min.css');
  .body-content {
    background: #fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
  }
</style>

