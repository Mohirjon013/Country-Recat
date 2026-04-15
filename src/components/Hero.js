import searchIcon from "../assets/images/search-icon.svg"
import loadingGif from "../assets/images/loading-gif.gif"

import CountiresItem from "./CountiresItem"


function Hero({countries, country, setCountry, loading, setLoading}){

    function handleSearchCity(e){
        const searchedValue = e.target.value
        setLoading(true)
        
        setTimeout(() => {
            const searchedCtiy = countries.filter(item => item.name.toLocaleLowerCase().includes(searchedValue.toLocaleLowerCase()))        
            setCountry(searchedCtiy)
            setLoading(false)

        }, 800);

    }

    function handleChangeSelect(e){
        const selectValue = e.target.value
        setLoading(true)

        if(Number(selectValue) === 0){
            setTimeout(() => {
                setCountry(countries)
                setLoading(false)
            }, 800);
        }
        else{
            setTimeout(() => {
                const selectedCity = countries.filter(item => item.id == selectValue)
                setCountry(selectedCity)
                setLoading(false)
            }, 800);
        } 
    }
    return (
        <main> 
            <section className="pb-[45px]">
                <div className="w-[1250px] mx-auto px-[20px]">
                    <div className=" mb-[48px] flex items-center justify-between">
                        <label className="w-[425px] py-3 px-4 rounded-md shadow-md flex items-center gap-3 bg-white">
                            <img src={searchIcon} width={"24"} height={"24"} alt="search-icon"/>
                            <input onChange={handleSearchCity} className="w-full outline-none" type="search" placeholder="Search for a country..." />
                        </label>
                        <select onChange={handleChangeSelect}>
                            <option value={0}>All</option>
                            {countries.map(item => <option key={item.id} value={item.id}>{item.capital}</option>)}
                        </select>
                    </div> 

                    <div className="flex flex-wrap items-start justify-between gap-y-7">
                        { loading ? <img className="mx-auto mt-8" src={loadingGif} width={"200"} height={"200"} alt="loading-icon"/> 
                            : country.map(item => {
                                return (
                                    <CountiresItem item={item} key={item.id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero