import React from "react";
import {
  Home,
  About,
  Contact,
  ErrPage,
  Logout,
  TitleHome,
  TitleBook,
  Admin,
  Book,
} from "./Pages";
const routes = [
  { path: "/", component: () => <Home /> },
  { path: "/about", component: () => <About /> },
  { path: "/contact", component: () => <Contact /> },
  { path: "/*", component: () => <ErrPage /> },
  { path: "/logout", component: () => <Logout /> },
  { path: "/titleId", component: () => <TitleHome /> },
  { path: "/book/titleBook", component: () => <TitleBook /> },
  // { path: "/administrator", component: () => <AdminPage /> },
  { path: "/admin", component: () => <Admin /> },
  { path: "/book", component: () => <Book /> },
];
export default routes;
