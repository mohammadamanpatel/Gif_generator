// import { useEffect, useState } from "react"
import axios from 'axios'
import Spinner from "./spinner"
import useGif from "./useGif"
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
function Random() {

  // const [gif, setgif] = useState('')
  // const [loading, setLoading] = useState(false);
  // async function fetchData() {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const { data } = await axios.get(url)
  //   console.log(data);
  //   const imageSource = data.data.images.downsized_large.url
  //   console.log(imageSource);
  //   setgif(imageSource)
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  const{gif,loading,fetchData} = useGif()
  function randomBtn() {
    fetchData()
  }
  return (
    <div className="w-1/2  bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">A Random Gif</h1>
      {loading ? <Spinner className="spinner"></Spinner> : <img src={gif} width="450" height="300" alt="#" />}
      <button className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px]" onClick={randomBtn}>Generate</button>
    </div>
  )
}
export default Random