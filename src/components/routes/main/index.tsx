import React from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "@components/pages/Login";
import { AnalysisPage } from "components/pages/Analysis";
import {MainLayout} from "@components/common/main/MainLayout";
import {BookmarksPage} from "@components/pages/Bookmarks";
import {HistoryPage} from "@components/pages/History";
import {AdminPage} from "@components/pages/Admin";
import {ManagerPage} from "@components/pages/Manager";
import {ProfilePage} from "@components/pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
              path: "analysis",
              element: <AnalysisPage />,

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
                path: "manager",
                element: <ManagerPage />,

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