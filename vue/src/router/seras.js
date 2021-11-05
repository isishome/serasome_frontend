const pnf = () => import(/* webpackChunkName: "group-default" */ '@/pages/seras/PNF')
const main = () => import(/* webpackChunkName: "group-default" */ '@/pages/seras/Main')
const carousel = () => import(/* webpackChunkName: "group-default" */ '@/components/seras/Carousel')

const join = () => import(/* webpackChunkName: "group-account" */ '@/pages/seras/Join')
const sign = () => import(/* webpackChunkName: "group-account" */ '@/pages/seras/Sign')
const forgot = () => import(/* webpackChunkName: "group-account" */ '@/pages/seras/Forgot')
const change = () => import(/* webpackChunkName: "group-account" */ '@/pages/seras/Change')
const auth = () => import(/* webpackChunkName: "group-account" */ '@/pages/seras/Auth')
const info = () => import(/* webpackChunkName: "group-account" */ '@/pages/seras/Info')
const linked = () => import(/* webpackChunkName: "group-account" */ '@/pages/seras/Linked')

const category = () => import(/* webpackChunkName: "group-post" */ '@/pages/seras/Category')
const post = () => import(/* webpackChunkName: "group-post" */ '@/pages/seras/Post')
const search = () => import(/* webpackChunkName: "group-post" */ '@/pages/seras/Search')

const lotto = () => import(/* webpackChunkName: "group-favorite" */ '@/pages/etc/Lotto')
const annuity = () => import(/* webpackChunkName: "group-favorite" */ '@/pages/etc/Annuity')

const routes = [
  {
    name: 'pnf',
    path: '*',
    component: pnf,
    meta: {
      independent: true
    }
  },
  {
    name: 'main',
    path: '/',
    components: {
      carousel: carousel,
      default: main
    },
    meta: {
      noAD: true
    }
  },
  {
    name: 'some',
    path: '/@:sname',
    //alias: '/%40:sname',
    component: post,
    meta: {
      topScroll: true
    },
    children: [
      {
        name: 'post-add',
        path: 'a',
        component: post,
        meta: {
          requireAuth: true
        }
      },
      {
        name: 'post',
        path: ':pid',
        component: post,
        children: [
          {
            name: 'post-modify',
            path: 'm',
            component: post,
            meta: {
              requireAuth: true
            }
          }
        ]
      }
    ]
  },
  {
    name: 'join',
    path: '/join',
    component: join,
    meta: {
      noAD: true
    },
    children: [
      {
        name: 'join-facebook',
        path: 'facebook',
        component: join
      },
      {
        name: 'join-google',
        path: 'google',
        component: join
      }
    ]
  },
  {
    name: 'sign',
    path: '/sign',
    component: sign,
    props: true,
    meta: {
      noAD: true
    }
  },
  {
    name: 'forgot',
    path: '/forgot',
    component: forgot,
    meta: {
      noAD: true
    }
  },
  {
    name: 'change',
    path: '/change',
    component: change,
    meta: {
      noAD: true
    }
  },
  {
    name: 'info',
    path: '/info',
    component: info,
    meta: {
      noAD: true,
      requireAuth: true
    }
  },
  {
    name: 'auth',
    path: '/auth',
    component: auth,
    meta: {
      noAD: true,
      independent: true
    }
  },
  {
    name: 'category',
    path: '/category/:cid',
    component: category
  },
  {
    name: 'linked',
    path: '/linked',
    component: linked,
    meta: {
      requireAuth: true
    }
  },
  {
    name: 'lotto',
    path: '/Lotto',
    component: lotto,
    meta: {
      title: `Sera's Something - Lotto 6/45`,
      preventScroll: true
    }
  },
  {
    name: 'annuity',
    path: '/Annuity',
    component: annuity,
    meta: {
      title: `Sera's Something - Annuity`,
      preventScroll: true
    }
  },
  {
    name: 'search',
    path: '/search',
    component: search,
    props: true
  }
]

export default routes