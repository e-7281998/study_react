import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsPage from './pages/Newspage';

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<NewsPage/>}>
        <Route path=":category" element={<NewsPage/>} />
      </Route>
      <Route
        path="*"
        element={
          <div>
            <p>존재하지 않는 페이지 입니다.</p>
          </div>
        }
        />
    </Routes>
  );
};

export default App;
