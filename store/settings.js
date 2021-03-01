export const state = () => ({
  windowWidth: null,
  mobile: null,
  colors: null,
})

export const getters = {
  getWindowWidth: (state) => {
    return state.windowWidth
  },
  isMobile: (state) => {
    return state.mobile
  },
  getRandomColor: (state) => (wild) => {
    return state.colors[Math.floor(wild * state.colors.length)]
  },
}

export const mutations = {
  setSettings(state, payload) {
    state.settings = payload
  },
  setWindowWidth(state, payload) {
    state.windowWidth = payload
  },
  setMobile(state, payload) {
    state.mobile = payload
  },
  setColors(state, payload) {
    state.colors = payload
  },
}

export const actions = {
 
  fetchWindowWidth(context, width) {
    context.commit('setWindowWidth', width)
  },
  changeMobileState(context, state) {
    context.commit('setMobile', state)
  },
  fetchColors(context) {
    let colors = [
      '#fec163',
      '#ef4056',
      '#1d1d1b',
      '#ef7c54',
      '#f3645a',
      '#f67b5c',
    ]

    context.commit('setColors', colors)
  },
}
