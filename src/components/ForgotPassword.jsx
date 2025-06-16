import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleReset = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.");
    } catch (err) {
      setError("حدث خطأ. تأكد من صحة البريد.");
    }
  };

  return (
    <div className="container">
      <h2>نسيت كلمة المرور؟</h2>
      {msg && <p style={{ color: "green" }}>{msg}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleReset}>
        <label>البريد الإلكتروني</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">إرسال رابط إعادة التعيين</button>
      </form>
      <div className="text-center">
        <Link to="/">العودة لتسجيل الدخول</Link>
      </div>
    </div>
  );
}
