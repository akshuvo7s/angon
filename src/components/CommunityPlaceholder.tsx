"use client";

import { MessageCircle, HelpCircle, UserCircle2 } from "lucide-react";

function notifyComingSoon() {
  alert("Feature Coming Soon!");
}

/**
 * Static placeholder UI for community features.
 * No backend yet — every action just alerts the user.
 * Swap the onClick handlers for real logic once auth/DB is added.
 */
export default function CommunityPlaceholder() {
  return (
    <div className="mt-12 space-y-6 border-t border-stone-200 pt-10">
      {/* User profile placeholder */}
      <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-stone-50 p-4">
        <UserCircle2 className="h-10 w-10 text-stone-400" />
        <div className="flex-1">
          <p className="text-sm font-medium text-stone-900">Guest User</p>
          <p className="text-xs text-stone-500">Sign in to join the discussion</p>
        </div>
        <button
          onClick={notifyComingSoon}
          className="rounded-lg border border-stone-300 px-3 py-1.5 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
        >
          Sign In
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={notifyComingSoon}
          className="inline-flex items-center gap-2 rounded-lg bg-amber-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-800"
        >
          <MessageCircle className="h-4 w-4" />
          Leave a Comment
        </button>
        <button
          onClick={notifyComingSoon}
          className="inline-flex items-center gap-2 rounded-lg border border-amber-700 px-4 py-2 text-sm font-medium text-amber-800 transition hover:bg-amber-50"
        >
          <HelpCircle className="h-4 w-4" />
          Ask a Question
        </button>
      </div>

      {/* Placeholder comment list */}
      <div className="space-y-4 rounded-xl border border-dashed border-stone-300 p-4 text-sm text-stone-400">
        No comments yet. Be the first to start a conversation.
      </div>
    </div>
  );
}
