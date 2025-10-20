import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TurnInputProps {
  currentPlayer: number;
  currentPlayerName: string;
  onSubmitScore: (score: number) => void;
}

export const TurnInput = ({ currentPlayer, currentPlayerName, onSubmitScore }: TurnInputProps) => {
  const { t } = useLanguage();
  const [score, setScore] = useState("");

  const handleSubmit = () => {
    const numScore = parseInt(score) || 0;
    if (numScore >= 0) {
      onSubmitScore(numScore);
      setScore("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleClear = () => {
    setScore("");
  };

  return (
    <Card className="p-6 border-2 border-primary/20 bg-card/50 backdrop-blur">
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-muted-foreground">{t.turn}</h3>
          <p className="text-3xl font-bold text-primary animate-pulse-subtle">
            {currentPlayerName}
          </p>
        </div>

        <div className="flex gap-2 items-center">
          <Input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder={t.enterScore}
            onKeyPress={handleKeyPress}
            className="text-2xl text-center font-bold h-14"
          />
          {score.length > 0 && (
            <Button 
              onClick={handleClear}
              variant="ghost"
              size="lg"
              className="px-4"
            >
              <X className="w-5 h-5" />
            </Button>
          )}
          <Button 
            onClick={handleSubmit}
            size="lg"
            className="px-6"
          >
            <CheckCircle2 className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex gap-2 flex-wrap">
          {[1, 5, 10, 15, 20].map((quickScore) => (
            <Button
              key={quickScore}
              variant="outline"
              size="sm"
              onClick={() => setScore((prev) => (parseInt(prev || "0") + quickScore).toString())}
              className="flex-1 min-w-[60px]"
            >
              +{quickScore}
            </Button>
          ))}
        </div>
      </div>
    </Card>
  );
};
