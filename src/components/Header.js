import { useOrders } from "../util/useOrders";

const Header = () => {
    const order = useOrders();
    return (
        <div className="bg-[#1f623f] h-16">
            <div className="flex justify-between mx-24">
                <div className="flex flex-row mt-5">
                    <h1 className="text-white text-xl font-serif italic mr-5">
                        Recco
                    </h1>
                    <h1 className="text-white text-lg mr-5">
                        Store
                    </h1>
                    <h1 className="text-white text-lg mr-5">
                        Orders
                    </h1>
                    <h1 className="text-white text-lg mr-5">
                        Analytics
                    </h1>
                </div>
                <div className="flex flex-row mt-5">
                    <div className="text-white mr-7">
                    <ion-icon name="cart" size="large"></ion-icon>
                    </div>
                    <div className="flex flex-row">
                    <h1 className="text-white text-lg mr-1">
                        Hello,James
                    </h1>
                    <div className="text-white mt-1">
                    <ion-icon name="arrow-dropdown" ></ion-icon>
                    </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
export default Header;