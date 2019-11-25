import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import Papa from 'papaparse';

const styles = {
  button:{
    marginLeft: 100,
  }
}

class AppBarManager extends React.Component {
    constructor(props){
        super(props) ; 
        this.state = {
            csvfile: null,
            categoriesArraydate: null,
            relationsArrayData:null,
            datatype: null
        };
        this.inputOpenFileRef = React.createRef();
        this.dataResult = null;
        this.updateData = this.updateData.bind(this);
    }
    
    useStyles = () => { makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }))
    };

    showOpenFileRelationsDlg = () => {
        this.inputOpenFileRef.current.click();
        this.setState(state => {
          return {
            csvfile: this.state.csvfile,
            categoriesArraydate: this.state.categoriesArraydate,
            relationsArrayData:this.state.relationsArrayData,
            datatype: "relations"
          };
        });
    };

    handleChange = event => {    
                  
      Papa.parse(event.target.files[0], {
        complete: this.updateData,
        header: true
      });

    };
    showOpenFileCategoriesDlg = () => {
      this.inputOpenFileRef.current.click();
      this.setState(state => {
        return {
          csvfile: this.state.csvfile,
          categoriesArraydate: this.state.categoriesArraydate,
          relationsArrayData:this.state.relationsArrayData,
          datatype: "categories"
        };
      });
  };
    updateData(result) {      
       var data = result.data ;        
        console.log(data);
      if(this.state.datatype==="categories")
        this.props.requirements(data);      
      else
        this.props.relations(data);  
    }

    render(){
        
        const classes = this.useStyles;
        return(
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    Relation Visualizer
                    <input
                        className="csv-input"
                        type="file"
                        ref={this.inputOpenFileRef}
                        name="file"
                        style={{display: 'none'}}
                        onChange={this.handleChange.bind(this)}
                    />
                    </Typography>                                     
                    <Button 
                        variant="contained"
                        color="default"
                        style={styles.button}
                        startIcon={<CloudUploadIcon />}
                        onClick = {this.showOpenFileCategoriesDlg.bind(this)}
                      >
                        Upload Categories
                      </Button>
                      <Button
                        variant="contained"
                        color="default"
                        style={styles.button}
                        startIcon={<CloudUploadIcon />}
                        onClick = {this.showOpenFileRelationsDlg.bind(this)}
                      >
                        Upload Relations
                      </Button>
                </Toolbar>
            </AppBar>
        );
    }           
}

export default AppBarManager;

