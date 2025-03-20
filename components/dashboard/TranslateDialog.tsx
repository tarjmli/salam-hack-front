"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Loader2, CheckCircle } from "lucide-react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isError: boolean;
  isPending: boolean;
};
export default function TranslateDialog({
  open,
  onOpenChange,
  isError,
  isPending,
}: Props) {
  return (
    <div className="flex items-center justify-center">
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {isPending ? "الترجمة" : !isError ? "الترجمة مكتملة" : "ترجمة"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            {isPending && (
              <div className="flex flex-col items-center space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">الترجمة...</p>
              </div>
            )}

            {!isError && !isPending && (
              <div className="flex flex-col items-center space-y-3 text-green-500">
                <CheckCircle className="h-8 w-8" />
                <p className="text-sm font-medium">انتهت بنجاح!</p>
              </div>
            )}

            {isError && !isPending && (
              <div className="flex flex-col items-center space-y-3 text-red-500">
                <CheckCircle className="h-8 w-8" />
                <p className="text-sm font-medium">يلغي!</p>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button onClick={() => onOpenChange(false)}>
              {!isError ? "يغلق" : "يلغي"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
