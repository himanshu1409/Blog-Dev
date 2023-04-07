import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetail } from "./";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route path="/post/:postId" component={PostDetail} /> */}
        {/* <Route path="/create-post" component={CreatePost} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/post/:postId" element={<PostDetail />} />
        <Route exact path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
