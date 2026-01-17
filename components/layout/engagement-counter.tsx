"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EngagementCounter() {
  const [count, setCount] = useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live engagement</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground">
          Clicks on this call-to-action stay in the browser thanks to a client
          component.
        </p>
        <div className="flex items-center justify-between rounded-md border border-dashed border-border p-4">
          <span className="text-3xl font-semibold tabular-nums">{count}</span>
          <Button type="button" onClick={() => setCount((value) => value + 1)}>
            Add signal
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
