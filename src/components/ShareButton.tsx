import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface Player {
  id: number;
  name: string;
  score: number;
}

interface ShareButtonProps {
  players: Player[];
  roundNumber: number;
}

export const ShareButton = ({ players, roundNumber }: ShareButtonProps) => {
  const { t } = useLanguage();
  
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const hasScores = sortedPlayers.some(p => p.score > 0);
  
  if (!hasScores) return null;

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    if (rank === 4) return "🫂";
    return "▪️";
  };

  const generateShareText = () => {
    const rankings = sortedPlayers
      .map((player, index) => {
        const rank = index + 1;
        const medal = getMedalEmoji(rank);
        return `${medal} #${rank} ${player.name} - ${player.score} pts`;
      })
      .join("\n");

    return `🎯 Scrabble Score - ${t.results}

${rankings}

⏱️ ${roundNumber} ${t.roundsPlayed}

${t.canYouBeatUs} 🔥
${t.playHere} ${window.location.origin}

#ScrabbleScore #Scrabble #BoardGame`;
  };

  const handleShare = async () => {
    const shareText = generateShareText();
    
    // Try Web Share API first (native sharing on mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Scrabble Score",
          text: shareText,
        });
      } catch (error) {
        // User cancelled or error occurred
        if ((error as Error).name !== 'AbortError') {
          console.error("Error sharing:", error);
          fallbackCopyToClipboard(shareText);
        }
      }
    } else {
      // Fallback to clipboard for desktop
      fallbackCopyToClipboard(shareText);
    }
  };

  const fallbackCopyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(t.copiedToClipboard);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      toast.error(t.shareNotSupported);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleShare}
      className="h-8 w-8 text-primary hover:text-primary/80"
      title={t.shareResults}
    >
      <Share2 className="w-4 h-4" />
    </Button>
  );
};