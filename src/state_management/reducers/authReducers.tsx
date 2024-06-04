import { UserAuthData } from "../../interfaces/AuthInterface"
import { OrderData } from "../../interfaces/ProductINterface";
import ActionType from "../../resources/enums"

interface AuthLoginAction {
    type: ActionType.LOGIN,
    payload: UserAuthData
}
interface LogoutAction {
    type: ActionType.LOGOUT
}
interface CartAction {
    type: ActionType.ADD_TO_CART,
    payload: OrderData;
}
interface CartRemove{
    type: ActionType.REMOVE_CART_DATA
}
export interface IRootState {
    isLoggedIn: boolean;
    authData?: UserAuthData;
    cartData?: OrderData;
}
const initialState: IRootState = {
    isLoggedIn: false,
    authData: {} as UserAuthData,
    cartData: {
        products: []
    }
}
type Action = AuthLoginAction | LogoutAction | CartAction | CartRemove;

export const authReducers = (state = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.LOGOUT:
            return {
                isLoggedIn: false,
                authData: {} as UserAuthData,
            };
        case ActionType.LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                authData: { ...state.authData, ...action?.payload },
            }
        case ActionType.ADD_TO_CART:
            return {
                ...state,
                isLoggedIn: true,
                cartData: {
                    ...state.cartData,
                    products: [
                        ...(state.cartData?.products || []),
                        action.payload
                    ]
                }
            };
        case ActionType.REMOVE_CART_DATA:
            return{
                isLoggedIn: true,
                authData: { ...state.authData },
                cartData: {
                    products: []
                }
            }

        default:
            return state;
    }
}


