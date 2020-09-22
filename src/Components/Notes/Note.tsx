import React from "react";
import styled from "styled-components";
import Button from "../General/Button";

class Note extends React.Component {

    state = {
        id: "",
        title: "",
        content: ""
    }

    render() {
        return (
            <Wrapper>
                <Title>Title...</Title>
                <Content>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Content>
                <Action>
                    <Button>VIEW</Button>
                    <Button>EDIT</Button>
                    <Button>DELETE</Button>
                </Action>
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

export default Note;