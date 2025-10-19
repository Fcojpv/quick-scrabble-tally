import { Card } from "@/components/ui/card";
import { Trophy, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

interface Player {
  id: number;
  name: string;
  score: number;
}

interface LeaderboardProps {
  players: Player[];
  onPositionChange?: () => void;
  roundNumber: number;
}

// Emojis for different position changes
const HAPPY_EMOJIS = ["🎉", "🥳", "🌟", "✨", "🎊", "🏆", "💫", "🔥", "⭐", "🎯"];
const UPSET_EMOJIS = ["😮", "😯", "😲", "🤔", "😕", "😬", "😐", "😑", "🫤", "😶"];
const MAINTAIN_EMOJI = "😉";

export const Leaderboard = ({ players, onPositionChange, roundNumber }: LeaderboardProps) => {
  const [previousRankings, setPreviousRankings] = useState<number[]>([]);
  const [celebratingPlayers, setCelebratingPlayers] = useState<Set<number>>(new Set());
  const [playerEmojis, setPlayerEmojis] = useState<Map<number, string>>(new Map());

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const leaderScore = sortedPlayers[0]?.score || 0;

  useEffect(() => {
    const currentRankings = sortedPlayers.map(p => p.id);
    
    if (previousRankings.length > 0) {
      const changed = currentRankings.some((id, idx) => previousRankings[idx] !== id);
      
      if (changed) {
        const improvedPlayers = new Set<number>();
        const newEmojis = new Map<number, string>();
        
        currentRankings.forEach((id, newRank) => {
          const oldRank = previousRankings.indexOf(id);
          
          if (oldRank !== -1) {
            if (oldRank > newRank) {
              // Player improved position - show happy emoji
              const randomHappyEmoji = HAPPY_EMOJIS[Math.floor(Math.random() * HAPPY_EMOJIS.length)];
              newEmojis.set(id, randomHappyEmoji);
              if (newRank < 3) {
                improvedPlayers.add(id);
              }
            } else if (oldRank < newRank) {
              // Player dropped position - show upset emoji
              const randomUpsetEmoji = UPSET_EMOJIS[Math.floor(Math.random() * UPSET_EMOJIS.length)];
              newEmojis.set(id, randomUpsetEmoji);
            } else {
              // Player maintained position - show wink emoji
              newEmojis.set(id, MAINTAIN_EMOJI);
            }
          }
        });

        setPlayerEmojis(newEmojis);
        
        if (improvedPlayers.size > 0) {
          setCelebratingPlayers(improvedPlayers);
          onPositionChange?.();
        }
        
        setTimeout(() => {
          setCelebratingPlayers(new Set());
          setPlayerEmojis(new Map());
        }, 2000);
      }
    }

    setPreviousRankings(currentRankings);
  }, [sortedPlayers.map(p => `${p.id}-${p.score}`).join(',')]);

  const getMedalEmoji = (position: number) => {
    if (position === 0) return "🥇";
    if (position === 1) return "🥈";
    if (position === 2) return "🥉";
    return null;
  };

  const getPositionColor = (position: number) => {
    if (position === 0) return "bg-gold/20 border-gold/40";
    if (position === 1) return "bg-muted/50 border-muted";
    if (position === 2) return "bg-accent/20 border-accent/40";
    return "bg-card border-border";
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-foreground mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-semibold">Tabla de Posiciones</h2>
        </div>
        <div className="text-sm font-medium text-muted-foreground">
          Ronda {roundNumber}
        </div>
      </div>

      {sortedPlayers.map((player, index) => {
        const difference = leaderScore - player.score;
        const isCelebrating = celebratingPlayers.has(player.id);
        const playerEmoji = playerEmojis.get(player.id);

        return (
          <Card
            key={player.id}
            className={`
              p-4 border-2 transition-all relative overflow-hidden
              ${getPositionColor(index)}
              ${isCelebrating ? "animate-pulse-subtle" : ""}
            `}
          >
            {isCelebrating && (
              <div className="absolute top-2 right-2 animate-celebrate text-2xl">
                🎉
              </div>
            )}

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 min-w-[60px]">
                  <span className="text-2xl font-bold text-foreground">
                    #{index + 1}
                  </span>
                  {getMedalEmoji(index) && (
                    <span className="text-xl">{getMedalEmoji(index)}</span>
                  )}
                </div>
                
                <div>
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <span>{player.name}</span>
                    {playerEmoji && (
                      <span className="text-lg animate-fade-in">{playerEmoji}</span>
                    )}
                  </div>
                  {difference > 0 && (
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <TrendingUp className="w-3 h-3" />
                      <span>-{difference} del líder</span>
                    </div>
                  )}
                  {difference === 0 && index > 0 && (
                    <div className="text-sm text-muted-foreground">
                      Empate con líder
                    </div>
                  )}
                </div>
              </div>

              <div className="text-right">
                <div className="text-3xl font-bold text-primary">
                  {player.score}
                </div>
                <div className="text-xs text-muted-foreground">puntos</div>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
