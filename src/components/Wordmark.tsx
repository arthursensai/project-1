import { cn } from "@/lib/utils";

/**
 * Traitement typographique PROPOSÉ pour le concept (pas un logo officiel) :
 * « coup » en italique, l'apostrophe en couleur d'action, « ART » en capitales grasses.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-display tracking-tight", className)}>
      <span className="italic">coup</span>
      <span className="text-action">&apos;</span>
      <span className="font-bold tracking-normal">ART</span>
    </span>
  );
}
