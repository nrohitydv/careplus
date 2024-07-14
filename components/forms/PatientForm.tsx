"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";

import { UserFormValidation } from "@/lib/validation";
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField";
import SumbitButton from "../SumbitButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  CHECKBOX = "checkbox",
  SKELETON = "skeleton",
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
}
const PatientForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });
  async function onSubmit({
    name,
    email,
    phone,
  }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);
    try {
      const userData = { name, email, phone };
      // const user = createUser(userData);
      // if (user) router.push(`/patients/${user.$id}/register`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-6">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there,...</h1>
          <p className="text-dark-700">Get Started with Appointments.</p>
        </section>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phone"
          label="Phone number"
          placeholder="9812345678"
          iconSrc="/assets/icons/phone.svg"
          iconAlt="phone"
        />
        <SumbitButton isLoading={isLoading}>Get started</SumbitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
