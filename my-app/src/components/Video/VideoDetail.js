import React from 'react'
import './VideoItem.css'
const VideoDetail = ({video}) => {
  if(!video){
      return <div>Loading...</div>
  }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
      return(
            <div className='container'>
                <div className='ui embed'>
                    <iframe title='video player' src={videoSrc} />
                </div>
                <div className='ui segment'>
                    <h4 className='ui headers'>
                        {video.snippet.title}
                    </h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        )
  
}

export default VideoDetail
