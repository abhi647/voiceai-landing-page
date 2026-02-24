# Deployment Guide

This document provides instructions for deploying the Data Analytics Landing Page (Frontend) to **Vercel** and the Voice AI Agent (Backend) to an **Azure VM**.

---

## 🏗️ 1. Frontend Deployment (Vercel)

### Prerequisites

- A GitHub repository with your code.
- A [Vercel](https://vercel.com/) account.

### Steps

1. **Connect Repository**: Import your GitHub repository into Vercel.
2. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Set Environment Variables**:
   Go to **Project Settings > Environment Variables** and add:
   - `VITE_BACKEND_URL`: The public IP or domain of your Azure VM (e.g., `http://20.xx.xx.xx:8001`).
   - `VITE_LIVEKIT_URL`: Your LiveKit Cloud Project URL.
4. **Deploy**: Click "Deploy".

---

## 🐍 2. Backend Deployment (Azure VM)

The backend consists of two parts: the **Token API** (FastAPI) and the **Voice Agent Worker** (LiveKit Agent).

### Step 2.1: Setup the Azure VM

1. Create a Linux VM (Ubuntu 22.04 recommended) in the Azure Portal.
2. Open the following ports in the **Networking** tab (Inbound Rules):
   - `8001`: For the FastAPI Token Server.
   - `8081`: For the LiveKit Agent Health Check.
3. SSH into your VM.

### Step 2.2: Install Dependencies

```bash
# Update and install Python/Pip
sudo apt update
sudo apt install python3-pip python3-venv git -y

# Clone repo
git clone <YOUR_REPO_URL>
cd <YOUR_REPO_NAME>/backend

# Setup Virtual Environment
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Step 2.3: Configuration

Create a `.env` file in the `backend/` directory:

```bash
LIVEKIT_URL=wss://your-project.livekit.cloud
LIVEKIT_API_KEY=your_key
LIVEKIT_API_SECRET=your_secret
GROQ_API_KEY=your_groq_key
ELEVEN_API_KEY=your_eleven_key
```

### Step 2.4: Run the Services

We recommend using `pm2` or `systemd` to keep the services running.

#### Option A: Running with PM2 (Recommended)

```bash
sudo npm install -g pm2

# Start Token Server
pm2 start "venv/bin/uvicorn main:app --host 0.0.0.0 --port 8001" --name token-server

# Start Voice Agent
pm2 start "venv/bin/python agent.py start" --name voice-agent

# Save for reboot
pm2 save
pm2 startup
```

---

## 🛠️ Troubleshooting

- **CORS Issues**: Ensure `VITE_BACKEND_URL` in Vercel exactly matches your VM's public address.
- **Microphone Permissions**: Ensure your frontend is served over **HTTPS** (Vercel does this automatically) for microphone access.
- **Agent Logs**: Check logs with `pm2 logs voice-agent` or `python agent.py start`.
