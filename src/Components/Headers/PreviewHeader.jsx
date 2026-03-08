import React from 'react'
import { Zap } from "lucide-react";

const PreviewHeader = () => {
    return (
        <div className="w-full h-13.5 bg-[#262626] text-white px-6 py-3 flex items-center justify-between">

            {/* Left Side - Logo */}
            <div className='flex justify-center items-center gap-0.5'>
                <Zap size={18} className="text-green-500 font-bold  " />
                <a
                    href="https://themeforest.net/item/agritec-agriculture-organic-farm-wordpress-theme/60021841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-green-400 transition-colors duration-300 py-18 font-mono"
                >
                    envatomarket
                </a>
            </div>

            {/* Right Side - Buy Button */}
            <div>
                <a
                    href="https://themeforest.net/checkout/from_item/60021841?license=regular&support=bundle_6month"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-1.5 bg-[#82b440] text-white text-[14px] rounded-sm shadow-[0px_2px_0px_#6f9a37]"
                >
                    Buy now
                </a>
            </div>

        </div>
    )
}

export default PreviewHeader