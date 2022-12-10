import {useState,useEffect} from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultSearchterm) => {
  console.log("def",defaultSearchterm);
  const [videos,setVideos]=useState([]);
  const search=async(term)=>{
    const response=await youtube.get('/search',{
      params:{q:term}
    });
    setVideos(response.data.items);
    return [videos,search]
  }
  useEffect(()=>{
    search(defaultSearchterm)
  },[search,defaultSearchterm])
  
  // return [videos,search]
  
}

export default useVideos
