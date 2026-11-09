/** Remove only a known generated prefix; retain any writing the visitor added or edited. */
export function removeBriefTemplate(value: string, previousTemplate: string): string {
  return previousTemplate && value.startsWith(previousTemplate)
    ? value.slice(previousTemplate.length).trimStart()
    : value;
}

/** Refresh an offer summary without replacing the visitor's own project notes. */
export function mergeBriefTemplate(value: string, previousTemplate: string, nextTemplate: string): string {
  const notes = removeBriefTemplate(value, previousTemplate).trim();
  return nextTemplate + (notes ? `\n${notes}` : '');
}
