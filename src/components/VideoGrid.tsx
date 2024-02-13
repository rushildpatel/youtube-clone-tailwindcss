import { VideoCard } from "./VideoCard";

let VIDEOS = [
  {
    title: "Kimi No Kawa | Your Name",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
  {
    title: "Fireflies",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
  {
    title: "Suzume",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
  {
    title: "Title 1",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
  {
    title: "Title 1",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
  {
    title: "Title 1",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
  {
    title: "Title 1",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
  {
    title: "Title 1",
    thumbnail: "thumbnail.png",
    thumb: "GitHub-Mark.png",
    author: "Studio Gilbhi",
    views: "130M",
    timestamp: "5 days ago",
  },
];

export const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {VIDEOS.map((video) => (
        <div>
          <VideoCard title={video.title} thumbnail={video.thumbnail} thumb={video.thumb} author={video.author} views={video.views} timestamp={video.timestamp}></VideoCard>
        </div>
      ))}
    </div>
  );
};
