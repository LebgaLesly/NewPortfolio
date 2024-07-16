"use client";

//import dependencies
import React, { useContext } from "react";

//import components

import { ThemeContext } from "@/context/theme-context";


const UseTheme = () => {
    const context = useContext(ThemeContext)

    if (context === null) {
        throw new Error(
            "useTheme must be used within a ThemeContextProvider"
        )
    }

    return context;
}

export default UseTheme;