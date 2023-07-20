import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage2";
import { MovieDetails } from "../pages/MovieDetails";
export function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}
