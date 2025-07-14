import {memo} from 'react';

export const Small =memo( ({value}) => {

    console.log('i render again :(')
  return (
    <small>{value}</small>
  )
}
);
