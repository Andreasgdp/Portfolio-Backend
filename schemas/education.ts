export default {
	name: 'education',
	title: 'Education',
	type: 'document',
	fields: [
		{
			name: 'startYear',
			title: 'Starting Year',
			type: 'string',
		},
		{
			name: 'endYear',
			title: 'Ending Year',
			type: 'string',
		},
		{
			name: 'institutionLogo',
			title: 'Institution Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'institution',
			title: 'Institution',
			type: 'string',
		},
		{
			name: 'focus',
			title: 'Education Focus',
			type: 'string',
		},
		{
			name: 'desc',
			title: 'Desc',
			type: 'string',
		},
	],
	orderings: [
		{
			title: 'Education Date, New',
			name: 'educationDateDesc',
			by: [{ field: 'startYear', direction: 'desc' }],
		},
	],
};
