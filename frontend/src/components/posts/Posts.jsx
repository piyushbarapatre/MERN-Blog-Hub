
import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="./images/beautiful-mountains-landscape.jpg" />
      <Post img="./images/futuristic-moon-background.jpg" />
      <Post img="./images/beautiful-photorealistic-moon.jpg"/>
      <Post img="./images/desert-with-sand-dunes.jpg"/>
      <Post img="./images/bright-colorful-pop-landscape.jpg"/>
    </div>
  );
}
