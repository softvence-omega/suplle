import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionData = [
  {
    id: 1,
    trigger: "Is there a free trial available?",
    content: `Yes, you can try us for free for 30 days. If you want, we’ll
              provide you with a free, personalized 30-minute onboarding call to
              get you up and running as soon as possible.`,
  },
  {
    id: 2,
    trigger: "Can I change my plan later?",
    content: `Absolutely! You can upgrade or downgrade your plan at any time from your account dashboard. 
        Changes will take effect immediately, and any billing adjustments will be prorated accordingly.`,
  },
  {
    id: 3,
    trigger: "What is your cancellation policy?",
    content: `You can cancel your subscription at any time from your account dashboard. 
        After cancellation, you will retain access to all features until the end of your current billing period. 
        There are no cancellation fees or hidden charges.`,
  },
  {
    id: 4,
    trigger: "Can other info be added to an invoice?",
    content: `Yes, you can add additional information such as notes, tax details, or custom fields to your invoices. This helps you tailor invoices to your business needs and provide all necessary details to your customers.`,
  },
  {
    id: 5,
    trigger: "How does billing work?",
    content: `Billing is handled automatically based on your selected plan. You’ll receive invoices via email and can also access them from your account dashboard. Payments are processed securely, and you can update your billing information or view your billing history at any time.`,
  },
  {
    id: 6,
    trigger: "How do I change my account email?",
    content: `To change your account email, go to your account settings and update your email address. You may be asked to verify the new email before the change takes effect. If you need assistance, contact our support team.`,
  },
];

const FAQ = () => {
  return (
    <div className="">
      <h1 className="text-center text-6xl mt- mb-7">
        Frequently asked <span className="text-primary">questions</span>
      </h1>
      <p className="text-center text-xl">
        Everything you need to know about the product and billing.
      </p>
      {/* accordion  */}
      <div className="mt-5 lg:w-[1280px] mb-24  mx-auto">
        <Accordion type="single" collapsible>
          {accordionData.map((item) => (
            <AccordionItem
              key={item.id}
              value={`item-${item.id}`}
              className="border-b-1"
            >
              <AccordionTrigger className="text-xl">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="text-lg">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
