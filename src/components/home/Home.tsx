import ProductData from "../../resources/ProductData"
import { useSelector } from "react-redux";
import { RootState } from "../../state_management/reducers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddCart } from "../../state_management/actions/AuthActions";
import { AddProductDetails } from "../../interfaces/ProductINterface";
interface ProductValue {
  id:number;
  name: string;
  price: number;
  image: string;
}
const Home = () => {
  // const data =useSelector
  const { isLoggedIn } = useSelector((state: RootState) => state.authReducers);
  console.log(isLoggedIn )
  // console.log(ProductData);
  const navigate =useNavigate()
  const dispatch=useDispatch()
  const AddToCartHandler = (data: AddProductDetails[]) => {
    // console.log(data[0])
    if(!isLoggedIn){
      navigate('/login')
    }else{
      dispatch(AddCart(data))
    }
  };
  return (
    <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ margin: "2rem", fontWeight: "bold" }}>My Products</h1>
      <div style={{ width: '80%', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: "aliceblue", display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "2rem" }}>
        {ProductData.map((product: ProductValue) => {
          return (
            <div className="product-card" key={product.name.toString()}>
              <img src={product.image} alt="" className="product-card__image" />
              <h2 className="product-card__name">{product.name}</h2>
              <p className="product-card__price">${product.price.toFixed(2)}</p>
              <button className="product-card__button" onClick={() => AddToCartHandler([{ id: product.id }])}>Orders</button>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default Home