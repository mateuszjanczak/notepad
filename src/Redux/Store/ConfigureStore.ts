import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { noteReducer } from "../Reducers/NoteReducer";
import { AppActions } from "../Types/NoteActionsTypes";

export const rootReducer = combineReducers({
    notes: noteReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);