export const dataQueryGalleryes = gql`
      query gallerysCollection {
        galleryCollection {
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
      query galleryCollection ($ID: String!) {
        gallery (id: $ID) {
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