import axios from "axios";
import { OrderURL } from "../constants";

export const getOrder = async (orderId: Number, setData: Function, setError: Function) : Promise<void> => {
    const url = OrderURL  + orderId
    try {
        const response = await axios.get(
            url, 
            {
                headers: {
                    'Content-Type': 'application/json',
                }, 
                withCredentials: false,
            },
        );

        await setData(response.statusText === "OK" ? response.data : []);
        await setError(response.statusText === "OK" ? false : true);

    } catch (error) {
        setData([]); 
        setError(true);
    }
}