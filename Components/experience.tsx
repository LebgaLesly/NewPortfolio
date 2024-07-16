"use client";

//import dependencies
import React, { Fragment } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


//import components
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import useSectionView from "@/hooks/usesectionview";

const Experience = () => {
  const { ref } = useSectionView("Experience");

  return (
    <section
      id="experience"
      className="max-w-[53rem] scroll-mt-28 text-center sm:mb-60 mb-28 mt-28 sm:mt-0"
      ref={ref}
    >
      <SectionHeading> My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => {
          return (
            <Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  margin: "0px 4px"
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: "white",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </Fragment>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
