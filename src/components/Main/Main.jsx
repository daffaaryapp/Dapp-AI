import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

    const  {onSent,recentPrompt,showResult,loading,resultData,setInput,input,input2,setInput2,select,setSelect} = useContext(Context);

    return (
        <div className='main'>

            <div className='nav'>
                <p>Dapp AI</p>
                <img src={assets.user} alt=''/>
            </div>

            <div className="main-container">

                {!showResult
                ?<>
                <div className="greet">
                    <a target='_blank' href="https://saweria.co/daffaaryapp">
                        <img src={assets.bannerWide} alt="" />
                    </a>
                    <p className='mt-10'><span>Hello, Tuan Daffa</span></p>
                    <p className='mb-10'>ada yang bisa saya bantu</p>
                </div>


                {/* <div className="cards">
                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.message_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>suggest beautiful places to see</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div> */}
                </>
                : <div className='result'>
                    <div className="result-title">
                        <img src={assets.user} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.ipdn} alt="" />
                        {loading
                        ?
                        <div role="status">
                            <svg aria-hidden="true" class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                        :<p dangerouslySetInnerHTML={{ __html:resultData }}></p>
                        }
                    </div>
                </div>
                }
               

                <div className="main-bottom">
                    {/* <div className="search-box"> */}
                        {/* <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' /> */}
                        {/* <input onChange={(e)=>setInput2(e.target.value)} value={input2} type="text" placeholder='Enter a prompt here' /> */}
                        {/* <select onChange={(e) => setSelect(e.target.value)} value={select}>
                            <option value="">Pilih opsi</option>
                            <option value="indo">indo</option>
                            <option value="arab">arab</option>
                            <option value="thailand">thailand</option>
                        </select>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div> */}

                    
                    {/* <label for="countries" class="mt-5 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
                    <select onChange={(e) => setSelect(e.target.value)} value={select} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option>Pilih</option>
                        <option>Canada</option>
                        <option>France</option>
                        <option>Germany</option>
                    </select> */}

                    
                    <label for="base-input" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bertanyalahh</label>
                    <input placeholder='disini' onChange={(e)=>setInput(e.target.value)} value={input} type="text" id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                
                    <button onClick={()=>onSent()}  class="mt-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Gasss..</button>

                    <p className='mt-10'>support kami dengan nominal berpapun, Rp10k,Rp5k</p>
                    <div className="saweria flex mt-3">
                        <img width={200} src={assets.saweria} alt="" />
                        <a className='button-56' href="https://saweria.co/daffaaryapp" target='blank'>Klik Support Rp..</a>
                    </div>

                </div>
                    <p className="bottom-info">
                        by daffa aryasatya
                    </p>
            </div>
        </div>
    )
}

export default Main
