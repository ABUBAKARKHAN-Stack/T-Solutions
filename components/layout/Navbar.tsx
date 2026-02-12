"use client"
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggle from "../ThemeToggle";
import ContactDrawer from "../ContactDrawer";
import { navLinks, serviceItems } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ContainerLayout from "./ContainerLayout";
import MagneticButton from "../MagneticButton";

const dropdownVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], staggerChildren: 0.04 },
  },
  exit: { opacity: 0, y: 8, scale: 0.96, transition: { duration: 0.2 } },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.25 } },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setShowServices(false);
  }, [pathname]);

  return (
    <>
      {/* Desktop Navbar */}

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <ContainerLayout className="flex h-20 items-center justify-between ">

          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-2xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              T<span className="text-accent">-</span>Solutions
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">

            {navLinks.map((link) => (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setShowServices(true)}
                onMouseLeave={() => link.hasDropdown && setShowServices(false)}
              >
                <Link
                  href={link.to}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full flex items-center gap-1 ${pathname === link.to
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {pathname === link.to && (
                    <motion.div
                      className="absolute inset-0 bg-accent/10 rounded-full"
                      layoutId="nav-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                  {link.hasDropdown && (
                    <motion.span
                      className="relative z-10"
                      animate={{ rotate: showServices ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-3.5 w-3.5" />
                    </motion.span>
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        className="absolute top-full right-0 pt-3 w-105"
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <div className="glass rounded-2xl border border-border/50 shadow-2xl p-4 grid grid-cols-2 gap-1">
                          {serviceItems.map((item) => (
                            <motion.div key={item.label} variants={dropdownItemVariants}>
                              <Link
                                href="/services"
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-accent/10 transition-colors duration-300 group"
                              >
                                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors duration-300">
                                  <item.icon className="h-4 w-4 text-accent" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-foreground leading-tight">
                                    {item.label}
                                  </p>
                                  <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <div className="w-px h-6 bg-border mx-2" />
            <ThemeToggle />
            <ContactDrawer>
              <Button
                size="default"
                className="ml-2 rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 font-medium"
              >
                Get in Touch
              </Button>
            </ContactDrawer>
          </nav>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 flex items-center justify-center text-foreground rounded-full hover:bg-accent/10 transition-colors"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </ContainerLayout>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <motion.nav
              className="relative z-10 flex flex-col items-center justify-center h-full gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    href={link.to}
                    onClick={() => setOpen(false)}
                    className={`text-3xl font-semibold transition-colors ${pathname === link.to
                      ? "text-accent"
                      : "text-foreground/60 hover:text-foreground"
                      }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <ContactDrawer>
                  <Button
                    size="lg"
                    className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-10 mt-4"
                    onClick={() => setOpen(false)}
                  >
                    Get in Touch
                  </Button>
                </ContactDrawer>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
