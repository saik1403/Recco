import { useEffect } from "react";
import data from "../../mock/data";
import { useDispatch } from "react-redux";
import { addOrderDetails } from "./orderSlice";

export const useOrders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addOrderDetails(data))
    }, [])

    return data;
}
