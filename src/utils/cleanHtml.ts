import { Slide } from '../types/content';

/**
 * Strips duplicate elements from slide rawHtml that are already
 * rendered by dedicated React UI components (eyebrow, title, subtitle,
 * lead, caveat, code snippets, tables, video embeds, and speaker notes).
 *
 * This prevents redundancy where headers, caveats, or code blocks
 * would otherwise appear twice on the same slide.
 */
export function cleanSlideHtml(rawHtml: string, slide: Partial<Slide>): string {
  if (!rawHtml) return '';

  let html = rawHtml;

  // 1. Remove Reveal.js notes / sources entirely
  html = html.replace(/<aside\b[^>]*class=["'][^"']*notes[^"']*["'][^>]*>[\s\S]*?<\/aside>/gi, '');
  html = html.replace(/<aside\b[^>]*>[\s\S]*?<\/aside>/gi, '');

  // 2. Remove eyebrow paragraph (<p class="eyebrow">...</p>)
  html = html.replace(/<p\b[^>]*class=["'][^"']*eyebrow[^"']*["'][^>]*>[\s\S]*?<\/p>/gi, '');

  // 3. Remove slide heading (h1, h2, h3) since React renders slide.title
  html = html.replace(/<h[1-3]\b[^>]*>[\s\S]*?<\/h[1-3]>/gi, '');

  // 4. Remove lead and subtitle paragraphs since React renders them
  html = html.replace(/<p\b[^>]*class=["'][^"']*(?:lead|subtitle)[^"']*["'][^>]*>[\s\S]*?<\/p>/gi, '');

  // 5. Remove caveat (<p class="caveat">...</p>) since React renders slide.caveat in styled alert box
  html = html.replace(/<p\b[^>]*class=["'][^"']*caveat[^"']*["'][^>]*>[\s\S]*?<\/p>/gi, '');

  // 6. If slide has code snippets, remove <pre> blocks from rawHtml to prevent duplicate code
  if (slide.codeSnippets && slide.codeSnippets.length > 0) {
    html = html.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, '');
  }

  // 7. If slide has tables, remove <table> blocks to prevent duplicate tables
  if (slide.tables && slide.tables.length > 0) {
    html = html.replace(/<table\b[^>]*>[\s\S]*?<\/table>/gi, '');
  }

  // 8. If slide has videoUrl, remove video and iframe embeds
  if (slide.videoUrl) {
    html = html.replace(/<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi, '');
    html = html.replace(/<video\b[^>]*>[\s\S]*?<\/video>/gi, '');
  }

  // 9. If slide has images rendered by ImageEmbed, remove large img tags
  if (slide.images && slide.images.length > 0) {
    html = html.replace(/<img\b(?![^>]*class=["'][^"']*(?:icon|social)[^"']*)[^>]*>/gi, '');
  }

  // Ensure image and asset paths in rawHtml are relative for subpath deployments
  html = html.replace(/src=["']\/assets\//gi, 'src="./assets/');

  // 10. Clean up empty divs or leftover whitespace
  html = html.trim();

  // Strip empty wrappers like <div></div> or <div class="split"><div></div><div></div></div>
  const textOnly = html.replace(/<[^>]*>/g, '').trim();
  const hasVisualElements = /<(img|svg|div\b[^>]*class=["'][^"']*(?:timeline|workflow|split|activity-prompts|callout|quote-block|intro-author-card|controls-guide-grid)[^"'])/i.test(html);

  if (!textOnly && !hasVisualElements) {
    return '';
  }

  return html;
}

