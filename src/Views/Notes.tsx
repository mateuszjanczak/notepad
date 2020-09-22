import React from "react";
import Note from "../Components/Notes/Note";
import styled from "styled-components";
import {connect} from "react-redux";
import {AppState} from "../Redux/Store/ConfigureStore";
import {INote} from "../Interfaces/INote";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../Redux/Types/NoteActionsTypes";
import {startSetNotes} from "../Redux/Actions/NoteActions";
import NotesService from "../Service/NotesService";

type Props = LinkStateProps;

class Notes extends React.Component<Props> {

    componentDidMount() {
        NotesService.getNotes()
            .then((notes: INote[]) => startSetNotes(notes))
    }

    render() {
        const { notes } = this.props;

        return (
            <Wrapper>
                {notes.map(note => (
                    <Note note={note} />
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
   // startEditNote: (note: INote) => void;
    startSetNotes: (notes: INote[]) => void;
}

const mapStateToProps = (state: AppState): LinkStateProps => state;
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
  //  startEditNote: note => dispatch(startEditNote(note)),
    startSetNotes: notes => dispatch(startSetNotes(notes))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes);