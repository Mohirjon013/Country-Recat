import React from 'react'

function CountiresItem({item}) {
    return (
        <li className="w-[264px] pb-[20px] rounded-md shadow-lg bg-white">
            <img className="object-cover rounded-t-md h-[160px] mb-[24px]" src={item.flag} width={"264"} height={"160"}/>
        
            <div className="pl-[24px]">
                <h2 className="font-[700] text-[20px] leading-[26px] ">{item.name}</h2>
                <p className="font-[700] text-[14px] leading-[16px] mt-4  ">Population:
                    <span className="font-[400] text-[14px] leading-[16px] mt-[16px]"> {item.population}</span>
                </p>
                <p className="font-[700] text-[14px] leading-[16px] py-1">Region:
                    <span className="font-[400] text-[14px] leading-[16px] mt-[16px]"> {item.name}</span>
                </p>
                <p className="font-[700] text-[14px] leading-[16px]">Capital:
                    <span className="font-[400] text-[14px] leading-[16px] mt-[16px]"> {item.capital}</span>
                </p>
            </div>
        </li>
    )
}

export default CountiresItem
