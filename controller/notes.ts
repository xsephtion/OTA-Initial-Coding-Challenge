// API Endpoints:
// POST /notes: Create a new note.
// GET /notes: Retrieve all notes.
// GET /notes/:id: Retrieve a specific note by ID.
// PUT /notes/:id: Update a specific note.
// DELETE /notes/:id: Delete a specific note.

import { INotes } from "@interface/notes";
import { Request, Response } from "express";

export default class NotesController {
  private notes: INotes[] = [{ title: "Default Test 0", body: "For testing purposes" }];

  createNote = (req: Request, res: Response) => {
    const note = this.validateInput(req.body);
    if (!note) {
      return res.status(400).json({ error: "Input error" });
    }
    this.notes.push(note as INotes);
    return res.status(200).json({ success: true });
  };

  getNotes = (req: Request, res: Response) => {
    const id = parseInt(req.params.id!);
    const data = id && id >= 0 && id <= this.notes.length ? this.notes[id - 1] : this.notes;
    return res.status(200).json({ data });
  };

  updateNote = (req: Request, res: Response) => {
    const id = parseInt(req.params.id!);
    const note = this.validateInput(req.body);

    if (!note) {
      return res.status(400).json({ error: "Input error" });
    }

    if (id >= 0 && id <= this.notes.length) {
      // Update the object using spread operator
      this.notes[id - 1] = { ...this.notes[id - 1], ...note };
      return res.status(200).json({ success: true });
    } else {
      return res.status(404).json({ error: "Note is non-existent" });
    }
  };

  deleteNote = (req: Request, res: Response) => {
    const id = parseInt(req.params.id!);
    if (id >= 0 && id <= this.notes.length) {
      this.notes.splice(id - 1, 1);
      return res.status(200).json({ success: true });
    } else {
      return res.status(404).json({ error: "Note is non-existent" });
    }
  };

  validateInput = (body: any): Partial<INotes> | null => {
    const allowedKeys: Array<keyof INotes> = ["title", "body"];
    const note: Partial<INotes> = Object.keys(body).reduce((acc: any, key: any) => {
      if (allowedKeys.includes(key as keyof INotes)) {
        acc[key] = body[key];
      }
      return acc;
    }, {} as Partial<INotes>);

    if (Object.keys(note).length === 0) {
      return null;
    }

    return note;
  };
}
