interface Faq {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: Faq[];
}

/** Acordeón real con <details>/<summary>, accesible sin JavaScript. */
export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details key={i} className="group rounded-2xl border border-border bg-white p-5 open:border-primary/30">
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-[color:var(--color-ink)]">
            {faq.question}
            <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm text-[color:var(--color-ink-soft)]">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
