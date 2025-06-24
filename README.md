# 🌸 SubBloom - Smart Digital Solutions

SubBloom হলো একটি সাবস্ক্রিপশন-ভিত্তিক স্মার্ট ডিজিটাল সলিউশন প্ল্যাটফর্ম, যেখানে ইউজাররা Website Setup, SEO Toolkit, Performance Boost সহ বিভিন্ন ডিজিটাল সার্ভিস মাসিক সাবস্ক্রিপশনের মাধ্যমে নিতে ও ম্যানেজ করতে পারে। এই পূর্ণাঙ্গ ওয়েব অ্যাপটি React, Firebase Authentication, React Router এবং TailwindCSS দিয়ে তৈরি করা হয়েছে, যা ইউজারদের জন্য একটি স্মার্ট, নিরাপদ এবং কাস্টমাইজড অভিজ্ঞতা প্রদান করে।

🔗 **Live Link**:  
[https://b11a9-subbloom.web.app/](https://b11a9-subbloom.web.app/)

🔗 **Repo Link**:  
[https://github.com/arif128551/react-subbloom](https://github.com/arif128551/react-subbloom)


---

## 🎯 Project Purpose

এই অ্যাসাইনমেন্টটি তৈরি করা হয়েছে একটি Subscription Box Service Platform হিসেবে, যেখানে ইউজাররা বিভিন্ন ডিজিটাল সার্ভিসে সাবস্ক্রাইব করতে পারবে। ইউজাররা লগইন ও রেজিস্টার করতে পারবে, প্রোফাইল আপডেট করতে পারবে এবং সার্ভিসে রিভিউ দিতে পারবে।

---

## 📁 Folder Structure

```
src/
├── components/
│   ├── ui/
│   └── Navbar, Footer, StarRating, PageLoader
├── contexts/auth/
│   ├── AuthProvider.jsx
│   └── AuthContext.jsx
├── firebase/
│   └── firebase.init.js
├── layouts/
│   └── RootLayout.jsx
├── pages/
│   ├── Home/
│   ├── Login/
│   ├── Register/
│   ├── MyProfile/
│   ├── ForgetPassword/
│   ├── SupportPages/
│   ├── NotFound.jsx
│   └── admin/Dashboard/
├── routes/
│   ├── MainRoutes.jsx
│   └── PrivateRoute.jsx
```

---

## 🔐 Authentication Features

- 🔐 Email & Password Based Login/Registration
- 🔐 Google Sign-in Integration
- 🔐 Forget Password with Email Reset
- 🔐 Protected Routes (Private Routing)
- 🔐 Firebase Auth with `onAuthStateChanged` persistence

---

## ✅ Main Features

- 🔄 Fully responsive layout (mobile, tablet, desktop)
- 🧑‍💻 Login / Register / Logout Functionality
- 🖼️ Dynamic Routing and Dynamic Title using `document.title`
- 🔒 Private Route protection
- ✍️ Subscription Service Details + Review System (with rating)
- 👤 User Profile update (with Firebase `updateProfile`)
- 🚀 Loading states handled with loader component
- 📧 Forget Password with pre-filled email (if given before)
- 🧩 Error handling via `react-hot-toast`

---

## 🧩 Extra Features Implemented

- 📊 Admin Dashboard Pages (Invoice List, Sales Analytics, etc.)
- 🌐 SEO-friendly titles using `document.title`
- 🚫 404 Page
- 🔐 Additional protected route added: `My Profile`
- 👁️ Password Show/Hide Toggle in Register Page
- 🔄 Swiper Slider on Home Page

---

## 📦 Dependencies & Packages Used

### 👉 Main Dependencies

| Package                | Purpose                                  |
|------------------------|------------------------------------------|
| `react`                | Frontend Library                         |
| `react-dom`            | DOM rendering                            |
| `react-router`         | Routing                                  |
| `firebase`             | Authentication & Hosting                 |
| `react-hot-toast`      | Toast notifications                      |
| `react-icons`          | Icons in UI                              |
| `swiper`               | Swiper JS slider                         |
| `dayjs`                | Date Formatting                          |
| `recharts`             | Dashboard Charts                         |
| `react-countup`        | Count animation                          |
| `react-spinners`       | Loading spinner                          |
| `tailwindcss`          | Utility-first CSS                        |
| `@tailwindcss/vite`    | Tailwind Vite plugin                     |
| `daisyui`              | Tailwind UI Components                   |

### 👉 Dev Dependencies

| Package                     | Purpose                          |
|-----------------------------|----------------------------------|
| `vite`                      | Development Server               |
| `eslint`                    | Code linting                     |
| `@vitejs/plugin-react`      | React plugin for Vite            |
| `@eslint/js`                | ESLint base configuration        |
| `eslint-plugin-react-hooks` | React Hooks linting              |
| `eslint-plugin-react-refresh` | Refresh plugin for React      |

---

## 🧪 Environment Variables

Added the following variables are in `.env.local`:

```
VITE_apiKey=added_firebase_key
VITE_authDomain=added_auth_domain
VITE_projectId=added_project_id
VITE_storageBucket=added_storage_bucket
VITE_messagingSenderId=added_sender_id
VITE_appId=added_app_id
```

---

## 💻 Deployment

- 🔥 Hosted on **Firebase Hosting**
- ✅ Firebase authorized domain setup done
- 🔁 Supports refresh from any route (no 404)

---

## 👨‍💻 Developer Info

**Md Arif Uddin**  
📧 xossarif@gmail.com  
🎓 Assignment Project for Programming Hero - Assignment 9

---