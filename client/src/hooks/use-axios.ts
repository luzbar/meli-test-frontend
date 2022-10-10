import { useState } from 'react'
import axios, { AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/'

type UseAxiosOutputType = {
    response?: AxiosResponse
    error?: AxiosError
    fetchData: (axiosParams: AxiosRequestConfig) => void
}

const useAxios = (): UseAxiosOutputType => {
    const [response, setResponse] = useState<AxiosResponse>()
    const [error, setError] = useState<AxiosError>()

    const fetchData = async (axiosParams: AxiosRequestConfig) => {
        try {
            const result = await axios.request(axiosParams)
            setResponse(result)
        } catch (err) {
            setError(err as AxiosError)
        }
    }

    return { response, error, fetchData }
}

export { useAxios }
