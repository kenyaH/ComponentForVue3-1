// layouts
import DefaultLayout from '@/layouts/DefaultLayout.vue'

// views
import HomeView from '@/views/HomeView.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: DefaultLayout,
    props: { view: HomeView }
  },
]