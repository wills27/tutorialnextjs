const PriceBox: React.FC<{
    price: string;
    discountPrice: string;
    quantityRange: string;
    freeSetup?: boolean;
}> = ({
    price,
    discountPrice,
    quantityRange,
    freeSetup = false,
}) => {
    return (
        <div className="text-center w-auto">
            <div className=" rounded-md bg-whitesmoke-200 flex flex-col justify-center py-2 px-4">
                <p className="text-[14px] font-medium font-montserrat text-color-5 opacity-[0.6] my-0">
                    {quantityRange}
                </p>
                <section className="flex flex-row items-center justify-center ">
                    <p className="text-[14px] font-medium font-montserrat my-0">
                        {price}
                    </p>
                    <p className="text-[10px] [text-decoration:line-through] font-medium font-montserrat text-color-5 opacity-[0.6] mx-2 my-0">
                        {discountPrice}
                    </p>
                </section>
            </div>
            {freeSetup && (
                <div className=" bottom-[5px] font-medium text-yellow-500 text-center">
                Free Setup
                </div>
            )}
            
        </div>
    );
};

export default PriceBox;
