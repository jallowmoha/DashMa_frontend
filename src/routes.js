
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/CustomerInfo";
import TableList from "views/CustomerLoan";
import Typography from "views/CheckCredit";
import WithAuth from "views/WithAuth";


const UserProfileWithAuth = WithAuth(UserProfile);
const TableListWithAuth = WithAuth(TableList);
const TypographyWithAuth = WithAuth(Typography);

const dashboardRoutes = [

  /*{
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },*/
  {
    path: "/user",
    name: "Customer Info",
    icon: "nc-icon nc-circle-09",
    component: UserProfileWithAuth,
    layout: "/admin"
  },
  {
    path: "/loans",
    name: "Customer Loan",
    icon: "nc-icon nc-notes",
    component: TableListWithAuth,
    layout: "/admin"
  },
  {
    path: "/creditscore",
    name: "Credit Score",
    icon: "nc-icon nc-paper-2",
    component: TypographyWithAuth,
    layout: "/admin"
  }
  
];

export default dashboardRoutes;
