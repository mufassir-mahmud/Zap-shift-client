
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import Authentication from "../Layouts/Authentication";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";

import SendParcel from "../Pages/SendParcel/SendParcel";
import Dashboard from "../Layouts/Dashboard";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Rider from "../Pages/Auth/Rider/Rider";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Dashboard/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRider from "../Pages/Dashboard/ApproveRider/ApproveRider";
import UsersManagement from "../Pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../Pages/Dashboard/AssignRiders/AssignRiders";
export const router = createBrowserRouter([

  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: '/rider',
        element: <PrivateRoute><Rider></Rider></PrivateRoute>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path: '/send-parcel',
        element: <PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      },
      {
        path: 'coverage',
        Component: Coverage,
        loader: () => fetch('/warehouses.json').then(res => res.json())
      }
    ]
  },
  {
    path: "/",
    Component: Authentication,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: "register",
        Component: Register
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'my-parcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-cancelled',
        Component : PaymentCancelled
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'approve-rider',
        element: <AdminRoute><ApproveRider></ApproveRider></AdminRoute>
      },
      {
        path: 'assign-riders',
        element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
      },
      {
        path: 'users-management',
        element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
      },
    ]
  }
]);