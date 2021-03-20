import React from "react";
import styled from "styled-components";
import { RouteComponentProps, withRouter } from "react-router";
import Button from "../General/Button";
import {INote} from "../../Interfaces/INote";
import Modal from "../Modal/Modal";
import { routes } from "../../Routes/Routes";

class Note extends React.Component<Props & RouteComponentProps> {

    state = {
        modal: false
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            modal: !this.state.modal
        })
    }

    handleBtnView = (id: string) => {
        const { history } = this.props;
        history.push(`${routes.notes}/${id}`);
    }

    render() {
        const { note, editFn, removeFn } = this.props;
        const { id, title, content } = note;

        return (
            <Wrapper>
                <Title>{title}</Title>
                <Container>
                    <Content>{content}</Content>
                    <Action>
                        <Button onClick={() => this.handleBtnView(id)}>VIEW</Button>
                        <Button onClick={this.toggleModal}>EDIT</Button>
                        <Button onClick={() => removeFn(id)}>DELETE</Button>
                    </Action>
                </Container>
                {this.state.modal && <Modal note={note} toggleModal={this.toggleModal} editFn={editFn} />}
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  border: 1px solid #333;
  background: linear-gradient(0deg,rgba(255,255,200,1) 20%,rgba(255,255,225,1) 100%);
`;

const Container = styled.div`
  padding: 1rem;
`;


const Title = styled.h3`
  text-align: center;
  margin: 0;
  padding: 1.5rem;
  background-color: #fbb034;
  background-image: linear-gradient(315deg, #fbb034 0%, #ffdd00 100%);
`;

const Content = styled.div`
  height: 11rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  text-align: justify;
  position: relative;
  margin: 0 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid black;
`;

type Props = {
    note: INote,
    editFn(note: INote): void,
    removeFn(id: string): void
}

export default withRouter(Note);