import OrderButton from "../OrderButton/OrderButton";

export function OrderList(){
    return (
        <>
            <OrderButton title={"Order Information success"} orderId={1}/>
            <OrderButton title={"Order Information fails"} orderId={0}/>
        </>
    );
}