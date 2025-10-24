import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from "@/contexts/LanguageContext";

interface KofiDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const KofiDialog = ({ open, onOpenChange }: KofiDialogProps) => {
  const { t } = useLanguage();
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle>{t.supportProject}</DialogTitle>
          <DialogDescription>
            {t.supportDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="w-full overflow-auto">
          <iframe 
            id='kofiframe' 
            src='https://ko-fi.com/scrabblescore/?hidefeed=true&widget=true&embed=true&preview=true' 
            style={{
              border: 'none',
              width: '100%',
              padding: '4px',
              background: 'transparent'
            }}
            height='712' 
            title='scrabblescore'
            allow="payment"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
