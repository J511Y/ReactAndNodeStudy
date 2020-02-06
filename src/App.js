import React, {Component} from 'react';
import './App.css';
import Customer from './Components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles} from '@material-ui/core/styles';
import { render } from '@testing-library/react';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/64/64/any',
    'name' : '홍길동',
    'birthday' : '900101',
    'gender' : '남자',
    'job' : '백수'
  }
  , {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '유준혁',
    'birthday': '950109',
    'gender': '남자',
    'job': '연구원'
  }
  , {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '젤리',
    'birthday': '001231',
    'gender': '남자',
    'job': '프로그래머'
  }
]

class App extends Component {
  render() {
    const{ classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ); })}
          </TableBody>
        </Table>
      </Paper>
    );
  };
}

export default withStyles(styles)(App);
