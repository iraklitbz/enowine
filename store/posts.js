import { dataQueryPosts, dataQueryPost, dataQueryImage, dataQueryPostsFilteredCategory } from '~/graphql/queries/posts.query.gql'
import { apiCall } from '~/composables/apiCall'

export const posts = defineStore('postsData', {
    state: () => ({
        posts: [],
        postsFilteredCategory: [],
        post: {},
        imgURL: ''
    }),
    actions: {
        async fetchPosts (variables) {
            const data = await apiCall(dataQueryPosts, 'postsCollection', variables)
            this.posts = data
        },
        async fetchPostsFilteredCategory (variables) {
            const data = await apiCall(dataQueryPostsFilteredCategory, 'postsCollection', variables)
            this.postsFilteredCategory = data
        },
        async fetchPost (variables) {
            const data = await apiCall(dataQueryPost, 'posts', variables)
            this.post = data
        },
        async fetchAssets (variables) {
            const data = await apiCall(dataQueryImage, 'asset', variables)
            return data.url
        }
    }
})
