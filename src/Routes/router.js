import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Main from "../layout/Main";
import Root from "../components/Pages/Root/Root";
import Services from "../components/Pages/Services/Services";
import Blog from "../components/Pages/Blog/Blog";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import AddService from "../components/Pages/AddService/AddService";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Root />,
      },
      {
        path: '/home',
        element: <Root />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/my-reviews',
        element: <MyReviews />,
      },
      {
        path: '/add-service',
        element: <AddService />,
      },
    ]

  }
]);