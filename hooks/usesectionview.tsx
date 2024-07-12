'use client'
//import dependencies
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

//import components 
import useActiveSectionContext from "@/hooks/useactivesection"

//type imports
import type { SectionName } from "@/lib/types";


const useSectionView = (sectionName: SectionName, threshold = 0.75) => {
    const { ref, inView } = useInView({
        threshold,
      })
      const { setActiveSection, timeOfLastClick } = useActiveSectionContext()
    
    
      useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
          setActiveSection(sectionName)
        }
      
      }, [inView, setActiveSection, timeOfLastClick, sectionName])

      return {
        ref,
      }
}

export default useSectionView