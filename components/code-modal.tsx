'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useModalStore } from '@/lib/modal-store';

interface CodeModalProps {
    html: string;
    css: string;
    tailwindCss?: string;
}
// { css, html, tailwindCss }: CodeModalProps
const CodeModal = () => {
    const { onClose, isOpen } = useModalStore();

    if (!isOpen) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        <code>` .loader {}`</code>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default CodeModal;
