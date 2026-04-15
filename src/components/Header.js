import { useState } from "react"
import moonIcon from "../assets/images/moon-icon.svg"
import emptyImg from "../assets/images/empty-img.png"

import Modal from "./Modal"
import Button from "./Button"
import toast, { Toaster } from "react-hot-toast"

function Header({country, setCountry, loading, setLoading}){
    const [isOpen, setIsOpen] = useState(false)
    const [chooseImg, setChooseImg] = useState(emptyImg)
    const [cityName, setCityName] = useState('')
    const [capltial, setCapltial] = useState('')
    const [population, setPopulation] = useState('')



    function handleCancelBtn(){
        setIsOpen(false)
        setTimeout(() => {
            setChooseImg(emptyImg)
        }, 400);
    }

    function handleModalSubmit(e){
        e.preventDefault()

        const data = {
            id:country.length ? country[country.length - 1].id + 1 : 1,
            name: cityName,
            capital: capltial,
            population: population,
            flag: chooseImg,
            isLiked: false,
            isBasket: false
        }

        setLoading(true)
        setTimeout(() => {
            toast.success('Successfully toasted!')
            setCountry([data, ...country])
            setLoading(false)

        }, 800);

        setIsOpen(false)
        setCityName('')
        setCapltial('')
        setPopulation('')
        setChooseImg(emptyImg)
    }
    
    return (
        <header className="mb-8">
            <Toaster position="top-center" reverseOrder={false}/>
            <div className="py-[23px] px-[80px] shadow-lg flex items-center justify-between">
                <h1 className="text-[24px] leading-[32px] font-[700]">Where in the world?</h1>
                <div className="flex items-center gap-2">
                    <button className="flex items-center gap-2 border border-slate-500 py-1 px-2 rounded-lg">
                        <img src={moonIcon} width={"20"} height={"20"} alt="moon-icon" />
                        <p className="text-[16px] font-medium">Dark Mode</p>
                    </button>
                    <button onClick={() => setIsOpen(true)} className="p-1 rounded-md border border-slate-400">
                        modal
                    </button>
                </div>
            </div>


            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <form onSubmit={handleModalSubmit} className="px-2 mt-5">
                    <div className="flex items-center justify-between">
                        <label className="w-[49%] cursor-pointer">
                            <input onChange={(e) => setChooseImg(URL.createObjectURL(e.target.files[0]))} type="file" className="hidden"/>
                            <img className="h-[180px] rounded-md" src={chooseImg} width={"100%"} alt="imgs"/>
                        </label>
                        <div className="w-[49%] space-y-2">
                            <input onChange={(e) => setCityName(e.target.value)} value={cityName} className="w-full p-2 rounded-lg outline-none" type="text" placeholder="Enter City name" required/>
                            <input onChange={(e) => setCapltial(e.target.value)} value={capltial} className="w-full p-2 rounded-lg outline-none" type="text" placeholder="Enter Capltial" required/>
                            <input onChange={(e) => setPopulation(e.target.value)} value={population} className="w-full p-2 rounded-lg outline-none" type="number" placeholder="Enter Population" required/>
                        </div>
                    </div>

                    <div className="flex justify-between mt-3">
                        <Button onClick={handleCancelBtn} title={"Cancel"} extraStyle={"w-[49%] bg-red-500 text-white"} type={"button"}/>
                        <Button title={"Submit"} extraStyle={"w-[49%] bg-green-500 text-white"} type={"submit"}/>
                    </div>
                </form>
            </Modal>
        </header>
    )
}

export default Header