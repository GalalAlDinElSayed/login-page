import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login with', email, password);
    // هنا تحط تسجيل الدخول الحقيقي بـ Firebase مثلاً
  };

  return (
    <form onSubmit={handleLogin} dir="rtl" style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>تسجيل الدخول</h2>
      <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">دخول</button>
    </form>
  );
};

export default LoginForm;
