export const dataQueryPosts = gql`
      query postsCollection($skip: Int, $limit: Int, $locale: String) {
        postsCollection(skip: $skip, limit: $limit, locale: $locale) {
            total
            items {
                sys {
                    id
                    publishedAt
                }
                title,
                slug,
                description,
                feature {
                    url
                },
                categories
            }
          }
      }
`
export const dataQueryPostsFilteredCategory = gql`
      query postsCollection($skip: Int, $limit: Int, $category: String, $locale: String) {
        postsCollection(skip: $skip, limit: $limit, where: { categories_contains_some: [$category] }, locale: $locale) {
            total
            items {
                sys {
                    id
                    publishedAt
                }
                title,
                slug,
                description,
                feature {
                    url
                },
                categories
            }
          }
      }
`
export const dataQueryPost = gql`
      query postCollection ($ID: String!, $locale: String) {
        posts (id: $ID, locale: $locale) {
            sys {
                publishedAt
            }
            title,
            description,
            feature {
                url
            },
            categories,
            videourl,
      		galleryCollection {
                items {
                url
                }
            },
            content {
                json
            }
          }
      }
`
export const dataQueryImage = gql`
      query imageCollection ($ID: String!, $locale: String) {
        asset (id: $ID, locale: $locale) {
            url
          }
      }
`