import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children, admin }) {
  if (admin) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
