"use client";

import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion } from 'framer-motion'

const page = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-3">
      {/* Heading */}
      <motion.div
        className="text-center mb-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-2xl md:text-3xl font-semibold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Get answers to common questions about our FIBC products and services
        </p>
      </motion.div>

      {/* Accordion */}
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            {
              value: "faq-1",
              q: "What is the typical lifespan of an FIBC?",
              a: "The lifespan of an FIBC depends on usage, storage conditions, and the materials being transported. Generally, our FIBCs are designed for single-use applications, but with proper handling and storage, they can often be reused 2-3 times for non-hazardous materials. We recommend inspecting each bag before reuse for any signs of wear or damage."
            },
            {
              value: "faq-2",
              q: "How do I choose between Type C and Type D static protection FIBCs?",
              a: "Type C FIBCs require grounding during filling and emptying operations and are ideal when proper grounding can be ensured. Type D FIBCs have built-in antistatic properties and don't require grounding, making them more convenient for operations where grounding might be difficult to maintain. Both provide excellent static protection for hazardous materials."
            },
            {
              value: "faq-3",
              q: "What is the maximum weight capacity of your FIBCs?",
              a: "Our standard FIBCs typically handle loads from 500kg to 2000kg (1,100 to 4,400 lbs), depending on the design and safety factor required. Custom FIBCs can be engineered for higher capacities. The actual capacity depends on the material density, bag design, and safety requirements for your specific application."
            },
            {
              value: "faq-4",
              q: "Do you offer custom printing and branding on FIBCs?",
              a: "Yes! We offer custom printing services including company logos, product information, handling instructions, and safety warnings. Our printing options include screen printing and heat transfer methods. Custom branding helps with product identification and enhances your company's professional image."
            },
            {
              value: "faq-5",
              q: "What certifications do your FIBCs meet?",
              a: "Our FIBCs meet various international standards including UN certification for hazardous materials, ISO 21898 standards, and FDA compliance for food-grade applications. We also provide certificates of conformity and can arrange third-party testing when required for specific applications or regulations."
            },
            {
              value: "faq-6",
              q: "How should FIBCs be stored when not in use?",
              a: "Store FIBCs in a dry, cool environment away from direct sunlight and UV exposure. Keep them off the ground on pallets or shelving, and avoid areas with sharp objects that could cause damage. Proper storage extends the lifespan and maintains the integrity of the bags for future use."
            }
          ].map((faq, i) => (
            <motion.div
              key={faq.value}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={faq.value} className="border border-gray-200 rounded-xl px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-12"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold mb-3">Still have questions?</h2>
          <p className="text-gray-700 mb-6">
            Our technical team is ready to help you find the perfect FIBC solution for your needs.
          </p>
          <button
            className="px-8 py-3 text-white font-semibold rounded-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: "#eb7700" }}
          >
            Contact Our Experts
          </button>
        </div>
      </motion.div>
    </section>

  )
}

export default page