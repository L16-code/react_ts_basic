import { Dispatch } from 'redux';
import { UserAuthData } from '../../interfaces/AuthInterface';
import ActionType from '../../resources/enums';
import { AddProductDetails, ProductDetails } from '../../interfaces/ProductINterface';

export const LoginAction = (data: UserAuthData) => {
    return {
        type: ActionType.LOGIN,
        payload: data,
    };
};

export const logOutAction = () => {
    return {
        type: ActionType.LOGOUT,
    };
};
export const AddCart = (data: AddProductDetails[]) => {
    return {
        type: ActionType.ADD_TO_CART,
        payload: data,
    };
};
export const RemoveCart = () => {
    return {
        type: ActionType.REMOVE_CART_DATA,
    };
};