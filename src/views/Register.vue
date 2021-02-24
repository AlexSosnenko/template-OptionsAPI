<template>
  <form class="card auth-card" @submit.prevent="submitForm">
    <div class="card-content">
      <span class="card-title">App Title</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid: v$.email.$dirty && v$.email.$invalid
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="v$.email.$dirty && v$.email.$invalid"
          >Введите Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid: v$.password.$dirty && v$.password.$invalid
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="v$.password.$dirty && v$.password.$invalid"
          >Введите пароль</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid: v$.name.$dirty && v$.name.$invalid
          }"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="v$.name.$dirty && v$.name.$invalid"
          >Введите имя</small
        >
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      name: { required },
      agree: { checked: (val) => val }
    }
  },
  methods: {
    submitForm() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        console.log(this.v$)
        return
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }
      console.log('Вызов процедуры регистрации', formData)
      this.$router.push('/')
    }
  }
}
</script>
