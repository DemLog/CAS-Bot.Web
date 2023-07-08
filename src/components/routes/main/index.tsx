import React from "react";

import {RouterProvider, createBrowserRouter, Navigate} from "react-router-dom";
import { LoginPage } from "@components/pages/Login";
import {MainLayout} from "@components/common/main/MainLayout";
import {BookmarksPage} from "@components/pages/Bookmarks";
import {HistoryPage} from "@components/pages/History";
import {AdminPage} from "@components/pages/Admin";
import {ProfilePage} from "@components/pages/Profile";
import {DetailProductPage, SearchProductPage} from "@components/pages/Analysis";
import {ReportProductPage} from "@components/pages/Analysis/ReportProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/analysis" replace={true} />,
            },
            {
              path: "analysis",
              element: <SearchProductPage />,
            },
            {
                path: "analysis/detail",
                element: <DetailProductPage />,
            },
            {
                path: "analysis/report",
                element: <ReportProductPage />,
            },
            {
                path: "bookmarks",
                element: <BookmarksPage />,

            },
            {
                path: "history",
                element: <HistoryPage />,

            },
            {
                path: "admin",
                element: <AdminPage />,

            },
            {
                path: "profile",
                element: <ProfilePage />
            }
          ],
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);

export const RoutesMain: React.FC = () => {
    return (
        // <Routes>
        //     <Route path="/" /> */}
        //      <Route path="login" element={<LoginPage />} />
        //     <Route path='home' element={<Analysis />} />
        // </Routes>
        <RouterProvider router={router} />
    );
};