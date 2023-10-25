
const CartTable = ({data,color,hover,scale,duration,cursor}) => {
    console.log(data);
    const {servicesData:{serviceName,servicePrice},_id}=data||{}
    
    const handleDelete=(_id)=>{
        console.log(_id,"delete");

        fetch(`http://localhost:3000/cart/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    
    return (
        <div className="overflow-hidden">
            
            {/* table */}
            <div className={`grid grid-cols-4 text-center ${color} ${hover} ${scale} ${duration} ${cursor} `} >
                <p className=" py-3 px-6" >01</p>
                <p className="py-3 px-6 ">{serviceName}</p>
                <p className="py-3 px-6 " >{servicePrice}</p>
                <div className="py-3 px-6 " ><button onClick={()=>handleDelete(_id)} className="bg-[#FF3811] px-3 py-1 text-white font-bold rounded" >Confirm</button></div>
            </div>
        </div>
    );
};

export default CartTable;