# Mayor Joe sales-page content

The sales page now connects a visitor's goal to a service starting point, delivery formats, and a project brief. The three offer scopes are editable starting points in `data/sales.ts`; confirm the scope and terms before accepting paid work.

## Activate real checkout

For each package, set `priceLabel` to the accurate price and currency, `checkoutUrl` to the real HTTPS checkout for that package, and `checkoutApproved: true` after checking its amount, scope, terms, and recipient. The checkout link stays hidden unless all three are configured. No payment is currently taken by this website. Keep payment secrets out of source and browser code; use the payment provider's hosted checkout.

The current button prepares a project brief. Inquiry delivery still needs a genuine HTTPS endpoint in `contacts.formEndpoint`, or configured email, booking, or WhatsApp links. The endpoint receives the existing inquiry fields plus `packageName`, `goal`, and comma-separated `formats`. Validate those values and the honeypot server-side, apply rate limits, and confirm acceptance before returning success. A downloaded brief has not been sent.

## Add approved client testimonials

Add genuine entries to `testimonials` in `data/content.ts`, including `approved: true`, the exact approved `quote`, `name`, and optional `role`, `company`, `projectUrl`, `logoUrl`, or `videoUrl`. Only entries with `approved: true` render in the client-stories section. Keep the array empty until real approved feedback is available. Do not use the industry quote as a client endorsement.

## Add measured case studies

The project gallery contains eight provided video samples from the identified Drive collection. Homepage film notes describe visible creative choices and retain source links; they do not claim verified client commissions or measured outcomes. Add approved production credits and actual reporting before presenting any film as a client performance case study. For performance figures, retain the reporting period, denominator, attribution method, client approval, and supporting source. Do not turn a forecast or industry statistic into an achieved result.

## Industry evidence

`data/evidence.ts` contains three findings and a short publisher quote from Wyzowl's 2026 State of Video Marketing report. Each card links to the primary report. The visible methodology explains that the total survey contained 266 marketers and consumers; the consumer subgroup size was not published. These are industry survey findings, not Mayor Joe results or a promise of campaign performance. Check and update the source when refreshing the page.

## Demonstrations and export

The comparison tabs show an illustrative CSS color treatment, a stock-image pan-and-zoom animation, and a copywriting example. They do not claim measured client improvements. The downloadable `mayor-joe.html` edition includes the same sales interactions and embedded media. Regenerate the standalone snapshot after changing website content, prices, or checkout configuration.
