# 🌸 SubBloom - Smart Digital Solutions

**SubBloom** is a subscription-based smart digital solution platform where users can subscribe to and manage various digital services—such as Website Setup, SEO Toolkit, and Performance Boost—on a monthly basis. This full-featured web app is built using React, Firebase Authentication, React Router, and TailwindCSS, providing users with a smart, secure, and customized experience.


🔗 **Live Link**:  
[https://b11a9-subbloom.web.app/](https://b11a9-subbloom.web.app/)

🔗 **Repo Link**:  
[https://github.com/arif128551/react-subbloom](https://github.com/arif128551/react-subbloom)


---

## 🎯 Project Purpose

This assignment has been developed as a **Subscription Box Service Platform**, where users can subscribe to various digital services. Users will be able to log in and register, update their profiles, and leave reviews on the services.


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