import React from "react";
import { Redirect } from "react-router-dom";
import {INote} from "../Interfaces/INote";
import {AppState} from "../Redux/Store/ConfigureStore";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../Redux/Types/NoteActionsTypes";
import {
    startEditNote as startEditNoteAction,
    startRemoveNote as startRemoveNoteAction
} from "../Redux/Actions/NoteActions";
import {connect} from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import NotesService from "../Service/NotesService";
import Note from "../Components/Notes/Note";
import {routes} from "../Routes/Routes";

type Props = RouterProps & LinkStateProps & LinkDispatchProps;

class SingleNote extends React.Component<Props, State> {

    state = {
        note: {
            id: '',
            title: '',
            content: ''
        },
        isLoaded: false,
        isNotExist: false
    }

    componentDidMount() {
        const { notes } = this.props;

        if(notes.length > 0) {
            const [note] = notes;

            this.setState({
                ...this.state,
                note,
                isLoaded: true,
                isNotExist: false
            });
        } else {
            const { id } = this.props.match.params;

            NotesService.getSingleNote(id)
                .then(note => this.setState({
                    ...this.state,
                    note,
                    isLoaded: true,
                    isNotExist: false
                })).catch(() => this.setState({
                    ...this.state,
                    isLoaded: false,
                    isNotExist: true
                }))
        }
    }

    editFn = (note: INote) => {
        const { startEditNote } = this.props;

        NotesService.editNote(note)
            .then((note: INote) => {
                startEditNote(note);
                this.setState({
                    ...this.state,
                    note
                })
            })
    }

    removeFn = (id: string) => {
        const { startRemoveNote } = this.props;

        NotesService.removeNote(id)
            .then(() => startRemoveNote(id))
            .then(() => this.setState({...this.state, isLoaded: false, isNotExist: true}))
    }
    render() {
        return(
            <>
                {this.state.isLoaded && <Note note={this.state.note} editFn={this.editFn} removeFn={this.removeFn} />}
                {this.state.isNotExist && <Redirect to={routes.homepage} />}
            </>
        )
    }
}

interface State {
    note: INote,
    isLoaded: boolean,
    isNotExist: boolean
}

interface MatchParams {
    id: string;
}

interface RouterProps extends RouteComponentProps<MatchParams>{

}

interface LinkStateProps {
    notes: INote[]
}

interface LinkDispatchProps {
    startEditNote: (note: INote) => void;
    startRemoveNote: (id: string) => void;
}

const mapStateToProps = (state: AppState, ownProps: RouterProps): LinkStateProps => {
    return {
        notes: state.notes.filter(note => note.id === ownProps.match.params.id)
    }
}
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    startEditNote: note => dispatch(startEditNoteAction(note)),
    startRemoveNote: id => dispatch(startRemoveNoteAction(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleNote);