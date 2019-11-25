import React from 'react';
import logo from './logo.svg';
import './App.css';
import RequirementCard from './RequirementCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBarManager from './component/AppBarManager';


const useStyles = {
  List:{
    maxWidth: 100,
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {requirements: [], relations: [], stack: []};
    this.getChildID = this.getChildID.bind(this)
  }
  getChildID(dataFromChild) {
    //if chosen column is already present, remove items from stack
    if(dataFromChild[1]<this.state.stack.length){
      //remove all items until we are back on this position...
        this.setState(state => {
          const stack = state.stack.slice(0,dataFromChild[1]);
          return {
            requirements: state.requirements,
            relations: state.relations,
            stack
          };
        });
    }
    this.setState(state => {
      const stack = state.stack.concat(dataFromChild[0]);
      return {
        requirements: state.requirements,
        relations: state.relations,
        stack
      };
    });
  }
  render() {
    return (
      <div className="App">
      <List style={useStyles.List} component="nav" aria-label="main mailbox folders">
          <ListItem>
              <RequirementCard relationsymbol="&#8838;" stack={this.state.stack} returnID={this.getChildID} cardid="0" columnid="0" category="Behaviour" subcategory="Non-Functional" color="red" link="https://github.com/eemanon/requirementManager/network" content="Note that the three doors (resp. gears) are controlled simultaneously by the same electro-valve." />
          </ListItem>
          <ListItem>
              <RequirementCard relationsymbol="&#8838;" stack={this.state.stack} returnID={this.getChildID} cardid="1" columnid="0" category="Behaviour" subcategory="Non-Functional" color="red" link="https://github.com/eemanon/requirementManager/network" content="Note that the three doors (resp. gears) are controlled simultaneously by the same electro-valve." />
          </ListItem>
        </List>
      </div>
    );
  }
}
export default App;
