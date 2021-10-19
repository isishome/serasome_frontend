const d2rMain = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Main')
const d2rCarousel = () => import(/* webpackChunkName: "group-d2r" */ '@/components/d2r/Carousel')
const d2rBbs = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Bbs')
const d2rAccount = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Account')
const d2rKnowledge = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Knowledge/Main')
const d2rStorage = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Storage')
const d2rSearch = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Search')

const routes = [
  {
    name: 'd2r-main',
    path: '/d2r',
    components: {
      carousel: d2rCarousel,
      default: d2rMain
    }
  },
  {
    name: 'd2r-bbs',
    path: '/d2r/bbs/:sec',
    component: d2rBbs,
    props: true,
    meta: {
      checkGrade: 'list'
    },
    children: [
      {
        name: 'd2r-read',
        path: 'read/:pid',
        component: d2rBbs,
        props: true,
        meta: {
          checkGrade: 'read',
          progress: true
        }
      },
      {
        name: 'd2r-write',
        path: 'write',
        component: d2rBbs,
        meta: {
          requireAuth: true,
          checkGrade: 'write'
        },
        children: [
          {
            name: 'd2r-modify',
            path: ':pid',
            component: d2rBbs,
            props: true,
            meta: {
              requireAuth: true,
              checkGrade: 'write'
            }
          }]
      },
    ]
  },
  {
    name: 'd2r-account',
    path: '/d2r/account',
    component: d2rAccount,
    meta: {
      requireAuth: true
    }
  },
  {
    name: 'd2r-knowledge',
    path: '/d2r/knowledge',
    component: d2rKnowledge,
    props: true,
    meta: {
      topScroll: true
    },
    children: [
      {
        name: 'd2r-knowledge-section',
        path: ':section',
        component: d2rKnowledge,
        children: [
          {
            name: 'd2r-knowledge-part',
            path: ':part',
            component: d2rKnowledge,
          }
        ]
      }
    ]
  },
  {
    name: 'd2r-storage',
    path: '/d2r/storage',
    component: d2rStorage,
    props: true,
    meta: {
      requireAuth: true
    },
    children: [
      {
        name: 'd2r-storage-account',
        path: ':aid',
        component: d2rStorage,
        children: [
          {
            name: 'd2r-storage-character',
            path: ':cid',
            component: d2rStorage
          }]
      }]
  },
  {
    name: 'd2r-search',
    path: 'search',
    component: d2rSearch,
    props: true
  }
]

export default routes