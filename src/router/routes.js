const routes = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'events',
        component: () => import('layouts/EventsLayout.vue'),
        children: [
          {
            path: '',
            component: () => import('pages/EventsPage.vue'),
            meta: { title: 'Events' },
          },
          {
            path: ':id',
            component: () => import('pages/EventDetailsPage.vue'),
            meta: { title: 'Event Details' },
          },
        ],
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            component: () => import('pages/ProfilePage.vue'),
            meta: { title: 'Profile' },
          },
          {
            path: 'about',
            component: () => import('pages/AboutPage.vue'),
            meta: { title: 'About' },
          },
          {
            path: 'disclaimer',
            component: () => import('pages/DisclaimerPage.vue'),
            meta: { title: 'Disclaimer' },
          },
        ],
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
