import { fetchWrapper } from './fetchWrapper'
import axios, { AxiosResponse } from 'axios'
import { mocked } from 'ts-jest/utils'
import { stringify } from 'query-string'

jest.mock('axios')

describe('FetchWrapper', () => {
    it('should return a response', async () => {
        const axiosResponse: AxiosResponse = {
            data: { msg: 'success' },
            status: 200,
            statusText: 'OK',
            config: {},
            headers: {},
        }

        mocked(axios).mockResolvedValue(axiosResponse)

        const res = await fetchWrapper('/', stringify(new FormData()), {})

        expect(res).toEqual({ msg: 'success' })
    })

    it('should return an Error if failed', async () => {
        const axiosResponse: AxiosResponse = {
            data: { msg: 'Something went wrong' },
            status: 400,
            statusText: 'Bad Request',
            config: {},
            headers: {},
        }

        mocked(axios).mockRejectedValue(axiosResponse)

        const res = await fetchWrapper('/', stringify(new FormData()), {})

        expect(res).toEqual(axiosResponse)
    })
})
