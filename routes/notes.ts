import NotesController from "../controller/notes";
import { Application } from "express";

export default function (app: Application): void {
  const notesController = new NotesController();

  // GET /notes/:id: Retrieve a specific note by ID.
  app.route("/notes/:id").get(notesController.getNotes);
  // GET /notes: Retrieve all notes.
  app.route("/notes").get(notesController.getNotes);
  // POST /notes: Create a new note.
  app.route("/notes").post(notesController.createNote);
  // PUT /notes/:id: Update a specific note.
  app.route("/notes/:id").put(notesController.updateNote);
  // DELETE /notes/:id: Delete a specific note.
  app.route("/notes/:id").delete(notesController.deleteNote);
}
