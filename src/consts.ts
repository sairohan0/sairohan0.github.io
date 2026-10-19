export const SITE_TITLE = 'Sai Rohan';
export const SITE_DESCRIPTION =
	'Interview experiences, sports, travel, and things I am learning.';

export const SECTIONS = {
	interviews: {
		label: 'Interviews',
		blurb: 'What interviews were really like: the rounds, the questions, and what I would do differently.',
	},
	sports: {
		label: 'Sports',
		blurb: 'Matches, seasons, and the teams I follow.',
	},
	travel: {
		label: 'Travel',
		blurb: 'Places I have been, what I ate, and what I would tell a friend going there.',
	},
	learnings: {
		label: 'Learnings',
		blurb: 'Notes on new things I have picked up.',
	},
} as const;

export type SectionKey = keyof typeof SECTIONS;
export const SECTION_KEYS = Object.keys(SECTIONS) as SectionKey[];
