const pnf = () => import(/* webpackChunkName: "group-default" */ '@/pages/seras/PNF')
const main = () => import(/* webpackChunkName: "group-default" */ '@/pages/seras/Main')

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

const d2rLayout = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Layout')
const d2rMain = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Main')
const d2rBbs = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Bbs')
const d2rAccount = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Account')
const d2rKnowledge = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Knowledge/Main')
const d2rStorage = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Storage')
const d2rSearch = () => import(/* webpackChunkName: "group-d2r" */ '@/pages/d2r/Search')

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
    component: main
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
    props: true
  },
  {
    name: 'forgot',
    path: '/forgot',
    component: forgot
  },
  {
    name: 'change',
    path: '/change',
    component: change
  },
  {
    name: 'info',
    path: '/info',
    component: info,
    meta: {
      requireAuth: true
    }
  },
  {
    name: 'auth',
    path: '/auth',
    component: auth,
    meta: {
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
  },
  {
    name: '',
    path: '/d2r',
    component: d2rLayout,
    meta: {
      title: `Sera's Something - Diablo® II Resurrected`,
      independent: true
    },
    children: [
      {
        name: 'd2r-main',
        path: '',
        component: d2rMain
      },
      {
        name: 'd2r-bbs',
        path: 'bbs/:sec',
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
        path: 'account',
        component: d2rAccount,
        meta: {
          requireAuth: true
        }
      },
      {
        name: 'd2r-knowledge',
        path: 'knowledge',
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
        path: 'storage',
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
      },
    ]
  }
]

export default routes