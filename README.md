# Project Overview
This is a simple CRUD patient management application built with the MEAN stack. It allows users to manage patient records efficiently. The frontend is built using Angular, Angular Material, and Tailwind CSS, while the backend is developed with Node.js, Express, and MongoDB.

## Technologies
**Frontend:** Angular, Angular Material, Tailwind CSS<br/><br/>
**Backend:** Node.js, Express<br/><br/>
**Database:** MongoDB<br/>

## Prerequisites
1. Node.js (v20.15.0)<br/>
2. npm (v10.8.1)<br/>
3. MongoDB (local or a remote database)<br/>

## Installation
1. Clone the repository & navigate to project directory
   
2. Install dependencies:
   ```
   npm install
   ```
3. Create .env file and add the following values:
   ```
   MONGO_URI=<mongoDB-Url>
   PORT=3000
   API_BASE_URL=http://localhost:3000
   ```
4. Setup Frontend - Link: https://github.com/humphreyom97/patient-frontend
   
5. Start the development server:
   ```
   node server.js
   ```
6. The backend will be accessible at http://localhost:3000

## Testing
 * Testing uses Jest, Sinon and Supertest
   ```
   npm test
   ```

