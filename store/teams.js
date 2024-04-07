import { dataQueryTeams } from '~/graphql/queries/team.query.gql'
import { apiCall } from '~/composables/apiCall'

export const teams = defineStore('teamData', {
    state: () => ({
        team: []
    }),
    actions: {
        async fetchTeam (variables) {
            const data = await apiCall(dataQueryTeams, 'teamCollection', variables)
            this.team = data
        }
    }
})
