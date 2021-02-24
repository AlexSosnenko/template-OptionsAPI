export default {
  install(Vue, options) {
    console.log(options)
    //Vue.prototype.$message = function (text) {
    Vue.config.globalProperties.$message = text => {
      window.M.toast({ html: text })
    }

    Vue.config.globalProperties.$error = function (text) {
      window.M.toast({ html: `[Ошибка]: ${text}` })
    }
  }
}
