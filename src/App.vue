<template>
  <v-app>
    <v-content>
      <Main v-if="showComponent === SCENARIOS.MAIN"
            :text="TEXT.MAIN"
      />
      <Questions v-if="showComponent === SCENARIOS.QUESTIONS"
      />
      <Result v-if="showComponent === SCENARIOS.RESULT"
      />
      <div class="link"
          v-show="showComponent === SCENARIOS.MAIN"
      >
        <p class="link_text">
          *Данный тест носит лишь ознакомительный характер, и сделан для того, чтобы Вы узнали все основные симптомы коронавирусной инфекции (COVID-19).
          <br/>
          Для получения официальной информации Вы можете пройти по ссылке:
          <a href="https://xn--80aesfpebagmfblc0a.xn--p1ai/" target="blank">
          </a>
        </p>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import Main from './components/Main/Main';
import Questions from './components/Questions/Questions'
import Result from './components/Result/Result'
import { mapGetters } from 'vuex';
import { SCENARIOS } from './const/const'
import { TEXT } from './const/text'

export default {
  name: 'App',

  components: {
    Main,
    Questions,
    Result
  },
  data: () => ({
    SCENARIOS,
    TEXT
  }),
  computed: {
    ...mapGetters('ui', [
      'getView',
      'getFocus'
    ]),
    showComponent () {
      return this.getView
    }
  }
};
</script>
<style lang="scss">
@import './assets/app.scss';
.v-content__wrap {
  min-height: 100vh;
  background-image: url('./assets/images/covid.png'),
                    linear-gradient(312.08deg, #6936B1 -0.41%, #2188A6 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
@media (orientation: portrait) {
  .v-content__wrap {
    display: flex;
    background-color: #314886;
    background-repeat: repeat;
    background-size: contain;
    background-image: url('./assets/images/covid.png');
  }
}

@media (orientation: landscape) and (max-width: 600px) {
  .v-content__wrap {
    display: flex;
    background-color: #314886;
    background-repeat: repeat;
    background-size: contain;
    background-image: url('./assets/images/covid.png');
  }
}
@media (orientation: landscape) and (min-width: 728px) {
  .v-content__wrap {
    display: flex;
    background-color: #314886;
    background-repeat: repeat;
    background-size: contain;
    background-image: url('./assets/images/covid.png');
  }
}
@media (min-width: 1240px) {
  .v-content__wrap {
    min-height: 100vh;
    background-image: url('./assets/images/covid.png'),
                      linear-gradient(312.08deg, #6936B1 -0.41%, #2188A6 100%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
}

.link {
  color: #FFFFFF;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-left: 50px;
  padding-right: 50px;
  & a {
    display: inline-block;
    width: 200px;
    height: 40px;
    margin-left: 20px;
    position: absolute;
    top: 93px;
    background-image: url('./assets/images/logo.svg');
  }
}
@media (max-width: 600px) {
  .link {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20px;
    font-size: 12px;
    a {
      top: 66px;
    }
  }
}
@media (min-width: 640px) {
  #app {
    min-height: 823px;
  }
}
@media (min-width: 728px) {
  .link {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 20px;
    font-size: 12px;
    a {
      top: 30px;
    }
  }
}
@media (min-width: 1024px) {
  #app {
    min-height: 903px;
  }
  .link {
    a {
      top: 12px;
    }
  }
}
@media (min-width: 1240px) {
  #app {
    min-height: auto;
  }
  .link {
    a {
      top: 13px;
    }
  }
}
</style>