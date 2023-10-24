import {  useState } from "react";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
    const cartData = useLoaderData()
    const [open, setOpen] = useState(false)
    const toogleRowOpen = (index) => {
        setOpen({ ...open, [index]: !open[index] })
    }

  

    return (
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 my-10" >

            <div>

            </div>

            {/* table */}
            <table className=" w-full overflow-hidden" >

                {/* thead */}
                <thead className="text-center" >
                    <tr className="bg-[#D0D0D0]" >
                        <th className="py-3 px-6" >Sl.NO</th>
                        <th className="py-3 px-6" >Product</th>
                        <th className="py-3 px-6" >Price</th>
                        <th className="py-3 px-6" >Order</th>
                    </tr>
                </thead>

                {/* tbody */}

                <tbody className="text-center" >
                    {cartData.map((item, index) => (
                        <tr key={index} className=" bg-[#F3F3F3] hover:bg-white  cursor-pointer hover:scale-105 duration-300" >
                            <td className="py-3 px-6" >{index + 1}</td>
                            <td className="py-3 px-6" >{item.servicesData.serviceName}</td>
                            <td className="py-3 px-6" >$ {item.servicesData.servicePrice}</td>
                            <td className="py-3 px-6" >
                                <div>
                                    <button onClick={() => toogleRowOpen(index)} className="bg-[#FF3811] px-3 py-1 rounded-md text-white font-bold" >Confirm</button>

                                    {open[index] && <ul className="bg-white p-2" >
                                        <li onClick={() => setOpen(false)} className="p-1 rounded hover:bg-blue-100" >Confirm</li>
                                        <li onClick={() => setOpen(false)} className="p-1 rounded hover:bg-blue-100" >Delete</li>
                                    </ul>}

                                </div>

                            </td>
                        </tr>
                    ))}
                </tbody>


            </table>

        </div>
    );
};

export default Cart;