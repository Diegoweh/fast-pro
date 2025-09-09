"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Certifications from "@/components/contact/Certifications";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const page = () => {
  /// State for the form
    const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("idle");
  setErrorMsg("");

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
  if (!form.name || !emailOk || !form.subject || !form.message) {
    setStatus("error");
    setErrorMsg("Please fill all fields with a valid email address.");
    return;
  }

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const text = await res.text();
    let data: any = {};
    try { data = JSON.parse(text); } catch {}

    if (!res.ok || !data?.ok) {
      throw new Error(data?.error || text || "There was a problem sending your message.");
    }

    setStatus("ok");
    setForm({ name: "", email: "", subject: "", message: "" });
  } catch (err: any) {
    setStatus("error");
    setErrorMsg(err?.message || "There was a problem sending your message.");
  }
  
};



  return (
    <>
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Formulario */}
          <div>
            <form onSubmit={onSubmit} className="space-y-4">
              <h2 className="text-2xl font-semibold" style={{ color: "#eb7700" }}>
                Contact us
              </h2>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1f5bd3]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1f5bd3]"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1f5bd3]"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={onChange}
                  className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#1f5bd3]"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Button
                  type="submit"
                  className="bg-[#1f5bd3] hover:bg-[#1f5bd3]/90 text-white"
                >
                  Send
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-[#1f5bd3] text-[#1f5bd3] hover:bg-[#1f5bd3] hover:text-white">
                      Explore
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-44">
                    {/* <DropdownMenuItem asChild>
                      <Link href="/bags">FIBCs</Link>
                    </DropdownMenuItem> */}
                    <DropdownMenuItem asChild>
                      <Link href="/textiles">Textiles</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/services">Services</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/">Other</Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                
              </div>

              {/* Notificación de estado */}
              <div aria-live="polite">
                {status === "ok" && (
                  <div className="mt-3 rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                    Thank you! Your message has been sent.
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                    {errorMsg || "Please check the form and try again."}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Mapa de Google */}
          <div>
            <div className="w-full rounded-xl overflow-hidden shadow-sm" style={{ aspectRatio: "4 / 3" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d836.5572363656737!2d-96.70925792419418!3d32.99773899408946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c18d7b64275ff%3A0xe944976157b74cd0!2s3400%20N%20Central%20Expy%20110%20214%2C%20Richardson%2C%20TX%2075080%2C%20EE.%20UU.!5e0!3m2!1ses-419!2smx!4v1755645799518!5m2!1ses-419!2smx"
                className="w-full h-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </>
  );
}

export default page

