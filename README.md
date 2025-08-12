# Job Network Application

## Aim
The goal of this project is to build a full-stack Job Network application that allows users to register, login, post jobs, view job listings, and manage profiles. The project also integrates Web3 wallet connection functionality to demonstrate blockchain wallet connectivity within the application.

---

## Algorithm / Approach

1. **User Authentication:**  
   - Register and Login using JWT-based authentication.
   - Protect routes to restrict access to authenticated users only.

2. **Job Management:**  
   - Users can post new jobs.
   - Jobs can be listed and viewed in detail.

3. **Profile Management:**  
   - Users can update and view their profile information.

4. **Web3 Wallet Integration:**  
   - Users can connect their blockchain wallet to the app.
   - Wallet connection logic handled separately under `web3` utils.

5. **Frontend-Backend Communication:**  
   - REST APIs built with Express.js on the backend.
   - React frontend consumes these APIs for dynamic UI.

---

## File Structure

```
root/
│
├── client/ # React frontend
│ ├── node_modules/ # Client dependencies
│ ├── public/ # Public assets
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ │ ├── JobCard.js
│ │ │ ├── Navbar.js
│ │ │ ├── ProfileCard.js
│ │ │ └── ProtectedRoute.js
│ │ ├── pages/ # Main pages for routing
│ │ │ ├── Dashboard.js
│ │ │ ├── Home.js
│ │ │ ├── Jobs.js
│ │ │ ├── Login.js
│ │ │ ├── PostJob.js
│ │ │ ├── Profile.js
│ │ │ ├── Register.js
│ │ │ └── Welcome.js
│ │ ├── utils/ # Utility files
│ │ │ ├── api.js
│ │ │ └── connectWallet.js
│ │ ├── App.js
│ │ ├── index.js
│ │ └── stylesheets (.css)
│ ├── package.json
│ └── .env
│
├── server/ # Node/Express backend
│ ├── controllers/
│ │ ├── jobController.js
│ │ └── userController.js
│ ├── models/
│ │ ├── Job.js
│ │ └── User.js
│ ├── routes/
│ │ ├── jobRoutes.js
│ │ └── userRoutes.js
│ ├── utils/
│ │ ├── ai.js
│ │ ├── authMiddleware.js
│ │ ├── generateToken.js
│ │ └── web3/
│ │ └── connectWallet.js
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── .gitignore
├── README.md

```

---

## Code Highlights

### Frontend (React)

- **JobCard.js:** Displays job details in card format on job listings.
- **Navbar.js:** Navigation bar managing page routing and login/logout state.
- **ProfileCard.js:** Shows user profile info.
- **ProtectedRoute.js:** Higher-order component to protect private routes.

- **Pages:** Each represents a distinct route/view (Dashboard, Home, Jobs, Login, Register, PostJob, Profile, Welcome).

- **Utils:**  
  - `api.js` contains API call methods to interact with backend endpoints.  
  - `connectWallet.js` handles blockchain wallet connection on the client side.

### Backend (Node.js/Express)

- **Controllers:** Logic for handling HTTP requests for jobs and users.
- **Models:** Mongoose schemas for Job and User.
- **Routes:** Define API endpoints for jobs and users.
- **Middleware:**  
  - `authMiddleware.js` protects private routes by verifying JWT.  
  - `generateToken.js` creates JWT tokens for authentication.

- **Web3 Integration:**  
  - Wallet connection handled under `utils/web3/connectWallet.js` for backend verification or interaction if needed.

---

## How to Run

1. **Client:**
   ```bash
   cd client
   npm install
   npm start


2. **Server:**

```bash
Copy code
cd server
npm install
npm run dev
