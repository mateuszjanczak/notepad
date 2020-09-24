import React from "react";
import styled from "styled-components";
import { Redirect } from 'react-router-dom'
import Input from "../Components/General/Input";
import Button from "../Components/General/Button";
import NotesService from "../Service/NotesService";
import {routes} from "../Routes/Routes";
import {INote} from "../Interfaces/INote";
import {ThunkDispatch} from "redux-thunk";
import {AppActions} from "../Redux/Types/NoteActionsTypes";
import {
    startAddNote as startAddNoteAction
} from "../Redux/Actions/NoteActions";
import {connect} from "react-redux";

type Props = LinkDispatchProps;

class NewNote extends React.Component<Props, IState> {

    state = {
        title: "",
        content: "",
        redirect: false
    }

    handleChange = (event: { target: { name: string; value: any; }; }) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        } as Pick<IState, keyof IState>);
    };

    handleClick = () => {
        const { title, content } = this.state;
        const { startAddNote } = this.props;

        if(title.length > 0 && content.length > 0) {
            NotesService.addNote(title, content)
                .then((note: INote) => startAddNote(note))
                .then(() => this.setState({...this.state, redirect: true}))
        }
    }

    render() {
        return (
            <Wrapper>
                <div>
                    <Heading>New note</Heading>
                </div>
                <Container>
                    <Label>
                        <Input placeholder="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                    </Label>
                    <Label>
                        <Input placeholder="content" name="content" value={this.state.content} onChange={this.handleChange}/>
                    </Label>
                    <Action>
                        <Button onClick={this.handleClick}>SAVE</Button>
                    </Action>
                </Container>
                {this.state.redirect && <Redirect to={routes.notes} />}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Container = styled.div`
  padding: 2.5rem 5rem;
  border: 1px solid #333;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
`;

const Label = styled.div`
  margin: 1rem;
`;

const Action = styled.div`
  display: grid;
  justify-items: center;
`;

type IState = {
    title: string,
    content: string,
    redirect: boolean
}

interface LinkDispatchProps {
    startAddNote: (note: INote) => void;
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>): LinkDispatchProps => ({
    startAddNote: note => dispatch(startAddNoteAction(note))
})


export default connect(null, mapDispatchToProps) (NewNote);