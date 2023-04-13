import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import ContactUs from "./pages/contactUs/ContactUs";
import TermsAndConditions from "./pages/terms/TermsAndConditions";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Footer from "./shared/footer/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import InvoiceAndQuotation from "./pages/invoiceAndQuotation/InvoiceAndQuotation";
import CashAndBank from "./pages/cashAndBank/CashAndBank";
import GeneralAccounting from "./pages/generalAccounting/GeneralAccounting";
import Reports from "./pages/reports-page/Reports";
import AllFeatures from "./pages/all-features/AllFeatures";
import ContactSuccess from "./pages/contact-success/ContactSuccess";

function App() {
  const queryParameters = new URLSearchParams(
    "?utm_campaign=blog_post&utm_medium=social&utm_source=facebook"
  );
  const utm_campaign = queryParameters.get("utm_campaign");
  const utm_source = queryParameters.get("utm_source");
  const utm_medium = queryParameters.get("utm_medium");
  const utm_term = queryParameters.get("utm_term");
  const utm_content = queryParameters.get("utm_content");

  return (
    <BrowserRouter>
      <Navbar />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/contact-us"
          element={
            <ContactUs
              utm_campaign={utm_campaign}
              utm_content={utm_content}
              utm_medium={utm_medium}
              utm_source={utm_source}
              utm_term={utm_term}
            />
          }
        />
        <Route path="/contact-success" element={<ContactSuccess />} />
        <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/features/invoice-and-quotation"
          element={<InvoiceAndQuotation />}
        />
        <Route
          path="/features/cash&bank-and-reconcilliation"
          element={<CashAndBank />}
        />
        <Route
          path="/features/general-accounting"
          element={<GeneralAccounting />}
        />
        <Route path="/features/reports-page" element={<Reports />} />
        <Route path="/features/all-features" element={<AllFeatures />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
