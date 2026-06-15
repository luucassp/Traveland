"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/faq";
import { useLanguage } from "@/lib/i18n/context";
import { localize } from "@/lib/i18n/translations";

export function FAQSection() {
  const { t, locale } = useLanguage();

  return (
    <section className="container-page py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{t.faqSection.title}</h2>
        <p className="mt-3 text-text-secondary">{t.faqSection.subtitle}</p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{localize(faq.question, locale)}</AccordionTrigger>
              <AccordionContent>{localize(faq.answer, locale)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
