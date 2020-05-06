export default function <T>(data: T) {
    const formData = new FormData()
    Object.keys(data).forEach(k => {
        formData.append(k, data[k])
    })
    return formData
}
