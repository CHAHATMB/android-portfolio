"use client"
import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function Contact() {
  // Formspree endpoint (replace with your actual Formspree endpoint)
  const formEndpoint = "https://formspree.io/f/xwpkgeyo"; 

  // States for form inputs and submission status
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission
    
    setIsSubmitting(true);
    setFormStatus('');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });

      if (response.ok) {
        // If form submission is successful
        setFormStatus('Thank you for reaching out! I will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
        alert('Your message has been sent successfully!');
      } else {
        setFormStatus('Thank you for reaching out! I will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
        alert('Your message has been sent successfully!');
      }
    } catch (error) {
      console.log("error"+ error)
      setFormStatus('Thank you for reaching out! I will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
        alert('Your message has been sent successfully!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-accent/10 rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Contact Me
        </h2>
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
            {formStatus && <p className="mt-4 text-center text-sm text-green-500">{formStatus}</p>}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
