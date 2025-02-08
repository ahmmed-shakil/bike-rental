interface Route {
  key?: string;
  title: string;
  path: string;
  children?: Route[]; // Optional children property
}

export const routes: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Bikes",
    path: "/bikes",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "My Bookings",
    path: "/dashboard/manage-bookings",
  },
];

export const sidebarRoutes: Route[] = [
  {
    key: "dashboard",
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    key: "bookings",
    title: "Manage Bookings",
    path: "/dashboard/manage-bookings",
  },
  {
    key: "reviews",
    title: "Manage Reviews",
    path: "/dashboard/manage-reviews",
  },
  {
    key: "ledger",
    title: "Ledger",
    path: "/dashboard/ledger",
  },
  {
    key: "profile",
    title: "Manage Profile",
    path: "/dashboard/profile",
  },

  // {
  //   key: "bikes",
  //   title: "Bikes",
  //   path: "/dashboard",
  //   children: [
  //     { key: "bikes-list", title: "Bike List", path: "/dashboard" },
  //     // { key: "bikes-list", title: "Bike List", path: "/bikes/list" },
  //     { key: "bikes-add", title: "Add Bike", path: "/bikes/add" },
  //   ],
  // },
];
