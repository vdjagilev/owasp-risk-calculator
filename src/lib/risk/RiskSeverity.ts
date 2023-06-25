import { Level } from './Level';

export enum RiskSeverity {
	Note,
	Low,
	Medium,
	High,
	Critical
}

export enum RiskSeverityColor {
	Note = 'bg-blue-500 text-white',
	Low = 'bg-green-500 text-white',
	Medium = 'bg-amber-500 text-black',
	High = 'bg-red-500 text-white',
	Critical = 'bg-red-900 text-white'
}

export function getColor(severity: RiskSeverity): RiskSeverityColor {
	switch (severity) {
		case RiskSeverity.Note:
			return RiskSeverityColor.Note;
		case RiskSeverity.Low:
			return RiskSeverityColor.Low;
		case RiskSeverity.Medium:
			return RiskSeverityColor.Medium;
		case RiskSeverity.High:
			return RiskSeverityColor.High;
		case RiskSeverity.Critical:
			return RiskSeverityColor.Critical;
	}
}

export const RiskSeverityMatrix: { [likelihood in Level]: { [impact in Level]: RiskSeverity } } = {
	[Level.Note]: {
		[Level.Note]: RiskSeverity.Note,
		[Level.Low]: RiskSeverity.Note,
		[Level.Medium]: RiskSeverity.Note,
		[Level.High]: RiskSeverity.Note
	},
	[Level.Low]: {
		[Level.Low]: RiskSeverity.Note,
		[Level.Medium]: RiskSeverity.Low,
		[Level.High]: RiskSeverity.Medium,
		[Level.Note]: RiskSeverity.Note
	},
	[Level.Medium]: {
		[Level.Low]: RiskSeverity.Low,
		[Level.Medium]: RiskSeverity.Medium,
		[Level.High]: RiskSeverity.High,
		[Level.Note]: RiskSeverity.Note
	},
	[Level.High]: {
		[Level.Low]: RiskSeverity.Medium,
		[Level.Medium]: RiskSeverity.High,
		[Level.High]: RiskSeverity.Critical,
		[Level.Note]: RiskSeverity.Note
	}
};

export function getSeverityByLevels(likelihood: Level, impact: Level): RiskSeverity {
	return RiskSeverityMatrix[likelihood][impact];
}
