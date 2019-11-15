import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));



export default function FloatingHelpButton() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Fab aria-label="like" className={classes.fab} onClick={handleClickOpen}>
        ?
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Usage & Symbol Help"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             <Typography variant="title" component="div">
                <Box fontSize="h5.fontSize">Usage</Box>
                <Box fontSize="body.fontSize">
                    This application offers exploration of requirements and their relations. By clicking on a requirement,
                    all related requirements are shown. Those requirements have a symbol on the left upper corner to describe 
                    the nature of relation that links them to the before clicked requirement. At any time another requirement
                    can be selected to allow exploration of its related requirements. <br />
                    Every requirement also links directly to its source. A click on the button "Source" opens a new Browser Tab.
                </Box>
                <Box fontSize="h5.fontSize">Symbols</Box>
                <Box fontSize="body.fontSize">
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Relation</TableCell>
                        <TableCell align="right">Symbol</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Disjoins</TableCell>
                            <TableCell align="right"> &#8741;</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Belongs</TableCell>
                            <TableCell align="right"> &#8838;</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Repeats</TableCell>
                            <TableCell align="right">&#8660;</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Contradicts</TableCell>
                            <TableCell align="right"> &#8853;</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Extends</TableCell>
                            <TableCell align="right"> &gt;</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Excepts</TableCell>
                            <TableCell align="right"> &#11005;</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Constraints</TableCell>
                            <TableCell align="right"> &#10148;</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Characterizes</TableCell>
                            <TableCell align="right"> &#11106;</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>            
                </Box>
             </Typography>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}