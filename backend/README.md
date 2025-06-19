# Urban Company Clone Backend


## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the backend folder with the following content:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/urbancompanyclone
   JWT_SECRET=your_jwt_secret
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   RAZORPAY_KEY_ID=your_key_id_here
   RAZORPAY_KEY_SECRET=your_key_secret_here
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints
- `POST /api/auth/signup` — Signup with email/password or email/OTP
- `POST /api/auth/verify-otp` — Verify OTP and get JWT
- `POST /api/auth/login` — Login with email/password

## Notes
- Make sure MongoDB is running locally or update the URI in `.env`.
- Use the JWT token in the `Authorization` header as `Bearer <token>` for protected routes. 
