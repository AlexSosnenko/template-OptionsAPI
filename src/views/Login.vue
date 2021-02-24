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
            invalid: v$.email.$invalid
          }"
        />
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="v$.email.$invalid"
          >Введите Email</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid: v$.password.$invalid
          }"
        />
        <label for="password">Пароль</label>
        <small class="helper-text invalid" v-if="v$.password.$invalid"
          >Введите пароль</small
        >
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
  
</template>

<script>
import { email, required, minLength } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import messages from '@/utils/messages'
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  mounted() {
    if (messages[this.$route.query.message])
      this.$message(messages[this.$route.query.message])
  },
  methods: {
    async submitForm() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
      } catch (e) {
        console.log('login error')
      }
    }
  }
}
</script>
