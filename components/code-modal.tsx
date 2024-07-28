'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
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
                    <DialogDescription>
                        <div className="flex flex-col justify-between items-start">
                            <div className="bg-green-300">
                                <code>
                                    <pre>{html}</pre>
                                </code>
                            </div>
                            <div className="bg-red-300">
                                <code>
                                    <pre>{css}</pre>
                                </code>
                            </div>
                            <div>
                                <code>
                                    <pre>{tailwind}</pre>
                                </code>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CodeModal;
