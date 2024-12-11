import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { Navbar } from "../components/Navbar";
import { NotFound } from "./NotFound";
import { Home } from "../pages/Home";
import { Consulting } from "../pages/Consulting";
import { Contact } from "../pages/Contact";
import { Marketing } from "../pages/Marketing";
import { Products } from "../pages/Products";
import { Services } from "../pages/Services";
import { SignUp } from "../pages/SignUp";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/consulting",
                element: <Consulting />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/marketing",
                element: <Marketing />
            },
            {
                path: "contact",
                element: <Contact />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={Router} />
        </React.Fragment>
    );
};




