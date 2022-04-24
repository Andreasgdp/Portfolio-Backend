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
			name: 'category',
			title: 'Category',
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
			name: 'stack',
			title: 'Stack',
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
			name: 'videos',
			title: 'Videos',
			type: 'array',
			of: [
				{
					name: 'videoUrl',
					title: 'Video Url',
					type: 'url',
				},
			],
		},

		{
			name: 'source',
			title: 'Source Url',
			type: 'url',
		},
	],
};
