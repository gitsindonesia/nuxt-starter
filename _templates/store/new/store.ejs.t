---
to: stores/<%= h.changeCase.camel(name) %>.ts
---
import {defineStore} from 'pinia';

export const use<%= h.changeCase.pascal(name) %> = defineStore({
  id: '<%= h.changeCase.camel(name) %>',
  state: () => ({
    count: 0,
  }),
  getters: {
    double(state) => state.count * 2
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});



