import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import Layout from '../src/layouts/Layout.astro';
import FeatureArt from '../src/components/FeatureArt.astro';

test('the blog shell has accessible navigation and page metadata', async () => {
    const container = await AstroContainer.create();
    const html = await container.renderToString(Layout, { props: { title: 'Cloud Notes' } });
    expect(html).toContain('<title>Cloud Notes</title>');
    expect(html).toContain('Skip to content');
    expect(html).toContain('aria-label="Main navigation"');
});

test('the journal has four sourced posts including previews and secrets', () => {
    const directory = new URL('../src/content/posts/', import.meta.url);
    const posts = readdirSync(directory).filter((name) => name.endsWith('.md'));
    expect(posts).toHaveLength(4);
    expect(posts).toContain('preview-environments.md');
    expect(posts).toContain('secrets-manager.md');
    for (const post of posts) {
        expect(readFileSync(new URL(post, directory), 'utf8')).toContain('https://laravel.com/cloud/docs/');
    }
});

test('all four feature illustrations render', async () => {
    const container = await AstroContainer.create();
    for (const kind of ['preview', 'secrets', 'deploy', 'cli']) {
        const html = await container.renderToString(FeatureArt, { props: { kind } });
        expect(html).toContain('FIELD NOTES');
        expect(html).toContain('aria-hidden="true"');
    }
});
