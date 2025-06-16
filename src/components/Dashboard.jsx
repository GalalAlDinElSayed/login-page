import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = () => {
    signOut(auth).then(() => navigate("/"));
  };

  return (
    <div dir="rtl" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-green-600">مرحبًا بك في لوحة التحكم</h1>
        <p className="mb-6 text-gray-700">أنت الآن داخل النظام بنجاح.</p>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          تسجيل الخروج
        </button>
        <button
            onClick={() => navigate("/profile")}
            className="bg-gray-300 text-black px-4 py-2 rounded mt-4 hover:bg-gray-400"
        >
          ملف المستخدم
        </button>

      </div>
    </div>
  );
}
