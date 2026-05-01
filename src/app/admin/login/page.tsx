"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/actions";

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-skena-dark p-4">
      <div className="w-full max-w-md border-2 border-skena-accent bg-skena-card p-8 shadow-[8px_8px_0px_var(--color-skena-accent)]">
        <h1 className="text-4xl font-display font-bold mb-8 text-skena-accent uppercase tracking-tighter">
          Admin Access
        </h1>
        
        <form action={formAction} className="space-y-6">
          <div>
            <label className="block text-skena-muted mb-2 uppercase text-xs font-bold tracking-widest">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="w-full bg-skena-dark border border-skena-border p-3 outline-none focus:border-skena-accent transition-colors"
              required
            />
          </div>
          
          <div>
            <label className="block text-skena-muted mb-2 uppercase text-xs font-bold tracking-widest">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full bg-skena-dark border border-skena-border p-3 outline-none focus:border-skena-accent transition-colors"
              required
            />
          </div>

          {state?.error && (
            <p className="text-red-500 text-sm font-bold bg-red-500/10 p-2 border border-red-500/20">
              {state.error}
            </p>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-skena-accent text-skena-dark font-bold p-4 uppercase tracking-widest brutalist-btn disabled:opacity-50"
          >
            {isPending ? "Authenticating..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
