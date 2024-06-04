import { useSelector } from 'react-redux';
import { RootState } from '../../state_management/reducers';
import ProductData from '../../resources/ProductData';
import {ProductDetails } from '../../interfaces/ProductINterface';
import { useDispatch } from 'react-redux';
import { RemoveCart } from '../../state_management/actions/AuthActions';

const MyOrders = () => {
  const { cartData } = useSelector((state: RootState) => state.authReducers);

  const flattenedArray = cartData?.products?.flatMap(innerArray => innerArray) ?? [];
  console.log(flattenedArray)
  const new_Arr = flattenedArray.map((item) => ProductData.find(product => product.id === item.id));
  const filteredNewArr = new_Arr.filter((item): item is ProductDetails => item !== undefined);
  let totalPrice = 0;
  filteredNewArr.map(item =>{
    totalPrice+=item.price
  })
  const dispatch=useDispatch();
  return (
    <div>
      <h1>My Orders</h1>
      {filteredNewArr.map((item,index) => (
        <div key={index}>
          <h5>{item.name}</h5>
          <h5>{item.price}</h5>
          <img src={item.image} alt={item.name} />
        </div>
      ))}
      <div>
        <h1> totalPrice:-{totalPrice}</h1>
      </div>
      <div>
        <button onClick={()=>{
          dispatch(RemoveCart())
        }}>Purchase</button>
      </div>
    </div>
  );
};

export default MyOrders;
