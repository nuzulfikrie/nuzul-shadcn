import * as React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export function ShadcnAccordion() {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Section 1</AccordionTrigger>
                <AccordionContent>
                    This is the content of Section 1. You can place any React component or HTML content here.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Section 2</AccordionTrigger>
                <AccordionContent>
                    This is the content of Section 2. You can place any React component or HTML content here.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Section 3</AccordionTrigger>
                <AccordionContent>
                    This is the content of Section 3. You can place any React component or HTML content here.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
