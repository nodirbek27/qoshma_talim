import React from "react";
import useId from "../hooks/useId";
import Signin from "../pages/Register";
import MyProfile from "../pages/MyProfile";

const HomePage = React.lazy(() => import("../pages/Home"));
const NewsPage = React.lazy(() => import("../pages/News"));
const GalleryPage = React.lazy(() => import("../pages/Gallery"));

// import HomePage from '../pages/Home';
// import Properties from '../pages/Properties';

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />{" "}
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <NewsPage />{" "}
      </React.Suspense>
    ),
    title: "News",
    path: "/news",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <GalleryPage />{" "}
      </React.Suspense>
    ),
    title: "Gallery",
    path: "/gallery",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: <MyProfile />,
    title: "My Profile",
    path: "/myprofile",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <Signin />,
    title: "Sign In",
    path: "/signin",
    private: false,
    hidden: true,
  },
];
