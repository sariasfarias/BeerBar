import { IItem } from "../../types";

export const ItemDetail = ({name, price_per_unit, total} : IItem) => {
    return(
        <>
        <p><strong>Name: </strong> {name}</p>
        <p><strong>Price per unit: </strong> {price_per_unit.toString()}</p>
        <p><strong>Total: </strong> {total.toString()}</p>
        </>
    ); 
}