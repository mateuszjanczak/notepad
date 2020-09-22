import React from "react";
import { Route, Switch } from "react-router-dom";
import {routes} from "../Routes/Routes";
import Notes from "./Notes";
import Auth from "./Auth";
import styled from "styled-components";
import SingleNote from "./SingleNote";

class Container extends React.Component {
    render() {
        return (
            <Wrapper>
                <Switch>
                    <Route exact path={['', routes.homepage, routes.notes]} component={Notes} />
                    <Route exact path={routes.singleNote} component={SingleNote} />
                    <Route exact path={routes.login} component={Auth} />
                </Switch>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
  margin: 1rem;
  
  @media (min-width: 576px) {
    display: grid;
  }
  
  @media (min-width: 576px) {
    width: 540px;
    margin: 5rem auto;
  }
    
  @media (min-width: 768px) {
   width: 720px;
  }
    
  @media (min-width: 992px) {
    width: 960px;
  }
    
  @media (min-width: 1200px) {
    width: 95%;
  }
`;

export default Container;