import axios from 'axios'

export const fetchWrapper = async <T, P>(
    url: string,
    data: FormData
): Promise<T> => {
    try {
        const res = await axios({ method: 'POST', url, data })
        return res.data
    } catch (error) {
        return error
    }
}
