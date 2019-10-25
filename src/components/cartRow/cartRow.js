import React from 'react';
import MinMax from '~com/minmax/minmax';
import { Button } from 'react-bootstrap';


export default function (props) {
  
  return (
    <tr>
      <td><img src={props.product.imgSrc} height={70} /></td>
      <td>{props.product.title}</td>
      <td>{props.product.price}</td>
      <td>
        <MinMax
          min={1}
          max={props.product.rest}
          cnt={props.product.cnt}
          onChange={props.onChange}
        />
      </td>
      <td><b>{props.product.cnt * props.product.price}</b></td>
      <td>
        <Button variant="danger" onClick={props.onDelete}>Delete</Button>
      </td>
    </tr>
  );
}