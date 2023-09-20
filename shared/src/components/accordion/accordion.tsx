import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

interface IProAccordionProps {
  arcordions: {
    title: string;
    content: string;
  }[];
}

export const ProAccordion: React.FC<IProAccordionProps> = ({ arcordions }) => {
  return (
    <Accordion className="w-full" allowMultiple>
      {arcordions?.map((arcordion, index) => {
        return (
          <AccordionItem className="border-b border-gray-200 py-[17px]">
            <h2>
              <AccordionButton className="flex justify-between">
                <span className="text-left font-bold text-navy-900 flex-1">
                  {arcordion?.title}
                </span>
                <AccordionIcon className="text-left !text-navy-900" />
              </AccordionButton>
            </h2>
            <AccordionPanel
              className="text-left text-medium mt-2 !text-navy-900"
              pb={4}
            >
              {arcordion?.content}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
