import { useLoaderData } from "react-router-dom";
import CartTable from "./CartTable";
import { useState } from "react";


const Cart = () => {

    const cartData = useLoaderData()

    const [cart,setCart]=useState(cartData)

    const handleDeleteCart=(cartId)=>{
        const updatedCart=cart.filter(item=>item._id!==cartId)
        setCart(updatedCart)
    }

    const rowColors = ['bg-[#F3F3F3]', 'bg-[#D0D0D0]'];

    const hoverColors=['hover:bg-blue-100']

    const scale=['hover:scale-105']

    const duration=['duration-300']

    const cursor=['cursor-pointer']

    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10  " >


            <div>

                {/* table */}
                <div className="grid grid-cols-4 text-center bg-[#444] text-white font-semibold " >
                    <p className="py-3 px-6" >Sl.NO</p>
                    <p className="py-3 px-6" >Product</p>
                    <p className=" py-3 px-6 " >Price</p>
                    <p className="py-3 px-6 " >Order</p>
                </div>
            </div>

            <div>
                {cart?.map((item,index)=><CartTable key={index} data={item}  color={rowColors[index % rowColors.length]} hover={hoverColors[index%hoverColors.length]} scale={scale[index%scale.length]} duration={duration[index%duration.length]} cursor={cursor[index%cursor.length]} handleDeleteCart={handleDeleteCart} />)}
            </div>


        </div>
    );
};

export default Cart;