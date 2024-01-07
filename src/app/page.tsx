'use client'
import ArtWorkGE from "@/components/ArtWorkGE";
import ColorGE from "@/components/ColorGE";
import ContentContainer from "@/components/ContentContainer";
import CustomFooter from "@/components/CustomFooter";
import ImprintGE from "@/components/ImprintGE";
import ProductGE from "@/components/ProductGE";
import QuantityGE from "@/components/QuantityGE";
import SpecialInstuction from "@/components/SpecialInstuction";


const colors = ["Purple", "Silver", "Pink", "Olive", "Charcoal", "Bronze", "Teal", "Coral", "Mauve", "Ruby"]

export default function Home() {
  const nextPage: boolean = false

  return (
    <div className="bg-gray-100">
      <h2 className="text-[36px] leading-[46px] m-0 p-8 capitalize font-montserrat  text-color-1 text-center">Costumize Your Order</h2>
      <ContentContainer>
        <div className=" flex justify-center">
          <div className="bg-white  w-[70%] flex flex-row">
            {nextPage ? (
              <div className="p-10 w-[60%] ">
                <QuantityGE />
                <ImprintGE />
                <ColorGE colorList={colors} />
                <CustomFooter />
              </div>
            ) : (
              <div className="p-10 w-[60%] ">
                <ArtWorkGE />
                <SpecialInstuction />
                <CustomFooter />
              </div>
            )
            }
            <div className="w-px items-stretch bg-[#E8EDF0] my-10"></div>
            <div className="p-10 w-[40%]">
              <ProductGE decorationMethod={"Laser Engraving"} decorationSetup={"$5"} quantity={150} price={701.76} color={"Purple"} />
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  )
}
