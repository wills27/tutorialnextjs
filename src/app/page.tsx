import ColorGE from "@/components/ColorGE";
import CustomFooter from "@/components/CustomFooter";
import ImprintGE from "@/components/ImprintGE";
import ProductGE from "@/components/ProductGE";
import QuantityGE from "@/components/QuantityGE";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <h2 className="text-[36px] leading-[46px] capitalize font-montserrat  text-color-1 text-center">Costumize Your Order</h2>
      <div className=" flex justify-center">
        <div className="bg-white  w-[70%] flex flex-row">
          <div className="p-10 w-[60%] ">
            <QuantityGE></QuantityGE>
            <ImprintGE></ImprintGE>
            <ColorGE></ColorGE>
            <CustomFooter></CustomFooter>
          </div>
          <div className="p-10 w-[40%]">
            <ProductGE></ProductGE>
          </div>
        </div>
      </div>
    </div>
  )
}
