import React, { useState } from 'react';
import { faqData } from '../data/ambassadorData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#FAFBF9] border-t border-[#E2E8E4]"
      aria-label="Foire aux questions sur le programme ambassadeur"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#15803D] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Réponses Claires</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#0B3820] tracking-tight mb-4">
            Questions Fréquentes
          </h2>

          <p className="text-base text-[#4C6054]">
            Tout ce que vous devez savoir avant de postuler au programme Ambassadeur IDSW.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-3.5">
          {faqData.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-[#D5DFD9] bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAFBF9] focus-visible:outline-hidden"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#86998E]">
                      0{index + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-[#0B3820] leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0B3820] flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-[#475C50] leading-relaxed border-t border-[#F0F4F1]"
                  >
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
