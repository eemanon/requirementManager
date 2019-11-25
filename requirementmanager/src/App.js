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
    this.getChildID = this.getChildID.bind(this);
    this.setObjects = this.setObjects.bind(this);
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

  setObjects(dataFromAppBar){
    if(dataFromAppBar!=null){
      //fill state objects :)
      this.setState(state => {
        return {
          requirements: dataFromAppBar,
          relations: state.relations,
          stack: state.stack
        };
      });
    }
    console.log("update function called")
  }

  categoryColor(category){
    if(category==="Behavior")
      return "#ffff00";
    if(category==="Component")
      return "#3399ff";
    if(category==="Constraint")
      return "#0000ff";
    if(category==="Goal")
      return "#999999";
    if(category==="Limit")
      return "red";
    if(category==="Metarequirement")
      return "orange"
    if(category==="Role")
      return "green"
    if(category==="Task")
      return "#66ff66";
  }

  render() {
    return (
      <div className="App">
      <AppBarManager requirements={this.setObjects} />
      <List style={useStyles.List} component="nav" aria-label="main mailbox folders">
          {this.state.requirements.map((requirement, index) => (
            <ListItem>
              <RequirementCard relationsymbol="" stack={this.state.stack} returnID={this.getChildID} cardid={requirement.ID} columnid="0" category={requirement.Category} subcategory={requirement.SubCategory} color={this.categoryColor(requirement.Category)} link={requirement.Link} content={requirement.Content} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}
export default App;
