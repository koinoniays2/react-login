import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Login from './Login';
import SignUp from './routes/SignUp';

// 라우터
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },{
    path: "/users",
    element: <Outlet />,
    children: [
      {
        path: "signup",
        element: <SignUp />
      }
    ]}
  ]);

// 리액트 쿼리
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 리액트 쿼리 */}
    <QueryClientProvider client={queryClient}>
      {/* 라우터 */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);