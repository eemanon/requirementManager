import React from 'react';
import './App.css';
import RequirementCard from './RequirementCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBarManager from './component/AppBarManager';
import FloatingHelpButton from './FloatingHelpButton';
import Button from '@material-ui/core/Button';

const useStyles = {
  List:{
    maxWidth: 300,
    float: "left",
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {requirements: [], relations: [], stack: [], secondreqs: []};
    this.getChildID = this.getChildID.bind(this);
    this.setObjects = this.setObjects.bind(this);
    this.setRelations = this.setRelations.bind(this);
    this.showstate = this.showstate.bind(this);
  }
  getChildID(dataFromChild) {
    console.log("click function clicked");
    //if chosen column is already present, remove items from stack
    if(dataFromChild[1]<this.state.stack.length){
      //remove all items until we are back on this position...
      
        this.setState(state => {
          const stack = state.stack.slice(0,dataFromChild[1]);
          //also, remove eventual arrays for the columns behind it:
          const secondreqs = state.secondreqs.slice(0,dataFromChild[1]);
          return {
            requirements: state.requirements,
            relations: state.relations,
            stack,
            secondreqs
          };
        });
    }     
    //see if we can find a list of related requirements...
    const objectID = dataFromChild[0];
    let objectList = [];
    for (const relation of this.state.relations) {
      if (relation.RequirementID1 == objectID){
        //found the id in a relation so we put the related object into the list and set the property "linkNature"
        let object = this.state.requirements.filter(function (el) {
          return (el.ID==relation.RequirementID2);
        });
        object[0].linkNature = relation.LinkNature;
        
        objectList.push(object[0]);
        console.log(objectList);
      }
    }
    var test = [[1,1]];
    test.push(objectList);
    console.log("new array")
    console.log(test)
    const spl = test.slice(1,test.length);
    console.log(spl)
    //add our new column to thestate
    this.setState(state => {
      const stack = state.stack.concat(dataFromChild[0]);
      const secondreqs = state.secondreqs.concat(spl);
      return {
        requirements: state.requirements,
        relations: state.relations,
        stack,
        secondreqs
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
          stack: state.stack,
          secondreqs: state.secondreqs
        };
      });
    }
  }
  setRelations(dataFromAppBar){
    if(dataFromAppBar!=null){
      //fill state relations :)
      this.setState(state => {
        return {
          requirements: state.requirements,
          relations: dataFromAppBar,
          stack: state.stack,
          secondreqs: state.secondreqs
        };
      });
    }
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

  linkNature(nature){
    console.log(nature)
    if(nature != null){
      if(nature==="Disjoins")
        return '\u2225';
      if(nature==="Belongs")
        return '\u2286';
      if(nature==="Repeats")
        return '\u21D4';
      if(nature==="Constraints")
        return '\u27A4';
      if(nature==="Contradicts")
        return '\u2295';
      if(nature==="Extends")
        return '>';
      if(nature==="Excepts")
        return '\u2AFD';
      if(nature==="Characterizes")
        return '\u2B62';
    } else
      return "";
  }
  showstate(){
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
      <AppBarManager requirements={this.setObjects} relations={this.setRelations} />
      <List style={useStyles.List} component="nav" aria-label="main mailbox folders">
          {this.state.requirements.map((requirement, index) => (
            <ListItem>
              <RequirementCard relationsymbol={this.linkNature(requirement.linkNature)} stack={this.state.stack} returnID={this.getChildID} cardid={requirement.ID} columnid="0" category={requirement.Category} subcategory={requirement.SubCategory} color={requirement.RealRequirement==="Oui"?this.categoryColor(requirement.Category):"white"} link={requirement.Link} content={requirement.Content} />
            </ListItem>
          ))}
      </List>
      {this.state.secondreqs.map((column, index) => (
        <List style={useStyles.List} component="nav" aria-label="main mailbox folders">
          {column.map((requirement, columnIndex) => (
            <ListItem>
              <RequirementCard relationsymbol={this.linkNature(requirement.linkNature)} stack={this.state.stack} returnID={this.getChildID} cardid={requirement.ID} columnid={columnIndex+1} category={requirement.Category} subcategory={requirement.SubCategory} color={requirement.RealRequirement==="Oui"?this.categoryColor(requirement.Category):"white"} link={requirement.Link} content={requirement.Content} />
            </ListItem>            
          ))}
        </List>
        
      ))}
    <FloatingHelpButton />
      </div>
    );
  }
}
export default App;
