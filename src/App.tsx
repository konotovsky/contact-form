import { useState } from "react";
import ContactForm from "./components/ContactForm";
import PopupMessage from "./components/PopupMessage";
import iconSuccess from "/images/icon-success-check.svg";

export default function App() {
  const [isShowed, setIsShowed] = useState(false);
  const onSubmit = () => {
    setIsShowed(true);

    setTimeout(() => {
      setIsShowed(false);
    }, 3000);
  };

  return (
    <>
      <PopupMessage
        iconSrc={iconSuccess}
        title="Message Sent!"
        text="Thanks for completing the form. We’ll be in touch soon!"
        show={isShowed}
      />
      <main className="flex justify-center items-center min-h-screen">
        <div className="container max-w-[375px] py-8 px-4 md:max-w-[690px] xl:max-w-[736px]">
          <ContactForm onSubmit={onSubmit} />
        </div>
      </main>
    </>
  );
}
