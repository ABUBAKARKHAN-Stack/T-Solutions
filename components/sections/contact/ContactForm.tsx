"use client"
import { sendEmail } from '@/app/actions/email.actions';
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
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import {
    ContactFormValues,
    contactSchema
} from '@/schemas/contact.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { Activity } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorResponse } from 'resend';
import { toast } from 'sonner';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { useServices } from '@/context/ServiceContext';

const ContactForm = () => {


    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: { name: "", email: "", subject: "", message: "" },
    });

    const {
        servicesOverview
    } = useServices()

    const isSubmitting = form.formState.isSubmitting;

    const onSubmit = async (data: ContactFormValues) => {
        try {
            const resp = await sendEmail(data);

            if (resp.error) {
                const errMsg =
                    resp.error.message ||
                    "We couldn't deliver your message at the moment. Please try again later.";

                toast.error("Message Delivery Failed", {
                    description: errMsg,
                    richColors: true,
                    position: "top-left",
                });
                return;
            }
            form.reset();
            toast.success("Message Sent Successfully", {
                description:
                    "Thank you for contacting us. We've received your message and will get back to you shortly.",
                richColors: true,
                position: "bottom-right",
            });

        } catch (error) {
            const err = error as ErrorResponse;

            const errMsg =
                err?.message ||
                "Something went wrong while sending your message. Please try again.";

            toast.error("Unable to Send Message", {
                description: errMsg,
                richColors: true,
                position: "top-left",
            });
        }
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
                            name="service"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Service Interested In</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="rounded-xl bg-background/50 border-border/50 h-12 focus:border-accent transition-colors">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-popover border-border z-200">
                                            {servicesOverview.map((s) => (
                                                <SelectItem key={s.slug} value={s.title} className="text-sm focus:bg-accent/10">
                                                    {s.title}
                                                </SelectItem>
                                            ))}
                                            <SelectItem value={"Other"} className="text-sm focus:bg-accent/10">
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage className="text-xs" />
                                </FormItem>
                            )}
                        />

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
                            <Button
                                disabled={isSubmitting}
                                type="submit"
                                size="lg"
                                className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 h-12 font-medium text-sm"
                            >

                                {/* Rest State  */}
                                <Activity mode={!isSubmitting ? "visible" : "hidden"}>
                                    <Send /> Send Message
                                </Activity>

                                {/* Loader State  */}
                                <Activity mode={isSubmitting ? "visible" : "hidden"}>
                                    <Spinner data-icon="inline-start" />
                                    Sending Message
                                </Activity>

                            </Button>
                        </MagneticButton>
                    </form>
                </Form>
            </div>
        </AnimatedSection>
    )
}

export default ContactForm