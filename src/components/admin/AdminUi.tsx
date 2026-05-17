"use client";

export function AdminCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-[28px] border border-[#E4E7EC] bg-white p-5 shadow-sm sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function AdminButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "dark" | "light" | "danger" }) {
  const styles = {
    primary: "bg-[#FD853A] text-white hover:bg-[#e46e24]",
    dark: "bg-[#171717] text-white hover:bg-[#2a2a2a]",
    light: "bg-[#F2F4F7] text-[#171717] hover:bg-[#E4E7EC]",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      {...props}
      className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-semibold text-[#344054]">
      {label}
      {children}
    </label>
  );
}

export const inputClass =
  "w-full rounded-[16px] border border-[#E4E7EC] bg-white px-4 py-3 text-base text-[#171717] outline-none transition-colors focus:border-[#FD853A]";

export function StatusMessage({ message, type = "info" }: { message: string; type?: "info" | "error" | "success" }) {
  if (!message) return null;

  const styles = {
    info: "border-[#E4E7EC] bg-[#F9FAFB] text-[#344054]",
    error: "border-red-200 bg-red-50 text-red-700",
    success: "border-green-200 bg-green-50 text-green-700",
  };

  return <p className={`rounded-[16px] border px-4 py-3 text-sm font-semibold ${styles[type]}`}>{message}</p>;
}
