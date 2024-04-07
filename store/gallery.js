import { dataQueryGalleryes, dataQueryGallery } from '~/graphql/queries/gallery.query.gql'
import { apiCall } from '~/composables/apiCall'

export const galleries = defineStore('galleriesData', {
    state: () => ({
        galleries: []
    }),
    actions: {
        async fetchGalleries (variables) {
            const data = await apiCall(dataQueryGalleryes, 'galleryCollection', variables)
            this.galleries = data
        },
        async fetchGallery (variables) {
            const data = await apiCall(dataQueryGallery, 'gallery', variables)
            return data
        }
    }
})
