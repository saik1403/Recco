import { useEffect, useState } from "react";
import { useOrders } from "../../util/useOrders";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus, addOrderDetails } from "../../util/orderSlice";
import Button from "../../components/Button";
import Avocado from "../../../Assets/Images/Avocado.jpg"
import store from "../../util/store";
import data from "../../../mock/data";
import Modal from "../../components/Modal";

const OrderConfiramationPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [index,setIndex] = useState();
    const openModal = (index) => {
        setIndex(index)
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const dispatch = useDispatch();
    useOrders();
    const orderDetails = useSelector(store => store.order.orderDetails)
    const orderId = orderDetails.orderId;
    const supplierDetails = orderDetails.supplierDetails;
    const productLabels = orderDetails.productLabels;
    const productList = orderDetails.productList;
    const noPressed = () =>{
        dispatch(updateStatus({ id: index, data: "Missing" }));
        setModalOpen(false);
    }
    const yesPressed = () =>{
        dispatch(updateStatus({ id: index, data: "Missing Urgent" }));
        setModalOpen(false);
    }
    const renderIcons = () => {
    }
    const renderSuppplierDetails = () => {
        return (
            supplierDetails.map((item, index) => {
                return (
                    <div className="flex flex-row flex-grow" key={index}>
                        {index > 0 ? <div className="border first:bordr-0 h-full border-slate-300 mr-4 rounded-xl">
                        </div> : null}
                        <div className="mr-3">
                            <p className="text-sm text-slate-500">
                                {item.label}
                            </p>
                            {
                                (item.type === "list"
                                ) && (
                                    renderIcons()
                                )
                            }
                            <p className="text-base font-semibold">
                                {item.value}
                            </p>
                        </div>
                    </div>
                );
            })
        );
    }
    const renderProductLabels = () => {
        return (
            productLabels.map((item, index) => {
                return (
                    <div className={`${index > 0 ? "mx-10" : "ml-20 mr-24"} `} key={index}>
                        <p className="text-sm font-medium text-slate-500">
                            {item.label}
                        </p>
                    </div>
                );
            })
        );
    }
    const renderButton = (status) => {
        switch (status) {
            case 'Approved':
                return (<Button label={"Approve order"} onClick={() => { }} className={"bg-green-600 text-slate-50"}></Button>);
            case 'Missing':
                return (<Button label={"Missing"} onClick={() => { }} className={"bg-red-600 border-red-600 text-slate-50"}></Button>);
            case 'Missing Urgent':
                return (<Button label={"Missing Urgent"} onClick={() => { }} className={"bg-red-600 border-red-600 text-slate-50"}></Button>);
            case 'Price updated':
                return (<Button label={"Price updated"} onClick={() => { }} className={"bg-orange-600 border-orange-600 text-slate-50"}></Button>);
            case 'Quantity updated':
                return (<Button label={"Quantity updated"} onClick={() => { }} className={"bg-orange-600 border-orange-600 text-slate-50"}></Button>);
            default:
                return <div className=""></div>;
        }
    }
    const showModal = () => {
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="bg-white p-16">
                <div className="flex flex-row">
                    <div className="text-lg font-bold">Missing product</div>
                    <div>
                        <ion-icon name="close" size="large"></ion-icon>
                    </div>
                </div>
            </div>
        </Modal>
    }
    const renderStatus = (status, index) => {
        return (
            <>
                <div className="w-[50%]">
                    {
                        renderButton(status)
                    }
                </div>
                <div className="flex flex-row mx-1">
                    <div className={`${status.includes("Approved") ? "text-green-600" : ""}`} onClick={() => { dispatch(updateStatus({ id: index, data: "Approved" })) }}>
                        <ion-icon name="checkmark" size="large"></ion-icon>
                    </div>
                    <div className={`${status.includes("Missing") ? "text-red-600" : ""}`} onClick={() => {openModal(index)}}>
                        <ion-icon name="close" size="large"></ion-icon>
                    </div>
                    <p>edit</p>
                </div>
            </>
        );
    }
    const renderProductList = () => {
        return (
            productList.map((item, index) => {
                return (
                    <div className="flex flex-row mt-6" key={index}>
                        <div className="ml-6 h-16 w-16">
                            <img src={Avocado} />
                        </div>
                        <div className="flex ml-2 w-52">
                            <p className="text-sm font-medium text-slate-500 ">
                                {item.productName}
                            </p>
                        </div>
                        <p className="mx-4 text-sm font-medium text-slate-500">
                            {item.brand}
                        </p>
                        <p className="mx-4 text-sm font-medium text-slate-500">
                            {item.price}
                        </p>
                        <p className="mx-4 text-sm font-medium text-slate-500">
                            {item.quantity}
                        </p>
                        <p className="mx-4 ml-14 text-sm font-medium text-slate-500">
                            {item.total}
                        </p>
                        <div className="ml-12 flex flex-row">
                            {
                                renderStatus(item.status, index)
                            }
                        </div>
                    </div>
                );
            })
        );
    }
    return (
        <div className="h-screen w-screen bg-[#fbfbfb] z-0">
            <div className="bg-white shadow-2xl py-2 pb-4">
                <div className="flex flex-row px-24 ">
                    <p className="text-sm text-slate-500 mr-1">Orders</p>
                    <div className="text-slate-500 mt-[1px] mr-1" >
                        <ion-icon name="arrow-dropright"></ion-icon>
                    </div>
                    <p className="text-sm text-slate-500 underline">
                        {`Order ${orderId}`}
                    </p>
                </div>
                <div className="flex felx-row justify-between px-24">
                    <div className="mt-2">
                        <p className="text-lg font-medium">
                            {`Order ${orderId}`}
                        </p>
                    </div>
                    <div>
                        <div className="flex flex-row">
                            <Button label={"Back"} onClick={() => { }} className="mr-4"></Button>
                            <Button label={"Approve order"} onClick={() => { }} className={"bg-emerald-600 text-slate-50"}></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-24 bg-white flex flex-row mt-6 p-5 rounded-md shadow-xl">
                {
                    supplierDetails && renderSuppplierDetails()
                }
            </div>
            <div className="mx-24 bg-white mt-6 p-7 rounded-md shadow-xl">
                <div className="flex flex-row justify-between w-full">
                    <div className="flex border-slate-300 border-2 h-11 w-96 rounded-3xl items-center text-slate-500 text-sm font-semibold">
                        <div className="flex flex-row justify-between w-full px-4">
                            <div className="">
                                <p>search...</p>
                            </div>
                            <div className="text-slate-500 " >
                                <ion-icon name="search"></ion-icon>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <Button label={"Back"} onClick={() => { }} className="mr-4"></Button>
                        <div className="mt-[2px]">
                            <ion-icon name="print" size="large"></ion-icon>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row border-slate-300 border-2 mt-6 p-4 rounded-t-2xl">
                    {
                        productLabels && renderProductLabels()
                    }
                </div>
                <div className="">
                    {
                        productList && renderProductList()
                    }
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="bg-white p-8 border shadow-xl rounded-xl">
                    <div className="w-full flex flex-row justify-between">
                        <div className="text-lg font-bold">Missing product</div>
                        <div onClick={()=>{closeModal( )}}>
                            <ion-icon name="close" size="large"></ion-icon>
                        </div>
                    </div>
                    <div className="mt-1 text-slate-600 text-sm">

                        "is chiken Brest fillets,Boneless..", Urgent ?
                    </div>
                    <div className="flex flex-row justify-end mt-1">
                        <div className="text-lg mr-3 font-medium cursor-pointer" onClick={()=>{noPressed()}}>No</div>
                        <div className="text-lg font-medium cursor-pointer" onClick={()=>{yesPressed()}}>Yes</div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};
export default OrderConfiramationPage;
