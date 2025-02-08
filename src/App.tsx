import React from "react";
import "./App.css";
import { StatistaList } from "./components/StatistaList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailPage } from "./components/DetailPage";
import { FavoriteProvider } from "./components/FavouriteContext";

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen w-screen">
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<StatistaList />} />
            <Route path="/detail/:id" element={<DetailPage />} />
          </Routes>
        </FavoriteProvider>
      </div>
    </Router>
  );
}

export default App;
