import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup with', email, password);
    // هنا تحط إنشاء الحساب الحقيقي بـ Firebase مثلاً
  };

  return (
    <form onSubmit={handleSignup} dir="rtl" style={{ maxWidth: 400, margin: 'auto' }}>
      <h2>إنشاء حساب</h2>
      <input type="email" placeholder="البريد الإلكتروني" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="كلمة المرور" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">تسجيل</button>
    </form>
  );
};

export default SignupForm;
