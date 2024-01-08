'use client'

import './globals.css'

import Image from "next/image";
import ContentContainer from "@/components/ContentContainer";
import Inputfield from '../components/Inputfield';
import PriceInformationArea from '../components/PriceInformationArea';
import RectangleRadioBut from "@/components/RectangleRadioBut";
import laser_svg from '../../public/laser.svg'
import color_svg from '../../public/colorlocation.svg'
import SquareRadioBut from "@/components/SquareRadioBut";
import CustomButton from "@/components/CustomButton";

import ChooseFile from "@/components/ChooseFile";
import InfoLabel from "@/components/InfoLabel";
import CustomizationStep from "@/components/CustomizationStep";
import { useState } from "react";
import CustomFooter from "@/components/CustomFooter";


const colors = ["purple", "silver", "pink", "olive", "charcoal", "bronze", "teal", "coral", "mauve", "ruby"]

export default function Home() {

  const [nextPage, setNextPage] = useState<boolean>(false)
  const [decorationMethod, setDecorationMethod] = useState<string>("")
  const [decorationSetup, setDecorationSetup] = useState<string>("")
  const [quantity, setQuantity] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [color, setColor] = useState<string>("")
  const [artWork, setArtWork] = useState<string>("")
  const [specialInstuction, setSpecialInstuction] = useState<string>("")

  function changeState(active: boolean) {
    setNextPage(active)
  }

  return (
    <ContentContainer className="flex flex-col items-center bg-gray-100">
      <h1 className="text-color-1 text-center">Costumize Your Order</h1>
      <div className="bg-white  w-[70%] flex flex-row">
        {!nextPage ? (
          <div className="p-10 w-[60%] ">

            <CustomizationStep title="1. Quantity & Price">
              <Inputfield className="w-32 h-9 mx-3 bg-gray-100 rounded-md" type='number' placeholder='50 min' onChange={setQuantity}> EnterQuantity </Inputfield>
              <PriceInformationArea />
            </CustomizationStep>

            <CustomizationStep title='2. Select Imprint Method'>
              <RectangleRadioBut icon={laser_svg} onChange={() => setDecorationMethod("Laser Engraving")}>Laser Engraving</RectangleRadioBut>
              <RectangleRadioBut icon={color_svg} onChange={() => setDecorationMethod("1 Color, 1 Location Imprint")}>1 Color, 1 Location Imprint</RectangleRadioBut>
            </CustomizationStep>

            <CustomizationStep title="3. Select Color">
              <div className='grid grid-cols-7 gap-4'>
                {

                  colors.map((color, index) => (
                    <div key={index}>
                      <SquareRadioBut onChange={() => setColor(color)}>{color}</SquareRadioBut>
                    </div>
                  ))}
              </div>
            </CustomizationStep>

            <div className='mt-10'>
              <CustomFooter />
              <div className='flex flex-row gap-2 justify-center'>
                <CustomButton>Back to Product</CustomButton>
                <CustomButton primary={true} onClick={() => setNextPage(true)}>Next Step</CustomButton>
              </div>
            </div>

          </div>
        ) : (
          <div className="p-10 w-[60%] ">

            <CustomizationStep title="4. Add You Artwork">
              <ChooseFile />
              <p className='text-[12px] font-medium text-color-6 text-left'> Option 2 </p>
              <input className="w-full h-14 bg-gray-100 rounded-md"
                type='text'
                placeholder='Enter text'
              />
              <p className='text-[12px] font-medium  text-color-6 text-left'> Option 3 </p>
              <div className='w-auto h-14 h-max-[100px] bg-whitesmoke-300 text-gray-600 rounded-md hover:shadow ring-2 ring-transparent peer-checked:text-sky-600 peer-checked:ring-sky-500 peer-checked:ring-offset-2'>
                <div className='flex flex-row'>
                  <input
                    type='checkbox'
                    className='peer sr-only'
                    name='contact'
                  />
                  <p className='text-[16px] font-medium text-black mb-1 pl-3'>
                    Contact me
                  </p>
                </div>
              </div>
              <div className="text-[14px] leading-[26px]  text-dimgray text-left">
                Our art department will contact you to create a free digital logo or layout.
              </div>
            </CustomizationStep>

            <CustomizationStep title="5. Special Instuction">
              <p className="text-[12px] font-medium text-color-6 text-left">Special Instructions - Optional</p>
              <Inputfield className="w-full h-28 bg-gray-100 rounded-md" placeholder={'Tell us anything to help your artist to deliver your eperoof to your liking.'} onChange={setSpecialInstuction} ></Inputfield>
            </CustomizationStep>

            <div className='mt-10'>
              <CustomFooter />
              <div className='flex flex-row gap-2 justify-center'>
                <CustomButton>Back to Product</CustomButton>
                <CustomButton onClick={() => setNextPage(false)}>Previous Step</CustomButton>
                <CustomButton primary={true}>Add Cart</CustomButton>
              </div>
            </div>
          </div>

        )
        }
        <div className="w-px items-stretch bg-[#E8EDF0] my-10"></div>
        <div className="p-10 w-[40%]">

          <div className='mb-10'>
            <h1 className=" text-indigo-900 text-xl font-semibold font-['Montserrat']">Product Details</h1>
            <div className=" w-full h-[73px] text-left text-[18px] text-color-6">
              <Image
                className="rounded-md w-[73px] h-[73px] object-cover"
                src={"/images/viking.png"}
                width={50}
                height={50}
                alt=""

              />
              <div className="font-semibold inline-block">The Viking CollectionTM 20 OZ. Nova Tumbler</div>
            </div>
            <div className='mt-10'>
              <div className=" text-[18px] leading-[21px] capitalize font-medium font-poppins text-color-1 text-left">order summary</div>
              <div className='flex flex-col gap-4 list-none pl-0'>
                <InfoLabel label="Decoration Method" value={decorationMethod} ></InfoLabel>
                <InfoLabel label="Decoration Setup Charge" value={`${decorationSetup}`} ></InfoLabel>
                <InfoLabel label="Quantity" value={`${quantity}`} ></InfoLabel>
                <InfoLabel label="Price" value={`${price}`} ></InfoLabel>
                <InfoLabel label="Color" value={color} ></InfoLabel>
                {nextPage ? (
                  <>
                    <InfoLabel label="Artwork" value={artWork} ></InfoLabel>
                    <InfoLabel label="Special Instuction" value={specialInstuction} ></InfoLabel>
                  </>
                ) : (<></>)}
              </div>

            </div>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}
