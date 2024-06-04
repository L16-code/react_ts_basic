export interface ProductDetails {
    id: number;
    name: string;
    image: string;
    price: number;
}
export interface OrderData{
    products?:AddProductDetails[]
    id?: number;

}
export interface AddProductDetails{
    id?: number;
}