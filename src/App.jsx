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

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-&-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/features/invoice-and-quotation"
          element={<InvoiceAndQuotation />}
        />
        <Route
          path="/features/cash&bank-and-Reconcilliation"
          element={<CashAndBank />}
        />
        <Route
          path="/features/general-accounting"
          element={<GeneralAccounting />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
