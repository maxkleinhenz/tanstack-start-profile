import { cn } from "@/lib/utils";

export type SectionProps = {
  header: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section(props: SectionProps) {
  return (
    <section className="space-y-4">
      <div className="font-semibold">
        <h3>{props.header}</h3>
      </div>
      <div
        className={cn(
          "grid gap-8 py-9 px-6 rounded-lg shadow border border-slate-100 dark:border-slate-600",
          props.className
        )}
      >
        {props.children}
      </div>
    </section>
  );
}
