import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Jean',
        telNumber: 611688567
      },
      {
        name: 'Pierre',
        telNumber: 1
      }
    ],
    call:[

    ]
  },
  getters: {
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    },

    addCall(state, call) {
      state.call.push(call)
    }

  },
  actions: {
  },
  modules: {
  }
})
