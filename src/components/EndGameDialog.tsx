import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/contexts/LanguageContext";

interface Player {
  id: number;
  name: string;
  score: number;
}

interface EndGameDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  players: Player[];
  onApplyPenalties: (penalties: Record<number, number>) => void;
}

export const EndGameDialog = ({ 
  open, 
  onOpenChange, 
  players,
  onApplyPenalties 
}: EndGameDialogProps) => {
  const { t } = useLanguage();
  const [showPenalties, setShowPenalties] = useState(false);
  const [penalties, setPenalties] = useState<Record<number, string>>({});

  const handleConfirm = () => {
    if (!showPenalties) {
      setShowPenalties(true);
    } else {
      // Convert penalties to numbers and always make them negative
      const finalPenalties: Record<number, number> = {};
      players.forEach(player => {
        const penalty = parseInt(penalties[player.id] || "0");
        // Always subtract (make negative if positive was entered)
        finalPenalties[player.id] = Math.abs(penalty);
      });
      onApplyPenalties(finalPenalties);
      setShowPenalties(false);
      setPenalties({});
    }
  };

  const handleCancel = () => {
    setShowPenalties(false);
    setPenalties({});
    onOpenChange(false);
  };

  return (
    <AlertDialog open={open} onOpenChange={(open) => {
      if (!open) handleCancel();
    }}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {showPenalties ? t.unusedTilesPenalty : t.finishedGame}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {showPenalties ? (
              <div className="space-y-4 pt-4">
                <p className="text-sm">{t.penaltyDescription}</p>
                {players.map(player => (
                  <div key={player.id} className="space-y-2">
                    <Label htmlFor={`penalty-${player.id}`}>
                      {player.name}
                    </Label>
                    <Input
                      id={`penalty-${player.id}`}
                      type="number"
                      placeholder={t.enterPenalty}
                      value={penalties[player.id] || ""}
                      onChange={(e) => setPenalties(prev => ({
                        ...prev,
                        [player.id]: e.target.value
                      }))}
                      className="text-center"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>
                {t.endGameConfirmation} {t.endGameQuestion}
              </>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>{t.cancel}</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirm}>
            {showPenalties ? t.applyPenalties : t.yes}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
