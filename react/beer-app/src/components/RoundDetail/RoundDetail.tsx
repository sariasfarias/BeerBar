import { IOrderItem, IRoundItemInformation } from "../../types";
import './RoundDetail.scss';

export const RoundDetail = ({created, items, index}:IRoundItemInformation) => {
    return(
        <>
        <div className='round-detail'><strong>{'Round #' + index}</strong></div>
        <div><strong>Created: </strong> {created.replace('Z', '').replace('T', '')}</div>
        <div><strong>Items: </strong> {
            items.map((item: IOrderItem) => {
                return (
                    <p><strong>{item.quantity.toString()}</strong> {item.name}</p> 
                );
            })
        }</div>
        </>
    );  
}