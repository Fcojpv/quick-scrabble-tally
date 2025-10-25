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
  
  // Timer
  minute: string;
  minutes: string;
  stopTimer: string;
  
  // Settings
  settings: string;
  colorTheme: string;
  language: string;
  classic: string;
  deluxe: string;
  vintage: string;
  
  // Ko-fi
  supportProject: string;
  supportDescription: string;
  
  // Radio
  radioStopped: string;
  radioError: string;
  radioStarted: string;
  radioLive: string;
  
  // Timer status
  timerOn: string;
  
  // Carousel
  comingSoon: string;
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
    minute: 'minute',
    minutes: 'minutes',
    stopTimer: 'Stop timer',
    settings: 'Settings',
    colorTheme: 'Color Theme',
    language: 'Language',
    classic: 'Classic',
    deluxe: 'Deluxe',
    vintage: 'Vintage',
    supportProject: 'Support the Project',
    supportDescription: 'Help us keep improving Scrabble Score. Your support means a lot!',
    radioStopped: 'Radio stopped',
    radioError: 'Error playing radio',
    radioStarted: 'Radio started',
    radioLive: 'live',
    timerOn: 'on',
    comingSoon: 'Coming soon',
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
    minute: 'minuto',
    minutes: 'minutos',
    stopTimer: 'Detener temporizador',
    settings: 'Configuración',
    colorTheme: 'Tema de Color',
    language: 'Idioma',
    classic: 'Clásico',
    deluxe: 'Deluxe',
    vintage: 'Vintage',
    supportProject: 'Apoyar el Proyecto',
    supportDescription: '¡Ayúdanos a seguir mejorando Scrabble Score. Tu apoyo significa mucho!',
    radioStopped: 'Radio detenida',
    radioError: 'Error al reproducir la radio',
    radioStarted: 'Radio iniciada',
    radioLive: 'en vivo',
    timerOn: 'activo',
    comingSoon: 'Próxima funcionalidad',
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
    minute: '分钟',
    minutes: '分钟',
    stopTimer: '停止计时器',
    settings: '设置',
    colorTheme: '颜色主题',
    language: '语言',
    classic: '经典',
    deluxe: '豪华',
    vintage: '复古',
    supportProject: '支持项目',
    supportDescription: '帮助我们继续改进 Scrabble Score。您的支持意义重大！',
    radioStopped: '电台已停止',
    radioError: '播放电台时出错',
    radioStarted: '电台已启动',
    radioLive: '直播',
    timerOn: '开启',
    comingSoon: '即将推出',
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
    minute: 'मिनट',
    minutes: 'मिनट',
    stopTimer: 'टाइमर बंद करें',
    settings: 'सेटिंग्स',
    colorTheme: 'रंग थीम',
    language: 'भाषा',
    classic: 'क्लासिक',
    deluxe: 'डीलक्स',
    vintage: 'विंटेज',
    supportProject: 'परियोजना का समर्थन करें',
    supportDescription: 'Scrabble Score को बेहतर बनाने में हमारी मदद करें। आपका समर्थन बहुत मायने रखता है!',
    radioStopped: 'रेडियो बंद हो गया',
    radioError: 'रेडियो चलाने में त्रुटि',
    radioStarted: 'रेडियो शुरू हो गया',
    radioLive: 'लाइव',
    timerOn: 'चालू',
    comingSoon: 'जल्द आ रहा है',
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
    minute: 'دقيقة',
    minutes: 'دقائق',
    stopTimer: 'إيقاف المؤقت',
    settings: 'الإعدادات',
    colorTheme: 'موضوع اللون',
    language: 'اللغة',
    classic: 'كلاسيكي',
    deluxe: 'ديلوكس',
    vintage: 'عتيق',
    supportProject: 'دعم المشروع',
    supportDescription: 'ساعدنا في الاستمرار في تحسين Scrabble Score. دعمك يعني الكثير!',
    radioStopped: 'توقف الراديو',
    radioError: 'خطأ في تشغيل الراديو',
    radioStarted: 'بدأ الراديو',
    radioLive: 'مباشر',
    timerOn: 'قيد التشغيل',
    comingSoon: 'قريباً',
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
    minute: 'minuto',
    minutes: 'minutos',
    stopTimer: 'Parar cronômetro',
    settings: 'Configurações',
    colorTheme: 'Tema de Cores',
    language: 'Idioma',
    classic: 'Clássico',
    deluxe: 'Deluxe',
    vintage: 'Vintage',
    supportProject: 'Apoiar o Projeto',
    supportDescription: 'Ajude-nos a continuar melhorando o Scrabble Score. Seu apoio significa muito!',
    radioStopped: 'Rádio parada',
    radioError: 'Erro ao reproduzir rádio',
    radioStarted: 'Rádio iniciada',
    radioLive: 'ao vivo',
    timerOn: 'ligado',
    comingSoon: 'Em breve',
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
