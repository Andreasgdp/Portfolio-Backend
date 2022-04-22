export default {
	name: 'works',
	title: 'Works',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},

		{
			name: 'year',
			title: 'Year',
			type: 'number',
		},
		{
			name: 'platform',
			title: 'Platform',
			type: 'string',
		},
		{
			name: 'stacks',
			title: 'Stacks',
			type: 'array',
			of: [{ name: 'stackItem', title: 'Stack Item', type: 'string' }],
		},
		{
			name: 'website',
			title: 'Website',
			type: 'string',
		},
		{
			name: 'abstract',
			title: 'Abstract',
			type: 'string',
		},
		{
			name: 'imgUrl',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'videoUrl',
			title: 'Video Url',
			type: 'url',
		},

		{
			name: 'source',
			title: 'Source Url',
			type: 'url',
		},
	],
};
