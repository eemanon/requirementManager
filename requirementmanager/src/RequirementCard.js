import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';


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
    returnIds = () => {
      this.props.returnID([this.props.cardid, this.props.columnid]);
    }
    render(){
        const withRelation = <CardHeader avatar={this.props.relationsymbol} title={this.props.category}
        subheader={this.props.subcategory}/>;
        const withoutRelation = <CardHeader title={this.props.category}
        subheader={this.props.subcategory}/>;
        const img = <img src={this.props.link}  width="250px" />;
        return (
            <Card style={{minWidth: 275, backgroundColor: this.props.color, border: this.props.stack[this.props.columnid]===this.props.cardid?'solid':'none'}}  onClick={this.returnIds}>
              {this.props.relationsymbol===null?withoutRelation:withRelation}
              <CardContent>
                <Typography variant="body2" component="p">
                    {this.props.content==="<Image>"?img:this.props.content}
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