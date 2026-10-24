/**
 * Single source of truth for business identity, location and Google Business Profile data.
 *
 * Every page, the footer, the JSON-LD schema, llms.txt and llms-full.txt read from here,
 * so the name, address, phone and hours (NAP) can never drift between them.
 * Change a fact here only after confirming it on the Google Business Profile.
 */

export const businessProfile = {
  name: 'Lado Rani Creation',
  alternateNames: ['Lado Rani Digital Textile Printing', 'Lado Rani Job Work Surat', 'Lado Rani Creation Surat'],
  slogan: 'Precision in Every Print.',
  category: 'Digital textile printing and textile job work',
  // The one "who we are" sentence used in schema, llms.txt and the location page
  summary:
    'Lado Rani Creation is a digital textile printing and job-work unit in Surat, Gujarat, that prints designs on polyester and synthetic fabrics for saree makers, ethnic-wear and sportswear brands, home-furnishing suppliers and textile traders.',
  url: 'https://www.ladoranicreation.com',
  logo: 'https://www.ladoranicreation.com/images/logo/logo_lado_rani_creation.png',
  image: 'https://www.ladoranicreation.com/images/ogImage/og-image.jpg',

  // Exact Google Business Profile address format
  address: {
    street: '1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana',
    area: 'Anjana',
    city: 'Surat',
    region: 'Gujarat',
    regionCode: 'IN-GJ',
    postalCode: '395002',
    country: 'IN',
    countryName: 'India',
    formatted: '1st Floor, Jay Industrial Estate, Plot No 244, 2, Anjana, Surat, Gujarat 395002',
  },

  // Google Business Profile map pin
  geo: { latitude: 21.1854771, longitude: 72.8526863 },

  contact: {
    phone: '+917016633928',
    phoneDisplay: '+91 70166 33928',
    whatsAppDigits: '917016633928',
    email: 'Ladoranicreation99@gmail.com',
  },

  hours: {
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '21:00',
    timezone: 'Asia/Kolkata',
    display: 'Mon – Sat: 9:00 AM – 9:00 PM',
    long: 'Monday to Saturday, 9:00 AM to 9:00 PM IST (Sunday closed)',
  },

  google: {
    cid: '12085588766934721246',
    cidUrl: 'https://www.google.com/maps?cid=12085588766934721246',
    placeUrl:
      'https://www.google.com/maps/place/Lado+Rani+Creation/@21.1854821,72.8501114,17z/data=!4m16!1m9!3m8!1s0x3be04f68063a13f1:0xa7b8a2f38a9862de!2sLado+Rani+Creation!8m2!3d21.1854771!4d72.8526863!9m1!1b1!16s%2Fg%2F11zzqtmcgp',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=21.1854771,72.8526863',
    embedUrl: 'https://www.google.com/maps?q=Lado+Rani+Creation,+Surat,+Gujarat&output=embed&z=17',
    // Shown on the visible Google profile card only (never as self-serving review schema)
    rating: 5.0,
    reviewCount: 4,
  },

  social: {
    instagram: 'https://www.instagram.com/lado.ranicreation/',
    facebook: 'https://www.facebook.com/share/19jQXM9sfp/',
  },

  languages: ['English', 'Hindi', 'Gujarati'],

  areaServed: ['Surat', 'Gujarat', 'India'],

  knowsAbout: [
    'Digital textile printing',
    'Sublimation paper printing',
    'Textile printing job work',
    'Heat transfer and fusing',
    'Polyester fabric printing',
    'Saree and dress material printing',
    'Sportswear sublimation printing',
  ],
};

export const whatsAppUrl = (message) =>
  `https://wa.me/${businessProfile.contact.whatsAppDigits}?text=${encodeURIComponent(message)}`;

/**
 * Open/closed status in IST, e.g. { isOpen: true, label: 'Open now · Closes 9 PM' }.
 * Call it only in the browser (after mount): prerendered HTML must not bake in a build-time status.
 */
export function getOpenStatus(now = new Date()) {
  const ist = new Date(now.getTime() + now.getTimezoneOffset() * 60000 + 5.5 * 3600000);
  const day = ist.getDay(); // 0 = Sunday
  const minutes = ist.getHours() * 60 + ist.getMinutes();
  const open = 9 * 60;
  const close = 21 * 60;

  if (day !== 0 && minutes >= open && minutes < close) {
    return { isOpen: true, label: 'Open now · Closes 9 PM' };
  }
  const opensToday = day !== 0 && minutes < open;
  const nextDay = day === 6 || day === 0 ? 'Mon' : 'tomorrow';
  return { isOpen: false, label: `Closed · Opens 9 AM ${opensToday ? 'today' : nextDay}` };
}
