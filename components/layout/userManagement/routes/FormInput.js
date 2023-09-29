"use client";

import { useState } from "react";

import Input from "@/components/ui/Input";

const EminentInput = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="max-w-xs space-y-3 mb-8">
      <Input
        placeholder="First Name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        placeholder="Second Name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
    </div>
  );
};

const WelcomeInput = ({ password, setPassword }) => {
  return (
    <div className="max-w-xs w-80 space-y-3 mb-8">
      <Input
        placeholder="Enter Password"
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
};

const NewPasswordInput = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="max-w-xs w-80 space-y-3 mb-8">
      <Input
        placeholder="Enter Password"
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        placeholder="Confirm Password"
        type="Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
    </div>
  );
};

export { EminentInput, WelcomeInput, NewPasswordInput };
