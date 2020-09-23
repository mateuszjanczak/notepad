import {Dispatch} from "redux";
import {AppState} from "../Store/ConfigureStore";
import {INote} from "../../Interfaces/INote";
import {ADD_NOTE, AppActions, CLEAR_NOTES, EDIT_NOTE, REMOVE_NOTE, SET_NOTES} from "../Types/NoteActionsTypes";

export const addNote = (note: INote): AppActions => ({
    type: ADD_NOTE,
    note
});

export const removeNote = (id: string): AppActions => ({
    type: REMOVE_NOTE,
    id
});

export const editNote = (note: INote): AppActions => ({
    type: EDIT_NOTE,
    note
});

export const setNotes = (notes: INote[]): AppActions => ({
    type: SET_NOTES,
    notes
});

export const clearNotes = (): AppActions => ({
    type: CLEAR_NOTES
});

export const startAddNote = (noteData: {
    title?: string;
    content?: string;
}) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        const {
            title = "",
            content = ""
        } = noteData;

        const note = { id: "", title, content };

        return dispatch(
            addNote(note)
        )
    }
}

export const startRemoveNote = (id: string) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(removeNote(id));
    };
};

export const startEditNote = (note: INote) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(editNote(note));
    };
};

export const startSetNotes = (notes: INote[]) => {
    return (dispatch: Dispatch<AppActions>, getState: () => AppState) => {
        dispatch(setNotes(notes));
    };
};

export const startClearNotes = () => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(clearNotes());
    };
}