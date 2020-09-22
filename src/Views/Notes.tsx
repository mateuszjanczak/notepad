import React from "react";
import Note from "../Components/Notes/Note";
import styled from "styled-components";

type MyState = {
    notes: Note[]
}

class Notes extends React.Component {

    state: MyState = {
        notes: []
    }

    render() {
        return (
            <Wrapper>
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
                <Note />
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

export default Notes;