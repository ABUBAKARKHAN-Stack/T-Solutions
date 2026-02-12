import RootProvider from "@/providers/RootProvider";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <RootProvider>
            {children}
        </RootProvider>
    );
}
