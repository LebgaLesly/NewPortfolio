"use client";

//import dependencies
import React, { useContext } from "react";

//import components
import { ActiveSectionContext } from "@/context/active-section";


const UseActiveSectionContext  = () => {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error(
            "useActiveSectionContext must be used within an ActiveSectionContextProvider"
        )
    }

    return context;
}

export default UseActiveSectionContext;