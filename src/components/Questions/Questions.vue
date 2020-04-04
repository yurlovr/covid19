<template>
  <v-container>
  <v-row class="justify-center center">
      <div class="block_container mt-lg-12">
        <h1 class="block_container-header anime"
            ref="quest"
        >
          {{getCurrentQuest.quest}}
        </h1>
      </div>
    </v-row>
    <v-row class="justify-center button_row">
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
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import uuid from 'uuid'
import { BUTTON } from '../../const/button'

export default {
  name: 'Questions',
  data () {
    return {
      BUTTON
    }
  },
  updated () {
    this.$refs.quest.classList.remove('anime')
    setTimeout(() => this.$refs.quest.classList.add('anime'), 10)
    window.scrollTo(0, 0);
  },
  computed: {
    ...mapGetters('quest', [
      'getCurrentQuest'
    ])
  },
  mounted () {
    window.scrollTo(0, 0);
  },
  methods: {
    ...mapActions('quest', [
      'setAnswerCurrentQuest'
    ]),
    setAnswer: function(event) {
      this.setAnswerCurrentQuest({
        meta: uuid(),
        data:{
          quest: this.getCurrentQuest.quest,
          answer: event.target.id
        }
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
  min-height: 120px;
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
    margin-bottom: 0;
  }
  .button_row {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: 200px;
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
  }
  .button_row {
    margin-bottom: 200px;
  }
}
@media (min-width: 768px) {
  .container {
    margin-top: 50px;
  }
  .block_container {
    align-items: center;
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
    margin-top: 50px;
  }
  .block_container {
    // align-items: center;
    margin-top: 100px;
    margin-bottom: 100px;
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
    margin-top: 275px;
  }
  .button_start:hover {
    background-color: #bed7e6;
  }
}
.anime {
  animation: textAnimation 3s linear;
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