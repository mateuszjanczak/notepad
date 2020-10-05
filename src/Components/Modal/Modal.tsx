import React from "react";
import styled from "styled-components";
import {INote} from "../../Interfaces/INote";
import Input from "../General/Input";
import Button from "../General/Button";
import TextArea from "../General/TextArea";

class Modal extends React.Component<IProps, IState> {

    state = {
        id: "",
        title: "",
        content: ""
    }

    componentDidMount() {
        const { note } = this.props;
        const { id, title, content } = note;
        this.setState({
            id, title, content
        })
    }

    handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value
        } as Pick<IState, keyof IState>);
    };

    render() {

        const { toggleModal, editFn } = this.props;

        const { title, content } = this.state;

        return (
            <Wrapper>
                <Container>
                    <Label>
                        <Input placeholder="Title" name="title" value={title} onChange={this.handleChange}/>
                    </Label>
                    <Label>
                        <TextArea placeholder="Content" name="content" value={content} onChange={this.handleChange}/>
                    </Label>
                    <Action>
                        <Button onClick={() => editFn(this.state)}>EDIT</Button>
                        <Button onClick={toggleModal}>CLOSE</Button>
                    </Action>
                </Container>
            </Wrapper>
        )
    }

}

const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
  padding: 2rem;
`;

const Label = styled.div`
  padding: 2rem;
`;

const Action = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

type IProps = {
    note: INote,
    toggleModal(): void,
    editFn(note: INote): void
}

type IState = {
    id: string,
    title: string,
    content: string
}

export default Modal;