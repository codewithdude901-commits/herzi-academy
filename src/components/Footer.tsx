import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background py-24 px-4 overflow-hidden select-none">
      <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-[18rem] font-extrabold text-white/5 pointer-events-none">
        HERZi
      </div>
      <div className="container mx-auto z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold">
              HERZi
            </Link>
            <p className="text-muted-foreground mt-2">
              Your Gateway to Study and Work in Germany.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-background">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-background">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-background">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-muted-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025. All rights reserved. HERZi</p>
          <p>Design by @adcelerateX</p>
        </div>
      </div>
    </footer>
  );
}
