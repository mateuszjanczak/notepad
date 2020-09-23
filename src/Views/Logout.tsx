import React from "react";
import AuthService from "../Service/AuthService";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../Redux/Types/NoteActionsTypes";
import {
    startClearNotes as startClearNotesAction
} from "../Redux/Actions/NoteActions";
import {connect} from "react-redux";
import { RouteComponentProps  } from "react-router-dom";
import {routes} from "../Routes/Routes";

class Logout extends React.Component<LinkDispatchProps & RouteComponentProps , any> {

    componentDidMount() {
        AuthService.logout();
        const { startClearNotes } = this.props;
        startClearNotes();
        this.props.history.push(routes.login);
    }

    render() {
        return (
            <></>
        )
    }
}

interface LinkDispatchProps {
    startClearNotes: () => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    startClearNotes: () => dispatch(startClearNotesAction())
})

export default connect(null, mapDispatchToProps)(Logout);