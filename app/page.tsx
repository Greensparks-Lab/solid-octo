import { EngagementCounter } from "@/components/layout/engagement-counter";
import { Hero } from "@/components/layout/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { subscribeAction } from "@/lib/actions/subscribe";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <Hero />

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card id="server-action">
            <CardHeader>
              <CardTitle>Server action signup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                This form posts directly to a server action without client-side
                JavaScript.
              </p>
              <form
                action={subscribeAction}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label className="sr-only" htmlFor="email">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
                <Button type="submit">Join the list</Button>
              </form>
            </CardContent>
          </Card>

          <EngagementCounter />
        </section>
      </div>
    </main>
  );
}
