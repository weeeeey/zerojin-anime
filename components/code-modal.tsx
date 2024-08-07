"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCodeStore } from "@/lib/code-store";
import { useModalStore } from "@/lib/modal-store";

const CodeModal = () => {
  const { onClose, isOpen } = useModalStore();
  const { html, css, tailwind } = useCodeStore();
  if (!isOpen || !html || !css) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl px-2">
        <DialogHeader>
          <DialogTitle>asd</DialogTitle>
          <DialogDescription>aaa</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-start justify-between space-y-2 overflow-auto">
          <div className="max-h-32 w-full divide-y-2 overflow-auto border">
            <h2 className="sticky top-0 bg-black/90 px-2 py-1 text-white">
              HTML
            </h2>
            <pre className="px-2 py-1">{html}</pre>
          </div>
          <div className="max-h-72 w-full divide-y-2 overflow-auto border border-blue-500">
            <h2 className="sticky top-0 bg-black/90 px-2 py-1 text-white">
              CSS
            </h2>
            <pre className="px-2 py-1">{css}</pre>
          </div>
          <div>
            <pre>{tailwind}</pre>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CodeModal;
