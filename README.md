# my-standalone
# Tsehay Gig Worker Backend API

##  Project Overview

This project is a backend service for managing gig worker profiles. It allows users to register workers, store their data persistently, and search or filter them based on different criteria.

The system is built using Node.js and Express, following a modular and layered architecture.

Hopefully this project will expand beyond learning experience to become real world problem solver :) 

##  Features

### 1. Worker Registration

* Add new worker profiles with:

  * Name
  * Contact
  * Location
  * Skills
  * Availability
  * Experience Level


### 2. Data Validation

* Ensures required fields are provided
* Rejects unknown/unexpected fields
* Validates format (e.g., phone number, enums)


### 3. Persistent Storage

* Data is stored in a JSON file
* No database required
* Data remains after server restart


### 4. Search & Filtering

Supports filtering by:

* Name
* Skills
* Location
* Availability
* Experience Level


### 5. Full CRUD Operations

* Create worker
* Read all workers
* Update worker
* Delete worker


##  Project Structure

src/

* app.js (entry point)
* routes/ (API routes)
* controllers/ (request handling logic)
* services/ (business logic)
* middleware/ (validation layer)
* utils/ (helper functions)
* data/ (JSON storage)


##  Installation & Setup

1. Clone or download the project

2. Install dependencies:
   npm install

3. Start the server:
   node src/app.js

4. Server will run on:
   http://localhost:3000


##  API Endpoints

### Create Worker

POST /api/workers


### Get All Workers

GET /api/workers


### Search Workers

GET /api/workers/search?skills=design


### Update Worker

PUT /api/workers/:id


### Delete Worker

DELETE /api/workers/:id


##  ID Generation Logic

Each worker ID is generated based on:

* First letter of skill
* Sequential number (001–999)

Example:

* Cleaner → C001
* Nanny → N002


##  Validation Rules

* Only allowed fields are accepted
* Missing required fields are rejected
* Invalid formats are rejected


##  Technologies Used

* Node.js
* Express.js
* File System (fs module)
* CORS



##  Project Goal

This project demonstrates:

* Backend API design
* Data validation
* File-based persistence
* Clean architecture (layered structure)


##  Notes

* No frontend included (backend only)
* No database used (JSON file storage)


##  Author

Developed as part of a backend mini-project for gig worker management system that I aspire to build fully for my buisseness in Ethiopia in near future
