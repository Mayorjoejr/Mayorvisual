# Customize Mayor Joe’s portfolio

Mayor Joe is the owner-supplied brand name, and the portrait is owner-supplied. The starter biography, stock project imagery, project treatments, and tool entries are illustrative. They do not establish work history, ownership of a finished film, client relationships, tool proficiency, availability, awards, or performance results.

## Edit the portfolio

Edit the exported data in `data/content.ts`. Update the biography, availability, SEO text, and media as needed. The current name and portrait are Mayor Joe’s supplied brand assets. Add owned or licensed files to `public/images` and `public/videos`; reference them from the site root, for example `/videos/my-film.mp4`.

Each project has a unique `slug` for its detail-page URL. Keep slugs lowercase and hyphenated. Project categories must match a filter label in `categories`. Add, remove, or reorder objects in `projects` to change the gallery without changing its layout. Keep `sample: true` for illustrative entries; set it to false only after replacing the images, copy, and media with real work. Use accurate credits and client or personal-project designations. The case-study challenge, concept, process, and outcome fields are independently editable.

Starter project tool arrays are empty because no production tool use has been verified. Add the tools actually used for each real project. The suggested tool list includes `verified: false`; verify and customize entries before displaying them as your production toolkit.

## Add video

Set `studio.heroVideoUrl` to a compressed, silent loop and `studio.heroImage` to its poster image. Keep a poster available for mobile devices, reduced motion, low bandwidth, and autoplay failure. Configure `studio.showreelVideoUrl` or `studio.showreelEmbedUrl` when a real reel is available.

For a local or CDN-hosted project, set `videoUrl` to a supported MP4/WebM URL. Add a WebVTT file and set `captionsUrl` when captions are relevant. Use web-optimized files with a fast-start MP4 layout; avoid placing large original camera files in the repository. Hover previews should load only when a card is engaged. The full player should load when the project page is opened.

For an external platform, use an embed URL in `embedUrl`, such as `https://www.youtube.com/embed/VIDEO_ID` or `https://player.vimeo.com/video/VIDEO_ID`. Use the provider's embed format, not a general watch-page URL. Ensure the video permits embedding and has captions where appropriate. Use either a direct video or an embed for a project to keep playback unambiguous.

## Connect real inquiries

No delivery provider or recipient was supplied. Set `contacts.formEndpoint` to a genuine HTTPS endpoint that accepts the form fields and returns success only after the provider has accepted the inquiry. Use an owned server endpoint backed by an email service, or a compatible form provider. This static-export site has no server runtime: deploy the delivery endpoint separately. Do not use a fabricated email address or an endpoint that merely echoes a success response.

The endpoint must return HTTP 2xx and JSON with `delivered: true`, `accepted: true`, or `ok: true` after accepting the inquiry. Provider adapters may be required for different response formats.

The endpoint should validate required fields, reject the hidden honeypot, limit request sizes and rate, and apply the provider's spam protections. Configure any provider domain restrictions and test a real inquiry end to end. Keep API keys and mail-provider secrets in server environment variables; never put them in this public content file or browser code. A configured endpoint must support the site's origin if the form uses fetch.

Until delivery is connected, the interface must say the contact form is not connected and must never report that a message was sent. A downloadable inquiry brief can be offered as a local alternative; label it as a download rather than delivery.

Populate `contacts.email` and only the social or booking URLs you want to display. Empty entries should stay hidden. For WhatsApp use a full `https://wa.me/` URL with the country code. A Calendly booking URL can be used as an external booking link; optional embedding requires the corresponding provider integration.

## Biography and proof

The About portrait uses a web-prepared derivative of Mayor Joe’s supplied photograph, documented in `ASSET-SOURCES.md`. Replace it only with another approved portrait or workspace image. Keep achievements empty until accurate details are available. Provide a real file in `studio.mediaKitUrl` to enable a download link. Keep `testimonials` empty until genuine, approved quotes are supplied; add company names, project links, video testimonials, and logos only with permission. The testimonial area must remain hidden while the array is empty.

## SEO and final review

Set the production origin used by the site's canonical metadata and sitemap to the literal deployed URL. Update the title, description, social image, and each project title/description. Review mobile layouts, keyboard navigation, reduced-motion behavior, video pause controls, image descriptions, and contact error feedback after changing content. Confirm that every public link and download points to a real destination.

## Starter motion and imagery

Mayor Joe’s supplied portrait is displayed as personal imagery and is excluded from stock-image sample disclosures. The included MP4 files are silent pan/zoom animations of stock photographs. They demonstrate video functionality; they are not completed AI films or client work. Sources are recorded in `ASSET-SOURCES.md`. Replace these clips before presenting a finished portfolio. Set `studio.heroMediaIsSample`, `studio.portraitIsSample`, `studio.bioIsPlaceholder`, and `studio.identityIsPlaceholder` to false only as you replace the relevant content. Update `heroImageAlt`, `portraitAlt`, and `showreelDescription` with your media. The comparison slider is an illustrative CSS color treatment of one stock photograph, not a documented client transformation.

## Local development and publication

Run `npm ci` then `npm run dev` to develop. Run `npm run build` to export all pages into `out/`. Hosting identity is preserved in `.openai/hosting.json`. Set `seo.siteUrl` in `data/content.ts` to update the canonical origin, structured data, sitemap, and robots configuration together.
