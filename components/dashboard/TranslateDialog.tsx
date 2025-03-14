"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Loader2, CheckCircle } from "lucide-react";

export default function TranslateDialog() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleTranslate = () => {
    setOpen(true);
    setIsLoading(true);
    setIsSuccess(false);

    // Simulate translation process
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleClose = () => {
    setOpen(false);
    setIsLoading(false);
    setIsSuccess(false);
  };

  return (
    <div className="flex items-center justify-center">
      <Button size="sm" onClick={handleTranslate}>
        ترجم
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {isLoading ? "الترجمة" : isSuccess ? "الترجمة مكتملة" : "ترجمة"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-8 space-y-4">
            {isLoading && (
              <div className="flex flex-col items-center space-y-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">الترجمة...</p>
              </div>
            )}

            {isSuccess && (
              <div className="flex flex-col items-center space-y-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <p className="text-sm font-medium">انتهت بنجاح!</p>
              </div>
            )}
          </div>

          <DialogFooter>
            <Button onClick={handleClose}>{isSuccess ? "يغلق" : "يلغي"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
