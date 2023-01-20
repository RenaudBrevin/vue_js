import { createRouter, createWebHashHistory } from 'vue-router'
import ContactView from '../views/ContactView.vue'
import AppelView from '../views/AppelView.vue'
import JournalView from '../views/JournalView.vue'
import AddContactView from '../views/AddContactView.vue'

const routes = [
  {
    path: '/',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/appel',
    name: 'appel',
    component: AppelView
  },
  {
    path: '/journal',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/addContact',
    name: 'addContact',
    component: AddContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
