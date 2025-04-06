
# Personalized Movie Recommendation System

This project is a full-stack web app that recommends movies to users based on their preferences using a hybrid AI model. It includes a Flask backend, React frontend, and a trained model using the MovieLens dataset.

---

## 🔧 Project Structure

- `/server` - Flask API backend
- `/client` - React frontend
- `movie.db` - SQLite database with sample data
- `model.pkl` - Pretrained movie recommendation model

---

## 🧪 Demo Credentials

- **Email:** test@example.com
- **Password:** password123

---

## 🚀 How to Run Locally

### 1. Backend (Flask)

```bash
cd server
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install flask flask-cors
python app.py
```

### 2. Frontend (React)

```bash
cd client
npm install
npm start
```

App runs at `http://localhost:3000` and talks to Flask at `http://localhost:5000`.

---

## ☁️ Deployment

You can deploy using:
- [Render](https://render.com/)
- [Heroku](https://heroku.com/)
- [Vercel](https://vercel.com/) (for frontend)

Set environment variables and upload `movie.db` and `model.pkl` with your server.

---

## 📬 Contact

For help, email: test@example.com
