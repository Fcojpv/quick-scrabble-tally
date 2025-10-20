export type Language = 'en' | 'es' | 'zh' | 'hi' | 'ar' | 'pt';

export interface Translations {
  // PlayerSetup
  scrabbleScore: string;
  howManyPlayers: string;
  names: string;
  enterPlayerName: string;
  player: string;
  startGame: string;
  
  // TurnInput
  turn: string;
  enterScore: string;
  
  // Leaderboard
  leaderboard: string;
  round: string;
  points: string;
  fromLeader: string;
  tiedWithLeader: string;
  editScore: string;
  newScore: string;
  cancel: string;
  save: string;
  
  // ConfirmDialog
  resetGame: string;
  resetConfirmation: string;
  cannotUndo: string;
  yes: string;
  reset: string;
  
  // Messages
  gameReset: string;
  scoreUpdated: string;
  
  // Settings
  settings: string;
  colorTheme: string;
  language: string;
  classic: string;
  deluxe: string;
  vintage: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    scrabbleScore: 'Scrabble Score',
    howManyPlayers: 'How many players?',
    names: 'Names',
    enterPlayerName: 'Enter the name of each player',
    player: 'Player',
    startGame: 'Start Game',
    turn: 'Turn',
    enterScore: 'Enter score',
    leaderboard: 'Leaderboard',
    round: 'Round',
    points: 'points',
    fromLeader: 'from leader',
    tiedWithLeader: 'Tied with leader',
    editScore: 'Edit score',
    newScore: 'New score',
    cancel: 'Cancel',
    save: 'Save',
    resetGame: 'Reset game?',
    resetConfirmation: 'This action will delete all scores and restart the game.',
    cannotUndo: 'This action cannot be undone.',
    yes: 'Yes',
    reset: 'Reset',
    gameReset: 'Game reset',
    scoreUpdated: 'Score updated',
    settings: 'Settings',
    colorTheme: 'Color Theme',
    language: 'Language',
    classic: 'Classic',
    deluxe: 'Deluxe',
    vintage: 'Vintage',
  },
  es: {
    scrabbleScore: 'Scrabble Score',
    howManyPlayers: '¿Cuántos jugadores?',
    names: 'Nombres',
    enterPlayerName: 'Ingresa el nombre de cada jugador',
    player: 'Jugador',
    startGame: 'Comenzar Juego',
    turn: 'Turno',
    enterScore: 'Ingresa puntaje',
    leaderboard: 'Tabla de Posiciones',
    round: 'Ronda',
    points: 'puntos',
    fromLeader: 'del líder',
    tiedWithLeader: 'Empate con líder',
    editScore: 'Editar puntaje',
    newScore: 'Nuevo puntaje',
    cancel: 'Cancelar',
    save: 'Guardar',
    resetGame: '¿Reiniciar el juego?',
    resetConfirmation: 'Esta acción borrará todos los puntajes y reiniciará el juego.',
    cannotUndo: 'Esta acción no se puede deshacer.',
    yes: 'Sí',
    reset: 'Reiniciar',
    gameReset: 'Juego reiniciado',
    scoreUpdated: 'Puntaje actualizado',
    settings: 'Configuración',
    colorTheme: 'Tema de Color',
    language: 'Idioma',
    classic: 'Clásico',
    deluxe: 'Deluxe',
    vintage: 'Vintage',
  },
  zh: {
    scrabbleScore: 'Scrabble Score',
    howManyPlayers: '多少位玩家？',
    names: '名字',
    enterPlayerName: '输入每位玩家的名字',
    player: '玩家',
    startGame: '开始游戏',
    turn: '回合',
    enterScore: '输入分数',
    leaderboard: '排行榜',
    round: '轮',
    points: '分',
    fromLeader: '落后领先者',
    tiedWithLeader: '与领先者并列',
    editScore: '编辑分数',
    newScore: '新分数',
    cancel: '取消',
    save: '保存',
    resetGame: '重置游戏？',
    resetConfirmation: '此操作将删除所有分数并重新开始游戏。',
    cannotUndo: '此操作无法撤销。',
    yes: '是',
    reset: '重置',
    gameReset: '游戏已重置',
    scoreUpdated: '分数已更新',
    settings: '设置',
    colorTheme: '颜色主题',
    language: '语言',
    classic: '经典',
    deluxe: '豪华',
    vintage: '复古',
  },
  hi: {
    scrabbleScore: 'Scrabble Score',
    howManyPlayers: 'कितने खिलाड़ी?',
    names: 'नाम',
    enterPlayerName: 'प्रत्येक खिलाड़ी का नाम दर्ज करें',
    player: 'खिलाड़ी',
    startGame: 'खेल शुरू करें',
    turn: 'बारी',
    enterScore: 'स्कोर दर्ज करें',
    leaderboard: 'लीडरबोर्ड',
    round: 'राउंड',
    points: 'अंक',
    fromLeader: 'लीडर से',
    tiedWithLeader: 'लीडर के साथ बराबरी',
    editScore: 'स्कोर संपादित करें',
    newScore: 'नया स्कोर',
    cancel: 'रद्द करें',
    save: 'सहेजें',
    resetGame: 'खेल रीसेट करें?',
    resetConfirmation: 'यह क्रिया सभी स्कोर हटा देगी और खेल को पुनः आरंभ करेगी।',
    cannotUndo: 'यह क्रिया पूर्ववत नहीं की जा सकती।',
    yes: 'हाँ',
    reset: 'रीसेट',
    gameReset: 'खेल रीसेट हो गया',
    scoreUpdated: 'स्कोर अपडेट हो गया',
    settings: 'सेटिंग्स',
    colorTheme: 'रंग थीम',
    language: 'भाषा',
    classic: 'क्लासिक',
    deluxe: 'डीलक्स',
    vintage: 'विंटेज',
  },
  ar: {
    scrabbleScore: 'Scrabble Score',
    howManyPlayers: 'كم عدد اللاعبين؟',
    names: 'الأسماء',
    enterPlayerName: 'أدخل اسم كل لاعب',
    player: 'لاعب',
    startGame: 'ابدأ اللعبة',
    turn: 'الدور',
    enterScore: 'أدخل النتيجة',
    leaderboard: 'لوحة المتصدرين',
    round: 'جولة',
    points: 'نقاط',
    fromLeader: 'من المتصدر',
    tiedWithLeader: 'تعادل مع المتصدر',
    editScore: 'تحرير النتيجة',
    newScore: 'نتيجة جديدة',
    cancel: 'إلغاء',
    save: 'حفظ',
    resetGame: 'إعادة تعيين اللعبة؟',
    resetConfirmation: 'سيؤدي هذا الإجراء إلى حذف جميع النتائج وإعادة تشغيل اللعبة.',
    cannotUndo: 'لا يمكن التراجع عن هذا الإجراء.',
    yes: 'نعم',
    reset: 'إعادة تعيين',
    gameReset: 'تم إعادة تعيين اللعبة',
    scoreUpdated: 'تم تحديث النتيجة',
    settings: 'الإعدادات',
    colorTheme: 'موضوع اللون',
    language: 'اللغة',
    classic: 'كلاسيكي',
    deluxe: 'ديلوكس',
    vintage: 'عتيق',
  },
  pt: {
    scrabbleScore: 'Scrabble Score',
    howManyPlayers: 'Quantos jogadores?',
    names: 'Nomes',
    enterPlayerName: 'Digite o nome de cada jogador',
    player: 'Jogador',
    startGame: 'Iniciar Jogo',
    turn: 'Turno',
    enterScore: 'Digite a pontuação',
    leaderboard: 'Classificação',
    round: 'Rodada',
    points: 'pontos',
    fromLeader: 'do líder',
    tiedWithLeader: 'Empatado com o líder',
    editScore: 'Editar pontuação',
    newScore: 'Nova pontuação',
    cancel: 'Cancelar',
    save: 'Salvar',
    resetGame: 'Reiniciar o jogo?',
    resetConfirmation: 'Esta ação apagará todas as pontuações e reiniciará o jogo.',
    cannotUndo: 'Esta ação não pode ser desfeita.',
    yes: 'Sim',
    reset: 'Reiniciar',
    gameReset: 'Jogo reiniciado',
    scoreUpdated: 'Pontuação atualizada',
    settings: 'Configurações',
    colorTheme: 'Tema de Cores',
    language: 'Idioma',
    classic: 'Clássico',
    deluxe: 'Deluxe',
    vintage: 'Vintage',
  },
};

export const languageFlags: Record<Language, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  zh: '🇨🇳',
  hi: '🇮🇳',
  ar: '🇸🇦',
  pt: '🇧🇷',
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  zh: '中文',
  hi: 'हिन्दी',
  ar: 'العربية',
  pt: 'Português',
};
