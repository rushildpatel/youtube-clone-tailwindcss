import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard";
import { VideoGrid } from "../components/VideoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <VideoCard title="Kimi No Kawa | Your Name" thumbnail="thumbnail.png" thumb="GitHub-Mark.png" author="Studio Gilbhi" views="130M" timestamp="5 days ago"></VideoCard> */}
      <VideoGrid></VideoGrid>
    </div>
  );
}
