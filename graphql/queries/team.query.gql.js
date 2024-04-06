export const dataQueryTeams = gql`
      query teamCollection {
        teamCollection {
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