import { useEffect, useState } from "react"
import axios from 'axios'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
function useGif(tag) {
    const [gif, setgif] = useState('')
    const [loading, setLoading] = useState(false);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    async function fetchData(tag) {
        setLoading(true)
        const { data } = await axios.get(tag ? tagurl : url)
        console.log(data);
        const imageSource = data.data.images.downsized_large.url
        console.log(imageSource);
        setgif(imageSource)
        setLoading(false)
    }
    useEffect(() => {
        fetchData('car')
    }, [])
    return {gif,loading,fetchData}
}
export default useGif