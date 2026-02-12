import {
    Code2,
    Smartphone,
    Cloud,
    Container,
    Brain,
    Shield,
    Users,
    Zap,
    Lightbulb,
    Globe,
    Target,
    Eye,
    Heart,
    Award,
    Clock,
    HeartHandshake,
    Sparkles,
    Search,
    Rocket,
    LucideIcon,
    CheckCheck
} from "lucide-react";


export const iconsMap: Record<string, LucideIcon> = {
    Code2,
    Smartphone,
    Cloud,
    Container,
    Brain,
    Shield,
    Users,
    Zap,
    Lightbulb,
    Globe,
    Target,
    Eye,
    Heart,
    Award,
    Clock,
    HeartHandshake,
    Sparkles,
    Search,
    Rocket
}

export const getIconByName = (iconName:string) => iconsMap[iconName] || CheckCheck;