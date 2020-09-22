import React from "react";
import styled from "styled-components";
import Button from "../General/Button";
import {INote} from "../../Interfaces/INote";
import Modal from "../Modal/Modal";

class Note extends React.Component<Props> {

    state = {
        modal: false
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            modal: !this.state.modal
        })
    }

    render() {
        const { note } = this.props;

        return (
            <Wrapper>
                <Title>{note.title}</Title>
                <Content>{note.content}</Content>
                <Action>
                    <Button>VIEW</Button>
                    <Button onClick={this.toggleModal}>EDIT</Button>
                    <Button>DELETE</Button>
                </Action>
                {this.state.modal && <Modal note={note} toggleModal={this.toggleModal} />}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  border: 1px solid #333;
  background: linear-gradient(0deg, rgba(255,255,200,1) 20%, rgba(255,255,225,1) 100%);
  padding: 1rem;
`;

const Title = styled.h3`
  text-align: center;
  margin: 1rem;
  padding: 0;
`;

const Content = styled.div`
  height: 10.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  text-align: justify;
  position: relative;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;  
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
`;

type Props = {
    note: INote
}




export default (Note);