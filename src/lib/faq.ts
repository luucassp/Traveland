import type { Localized } from "@/lib/i18n/translations";

export type FAQItem = {
  question: Localized<string>;
  answer: Localized<string>;
};

export const faqs: FAQItem[] = [
  {
    question: {
      en: "How does the Hop-On Hop-Off tour work?",
      pt: "Como funciona o tour Hop-On Hop-Off?",
      es: "¿Cómo funciona el tour Hop-On Hop-Off?",
      fr: "Comment fonctionne la visite Hop-On Hop-Off ?",
      it: "Come funziona il tour Hop-On Hop-Off?",
      de: "Wie funktioniert die Hop-On-Hop-Off-Tour?",
    },
    answer: {
      en: "You buy a ticket valid for 24h or 48h and can hop on and off the bus as many times as you like at any of the 14 stops around Dublin city centre, at your own pace.",
      pt: "Você compra um bilhete válido por 24h ou 48h e pode subir e descer do ônibus quantas vezes quiser em qualquer uma das 14 paradas pelo centro de Dublin, no seu próprio ritmo.",
      es: "Compras un billete válido por 24h o 48h y puedes subir y bajar del autobús tantas veces como quieras en cualquiera de las 14 paradas del centro de Dublín, a tu propio ritmo.",
      fr: "Vous achetez un billet valable 24h ou 48h et pouvez monter et descendre du bus autant de fois que vous le souhaitez à l'un des 14 arrêts du centre de Dublin, à votre propre rythme.",
      it: "Acquisti un biglietto valido per 24h o 48h e puoi salire e scendere dall'autobus tutte le volte che vuoi in una delle 14 fermate nel centro di Dublino, al tuo ritmo.",
      de: "Sie kaufen ein 24- oder 48-Stunden-Ticket und können an jeder der 14 Haltestellen im Zentrum von Dublin so oft ein- und aussteigen, wie Sie möchten – in Ihrem eigenen Tempo.",
    },
  },
  {
    question: {
      en: "How often do the buses run?",
      pt: "Qual a frequência dos ônibus?",
      es: "¿Con qué frecuencia pasan los autobuses?",
      fr: "À quelle fréquence passent les bus ?",
      it: "Con quale frequenza passano gli autobus?",
      de: "Wie oft fahren die Busse?",
    },
    answer: {
      en: "Buses run every 10 to 15 minutes during peak hours, and every 20 to 30 minutes off-peak, depending on the season.",
      pt: "Os ônibus passam a cada 10 a 15 minutos em horário de pico, e a cada 20 a 30 minutos fora do horário de pico, dependendo da estação do ano.",
      es: "Los autobuses pasan cada 10 a 15 minutos en horas punta, y cada 20 a 30 minutos fuera de horas punta, según la temporada.",
      fr: "Les bus passent toutes les 10 à 15 minutes aux heures de pointe, et toutes les 20 à 30 minutes en dehors de ces horaires, selon la saison.",
      it: "Gli autobus passano ogni 10-15 minuti nelle ore di punta e ogni 20-30 minuti fuori dalle ore di punta, in base alla stagione.",
      de: "Die Busse fahren je nach Saison alle 10 bis 15 Minuten zu Stoßzeiten und alle 20 bis 30 Minuten außerhalb der Stoßzeiten.",
    },
  },
  {
    question: {
      en: "Do children pay?",
      pt: "Crianças pagam?",
      es: "¿Los niños pagan?",
      fr: "Les enfants paient-ils ?",
      it: "I bambini pagano?",
      de: "Zahlen Kinder?",
    },
    answer: {
      en: "Children up to 13 years old travel free when accompanied by a paying adult, on all our main tours.",
      pt: "Crianças até 13 anos viajam gratuitamente quando acompanhadas de um adulto pagante, em todos os nossos tours principais.",
      es: "Los niños de hasta 13 años viajan gratis cuando van acompañados de un adulto de pago, en todos nuestros tours principales.",
      fr: "Les enfants jusqu'à 13 ans voyagent gratuitement lorsqu'ils sont accompagnés d'un adulte payant, sur toutes nos visites principales.",
      it: "I bambini fino a 13 anni viaggiano gratis se accompagnati da un adulto pagante, su tutti i nostri tour principali.",
      de: "Kinder bis 13 Jahre fahren in Begleitung eines zahlenden Erwachsenen bei allen unseren Haupttouren kostenlos.",
    },
  },
  {
    question: {
      en: "What languages is the audio guide available in?",
      pt: "Em quais idiomas está disponível o áudio guia?",
      es: "¿En qué idiomas está disponible la audioguía?",
      fr: "Dans quelles langues l'audioguide est-il disponible ?",
      it: "In quali lingue è disponibile l'audioguida?",
      de: "In welchen Sprachen ist der Audioguide verfügbar?",
    },
    answer: {
      en: "The audio guide is available in 10 languages, including English, Portuguese, Spanish, French, German and Italian.",
      pt: "O áudio guia está disponível em 10 idiomas, incluindo português, inglês, espanhol, francês, alemão e italiano.",
      es: "La audioguía está disponible en 10 idiomas, incluidos español, inglés, portugués, francés, alemán e italiano.",
      fr: "L'audioguide est disponible en 10 langues, dont le français, l'anglais, le portugais, l'espagnol, l'allemand et l'italien.",
      it: "L'audioguida è disponibile in 10 lingue, tra cui italiano, inglese, portoghese, spagnolo, francese e tedesco.",
      de: "Der Audioguide ist in 10 Sprachen verfügbar, darunter Deutsch, Englisch, Portugiesisch, Spanisch, Französisch und Italienisch.",
    },
  },
  {
    question: {
      en: "Can I cancel my booking?",
      pt: "Posso cancelar minha reserva?",
      es: "¿Puedo cancelar mi reserva?",
      fr: "Puis-je annuler ma réservation ?",
      it: "Posso annullare la mia prenotazione?",
      de: "Kann ich meine Buchung stornieren?",
    },
    answer: {
      en: "Yes. You can cancel free of charge up to 24h before your scheduled time and get a full refund.",
      pt: "Sim. Você pode cancelar gratuitamente até 24h antes do horário marcado e receber reembolso total.",
      es: "Sí. Puedes cancelar gratis hasta 24h antes de la hora programada y recibir el reembolso completo.",
      fr: "Oui. Vous pouvez annuler gratuitement jusqu'à 24h avant l'heure prévue et obtenir un remboursement intégral.",
      it: "Sì. Puoi annullare gratuitamente fino a 24h prima dell'orario previsto e ricevere il rimborso completo.",
      de: "Ja. Sie können bis 24 Stunden vor dem geplanten Termin kostenlos stornieren und erhalten eine vollständige Rückerstattung.",
    },
  },
  {
    question: {
      en: "Are tickets valid from the purchase date or first use?",
      pt: "Os bilhetes têm validade a partir da compra ou do primeiro uso?",
      es: "¿Los billetes son válidos desde la compra o desde el primer uso?",
      fr: "Les billets sont-ils valables dès l'achat ou dès la première utilisation ?",
      it: "I biglietti sono validi dall'acquisto o dal primo utilizzo?",
      de: "Sind die Tickets ab dem Kaufdatum oder ab der ersten Nutzung gültig?",
    },
    answer: {
      en: "The 24h or 48h validity starts counting from the first use of the ticket, not the purchase date.",
      pt: "A validade de 24h ou 48h começa a contar a partir do primeiro uso do bilhete, não da data da compra.",
      es: "La validez de 24h o 48h comienza a contar desde el primer uso del billete, no desde la fecha de compra.",
      fr: "La validité de 24h ou 48h commence à compter dès la première utilisation du billet, et non à la date d'achat.",
      it: "La validità di 24h o 48h inizia a decorrere dal primo utilizzo del biglietto, non dalla data di acquisto.",
      de: "Die Gültigkeit von 24 oder 48 Stunden beginnt mit der ersten Nutzung des Tickets, nicht mit dem Kaufdatum.",
    },
  },
  {
    question: {
      en: "Is there a stop near the main hotels?",
      pt: "Existe parada perto dos principais hotéis?",
      es: "¿Hay alguna parada cerca de los principales hoteles?",
      fr: "Y a-t-il un arrêt près des principaux hôtels ?",
      it: "C'è una fermata vicino ai principali hotel?",
      de: "Gibt es eine Haltestelle in der Nähe der wichtigsten Hotels?",
    },
    answer: {
      en: "Yes, our 14 stops were planned to be close to the main hotels, attractions and public transport hubs in Dublin.",
      pt: "Sim, nossas 14 paradas foram planejadas para ficar próximas dos principais hotéis, atrações e pontos de transporte público de Dublin.",
      es: "Sí, nuestras 14 paradas fueron planeadas para estar cerca de los principales hoteles, atracciones y puntos de transporte público de Dublín.",
      fr: "Oui, nos 14 arrêts ont été conçus pour être proches des principaux hôtels, attractions et points de transport public de Dublin.",
      it: "Sì, le nostre 14 fermate sono state pensate per essere vicine ai principali hotel, attrazioni e punti di trasporto pubblico di Dublino.",
      de: "Ja, unsere 14 Haltestellen wurden so geplant, dass sie sich in der Nähe der wichtigsten Hotels, Attraktionen und öffentlichen Verkehrsmittel in Dublin befinden.",
    },
  },
  {
    question: {
      en: "How do I receive my ticket after purchase?",
      pt: "Como recebo meu bilhete após a compra?",
      es: "¿Cómo recibo mi billete después de la compra?",
      fr: "Comment recevoir mon billet après l'achat ?",
      it: "Come ricevo il biglietto dopo l'acquisto?",
      de: "Wie erhalte ich mein Ticket nach dem Kauf?",
    },
    answer: {
      en: "The ticket is sent by email as a digital e-ticket immediately after payment confirmation, and can be shown directly from your phone.",
      pt: "O bilhete é enviado por e-mail em formato digital (e-ticket) imediatamente após a confirmação do pagamento, podendo ser apresentado direto do celular.",
      es: "El billete se envía por correo electrónico en formato digital (e-ticket) inmediatamente después de la confirmación del pago, y puede presentarse directamente desde el móvil.",
      fr: "Le billet est envoyé par e-mail au format numérique (e-ticket) immédiatement après la confirmation du paiement, et peut être présenté directement depuis votre téléphone.",
      it: "Il biglietto viene inviato via e-mail in formato digitale (e-ticket) immediatamente dopo la conferma del pagamento e può essere mostrato direttamente dal cellulare.",
      de: "Das Ticket wird sofort nach der Zahlungsbestätigung per E-Mail als digitales E-Ticket versendet und kann direkt vom Smartphone vorgezeigt werden.",
    },
  },
];
