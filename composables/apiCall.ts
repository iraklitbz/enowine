export async function apiCall (query: any, returnObject?: string, variables: object = {}) {
    // @ts-expect-error No overload matches this call. TODO: Investigate or determine if third-party type issue
    const { data }: object = await useAsyncQuery({
        query,
        variables
    })
    if (data.value && returnObject) {
        return data.value[returnObject]
    }
    return data?.value
}
