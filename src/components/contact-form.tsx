"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormSchemaValues } from "@/lib/validations";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export function ContactForm() {
  const [isSending, setIsSending] = useState<boolean>(false);
  const form = useForm<FormSchemaValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormSchemaValues) => {
    setIsSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch (err) {
      toast.error("An unexpected error occurred.");
      console.error(err);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="relative inline-block text-4xl font-bold md:text-5xl pb-3">
            Get in Touch
            <span className="absolute left-1/2 bottom-0 h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-primary/60"></span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
            Have questions or need support? Let’s talk — our team is ready to
            help you with the perfect communication solution.
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl border border-border bg-card/30 backdrop-blur-sm p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your Name"
                          className="focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="you@example.com"
                          className="focus-visible:ring-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Subject */}
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Subject
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Subject of your message"
                        className="focus-visible:ring-primary"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={6}
                        placeholder="Write your message here..."
                        className="focus-visible:ring-primary resize-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSending}
                  className="px-8 cursor-pointer py-2 text-base font-medium rounded-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  {isSending ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
