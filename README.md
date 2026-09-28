# 🚚 ZapShift — Parcel Delivery Client

ZapShift is a modern parcel delivery web application designed for sending, tracking, and managing parcels across Bangladesh.

The client-side application is built with **React.js** and provides separate experiences for customers, riders, and administrators.

## 🌐 Live Website

**Live Site:** https://zap-shift-cc940.web.app/

## 🔗 Server Repository

**Backend:** https://github.com/mufassir-mahmud/zap-shift-server

---

## ✨ Features

### 👤 Customer

* Create a parcel delivery request
* Select document or non-document parcel type
* Calculate delivery cost based on:

  * Parcel type
  * Parcel weight
  * Same-district or different-district delivery
* Secure payment with Stripe
* View parcel history
* View payment history
* Track parcel using tracking ID
* View parcel delivery status
* Delete parcels
* Login with Firebase Authentication
* Google authentication support

### 🚴 Rider

* Apply to become a rider
* View assigned parcels
* Accept assigned delivery
* Update parcel delivery status
* View delivered parcels
* View delivery statistics
* Rider work status management

### 🛡️ Admin

* View users
* Search users
* Manage user roles
* View rider applications
* Approve or reject riders
* Assign parcels to available riders
* View parcel delivery statistics
* Manage rider availability
* Monitor parcel delivery status

### 📦 Parcel Tracking

Each parcel receives a unique tracking ID.

Example:

```text
TRK-260928-A1B2
```

Tracking logs record important events such as:

```text
parcel-created
pending-pickup
driver-assigned
parcel-delivered
```

---

## 💳 Payment

ZapShift uses **Stripe Checkout** for online parcel payments.

Payment flow:

```text
Create Parcel
     ↓
Calculate Delivery Cost
     ↓
Stripe Checkout
     ↓
Successful Payment
     ↓
Parcel → Pending Pickup
     ↓
Tracking Updated
```

---

## 🔐 Authentication

Firebase Authentication is used for user authentication.

Supported authentication:

* Email & Password
* Google Sign-In

The application also uses Firebase ID tokens to securely communicate with protected backend APIs.

---

## 🛠️ Technologies Used

### Frontend

* React.js
* React Router
* JavaScript
* Tailwind CSS
* Firebase Authentication
* TanStack Query
* Axios
* React Leaflet
* Recharts
* SweetAlert2
* Lottie React
* Stripe Checkout

### Backend Communication

* REST API
* Axios
* Firebase ID Token Authentication

### Deployment

* Firebase Hosting

---

## 📂 Main Frontend Structure

```text
src/
├── Components/
├── Hooks/
├── Layouts/
├── Pages/
├── Routes/
├── Firebase/
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/mufassir-mahmud/zap-shift-client.git
```

Go to the project directory:

```bash
cd zap-shift-client
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file and add your Firebase configuration and backend URL.

Example:

```env
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id

VITE_API_URL=http://localhost:3000
```

For production, use your deployed backend URL:

```env
VITE_API_URL=https://zap-shift-server-five-theta.vercel.app
```

Start the development server:

```bash
npm run dev
```

---

## 🚀 Build

Create a production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

## 📱 Responsive Design

The application is designed to work across:

* 📱 Mobile
* 📲 Tablet
* 💻 Desktop

---

## 🔄 Application Flow

```text
User
 │
 ├── Register / Login
 │
 ├── Create Parcel
 │      │
 │      └── Calculate Price
 │
 ├── Payment
 │      │
 │      └── Stripe
 │
 ├── Track Parcel
 │
 └── View Delivery History


Admin
 │
 ├── Manage Users
 ├── Manage Riders
 ├── Approve Riders
 ├── Assign Parcels
 └── Monitor Deliveries


Rider
 │
 ├── View Assigned Parcels
 ├── Accept Delivery
 ├── Update Delivery Status
 └── View Delivery History
```

---

## 👨‍💻 Author

**Mufassir Mahmud**

Frontend Developer

* GitHub: https://github.com/mufassir-mahmud

---

## 📄 License

This project was created for educational and portfolio purposes.
