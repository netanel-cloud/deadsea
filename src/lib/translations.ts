export const translations = {
  he: {
    // Header
    nav: {
      attractions: 'אטרקציות',
      about: 'אודות',
      testimonials: 'המלצות',
      contact: 'צור קשר',
    },
    // Hero
    hero: {
      title: 'חוויות מדבר בלתי נשכחות',
      subtitle: 'טיולים, אטרקציות ולינה במקום הנמוך בעולם',
      cta: 'גלו את החוויות',
      scrollDown: 'גללו למטה',
    },
    // Attractions
    attractions: {
      title: 'האטרקציות שלנו',
      subtitle: 'חוויות ייחודיות בים המלח',
      bookNow: 'הזמינו עכשיו',
      items: [
        {
          id: 'riders',
          title: 'טיולי ריידרים',
          description: 'טיולי EZ-Rider חשמליים לאורך חופי ים המלח עם נופים מרהיבים ואדרנלין',
          duration: '2 שעות',
          age: 'גיל 16+',
        },
        {
          id: 'jeeps',
          title: 'טיולי ג\'יפים',
          description: 'סיורי 4x4 במדבר יהודה, מסלולים למשפחות ועד אקסטרים עם מדריכים מקומיים',
          duration: '3-5 שעות',
          age: 'כל הגילאים',
        },
        {
          id: 'bikes',
          title: 'אופני שטח',
          description: 'רכיבה על אופניים חשמליים או רגילים בנופי המדבר המרהיבים',
          duration: '2-3 שעות',
          age: 'גיל 12+',
        },
        {
          id: 'sinkholes',
          title: 'בולענים ועוגות מלח',
          description: 'סיור רגלי לתצורות מלח ייחודיות - עוגות מלח, פטריות ונטיפים מדהימים',
          duration: '1.5-2 שעות',
          age: 'כל הגילאים',
        },
        {
          id: 'asado',
          title: 'אסאדו במדבר',
          description: 'חוויה קולינרית אותנטית - בישול על אש במדבר עם תפריט בשרי כשר',
          duration: 'ארוחה מלאה',
          age: 'כל הגילאים',
        },
        {
          id: 'accommodation',
          title: 'לינה רומנטית',
          description: 'קרוואנים זוגיים ממוזגים עם אמבט כוכבים, מקלחת חיצונית ושקט מוחלט',
          duration: 'לילה',
          age: 'זוגות',
        },
      ],
    },
    // About
    about: {
      title: 'הסיפור שלנו',
      subtitle: 'תיירות ים המלח',
      description: `אנחנו נתנאל וצוות תיירות ים המלח, תושבי עמק אבנת שבצפון ים המלח. מזה שנים אנחנו מארחים תיירים מהארץ ומהעולם ומציעים חוויות מדבר אותנטיות במקום הנמוך והמיוחד בעולם.

אנחנו מאמינים שהדרך הטובה ביותר להכיר את ים המלח היא דרך חוויה - לרכוב על ריידרים לאורך החוף, לגלות את עוגות המלח הנסתרות, לטעום אסאדו אמיתי על האש, ולהירדם תחת כיפת הכוכבים.

כל הטיולים שלנו מודרכים על ידי מדריכים מקומיים שמכירים כל שביל ואבן באזור.`,
      values: [
        { title: 'מקומיות', description: 'אנחנו גרים כאן, מכירים כל פינה' },
        { title: 'מקצועיות', description: 'מדריכים מוסמכים, ציוד איכותי' },
        { title: 'חוויה', description: 'לא רק סיור - זיכרון לכל החיים' },
      ],
    },
    // Testimonials
    testimonials: {
      title: 'מה אומרים עלינו',
      subtitle: 'חוויות של מבקרים',
      items: [
        {
          name: 'משפחת לוי',
          location: 'תל אביב',
          text: 'טיול הריידרים היה חוויה מדהימה! הילדים לא הפסיקו לדבר על זה. נתנאל מדריך מעולה שמכיר כל פינה.',
          rating: 5,
        },
        {
          name: 'דני ורותם',
          location: 'ירושלים',
          text: 'הלינה באסקייפ הייתה רומנטית ומושלמת. השקט, הכוכבים, ארוחת הבוקר - הכל היה מעבר לציפיות.',
          rating: 5,
        },
        {
          name: 'קבוצת הייטק מיקרוסופט',
          location: 'הרצליה',
          text: 'יום גיבוש מושלם לצוות! שילוב של אתגר, כיף ואוכל מעולה. ממליצים בחום.',
          rating: 5,
        },
        {
          name: 'Sarah & Tom',
          location: 'London, UK',
          text: 'Fantastic tour of the Dead Sea! Our guide took us to remote areas that regular tourists never see. A must-do experience!',
          rating: 5,
        },
      ],
    },
    // Contact
    contact: {
      title: 'צרו קשר',
      subtitle: 'נשמח לשמוע מכם',
      form: {
        name: 'שם מלא',
        phone: 'טלפון',
        email: 'אימייל',
        message: 'הודעה',
        submit: 'שלחו הודעה',
        success: 'ההודעה נשלחה בהצלחה!',
      },
      info: {
        phone: '054-331-6613',
        email: 'netanel@1bishvil.com',
        address: 'עמק אבנת, צפון ים המלח',
        hours: 'א׳-ש׳ 8:00-20:00',
      },
      whatsapp: 'שלחו וואטסאפ',
    },
    // Footer
    footer: {
      description: 'חוויות מדבר אותנטיות במקום הנמוך בעולם',
      quickLinks: 'קישורים מהירים',
      partners: 'אתרים שלנו',
      contact: 'צור קשר',
      rights: 'כל הזכויות שמורות',
      partnerSites: [
        { name: 'כיף ים המלח - הזמנות', url: 'https://deadsea.fun' },
        { name: 'לינה בים המלח', url: 'https://dead-sea.me' },
        { name: 'בשביל ים המלח', url: 'https://1bishvil.com' },
      ],
    },
  },
  en: {
    // Header
    nav: {
      attractions: 'Attractions',
      about: 'About',
      testimonials: 'Reviews',
      contact: 'Contact',
    },
    // Hero
    hero: {
      title: 'Unforgettable Desert Experiences',
      subtitle: 'Tours, Attractions & Accommodation at the Lowest Place on Earth',
      cta: 'Discover Experiences',
      scrollDown: 'Scroll Down',
    },
    // Attractions
    attractions: {
      title: 'Our Attractions',
      subtitle: 'Unique Dead Sea Experiences',
      bookNow: 'Book Now',
      items: [
        {
          id: 'riders',
          title: 'E-Rider Tours',
          description: 'Electric EZ-Rider tours along the Dead Sea shores with breathtaking views and adrenaline',
          duration: '2 hours',
          age: 'Age 16+',
        },
        {
          id: 'jeeps',
          title: 'Jeep Tours',
          description: '4x4 tours in the Judean Desert, routes for families to extreme adventures with local guides',
          duration: '3-5 hours',
          age: 'All ages',
        },
        {
          id: 'bikes',
          title: 'Mountain Biking',
          description: 'Electric or regular bike rides through stunning desert landscapes',
          duration: '2-3 hours',
          age: 'Age 12+',
        },
        {
          id: 'sinkholes',
          title: 'Salt Cakes & Sinkholes',
          description: 'Walking tour to unique salt formations - salt cakes, mushrooms, and amazing stalactites',
          duration: '1.5-2 hours',
          age: 'All ages',
        },
        {
          id: 'asado',
          title: 'Desert Asado',
          description: 'Authentic culinary experience - fire cooking in the desert with kosher meat menu',
          duration: 'Full meal',
          age: 'All ages',
        },
        {
          id: 'accommodation',
          title: 'Romantic Retreat',
          description: 'Air-conditioned couple caravans with star bath, outdoor shower, and complete serenity',
          duration: 'Overnight',
          age: 'Couples',
        },
      ],
    },
    // About
    about: {
      title: 'Our Story',
      subtitle: 'Dead Sea Tourism',
      description: `We are Netanel and the Dead Sea Tourism team, residents of Avnat Valley in the northern Dead Sea. For years, we have been hosting tourists from Israel and around the world, offering authentic desert experiences at the lowest and most unique place on Earth.

We believe the best way to experience the Dead Sea is through adventure - riding e-riders along the shore, discovering hidden salt formations, tasting real fire-cooked asado, and falling asleep under a canopy of stars.

All our tours are guided by local guides who know every trail and rock in the area.`,
      values: [
        { title: 'Local', description: 'We live here, we know every corner' },
        { title: 'Professional', description: 'Certified guides, quality equipment' },
        { title: 'Experience', description: 'Not just a tour - a lifetime memory' },
      ],
    },
    // Testimonials
    testimonials: {
      title: 'What People Say',
      subtitle: 'Visitor Experiences',
      items: [
        {
          name: 'The Levi Family',
          location: 'Tel Aviv',
          text: 'The rider tour was an amazing experience! The kids haven\'t stopped talking about it. Netanel is an excellent guide who knows every corner.',
          rating: 5,
        },
        {
          name: 'Danny & Rotem',
          location: 'Jerusalem',
          text: 'The Escape accommodation was romantic and perfect. The quiet, the stars, breakfast - everything exceeded expectations.',
          rating: 5,
        },
        {
          name: 'Microsoft Tech Team',
          location: 'Herzliya',
          text: 'Perfect team building day! A combination of challenge, fun, and great food. Highly recommended.',
          rating: 5,
        },
        {
          name: 'Sarah & Tom',
          location: 'London, UK',
          text: 'Fantastic tour of the Dead Sea! Our guide took us to remote areas that regular tourists never see. A must-do experience!',
          rating: 5,
        },
      ],
    },
    // Contact
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'d love to hear from you',
      form: {
        name: 'Full Name',
        phone: 'Phone',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Message sent successfully!',
      },
      info: {
        phone: '054-331-6613',
        email: 'netanel@1bishvil.com',
        address: 'Avnat Valley, Northern Dead Sea',
        hours: 'Sun-Sat 8:00-20:00',
      },
      whatsapp: 'Send WhatsApp',
    },
    // Footer
    footer: {
      description: 'Authentic desert experiences at the lowest place on Earth',
      quickLinks: 'Quick Links',
      partners: 'Our Sites',
      contact: 'Contact',
      rights: 'All rights reserved',
      partnerSites: [
        { name: 'Dead Sea Fun - Bookings', url: 'https://deadsea.fun' },
        { name: 'Dead Sea Accommodation', url: 'https://dead-sea.me' },
        { name: '1Bishvil Dead Sea', url: 'https://1bishvil.com' },
      ],
    },
  },
} as const;

export type Language = 'he' | 'en';
export type Translations = typeof translations;
