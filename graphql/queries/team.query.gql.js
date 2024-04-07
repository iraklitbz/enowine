export const dataQueryTeams = gql`
      query teamCollection ($locale: String) {
        teamCollection (locale: $locale) {
            items {
            name,
            ocupation,
            feature {
                url
            },
            twitter,
            facebook,
            instagram,
            email
            whatsapp
            }
          }
      }
`