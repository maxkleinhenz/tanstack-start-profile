// app/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Section from "@/components/section";

export const Route = createFileRoute("/profile")({
  component: Home,
});

function Home() {
  return (
    <div className="space-y-12 max-w-4xl m-auto">
      <div className="text-xl font-semibold">
        <h2>Profile</h2>
      </div>
      <div className="space-y-16">
        <Section header="Basic information">
          <div className="grid grid-cols-[auto_1fr] gap-4">
            <div>
              <Avatar className="size-24">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div>
                <Input type="name" id="name" placeholder="Your Name" />
                <p className="text-muted-foreground text-sm">
                  Your public display name, which is used for the owner
                  information
                </p>
              </div>
            </div>
          </div>
          <Separator></Separator>
          <div className="space-y-2">
            <Label htmlFor="email">E-Mail</Label>
            <Input type="email" id="email" placeholder="Your E-Mail" disabled />
          </div>
        </Section>
        <Section header="Change password">
          <div>
            <Button variant="secondary">Send password reset E-Mail</Button>
            <p className="text-muted-foreground text-sm">
              This will send a password reset E-Mail to your registered E-Mail
              address. Please check your spam folder if you don't receive it.
            </p>
          </div>
        </Section>
        <Section header="Permanently remove your account">
          <div>
            <Button variant="destructive" size="lg">
              Permanently remove my account
            </Button>
            <p className="text-muted-foreground text-sm">
              <span className="font-bold">Warning:</span> This action is
              irreversible and will delete all your data permanently. Please
              make sure you have a backup of your data before proceeding.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
}
