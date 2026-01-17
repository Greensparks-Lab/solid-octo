import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-medium text-muted-foreground">
          Next.js 16 • Server-first
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Build fast, accessible UIs with server components by default.
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">
          This starter keeps rendering on the server until you explicitly opt into
          client interactivity. Tailwind CSS and shadcn/ui are pre-configured for
          a consistent design system.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href="#server-action">Try the server action</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://ui.shadcn.com" rel="noreferrer">
            shadcn/ui docs
          </Link>
        </Button>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Server-rendered highlight</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          This card is rendered on the server and hydrated only if it needs
          interactivity.
        </CardContent>
      </Card>
    </section>
  );
}
