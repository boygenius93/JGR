import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-outline";
type ButtonSize = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-150 focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-ivory hover:bg-ink-soft",
  secondary:
    "bg-transparent text-ink border border-stone-300 hover:border-ink hover:bg-stone-50",
  ghost: "bg-transparent text-ink hover:bg-stone-100",
  // For use on dark backgrounds (e.g. the ink-colored CTA section or featured pricing card).
  inverse: "bg-ivory text-ink hover:bg-white",
  "inverse-outline":
    "bg-transparent text-ivory border border-stone-500 hover:border-ivory hover:bg-white/5",
};

const sizes: Record<ButtonSize, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  trackId?: string;
}

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, children, trackId } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const isExternal = /^https?:\/\//.test(props.href);
    return (
      <Link
        href={props.href}
        className={classes}
        data-track={trackId}
        onClick={props.onClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const {
    href: _href,
    variant: _variant,
    size: _size,
    className: _className,
    children: _children,
    trackId: _trackId,
    ...buttonProps
  } = props as ButtonAsButton;
  return (
    <button className={classes} data-track={trackId} {...buttonProps}>
      {children}
    </button>
  );
}
