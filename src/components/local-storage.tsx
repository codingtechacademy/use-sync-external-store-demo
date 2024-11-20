"use client";

import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const EMAIL_KEY = "email";

export default function LocalStorageDemo() {
  const [value, setValue] = useState(
    () => localStorage.getItem(EMAIL_KEY) ?? ""
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setValue(localStorage.getItem(EMAIL_KEY) as string);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  function updateEmailHandler() {
    const newEmail = faker.internet.email();
    localStorage.setItem(EMAIL_KEY, newEmail);
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="space-y-6 mt-8">
      <p>Addresse email : {value}</p>
      <Button onClick={updateEmailHandler}>Changer l&apos;email</Button>
    </div>
  );
}