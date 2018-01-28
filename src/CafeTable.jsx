import React, { Component } from 'react';
import CafeRow from './CafeRow';

export default class CafeTable extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <table>
        <tbody>
          <tr>
            <th>Store Name</th>
            <th>Telephone</th>
            <th>Wifi</th>
          </tr>
          {this.props.cafes.map(cafe => (
            <CafeRow key={cafe.id} cafe={cafe}/>
          ))}
        </tbody>
      </table>
    )
  }
}