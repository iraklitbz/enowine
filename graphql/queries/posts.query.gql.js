export const dataQueryPosts = gql`
      query postsCollection($skip: Int, $limit: Int) {
        postsCollection(skip: $skip, limit: $limit) {
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
      query postsCollection($skip: Int, $limit: Int, $category: String) {
        postsCollection(skip: $skip, limit: $limit, where: { categories_contains_some: [$category] }) {
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
      query postCollection ($ID: String!) {
        posts (id: $ID) {
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
      query imageCollection ($ID: String!) {
        asset (id: $ID) {
            url
          }
      }
`