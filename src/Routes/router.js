import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/Pages/ErrorPage/ErrorPage";
import Main from "../layout/Main";
import Root from "../components/Pages/Root/Root";
import Services from "../components/Pages/Services/Services";
import Blog from "../components/Pages/Blog/Blog";
import MyReviews from "../components/Pages/MyReviews/MyReviews";
import AddService from "../components/Pages/AddService/AddService";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import ServiceDetails from "../components/Pages/Services/ServiceDetails";
import EditReview from "../components/Pages/EditReview.js/EditReview";

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
        path: '/service/:id',
        element: <ServiceDetails />
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
        path: '/edit-review/:id',
        element: <EditReview />
      },
      {
        path: '/add-service',
        element: <AddService />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]

  }
]);