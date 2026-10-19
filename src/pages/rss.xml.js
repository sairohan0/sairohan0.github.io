import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { getAllPosts, postUrl } from '../lib/posts';

export async function GET(context) {
	const posts = await getAllPosts();
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: postUrl(post),
			categories: post.data.tags,
		})),
	});
}
