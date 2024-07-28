import { VIDEOS } from "@/videos"
import { VideoCard } from "./VideoCard"

export const VideoGrid = () => {
    return <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4">
        {VIDEOS.map(video =>
             <div className="p-2">
                 <VideoCard video={video} />
               </div>)
         }
    </div>
}


/* The map function iterates over each item in the VIDEOS array. For each item (video), it returns a JSX element.
  For each video object in the VIDEOS array, a <div> element with the class p-2 is created.
Inside this <div>, the VideoCard component is rendered with the video object passed as a prop*/