import { getCollection, type CollectionEntry } from 'astro:content';
import { SECTION_KEYS, type SectionKey } from '../consts';

export type Post = CollectionEntry<SectionKey> & { section: SectionKey };

const byDateDesc = (a: Post, b: Post) => b.data.date.valueOf() - a.data.date.valueOf();

export async function getSectionPosts(section: SectionKey): Promise<Post[]> {
	const entries = await getCollection(section, ({ data }) => import.meta.env.DEV || !data.draft);
	return entries.map((e) => ({ ...e, section }) as Post).sort(byDateDesc);
}

export async function getAllPosts(): Promise<Post[]> {
	const all = await Promise.all(SECTION_KEYS.map(getSectionPosts));
	return all.flat().sort(byDateDesc);
}

export const postUrl = (post: Post) => `/${post.section}/${post.id}/`;
