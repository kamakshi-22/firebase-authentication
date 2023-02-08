import React from "react"
import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

// This component is used to protect routes that require authentication
// If the user is not logged in, they will be redirected to the login page
// If the user is logged in, the children will be rendered
// This is used in App.js to protect the dashboard route
// <PrivateRoute path="/dashboard" element={<Dashboard />}></PrivateRoute>
export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();

    return currentUser ? children : <Navigate to="/login" />;
}
