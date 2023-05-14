import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { createBrowserRouter, Form, Route, RouterProvider } from "react-router-dom";
import { HelloPage } from "./app/pages/hello-page";
import { RouteNotFoundPage } from "./app/pages/route-not-found-page";
import { FormPage } from "./app/pages/form-page";
import { HomePage } from "./app/pages/home-page";
import { TemplatePage } from "./app/pages/template-page";

const router = createBrowserRouter([
    {
        path: '/',
        element: <TemplatePage />,
        errorElement: <RouteNotFoundPage />,
        children: [
            {
                path: '/',
                element: <HomePage />
            }, {
                path: 'tic-tac-toe',
                element: <App />
            }, {
                path: 'hello',
                element: <HelloPage />
            }, {
                path: 'form',
                element: <FormPage />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
