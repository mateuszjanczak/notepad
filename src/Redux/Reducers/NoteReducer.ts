import { INote } from "../../Interfaces/INote";
import {
    NoteActionTypes,
    ADD_NOTE,
    REMOVE_NOTE,
    EDIT_NOTE,
    SET_NOTES,
    CLEAR_NOTES
} from "../Types/NoteActionsTypes";

const notesReducerDefaultState: INote[] = [];

const noteReducer = (
    state = notesReducerDefaultState,
    action: NoteActionTypes
): INote[] => {
    switch (action.type) {
        case ADD_NOTE:
            return [...state, action.note];
        case REMOVE_NOTE:
            return state.filter((note) => note.id !== action.id);
        case EDIT_NOTE:
            return state.map(note => {
                if (note.id === action.note.id) {
                    return {
                        ...note,
                        ...action.note
                    };
                } else {
                    return note;
                }
            });
        case SET_NOTES:
            return action.notes;
        case CLEAR_NOTES:
            return notesReducerDefaultState;
        default:
            return state;
    }
};

export { noteReducer };