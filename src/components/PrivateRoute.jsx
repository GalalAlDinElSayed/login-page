import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export default function PrivateRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p className="text-center mt-8">جاري التحميل...</p>;
  if (!user) return <Navigate to="/" />;

  return children;
}
