# FRAME / SHIFT

A cinematic AI filmmaking portfolio built with Next.js 15, TypeScript, React and custom responsive CSS. Static pages are generated for the homepage, six project case studies, sitemap and robots file. No server or database is required.

## Run

```sh
npm ci
npm run dev
npm run build
```

The production build is exported to `out/`. `.openai/hosting.json` retains the Sites identity and static hosting configuration.

## Customize

Start with [CONTENT-GUIDE.md](CONTENT-GUIDE.md). All project records, media URLs, services, biography, tools, testimonials, contacts and SEO metadata live in `data/content.ts`. Media files live in `public/`. Empty contacts and testimonials stay hidden. The starter studio identity and all sample projects must be replaced or remain labeled as examples.

The supplied silent videos are slow-motion animations of stock photographs, demonstrating the video experience. They are not real client commissions or completed AI films. See [ASSET-SOURCES.md](ASSET-SOURCES.md) for sources.

## Inquiry delivery

No recipient or delivery provider was supplied. The form currently validates the brief and downloads a local text file; it explicitly states that nothing has been sent. To enable sending, configure a real HTTPS endpoint in `contacts.formEndpoint`. The endpoint must validate inputs, reject the honeypot, apply rate limits, send/store the inquiry, and respond with HTTP 2xx and JSON containing `delivered: true`, `accepted: true`, or `ok: true`. Use server-side credentials. Test an actual inquiry end to end after configuration.

## Accessibility and performance

Semantic landmarks, skip navigation, native dialog focus management, named dialogs, explicit form labels, keyboard filters and process tabs, a keyboard-operable comparison slider, visible focus styles and reduced-motion support are included. Desktop hover previews mount only on engagement; project players use `preload="none"`. The hero uses a poster for mobile, reduced motion and data-saving connections, has a pause control, and stops offscreen.

## Verification

The optimized production build and TypeScript checks passed. Export checks verified local links, assets, anchor targets, unique project metadata, heading counts, image alt text and form/ARIA references. MP4 codec and duration were checked with ffprobe. Browser control was unavailable in the task environment; responsive visual and browser interaction QA remains unverified.

## Downloadable single-file edition

Visit `/download/` for the self-contained `frame-shift.html` download (about 6.4 MB). It embeds styles, fonts, imagery, videos, and all six case studies. It works directly from the local filesystem with classic inline JavaScript and hash-based project navigation. Inquiry briefs download locally; email delivery is not configured. The exported file is a snapshot, so regenerate it after changing portfolio content.
