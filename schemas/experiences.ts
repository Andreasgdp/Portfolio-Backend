export default {
	name: 'experiences',
	title: 'Experiences',
	type: 'document',
	fields: [
		{
			name: 'startingDate',
			title: 'Starting date',
			type: 'date',
		},
		{
			name: 'companyLogo',
			title: 'Company Logo',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
		{
			name: 'position',
			title: 'Position',
			type: 'string',
		},
		{
			name: 'desc',
			title: 'Desc',
			type: 'string',
		},
	],
};
