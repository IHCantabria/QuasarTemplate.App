import { defineStore, acceptHMRUpdate } from 'pinia'

export const useLayoutsStore = defineStore('layouts', {
  state: () => ({
    eventsListState: 'minimized', // 'full-height', 'minimized', 'hidden'
  }),

  getters: {
    isEventsListFullHeight: (state) => state.eventsListState === 'full-height',
    isEventsListMinimized: (state) => state.eventsListState === 'minimized',
    isEventsListHidden: (state) => state.eventsListState === 'hidden',
  },

  actions: {
    setEventsListState(state) {
      if (['full-height', 'minimized', 'hidden'].includes(state)) {
        this.eventsListState = state
      } else {
        if (process.env.DEBUGGING) console.warn(`Invalid state "${state}" for eventsListState`)
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLayoutsStore, import.meta.hot))
}
