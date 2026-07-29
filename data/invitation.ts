import type { InvitationConfig } from "@/types/invitation";

export const invitation: InvitationConfig = {
  couple: { groom: "Азамат", bride: "Айдана" },
  date: "2026-09-12T17:00:00+06:00",
  dateLabel: "12 сентября 2026",
  timeLabel: "Сбор гостей в 17:00",
  venue: {
    name: "Ресторан «Ала-Тоо»",
    address: "г. Бишкек, проспект Чынгыза Айтматова, 12",
    mapUrl: "https://2gis.kg/bishkek/search/Ресторан%20Ала-Тоо",
  },
  intro: { video: "/media/loading-screen.mp4", music: "/media/music.mp3", prompt: "Коснитесь, чтобы открыть" },
  heroVideo: "/media/hero.mp4",
  greeting: "С большой радостью приглашаем вас разделить с нами один из самых важных и счастливых дней нашей жизни!",
  timeline: [
    { time: "17:00", title: "Сбор гостей", description: "Встречаем дорогих гостей и собираемся за праздничным дасторкон.", icon: "guests" },
    { time: "17:30", title: "Бата берүү", description: "Благословение молодых и тёплые пожелания от старших.", icon: "blessing" },
    { time: "18:00", title: "Начало тоя", description: "Праздничный ужин, поздравления родных и близких.", icon: "dinner" },
    { time: "20:00", title: "Бий кечеси", description: "Танцы, музыка и веселье до самого вечера.", icon: "dance" },
  ],
  dressCode: {
    text: "Будем рады видеть вас в нарядах нежных природных оттенков.",
    colors: ["#e8d6cc", "#f3e7d5", "#c8c8aa", "#a7aa84", "#7c8766"],
  },
  rsvpDeadline: "Просим подтвердить присутствие до 1 сентября",
};
