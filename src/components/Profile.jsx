import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (!user) {
    navigate("/");
    return null;
  }

  return (
    <div className="container">
      <h2>ملف المستخدم</h2>
      <p><strong>الاسم:</strong> {user.displayName || "لا يوجد"}</p>
      <p><strong>البريد:</strong> {user.email}</p>
      <p><strong>تم التحقق من البريد؟</strong> {user.emailVerified ? "نعم" : "لا"}</p>
      <button onClick={() => navigate("/dashboard")}>رجوع للوحة التحكم</button>
    </div>
  );
}
