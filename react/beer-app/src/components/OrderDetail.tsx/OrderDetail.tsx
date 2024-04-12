import { useEffect, useState } from "react";
import { IItem, IOrder, IOrderDetail, IRoundItem } from "../../types";
import { getOrder } from "../../api/Order";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { RoundDetail } from "../RoundDetail/RoundDetail";


export function OrderDetail(props : IOrderDetail) {
    const [data, setData] = useState<IOrder>();
    const [error, setError] = useState<boolean>(false);
    
    useEffect(()=> {
      getOrder(props.orderId, setData, setError);
    }, [props.orderId]);

    const items = data?.items || [];
    const rounds = data?.rounds || [];
    const created = data?.created || '';

    return(
        <div>
            { error ?
            (<p><strong>Ups empty order!</strong></p>)
            : (<>
                <p><strong>Created: </strong> {created.replace('Z', '').replace('T', '')} </p>
                <p><strong>Paid: </strong> {data?.paid ? 'YES' : 'NO'}</p>
                <p><strong>Subtotal: </strong> {'$ ' + data?.subtotal}</p>
                <p><strong>Discounts: </strong> {'$ ' + data?.discounts}</p>
                <p><strong>Items: </strong> <br/>
                    {items.map((item:IItem, index) => 
                        <ItemDetail
                            key={'item-'+index} 
                            name={item.name} 
                            price_per_unit={item.price_per_unit} 
                            total={item.total} 
                        /> 
                    )}
                </p>
                <div><strong>Rounds: </strong> <br/>
                    {rounds.map((round:IRoundItem, index) => 
                        <RoundDetail 
                            key={'round-'+index}
                            created={round.created} 
                            items={round.items}
                            index={index}
                        />
                    )}

                </div> 
            </>)}  
        </div>
    );
} 