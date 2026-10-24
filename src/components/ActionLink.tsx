import type { Action } from "@/lib/links";

type Props = {
  action: Action;
  className?: string;
  children: React.ReactNode;
};

/** Lien d'action : ouvre les liens externes dans un nouvel onglet, sécurisé. */
export function ActionLink({ action, className, children }: Props) {
  return (
    <a
      href={action.href}
      className={className}
      {...(action.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
