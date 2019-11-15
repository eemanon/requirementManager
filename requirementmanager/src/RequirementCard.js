import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = {
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    backgroundColor: 'gray'
  }
};

class RequirementCard extends React.Component  {
    gotosource = () => {
        console.log(this.props.link);
        window.open(this.props.link, "_blank")
      }
    render(){
        return (
            <Card style={{minWidth: 275, backgroundColor: this.props.color}}>
              <CardContent>
                <Typography color="textPrimary" gutterBottom>
                    {this.props.category} : {this.props.subcategory}
                </Typography>
                <Typography variant="body2" component="p">
                    {this.props.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={useStyles.button} size="small" onClick={this.gotosource}>Source</Button>
              </CardActions>
            </Card>
          );
    }
}
export default RequirementCard;