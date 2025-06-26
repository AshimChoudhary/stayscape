# AirBnB 🏡

AirBnB is a modern full-stack property rental platform inspired by Airbnb. It allows users to list, browse, and book vacation homes and rentals with a clean and intuitive interface.

🚀 [Live Demo](https://property-rent-eight.vercel.app/)  
🔗 [GitHub Repository](https://github.com/AshimChoudhary/stayscape)

---

## ✨ Features

- 🏠 List and book rental properties
- 🔍 Advanced filtering (location, price, category)
- 🗺️ Map integration for property locations
- 🧾 Booking management (View trips/reservations)
- 🔐 Secure booking & reservation system
- 💡 Dynamic listings, categories, and availability status

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 14 (App Router)**
- **React.js**
- **Tailwind CSS**
- **TypeScript**

### Backend & Services
- **MongoDB** (via Prisma)
- **Vercel** for deployment

---
## ⚙️ Setup Locally

### 1. Clone the repo
```bash
git clone https://github.com/AshimChoudhary/stayscape.git
cd stayscape

npm install

### Create .env file

DATABASE_URL=your_mongodb_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_UPLOADTHING_APP_ID=your_uploadthing_app_id
UPLOADTHING_SECRET=your_uploadthing_secret

### Push Prisma schema to DB

npx prisma db push

### Run the app

npm run dev


Testing
✅ Booking functionality

✅ Host listing creation and deletion

✅ Filtering logic (location, date, category)

✅ Auth flows (sign-in, sign-up, logout)

📦 Deployment
Deployed via Vercel — auto-deploys on every push to main.

📜 License
This project is licensed under the MIT License.

