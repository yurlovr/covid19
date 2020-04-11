<template>
  <v-container>
    <v-row class="justify-center center">
      <div class="block_container mt-lg-12">
        <h1 class="block_container-header">
          Результат:
        </h1>
      </div>
    </v-row>
    <v-row class="result">
      <div class="block_result">
        <p class="text">
          {{getResult}}
        </p>
      </div>
    </v-row>
    <v-row class="justify-center button_row">
      <button class="button button_start"
              id="0"
              @click="goTo"
      >
        {{BUTTON.BACK}}
      </button>
    </v-row>
  </v-container>
</template>

<script>
import { STATE } from '../../const/const'
import { BUTTON } from '../../const/button'
import { mapActions, mapGetters } from 'vuex'
import uuid from 'uuid'
export default {
  name: 'Result',
  data () {
    return {
      BUTTON
    }
  },
  mounted () {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters('quest', [
      'getResult'
    ])
  },
  methods: {
    ...mapActions('engine', [
      'clickMoveToState'
    ]),
    goTo: function () {
      this.clickMoveToState({
        meta: uuid(),
        data: STATE.MAIN
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
}
.block_container-header {
  font-size: 70px;
}
.block_result {
  font-size: 35px;
  font-weight: normal;
}
@media (max-width: 600px) {
  .container {
    padding-bottom: 50px;
  }
  .block_container {
    margin-top: 0;
    margin-bottom: 0;
  }
  .block_container-header {
    font-size: 55px;
  }
  .result {
    flex-grow: 1;
    justify-content: center;
    margin-bottom: 30px;
  }
  .block_result {
    margin: 0 auto;
    & .text{
      padding-left: 5px;
      padding-right: 5px;
      line-height: 40px;
      text-align: center;
      font-size: 30px;
    }
  }
  .button_row {
    align-items: center;
    // margin-bottom: 250px;
  }
  .button_start {
    font-size: 25px;
  }
}
@media (min-width: 600px) {
  .container {
    padding-bottom: 50px;
  }
  .block_container {
    margin-top: 0;
    margin-bottom: 0;
  }
  .block_container-header {
    font-size: 70px;
    margin-bottom: 50px;
  }
  .result {
    flex-grow: 1;
    justify-content: center;
    margin-bottom: 60px;
  }
  .block_result {
    margin: 0 auto;
    & .text{
      padding-left: 15px;
      padding-right: 15px;
      line-height: 40px;
      text-align: center;
      font-size: 30px;
    }
  }
  .button_row {
    align-items: center;
    margin-bottom: 250px;
  }
  .button_start {
    font-size: 25px;
  }
}
@media (min-width: 768px) {
  .container {
    margin-top: 50px;
  }
  .block_container {
    align-items: center;
  }
  .button_start {
    font-size: 32px;
  }
  .block_result {
    .text {
      padding-left: 70px;
      padding-right: 70px;
    }
  }
}
@media (min-width: 1024px) {
  .container {
    margin-top: 0;
  }
  .block_container-header {
    margin-bottom: 50px;
  }
  .result {
    margin-bottom: 100px;
  }
  .block_result {
    .text {
      max-width: 900px;
    }
  }
}

@media (min-width: 1240px) {
  .block_container-header {
    margin-bottom: 50px;
  }
  .button_row {
    margin-bottom: 0;
  }
  .result {
    // margin-bottom: 140px;
  }
  .block_result {
    .text {
      max-width: 900px;
    }
  }
}

</style>