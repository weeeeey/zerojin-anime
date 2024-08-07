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
      <DialogContent className="px-2">
        <DialogHeader>
          <DialogTitle>asd</DialogTitle>
          <DialogDescription>aaa</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-start justify-between space-y-2 overflow-auto">
          <div className="max-h-32 w-full overflow-auto border border-blue-500 bg-green-300">
            <pre>{html}</pre>
          </div>
          <div className="max-h-72 w-full overflow-auto border border-blue-500 bg-red-300">
            <pre>{css}</pre>
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
