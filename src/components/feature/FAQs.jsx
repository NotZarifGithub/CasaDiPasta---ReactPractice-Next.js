"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// FAQS DATA
const FAQsData = [
  {
    id: 1,
    question: 'What type of cuisine does your Italian restaurant offer?',
    answer: 'We specialize in authentic Italian cuisine, including pasta dishes, wood-fired pizzas, antipasti, and delicious desserts.',
  },
  {
    id: 2,
    question: 'Do you offer gluten-free or vegetarian options?',
    answer: 'Yes, we have a variety of gluten-free and vegetarian dishes available on our menu. Please ask your server for options.',
  },
  {
    id: 3,
    question: 'Can I make a reservation for a large group or special event?',
    answer: 'Absolutely! We welcome reservations for large groups and special occasions. Please contact us in advance to make arrangements.',
  },
  {
    id: 4,
    question: 'Do you offer takeout or delivery services?',
    answer: 'Yes, we offer takeout and delivery services. You can place your order online or give us a call for delivery options.',
  },
  {
    id: 5,
    question: 'Are you BYOB (Bring Your Own Beverage), or do you have a wine and cocktail menu?',
    answer: 'We have a carefully curated wine list and a selection of classic Italian cocktails. You can also bring your own wine for a corkage fee.',
  },
  {
    id: 6,
    question: "What are your restaurant's operating hours?",
    answer: 'Our restaurant is open Monday to Friday from 9.00 am to 11.00 pm .',
  },
  {
    id: 7,
    question: "Is there parking available near the restaurant?",
    answer: 'Yes, we have convenient parking options available nearby. Our staff can provide you with information on parking locations.',
  },
]

const FAQs = () => {
  return (
    <section>

      {/* FAQs CONTENT */}
      <div className='bg-[url("/pasta1.jpg")] text-white flex flex-col justify-center items-center border-y py-[70px]'>
        <h1 className="justify-center text-center mb-5 text-2xl font-bold leading-none uppercase md:text-3xl py-[20px]">
          frequently asked questions
        </h1>
        <div className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] justify-center items-center block">

          {/* FAQs QUESTI0N & ANSWER */}
          {FAQsData.map((item, index) => (
            <Accordion key={index} type="single" collapsible className='py-[10px]'>
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQs 