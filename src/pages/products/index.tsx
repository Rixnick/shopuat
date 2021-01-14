import React, { ReactElement } from 'react';
import Products from '../../components/Products';

interface Props {
  
}

export default function ProductsPage({}: Props): ReactElement {
  return (
    <div>
      <Products />
    </div>
  )
}
