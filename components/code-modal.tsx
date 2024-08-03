'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { useCodeStore } from '@/lib/code-store';
import { useModalStore } from '@/lib/modal-store';

const CodeModal = () => {
    const { onClose, isOpen } = useModalStore();
    const { html, css, tailwind } = useCodeStore();
    if (!isOpen || !html || !css) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>asd</DialogTitle>
                    <DialogDescription>aaa</DialogDescription>
                </DialogHeader>

                <div className="flex flex-col justify-between items-start space-y-2">
                    <div className="bg-green-300 max-h-32 overflow-auto border border-blue-500 w-full ">
                        <pre>{html}</pre>
                    </div>
                    <div className="bg-red-300 max-h-32 overflow-auto border border-blue-500 w-full ">
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
