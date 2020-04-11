<template>
  <form class=form>
    <label class="label">
      <input class="input"
            :class="{'input-error': error}"
            placeholder="Введите SPO2 (%)"
            :value="value"
            :type="type"
            :name="name"
            :id="name"
            :ref="refInput"
            autocomplete="off"
            v-model="model"
            :maxlength="maxLength"
            @focus="onFocus"
            @blur="onBlur"
      />
      <span v-if="error" class="error">
        Не верное значение
      </span>
    </label>
  </form>
</template>

<script>
export default {
  name: 'CastomInput',
  props: {
    value: {
      type: String
    },
    type: {
      type: String
    },
    name: {
      type: String
    },
    refInput: {
      type: String
    },
    error: {
      type: Boolean
    },
    maxLength: {
      type: String
    },
    onFocus: {
      type: Function
    },
    onBlur: {
      type: Function
    }
  },
  computed: {
    model: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('changeSPO', val)
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.form{
  position: relative;
}
.input {
  display: block;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 300px;
  padding-left: 30px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 24px;
  line-height: 29px;
  box-shadow: 1px 6px 8px rgba(0,0,0,0.7);
  background: #FFFFFF;
  border: 2px solid #f1f1f1;
  border-radius: 15px;
  color: #000000;
  &-error {
    border-color:#f30505;
  }
}
.error {
  color: #f30505;
  font-size: 16px;
  font-weight: 500;
  line-height: 0;
  position: absolute;
  top: 87%;
  left: 7%;
}
// @media (max-width: 600px) and (orientation: portrait) {
//   .input {
//     width: 300px;
//   }
// }
// @media (min-width: 640px) {
//   .input {
//     width: 300px;
//   }
// }

</style>