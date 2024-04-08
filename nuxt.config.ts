import { version } from './package.json'
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://use.typekit.net/isi5msw.css' }
      ]
    }
  },
  modules: [
    'nuxt-icons',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/apollo',
    '@pinia/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
        'Open Sans': [400, 700],
        'Grape Nuts': [400],
      }
    }],
    "@nuxtjs/i18n"
  ],
  apollo: {
    tokenStorage: 'cookie',
    clients: {
      default: {
        httpEndpoint: process.env.GQL_HOST,
        httpLinkOptions: {
          headers: {
            Authorization: `Bearer ${process.env.CPA_TOKEN}`
          }
        }
      }
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    locales: [
      {
        code: 'en',
        name: 'English',
        label: 'EN'
      },
      {
        code: 'ka',
        name: 'georgian',
        label: 'KA'
      }
    ],
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en'
  },
  components: [
    '~/components',
    '~/components/Menu',
    '~/components/ArticleBody',
    '~/components/Gallery'
  ],
  tailwindcss: {
    exposeConfig: true,
    cssPath: '~/assets/scss/main.scss'
  },
  routeRules: {
    '/blog': { redirect: '/blog/1' }
  },
  runtimeConfig: {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    public: {
      version
    }
  }
})