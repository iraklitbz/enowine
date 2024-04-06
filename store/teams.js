import { dataQueryTeams } from '~/graphql/queries/team.query.gql'
import { apiCall } from '~/composables/apiCall'

export const teams = defineStore('teamData', {
    state: () => ({
        team: []
    }),
    actions: {
        async fetchTeam () {
            const data = await apiCall(dataQueryTeams, 'teamCollection', {})
            this.team = data
        }
    }
})
