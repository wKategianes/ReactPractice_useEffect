import "./styles.css";
import { Routes, Route } from "react-router-dom";
import PostDetailPage from "./PostDetailPage";
import PostList from "./PostList";

export default function App() {
  return (
    <div className="App">
      <h1>useEffect & useParams Practice</h1>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
      </Routes>
    </div>
  );
}
