<template>
  <v-container>
  <v-row class="justify-center center">
      <div class="block_container mt-lg-12">
        <h1 class="block_container-header anime"
            ref="quest"
        >
          {{getCurrentQuest.quest}}
        </h1>
      <CastomInput v-if="getShowLastQuestion"
                  class="anime"
                  :value="spo"
                  :type="'tel'"
                  :name="'SPO'"
                  :refInput="'spo'"
                  :error="error"
                  v-on:changeSPO="newSPO"
                  :maxLength="'2'"
                  :onFocus="onFocus"
                  :onBlur="onBlur"
      />
      </div>
    </v-row>
    <v-row v-if="!getShowLastQuestion"
          class="justify-center button_row"
    >
      <button class="button button_start"
              id="1"
              @click="setAnswer"
      >
        {{BUTTON.YES}}
      </button>
      <button class="button button_start"
              id="0"
              @click="setAnswer"
      >
        {{BUTTON.NO}}
      </button>
    </v-row>
    <v-row v-else
          class="justify-center button_row"
    >
      <button class="button button_start button_start-no"
              id="1"
              @click="setAnswer"
              :disabled="error || !spo"
      >
        {{BUTTON.NEXT}}
      </button>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import uuid from 'uuid'
import { BUTTON } from '../../const/button'
import CastomInput from '../Input/CastomInput'

export default {
  name: 'Questions',
  components: {
    CastomInput
  },
  data () {
    return {
      BUTTON,
      error: false
    }
  },
  updated () {
    if (this.getSPO) {
      return
    }
    this.$refs.quest.classList.remove('anime')
    setTimeout(() => this.$refs.quest.classList.add('anime'), 10)
    window.scrollTo(0, 0);
  },
  mounted () {
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters('quest', [
      'getCurrentQuest',
      'getSPO'
    ]),
    ...mapGetters('ui', [
      'getShowLastQuestion'
    ]),
    spo: {
      get () {
        return this.getSPO
      },
      set(val) {
        // проверку на только цифры и точка
      const valid = /^\d+$/.test(val)
      if (+val > 98 || +val < 92 || !valid) {
        this.error = true
      } else {
        this.error = false
      }
        this.setSPO({
          meta: uuid(),
          data: val
        })
      }
    }
  },
  methods: {
    ...mapActions('quest', [
      'setAnswerCurrentQuest',
      'setSPO'
    ]),
    ...mapActions('ui', [
      'setFocus'
    ]),
    newSPO: function(val) {
      this.spo = val
    },
    setAnswer: function(event) {
      const meta = uuid()
      if (this.getShowLastQuestion) {
        this.setAnswerCurrentQuest({
          meta,
          data:{
            quest: this.getCurrentQuest.quest,
            id: this.getCurrentQuest.id,
            answer: this.spo
          }
      })
        return
      }
      this.setAnswerCurrentQuest({
        meta,
        data:{
          quest: this.getCurrentQuest.quest,
          id: this.getCurrentQuest.id,
          answer: event.target.id
        }
      })
    },
    onFocus: function() {
      this.setFocus({
        meta: uuid(),
        data: true
      })
    },
    onBlur: function() {
      this.setFocus({
        meta: uuid(),
        data: false
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
.block_container {
  line-height: 40px;
  min-height: 200px;
}
.block_container-header {
  margin-top: 0;
  text-shadow: 0px 1px 5px rgba(0, 0, 0, 0.8);
}
.button_row {
  // margin-bottom: 50px;
  align-content: center;
}
@media (max-width: 600px) and (orientation: portrait) {
  .container {
    padding-bottom: 50px;
  }
  .block_container {
    min-height: 240px;
    margin-bottom: 30px;
    line-height: 50px;
  }
  .button_row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    // margin-bottom: 200px;
  }
  .button_start {
    &:first-child {
      margin-bottom: 30px;
    }
    &:nth-child(2n) {
      margin-left: 0;
    }
  }
}
@media (min-width: 600px) and (orientation: landscape) {
  .container {
    padding-bottom: 100px;
  }
  .block_container {
    margin-bottom: 30px;
    line-height: 50px;
  }
  .button_row {
    // margin-bottom: 200px;
  }
}
@media (min-width: 768px) {
  .container {
    margin-top: 50px;
  }
  .block_container {
    align-items: center;
    min-height: 300px;
  }
  .button_row {
    align-content: flex-start;
  }
  .button_start {
    &:first-child {
      margin-right: 100px;
    }
  }
}
@media (min-width: 1024px) {
  .container {
    padding-bottom: 300px;
  }
  .block_container {
    // align-items: center;
    margin-top: 0;
    margin-bottom: 100px;
    min-height: 260px;
  }
  .button_row {
    align-content: flex-start;
  }
  .button_start:hover {
    background-color: #bed7e6;
  }
}
@media (min-width: 1240px) {
.container {
    margin-top: 0;
    padding-bottom: 0;
  }
  .button_start:hover {
    background-color: #bed7e6;
  }
}
.anime {
  animation: textAnimation 3s linear;
}
.button_start-no {
  &:first-child {
    margin-right: 0;
  }
}
.button[disabled]{
  background-color: #3c3939;
}
@keyframes textAnimation {
    0% {
        opacity: 0;
        // transform: translateX(200px);
    }
    10% {
        opacity: 0.3;
        // transform: translateY(0px);
    }
    20% {
        opacity: 0.4;
        // transform: scale(1);
    }
    40% {
        opacity: 0.6;
        // transform: scale(1);
    }
    60% {
        opacity: 0.7;
        // transform: scale(1);
    }
    70% {
        opacity: 0.9;
        // transform: scale(1);
    }
    100% { opacity: 1 }
}

</style>