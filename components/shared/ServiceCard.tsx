import { ArrowUpRight, Star } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  num: string;
  image: string;
  slug?: string;
  tags?: string[];
  wide?: boolean;
  featured?: boolean;
}

const ServiceCard = ({ icon: Icon, title, description, num, image, slug, tags, wide, featured }: ServiceCardProps) => {
  return (
    <Link href={slug ? `/services/${slug}` : "/services"} className="group block h-full">
      <div
        className={`relative rounded-2xl overflow-hidden h-full bg-card dark:bg-foreground/3 border border-border/60 dark:border-border/50 hover:border-accent/50 transition-all duration-500 shadow-sm dark:shadow-none flex ${wide ? "flex-col lg:flex-row" : "flex-col"
          }`}
      >
        {/* Accent border lines on hover */}
        <div className="absolute top-0 left-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full z-20" />
        <div className="absolute bottom-0 right-0 w-0 h-0.5 bg-accent transition-all duration-500 group-hover:w-full z-20" />
        <div className="absolute top-0 left-0 h-0 w-0.5 bg-accent transition-all duration-500 delay-100 group-hover:h-full z-20" />
        <div className="absolute bottom-0 right-0 h-0 w-0.5 bg-accent transition-all duration-500 delay-100 group-hover:h-full z-20" />

        {wide ? (
          /* Wide card: visible image on the left */
          <>
            <div className="relative lg:w-[45%] h-52 lg:h-auto shrink-0 overflow-hidden">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-card hidden lg:block" />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/40 to-transparent lg:hidden" />
            </div>

            <div className="relative z-10 p-7 flex flex-col flex-1 justify-between">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-mono font-semibold text-accent">{num}</span>
                {featured && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                    <Star className="h-2.5 w-2.5 fill-accent" /> Featured
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-400">
                  <ArrowUpRight className="h-4 w-4 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4 text-accent" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground leading-snug">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5">{description}</p>
              </div>

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-muted-foreground bg-foreground/5 border border-border/40 px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          /* Standard card: image visible at top */
          <>
            <div className="relative h-40 shrink-0 overflow-hidden">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
            </div>

            <div className="relative z-10 p-7 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-mono font-semibold text-accent">{num}</span>
                {featured && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20 px-2.5 py-1 rounded-full">
                    <Star className="h-2.5 w-2.5 fill-accent" /> Featured
                  </span>
                )}
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-400">
                  <ArrowUpRight className="h-4 w-4 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground leading-snug">{title}</h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed font-light mb-5 flex-1">{description}</p>

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-muted-foreground bg-foreground/5 border border-border/40 px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ServiceCard;
