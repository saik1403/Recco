import { useEffect } from "react";
import data from "../../mock/data";
import { useDispatch, useSelector } from "react-redux";
import { addOrderDetails } from "./orderSlice";
import store from "./store";

export const useOrders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addOrderDetails(data))
    }, [])

    return data;
}
