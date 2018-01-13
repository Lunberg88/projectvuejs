<template>

    <div class="row">
      <div class="col-md-offset-2 col-md-8">
        <h3>Static page</h3>
          <div class="panel panel-default">
              <div class="panel-title">
                  {{ counter }}
              </div>
              <div class="panel-body">
                  <button @click="upper">Do it!</button>
                  <button @click="downn">Down it!</button>
              </div>
          </div>
      </div>
    </div>

</template>
<script>
import store from '../store'

export default {
    name: 'Static',
    computed: {
        counter() {
            return store.state.counter
        }
    },
    methods: {
        upper() {
            store.commit('upper')
        },
        downn() {
            store.commit('downn')
        }
    }
}
</script>
