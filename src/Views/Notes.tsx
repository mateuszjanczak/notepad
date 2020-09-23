import React from "react";
import Note from "../Components/Notes/Note";
import styled from "styled-components";
import {connect} from "react-redux";
import {AppState} from "../Redux/Store/ConfigureStore";
import {INote} from "../Interfaces/INote";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../Redux/Types/NoteActionsTypes";
import {
    startSetNotes as startSetNotesAction,
    startEditNote as startEditNoteAction,
    startRemoveNote as startRemoveNoteAction
} from "../Redux/Actions/NoteActions";
import NotesService from "../Service/NotesService";

type Props = LinkStateProps & LinkDispatchProps;

class Notes extends React.Component<Props> {

    componentDidMount() {
        const { startSetNotes } = this.props;

        NotesService.getNotes()
            .then((notes: INote[]) => startSetNotes(notes))
    }

    editFn = (note: INote) => {
        const { startEditNote } = this.props;

        NotesService.editNote(note)
            .then((note: INote) => startEditNote(note));
    }

    removeFn = (id: string) => {
        const { startRemoveNote } = this.props;

        NotesService.removeNote(id)
            .then(() => startRemoveNote(id))
    }

    render() {
        const { notes } = this.props;

        return (
            <Wrapper>
                {notes.map(note => (
                    <Note key={note.id} note={note} editFn={this.editFn} removeFn={this.removeFn}/>
                ))}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  
  @media (min-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
    
  @media (min-width: 780px) {
    grid-template-columns: repeat(2, 1fr);
  }
    
  @media (min-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
  }
    
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1710px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

interface LinkStateProps {
    notes: INote[]
}

interface LinkDispatchProps {
    startEditNote: (note: INote) => void;
    startRemoveNote: (id: string) => void;
    startSetNotes: (notes: INote[]) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => state;
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    startEditNote: note => dispatch(startEditNoteAction(note)),
    startRemoveNote: id => dispatch(startRemoveNoteAction(id)),
    startSetNotes: notes => dispatch(startSetNotesAction(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);