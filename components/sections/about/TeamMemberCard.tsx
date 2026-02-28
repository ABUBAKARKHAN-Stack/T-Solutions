import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, Mail } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";

interface TeamMember {
    name: string;
    role: string;
    initials: string;
    image: string;
    bio: string;
    expertise?: string[];
    linkedin?: string;
    twitter?: string;
    email?: string;
}

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Minimal Card */}
            <motion.div
                className="group relative cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setIsOpen(true)}
            >
                <div className="flex items-center gap-5 py-6 px-2 border-b border-border/30 hover:border-accent/40 transition-all duration-500">
                    <span className="text-[10px] font-mono text-muted-foreground/40 group-hover:text-accent transition-colors duration-500 w-5">
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-12 h-12 relative rounded-full overflow-hidden border border-border/30 group-hover:border-accent/30 transition-all duration-500 shrink-0">
                        <Image
                            src={member.image}
                            fill
                            alt={`${member.name}, ${member.role}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                            {member.name}
                        </h3>
                        <p className="text-[11px] text-muted-foreground font-light mt-0.5">{member.role}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                </div>
            </motion.div>

            {/* Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="p-0 gap-0 overflow-hidden max-w-md border-border/30 bg-card/95 backdrop-blur-xl shadow-2xl shadow-accent/5 rounded-2xl">
                    <DialogTitle className="sr-only">{member.name}</DialogTitle>

                    {/* Image Header */}
                    <div className="relative h-56 overflow-hidden">
                        <Image
                            src={member.image}
                            fill
                            alt={`${member.name}, ${member.role}`}
                            className="w-full h-full object-cover object-top scale-105"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-card via-card/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="px-8 pb-8 -mt-12 relative">
                        <h3 className="text-lg font-semibold text-foreground mb-0.5">{member.name}</h3>
                        <p className="text-[11px] text-accent font-medium uppercase tracking-[0.2em] mb-5">{member.role}</p>

                        {/* Bio */}
                        <p className="text-sm text-muted-foreground leading-relaxed font-light mb-6">
                            {member.bio}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-2 pt-5 border-t border-border/30">
                            {member.linkedin && (
                                <a href={member.linkedin} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border/40 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-center transition-all duration-300">
                                    <Linkedin className="w-3.5 h-3.5 text-muted-foreground hover:text-accent transition-colors" />
                                </a>
                            )}
                            {member.twitter && (
                                <a href={member.twitter} onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-border/40 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-center transition-all duration-300">
                                    <Twitter className="w-3.5 h-3.5 text-muted-foreground hover:text-accent transition-colors" />
                                </a>
                            )}
                            {member.email && (
                                <a href={`mailto:${member.email}`} onClick={(e) => e.stopPropagation()} className="w-8 h-8 rounded-full border border-border/40 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-center transition-all duration-300">
                                    <Mail className="w-3.5 h-3.5 text-muted-foreground hover:text-accent transition-colors" />
                                </a>
                            )}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default TeamMemberCard;
