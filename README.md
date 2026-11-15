# Mayor Joe

A cinematic AI filmmaking portfolio built with Next.js 15, TypeScript, React and custom responsive CSS. Static pages are generated for the homepage, eight film pages, sitemap and robots file. No server or database is required.

## Run

```sh
npm ci
npm run dev
npm run build
```

The production build is exported to `out/`. `.openai/hosting.json` retains the Sites identity and static hosting configuration.

## Customize

Start with [CONTENT-GUIDE.md](CONTENT-GUIDE.md). All project records, media URLs, services, biography, tools, testimonials, contacts and SEO metadata live in `data/content.ts`. Media files live in `public/`. Empty contacts and testimonials stay hidden. The Mayor Joe brand and portrait were supplied by the owner. Provided samples retain their original filenames and source links; brand names do not establish client relationships.

Eight selected videos from the owner-identified AI Video Samplings Drive folder are included with real-frame posters, lightweight silent hover previews, and full films with audio. Titles and categories follow the source filenames. The gallery identifies these as provided samples rather than verified client commissions. See [ASSET-SOURCES.md](ASSET-SOURCES.md) for the exact sources.

## Inquiry delivery

No recipient or delivery provider was supplied. The form currently validates the brief and downloads a local text file; it explicitly states that nothing has been sent. To enable sending, configure a real HTTPS endpoint in `contacts.formEndpoint`. The endpoint must validate inputs, reject the honeypot, apply rate limits, send/store the inquiry, and respond with HTTP 2xx and JSON containing `delivered: true`, `accepted: true`, or `ok: true`. Use server-side credentials. Test an actual inquiry end to end after configuration.

## Accessibility and performance

Semantic landmarks, skip navigation, native dialog focus management, named dialogs, explicit form labels, keyboard filters and process tabs, a keyboard-operable comparison slider, visible focus styles and reduced-motion support are included. Desktop hover previews mount only on engagement; project players use `preload="none"`. The hero uses a poster for mobile, reduced motion and data-saving connections, has a pause control, and stops offscreen.

## Verification

The optimized production build and TypeScript checks passed. Export checks verified local links, assets, anchor targets, unique project metadata, heading counts, image alt text and form/ARIA references. MP4 codec and duration were checked with ffprobe. Browser control was unavailable in the task environment; responsive visual and browser interaction QA remains unverified.

## Downloadable single-file edition

Visit `/download/` for the self-contained `mayor-joe.html` download (with all media embedded). It embeds styles, fonts, imagery, videos, and all eight film pages. The offline edition uses compact encodes for portability; the online portfolio retains the higher-quality versions. It works directly from the local filesystem with classic inline JavaScript and hash-based project navigation. Inquiry briefs download locally; email delivery is not configured. The exported file is a snapshot, so regenerate it after changing portfolio content.

## Sales flow and proof

The homepage now includes a goal-based offer builder, format selection, before-and-after demonstrations, film notes from the selected collection, cited industry research, FAQs, and project-brief prefilling. See [SALES-SETUP.md](SALES-SETUP.md) to configure prices, approved payment links, inquiry delivery, genuine testimonials, and measured client case studies. Checkout and client testimonials stay hidden until the required real content is supplied. Industry survey figures are sourced separately and are not presented as Mayor Joe results.

## Curated video collection

The homepage features eight videos selected from18 supplied files, organized as AI Commercials, AI Storytelling, Documentary, Motion Graphics, Animation, and Faceless Content. Full web films, silent previews, and real-frame posters live in `public/media/`. The prominent View more button opens the original Drive folder without changing its sharing settings. No awards, client commissions, or measured results are inferred from the supplied filenames or brand names.
