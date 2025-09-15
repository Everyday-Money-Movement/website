import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CalloutProps {
  type?: "info" | "warning" | "destructive";
  title?: string;
  children: React.ReactNode;
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  return (
    <Alert variant={type === "destructive" ? "destructive" : "default"}>
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
