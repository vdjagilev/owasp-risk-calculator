export enum Level {
	Note,
	Low,
	Medium,
	High
}

export enum LevelColor {
	Note = 'bg-blue-500 text-white',
	Low = 'bg-green-500 text-white',
	Medium = 'bg-amber-500 text-black',
	High = 'bg-red-500 text-white'
}

export function getColor(level: Level): LevelColor {
	switch (level) {
		case Level.Note:
			return LevelColor.Note;
		case Level.Low:
			return LevelColor.Low;
		case Level.Medium:
			return LevelColor.Medium;
		case Level.High:
			return LevelColor.High;
	}
}

export type LevelStrings = keyof typeof Level;

export function getLevelByScore(score: number): Level {
	if (score <= 0) {
		return Level.Note;
	} else if (score < 3) {
		return Level.Low;
	} else if (score < 6) {
		return Level.Medium;
	} else {
		return Level.High;
	}
}
