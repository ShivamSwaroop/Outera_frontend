# Outera - AI-Powered Prospecting & Outreach Pipeline

## Overview

Outera is an AI-powered sales outreach platform that automates the entire prospecting workflow from a single company domain.

The system discovers similar companies, identifies decision makers, enriches verified contact information, generates personalized outreach emails using AI, and sends campaigns automatically through Brevo.

The application provides real-time workflow updates through Socket.IO and displays campaign results through an interactive dashboard.

---

## Features

### Company Discovery

* Enrich company information from a seed domain
* Discover similar companies based on industry

### Contact Discovery

* Find decision makers from target companies
* Filter senior leadership roles
* Enrich contact information

### Email Verification

* Retrieve verified business email addresses
* Store verified contacts in MongoDB

### AI-Powered Outreach

* Generate personalized outreach emails using Groq LLM
* Dynamic subject lines and email content
* Professional cold outreach templates

### Email Delivery

* Send emails through Brevo Transactional Email API
* Track sending status

### Real-Time Pipeline Monitoring

* Live workflow updates using Socket.IO
* Progress tracking across all stages

### Campaign Management

* Persist campaigns in MongoDB
* View campaign summaries and results
* Store generated emails and delivery status

---

## Workflow

1. User enters a company domain.
2. Company data is enriched through Prospeo.
3. Similar companies are discovered.
4. Decision makers are identified.
5. Verified emails are enriched.
6. AI generates personalized outreach emails.
7. Emails are delivered via Brevo.
8. Campaign results are stored in MongoDB.
9. Frontend receives live updates through Socket.IO.

---

## Architecture

Frontend (React + Vite)
↓
Backend (Node.js + Express)
↓
Prospeo API
↓
Groq AI
↓
Brevo Email API
↓
MongoDB

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS
* Axios
* Socket.IO Client
* React Router

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Socket.IO
* Axios

### Third-Party Services

* Prospeo (Company & Contact Enrichment)
* Groq (AI Email Generation)
* Brevo (Email Delivery)

---

## Project Structure

```text
server/
│
├── config/
├── controllers/
├── models/
├── routes/
├── services/
│   ├── ai.js
│   ├── brevo.js
│   ├── prospeo.js
│   └── workflow.js
│
├── sockets/
├── app.js
├── server.js
└── .env

frontend/
│
├── components/
├── hooks/
├── pages/
├── services/
├── App.jsx
└── main.jsx
```

---

## Installation

### Clone Repository

```bash
git clone 

cd outera
```

---

### Backend Setup

```bash
cd server

npm install
```

Start Backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend

npm install
```

Start Frontend:

```bash
npm run dev
```
---

## Database Schema

### Campaign

* seedDomain
* status
* currentStage
* similarCompanies
* contacts
* stats
* logs

### Contact

* name
* role
* company
* companyDomain
* linkedinUrl
* email
* verified
* emailSubject
* emailContent
* emailStatus

---

## Future Improvements

* Campaign approval workflow
* Bulk email scheduling
* Retry mechanism for failed emails
* Analytics dashboard
* Multi-user authentication
* Campaign history and reporting
* Role-based access control

---

## Author

Shivam S Dubey

Computer Science Graduate

Full Stack Developer
