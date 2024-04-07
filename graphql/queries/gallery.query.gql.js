export const dataQueryGalleryes = gql`
      query gallerysCollection($locale: String) {
        galleryCollection(locale: $locale) {
            total
            items {
                sys {
                    id
                    publishedAt
                }
                title,
                imagesCollection {
                    items {
                        url
                    }
                }
            }
          }
      }
`
export const dataQueryGallery = gql`
      query galleryCollection ($ID: String!, $locale: String) {
        gallery (id: $ID, locale: $locale) {
            title,
            sys {
                publishedAt
            }
            imagesCollection {
                items {
                    url
                }
            }
          }
      }
`