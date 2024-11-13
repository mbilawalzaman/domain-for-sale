// App.js
import React from "react";
import ContactForm from "./components/contactForm";
import Footer from "./components/footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black overflow-hidden">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        Domain for Sale
      </header>
      <main className="flex-grow p-4 md:p-6 text-center overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Premium Domain for Sale!</h1>
        <p className="text-lg mb-8">Contact us for more information.</p>
        <p className="mb-4">
          Contact Number: <span className="font-semibold">+123456789</span>
        </p>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
