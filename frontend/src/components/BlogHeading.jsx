
import React from "react";


function BlogHeading() {

    return  (
        <div>
             <div className="w-full bg-[#FFF5FF] text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                {/* p (Color: Charcoal #1B1F2B) */}
                <p className="text-sm font-medium text-[#1B1F2B]">Blog</p>
                {/* h1 (Color: Electric Blue #1E90FF) */}
                <h1 className="text-4xl sm:text-5xl font-bold text-[#1E90FF] mt-2">
                  Latest Cybersecurity Insights
                </h1>
                {/* p (Color: Charcoal #1B1F2B) */}
                <p className="mt-4 text-base text-[#1B1F2B]">
                  Stay updated with the latest cybersecurity trends and tips.
                </p>
              </div>
        </div>
            
    )
}


export default BlogHeading