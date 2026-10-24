/**
 * Answer Engine Optimization (AEO) content — single source of truth.
 *
 * Each page shows its own FAQ list. The same arrays feed the visible HTML and the
 * FAQPage JSON-LD, so schema can never drift from what visitors see.
 *
 * Rules for editing:
 * - Only state facts the business has confirmed. No invented numbers or claims.
 * - Every question appears on exactly one page (no repeated FAQs across pages).
 * - Lead every answer with the direct answer in the first sentence.
 */

import { businessProfile as P } from './businessProfile.js';

/** Flat view of the business profile used by SEO, prerender and llms.txt (data lives in businessProfile.js). */
export const BUSINESS = {
  name: P.name,
  url: P.url,
  phone: P.contact.phone,
  phoneDisplay: P.contact.phoneDisplay,
  email: P.contact.email,
  streetAddress: P.address.street,
  city: P.address.city,
  region: P.address.region,
  postalCode: P.address.postalCode,
  country: P.address.country,
  addressDisplay: P.address.formatted,
  hoursDisplay: P.hours.long,
};

/** Real content-edit dates per route (sitemap lastmod). Bump only when that page's content changes. */
export const LAST_MODIFIED = {
  '/': '2026-10-22',
  '/services': '2026-10-22',
  '/industries': '2026-10-22',
  '/process': '2026-10-22',
  '/about': '2026-10-22',
  '/contact': '2026-10-22',
  '/digital-textile-printing-surat': '2026-10-22',
  '/privacy-policy': '2026-10-22',
  '/terms': '2026-10-22',
};

export const FAQS = {
  home: [
    {
      q: 'What is digital textile printing?',
      a: 'Digital textile printing is a process where a digital design file is printed directly with specialised dye inks instead of screens. It reproduces fine detail, smooth gradients and many colours without making a separate screen for each colour, which suits short runs, sampling and frequently changing designs.',
    },
    {
      q: 'Do you take bulk textile printing job-work orders in Surat?',
      a: 'Yes. Lado Rani Creation takes bulk job-work orders from saree manufacturers, garment producers and textile traders in Surat and surrounding markets, with batch-to-batch colour consistency and coordinated scheduling.',
    },
    {
      q: 'Can small brands and designers place custom printing orders?',
      a: 'Yes. Emerging labels, fashion designers and custom creators can enquire. Smaller sample batches and custom runs are scheduled according to machine capacity and the current production pipeline.',
    },
  ],
  services: [
    {
      q: 'Which fabrics are suitable for sublimation printing?',
      a: 'Polyester-based and synthetic-blend fabrics are suitable, including poly-crepe, poly-georgette, poly-chiffon, poly-satin, dry-fit sportswear fabric, micro-polyester and synthetic curtain materials. Sublimation dyes bond with polyester fibres under heat, so the higher the polyester content, the better the result.',
    },
    {
      q: 'Can you print on 100% cotton or pure silk?',
      a: 'No. Pure cotton and pure natural silk do not bond with sublimation disperse dyes, so prints on them fade or wash out. These fibres need a different printing chemistry. Share your fabric composition and the team will confirm whether it is suitable.',
    },
    {
      q: 'What is sublimation paper printing?',
      a: 'Sublimation paper printing is the step where a design is printed onto special transfer paper with disperse dye inks. The printed paper is then pressed against polyester fabric with heat, which turns the dye into gas and bonds it permanently into the fibres.',
    },
    {
      q: 'What is the difference between digital textile printing and fabric transfer or fusing?',
      a: 'Digital textile printing is the machine process that reproduces the design with specialised inks. Transfer or fusing is the heat step that bonds the print permanently into the fabric. At Lado Rani Creation, printing is the core job work, and fusing is provided only where it is agreed for the order.',
    },
    {
      q: 'Do you offer sample strike-offs before bulk printing?',
      a: 'Yes. A sample strike-off can be printed on your specified fabric so you can check colour, pattern scale and feel before the bulk run is started.',
    },
  ],
  industries: [
    {
      q: 'Do you print sarees and dress materials?',
      a: 'Yes. Floral, ornamental and all-over digital prints are produced for saree manufacturers, semi-stitched suits and unstitched dress-material producers, on suitable polyester-based fabrics.',
    },
    {
      q: 'Can you print sportswear, jerseys and uniforms?',
      a: 'Yes. High-contrast sublimation prints are produced on dry-fit and other polyester fabrics for jerseys, team kits, polyester t-shirts and institutional sports uniforms.',
    },
    {
      q: 'Do you print curtains and home-furnishing fabrics?',
      a: 'Yes. Botanical, abstract and textured motifs are printed on suitable synthetic fabrics for curtains, cushion covers, upholstery and other home-furnishing textiles.',
    },
    {
      q: 'Do you work with textile traders and fabric agents?',
      a: 'Yes. Ongoing job-work arrangements are available for Surat textile-market traders, fabric agents and converters who need consistent turnaround and clear order tracking.',
    },
  ],
  process: [
    {
      q: 'Can I send my own design, and in which file formats?',
      a: 'Yes. You can send your own artwork as a high-resolution TIFF, PDF, AI, PSD or JPG file with seamless repeats. The team checks resolution, repeat alignment and colour before printing.',
    },
    {
      q: 'Is fusing included in every order?',
      a: 'No. Transfer or fusing onto fabric is carried out only when it is agreed as part of the order, and only on fabric confirmed as suitable for the process.',
    },
    {
      q: 'How do you keep colours consistent between batches and reorders?',
      a: 'Colour profiles used for each job are stored digitally, so a reorder placed later can be printed with the same settings as the original batch, and each lot is checked visually before dispatch.',
    },
    {
      q: 'How is the printed fabric checked before dispatch?',
      a: 'Every roll is inspected for colour depth and consistency before it is packed for collection or delivery from Surat.',
    },
  ],
  about: [
    {
      q: 'Is my design kept confidential?',
      a: 'Yes. Client artwork is treated as confidential. Your designs, seasonal motifs and files are used only for your order and are never shared or resold.',
    },
    {
      q: 'Does sublimation printing use water?',
      a: 'The sublimation transfer process prints dye onto paper and bonds it to fabric with heat, so the printing step does not need the washing stages used in traditional wet printing.',
    },
    {
      q: 'Which languages can I contact you in?',
      a: 'You can contact Lado Rani Creation in English, Hindi or Gujarati by phone, WhatsApp or email.',
    },
  ],
  contact: [
    {
      q: 'What details are needed for a printing quotation?',
      a: 'Share four details: your fabric type and composition, the quantity or metres needed, whether your design file is ready or needs setup, and your target delivery date.',
    },
    {
      q: 'How are digital printing rates decided?',
      a: 'Per-metre rates depend on the fabric, ink coverage of the design and order volume. Exact rates and delivery schedules are confirmed after the fabric sample and design are reviewed.',
    },
    {
      q: 'Can I send my enquiry on WhatsApp?',
      a: 'Yes. Send your requirement and design file on WhatsApp to +91 70166 33928. The enquiry form on this page also opens WhatsApp with your details filled in.',
    },
    {
      q: 'Can I visit the printing unit?',
      a: 'Yes. The unit is at 1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana, Surat, Gujarat 395002. It is open Monday to Saturday, 9 AM to 9 PM; call or WhatsApp before visiting to confirm a time.',
    },
  ],
  surat: [
    {
      q: 'Where is Lado Rani Creation’s printing unit in Surat?',
      a: 'The printing unit is at 1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana, Surat, Gujarat 395002, inside Surat’s textile production belt. Use the Google Maps directions link on this page to reach the unit.',
    },
    {
      q: 'What are the working hours of the Surat printing unit?',
      a: 'The unit works Monday to Saturday, 9:00 AM to 9:00 PM IST, and is closed on Sunday. Enquiries on WhatsApp can be sent at any time and are answered during working hours.',
    },
    {
      q: 'Which areas does Lado Rani Creation serve?',
      a: 'Lado Rani Creation works with saree makers, garment producers and textile traders across Surat and Gujarat, and with clients elsewhere in India who send their fabric and artwork for printing.',
    },
    {
      q: 'Can printed fabric be collected from the unit or delivered?',
      a: 'Yes. After the quality check, printed rolls are packed for collection from the Surat unit or for delivery, as agreed when the order is confirmed.',
    },
  ],
};
