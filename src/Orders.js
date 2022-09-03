import React, { useEffect, useState } from 'react'
import { useStateValue } from './StateProvider';

function Orders() {
  const [{basket}, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
}, [])

  return (
    <div className='orders'>
       <div className='orders_oder'>
        {/* orders?.map(order => (<Order order={order} />)) */}
       </div>
    </div>
  )
}

export default Orders