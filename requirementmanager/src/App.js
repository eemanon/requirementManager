import React from 'react';
import logo from './logo.svg';
import './App.css';
import RequirementCard from './RequirementCard';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = {
  List:{
    maxWidth: 100,
  },
};

function App() {
  return (
    <div className="App">
     <List style={useStyles.List} component="nav" aria-label="main mailbox folders">
        <ListItem>
            <RequirementCard category="Behaviour" subcategory="Non-Functional" color="red" link="https://github.com/eemanon/requirementManager/network" content="Note that the three doors (resp. gears) are controlled simultaneously by the same electro-valve." />
        </ListItem>
        <ListItem>
        <RequirementCard category="Role" subcategory="Role" color="green" link="https://mi-git.univ-tlse2.fr/ECb/LGS/blob/master/architecture.txt#L44" content="This software is in charge of controlling gears and doors, of detecting anomalies, and of informing the pilot about the global state of the system and anomalies (if any)." />
        </ListItem>
        <ListItem>
          <RequirementCard />
        </ListItem>
      </List>
    </div>
  );
}

export default App;
