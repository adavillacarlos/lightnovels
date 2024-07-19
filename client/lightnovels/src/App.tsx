import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router-dom";
import SearchPage from "./pages/search/search-pages";
import NovelInfoPage from "./pages/novel-info/novel-info-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="flex flex-col">
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <Link to="search">Search</Link>
        <Link to="novel-info">Novel Info</Link>

        <br />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "novel-info",
        element: <NovelInfoPage />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
