/** Industry research, not Mayor Joe client results or a forecast of campaign performance. */
export type IndustryEvidence = {
  id: string;
  value: string;
  label: string;
  context: string;
  sourceName: string;
  sourceUrl: string;
  year: number;
};

const sourceUrl = 'https://wyzowl.com/video-marketing-statistics/';
const sourceName = 'Wyzowl · State of Video Marketing 2026';

export const evidence: IndustryEvidence[] = [
  {
    id: 'purchase-influence',
    value: '85%',
    label: 'of surveyed consumers said a video had persuaded them to make a purchase.',
    context: 'Self-reported consumer experience with video in general.',
    sourceName,
    sourceUrl,
    year: 2026,
  },
  {
    id: 'brand-trust',
    value: '89%',
    label: 'of surveyed consumers connected video quality with their trust in a brand.',
    context: 'A reported perception of quality, not a measured sales uplift.',
    sourceName,
    sourceUrl,
    year: 2026,
  },
  {
    id: 'short-video-preference',
    value: '63%',
    label: 'of surveyed consumers preferred short video for learning about a product or service.',
    context: 'Preferred learning format among the choices in the survey.',
    sourceName,
    sourceUrl,
    year: 2026,
  },
];

export const evidenceMethodology = {
  label: 'Industry survey findings',
  description: 'Wyzowl surveyed 266 marketers and consumers in late 2025 for its 2026 report. These figures concern the consumer subgroup; its size is not stated on the report page.',
  limitation: 'These findings are industry context, not Mayor Joe’s client results or a guarantee of outcomes.',
  sourceName,
  sourceUrl,
  checkedOn: '2026-11-09',
};

export const industryQuote = {
  text: 'Video quality is also important to the large majority of consumers',
  attribution: 'Wyzowl · State of Video Marketing 2026',
  sourceUrl,
  context: 'Research publisher commentary, not a testimonial or endorsement of Mayor Joe.',
};
