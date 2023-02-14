export const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Appointments",
    path: "/appointments",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply for gas supplier",
    path: "/apply-doctor",
    icon: "fa-solid fa-user-doctor",
  },
  // {
  //   name: "Profile",
  //   path: "/profile",
  //   icon: "fa-solid fa-user",
  // },
  {
    name: "Booking",
    path:"/doctor/book-appointment/63e9ceed12f7dbc277649c90",
    // path: `/doctor/profile/${user?._id}`,
    icon: "fa-solid fa-user",
  },
];

// admin menu
export const adminMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },

  {
    name: "Gas Suppliers",
    path: "/admin/doctors",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: "fa-solid fa-user",
  },
  // {
  //   name: "Profile",
  //   path: "/profile",
  //   icon: "fa-solid fa-user",
  // },
];
