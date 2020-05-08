/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'

export const fetchWrapper = async <T, P>(
    url: string,
    data: string,
    headers: any
): Promise<T> => {
    try {
        const res = await axios({ method: 'POST', url, data, headers })
        return res.data
    } catch (error) {
        return error
    }
}
