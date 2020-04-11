<template>
<v-container>
  <v-row class="justify-center center">
      <div class="block_container mt-lg-12">
        <h1 class="block_container-header">
          {{text.header}}
          <span class="star">*</span>
        </h1>
        <h4 class="block_container-header-sub">
          {{text.subHeader}}
        </h4>
      </div>
    </v-row>
    <v-row class="justify-center button_row">
      <button class="button button_start"
              @click="goTo"
      >
        Начать
      </button>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import uuid from 'uuid'

export default {
  name: 'MAIN',
  components: {
  },
  props: {
    text: {
      type: Object
    }
  },
  data () {
    return {}
  },
  mounted () {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters('ui', [
      'getView'
    ]),
  },
  methods: {
    ...mapActions('ui', [
      'setShowQuest'
    ]),
    goTo: function () {
      this.setShowQuest ({
        meta: uuid()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.block_container {
  &-header {
    font-size: 70px;
    position: relative;
    text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.8);
    }
  & .star {
    position: absolute;
    top: -25%;
    right: -3%;
    font-size: 15px;
  }
}
@media (min-width: 600px) {
  .block_container {
    margin-top: 0;
  }
  .block_container-header-sub {
    line-height: 55px;
  }
  .button_row {
    margin-bottom: 200px;
  }
}
@media (max-width: 600px) {
  .block_container {
    margin-top: 20px;
  }
  .block_container-header {
    margin-top: 0;
  }
  .block_container-header-sub {
    line-height: 55px;
  }
  .button_row {
    margin-bottom: 250px;
  }
}
@media (max-width:600px) and (orientation: portrait) {
  .block_container-header {
    .star {
      top: 40%;
      right: 15%;
    }
  }
}
@media (min-width: 768px), (min-width: 900px) {
  .block_container-header {
    margin-bottom: 50px!important;
  }
  .button_row {
    margin-top: 50px;
  }
  .center {
    margin-top: 110!important;
  }
}
@media (min-width: 960px) {
  .block_container {
    margin-top: 0;
  }
  .center {
    margin-top: 110px!important;
  }
  .button_row {
    margin-bottom: 50px;
  }
}
@media (min-width: 1240px) {
  .center {
    margin-top: 80px!important;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .button_row {
    margin-top: 70px;
  }
}
</style>
