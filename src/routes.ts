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
    title: "About",
    path: "/about",
  },
  {
    title: "My Rentals",
    path: "/dashboard",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
];

export const sidebarRoutes: Route[] = [
  {
    key: "my_rentals",
    title: "My Rentals",
    path: "/dashboard",
  },
  {
    key: "profile",
    title: "Profile",
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
export const sidebarRoutesAdmin: Route[] = [
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
    key: "brands",
    title: "Manage Brands",
    path: "/dashboard/manage-brands",
  },
  {
    key: "bikes",
    title: "Manage Bikes",
    path: "/dashboard/manage-bikes",
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
