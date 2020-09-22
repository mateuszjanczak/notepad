import { INote } from "../../Interfaces/INote";

// action strings
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const SET_NOTES = "SET_NOTES";

export interface SetNoteAction {
    type: typeof SET_NOTES;
    notes: INote[];
}

export interface EditNoteAction {
    type: typeof EDIT_NOTE;
    note: INote;
}

export interface RemoveNoteAction {
    type: typeof REMOVE_NOTE;
    id: string;
}

export interface AddNoteAction {
    type: typeof ADD_NOTE;
    note: INote;
}

export type NoteActionTypes =
    | SetNoteAction
    | EditNoteAction
    | RemoveNoteAction
    | AddNoteAction;

export type AppActions = NoteActionTypes;