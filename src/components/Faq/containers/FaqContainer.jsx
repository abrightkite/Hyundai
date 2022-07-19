import React from "react";
import Faq from "../Faq";
import { faqData } from "../../../locale/localeData";

const FaqContainer = () => {
  return <Faq faqData={faqData} />;
};

export default FaqContainer;
