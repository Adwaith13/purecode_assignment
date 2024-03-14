/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { flattenRoutes } from "@/helpers";

// default pages
// https://react.dev/reference/react/lazy#suspense-for-code-splitting

// admin pages

const TimelinePage = lazy(
  () => import("../app/admin/extra-pages/timeline/page")
);

const adminRoutes = [
  {
    path: "/",
    name: "Timeline",
    element: <TimelinePage />,
  },
];

const allAdminRoutes = [...adminRoutes];

const allAdminFlattedRoutes = flattenRoutes([...allAdminRoutes]);

export { allAdminFlattedRoutes };
