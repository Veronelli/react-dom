import { HashRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { HomePage } from "./HomePage";
import { BlogPage } from "./BlogPage";
import { ProfilePage } from "./ProfilePage";
import { NotFoundPage } from "./NotFoundPage";
import { Menu } from "./Menu";
import { BlogPost } from "./BlogPost";

function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </HashRouter>
    </>
  );
}

export default App;
