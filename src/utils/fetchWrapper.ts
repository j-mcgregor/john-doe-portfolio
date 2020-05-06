export default async function <T, P>(url: string, body: FormData): Promise<T> {
    const response = await fetch(url, { method: 'POST', body })
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    const data = await response.json()
    return data.data
}
