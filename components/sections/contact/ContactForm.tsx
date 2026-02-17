"use client"
import {
    AnimatedSection,
    MagneticButton,
} from '@/components/shared'
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    ContactFormValues,
    contactSchema
} from '@/schemas/contact.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const ContactForm = () => {


    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    const onSubmit = (data: ContactFormValues) => {
        toast("Message Sent", {
            description: "Thank you for reaching out! We'll get back to you soon.",
        });
        form.reset();
    };

    return (
        <AnimatedSection className="lg:col-span-3" direction="left">
            <div className="glass-card rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-foreground mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Send a message
                </h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Your name"
                                                className="rounded-xl bg-background/50 border-border/50 h-12 focus:border-accent transition-colors"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="your@email.com"
                                                className="rounded-xl bg-background/50 border-border/50 h-12 focus:border-accent transition-colors"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Subject</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="How can we help?"
                                            className="rounded-xl bg-background/50 border-border/50 h-12 focus:border-accent transition-colors"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us about your project..."
                                            rows={6}
                                            className="rounded-xl bg-background/50 border-border/50 focus:border-accent transition-colors resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />
                        <MagneticButton strength={0.1}>
                            <Button type="submit" size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 h-12 font-medium text-sm">
                                <Send className="mr-2 h-4 w-4" /> Send Message
                            </Button>
                        </MagneticButton>
                    </form>
                </Form>
            </div>
        </AnimatedSection>
    )
}

export default ContactForm