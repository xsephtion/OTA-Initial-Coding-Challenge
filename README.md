# OTA Initial Coding Challenge - Note-taking Backend

## Project Description

This project is a simple backend for a note-taking application developed using TypeScript, Node.js, and Express. The API allows users to perform CRUD (Create, Retrieve, Update, Delete) operations on notes, where each note consists of a title and a body.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/xsephtion/ota-initial-coding-challenge.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ota-initial-coding-challenge
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and define the following environment variables:

   ```
   PORT=3000
   ```

   Adjust the `PORT` value as needed.

## Usage

### Running the Development Server

```bash
npm run dev
```

This will start the server using `nodemon` for automatic reloading during development.

### Building TypeScript

If changes are made to the TypeScript files, you need to build the project:

```bash
npm run build
```

This will compile TypeScript files into JavaScript in the `dist` directory.

### API Endpoints

1. **Create a new note:**
   - Endpoint: `POST /notes`
   - Body: JSON with `title` and `body` properties.

2. **Retrieve all notes:**
   - Endpoint: `GET /notes`

3. **Retrieve a specific note by ID:**
   - Endpoint: `GET /notes/:id`

4. **Update a specific note:**
   - Endpoint: `PUT /notes/:id`
   - Body: JSON with `title` and `body` properties.

5. **Delete a specific note:**
   - Endpoint: `DELETE /notes/:id`

### Data Storage

The application uses an in-memory array to store notes. Upon server restart, all notes will be lost.

### Data Validation

Input data for creating and updating notes is validated to ensure the presence of required properties (`title` and `body`).

### Error Handling

Basic error handling is implemented for common scenarios, such as notes not found.