"use client"

import { useEffect, useState } from "react"

export default function Bgeffect() {
    let [ani, aniSet] = useState(false)
    let [muncul, munculSet] = useState(0)
    useEffect(() => {
        // function scroll() {
        //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        //     const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        //     const scrollPercent = (scrollTop / scrollHeight) * 100;
        //     sizeSet(scrollPercent);
        //     console.log(scrollPercent)
        // }
        // window.onscroll = scroll
        async function munculp() {
            aniSet(true)
            let delay = async (ms) => {
                return new Promise(resolve => setTimeout(resolve, ms))
            }
            await delay(3000)
            munculSet(muncul + 1)
            aniSet(false)
            console.log(muncul)
        }
        if (!ani) {
            munculp()
        }
    }, [ani])
    return (<>
        <div className="fixed overflow-hidden z-[-2] animate-pulse">
            <div className="fixed w-[200%] overflow-hidden top-0 left-[-50%] duration-0 bg-gradient-to-r min-h-[20%] from-transparent dark:via-lime-400/30 via-blue-800/30 to-transparent animate-spin-slow"></div>
        </div>
        {muncul > 0 ? <div className="fixed overflow-hidden z-[-2]">
            <div className="fixed w-[200%] overflow-hidden top-[20%] left-[-50%] duration-0 bg-gradient-to-r min-h-[20%] from-transparent dark:via-cyan-400/30 via-sky-800/30 to-transparent animate-spin-slow"></div>
        </div> : ``}
        {muncul > 1 ? <div className="fixed overflow-hidden z-[-2]">
            <div className="fixed w-[200%] overflow-hidden top-[40%] left-[-50%] duration-0 bg-gradient-to-r min-h-[20%] from-transparent dark:via-yellow-400/30 via-purple-800/30 to-transparent animate-spin-slow"></div>
        </div> : ``}
        {muncul > 2 ? <div className="fixed overflow-hidden z-[-2]">
            <div className="fixed w-[200%] overflow-hidden top-[60%] left-[-50%] duration-0 bg-gradient-to-r min-h-[20%] from-transparent dark:via-green-400/30 via-violet-800/30 to-transparent animate-spin-slow"></div>
        </div> : ``}
        {muncul > 3 ? <div className="fixed overflow-hidden z-[-2]">
            <div className="fixed w-[200%] overflow-hidden bottom-0 left-[-50%] duration-0 bg-gradient-to-r min-h-[20%] from-transparent dark:via-blue-400/30 via-pink-800/30 to-transparent animate-spin-slow"></div>
        </div> : ``}
    </>
    )
}