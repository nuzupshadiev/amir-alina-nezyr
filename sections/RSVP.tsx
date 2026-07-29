"use client";

import { FormEvent, useState } from "react";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";

export function RSVP({ deadline, endpoint }: { deadline: string; endpoint?: string }) {
  const [guests, setGuests] = useState(1);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitting(true);
    const data = new FormData(form);
    const payload = { name: String(data.get("name")), attendance: String(data.get("attendance")), guests };
    try {
      if (endpoint) {
        const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error("Не удалось отправить ответ");
      }
      setSent(true);
    } finally { setSubmitting(false); }
  }

  return <section className="paper-section rsvp-section" id="rsvp"><AnimatedContainer><SectionTitle eyebrow="Ответьте, пожалуйста">Подтвердите участие</SectionTitle><p className="body-copy">{deadline}</p>{sent ? <div className="success" role="status"><span>♡</span><h3>Спасибо за ответ!</h3><p>Мы с нетерпением ждём этого дня.</p></div> : <form onSubmit={submit} className="rsvp-form"><label>Ваше имя<input name="name" type="text" required autoComplete="name" placeholder="Имя и фамилия" /></label><fieldset><legend>Вы сможете прийти?</legend><label className="radio"><input required type="radio" name="attendance" value="yes" /> Да, с радостью!</label><label className="radio"><input type="radio" name="attendance" value="no" /> К сожалению, не смогу</label></fieldset><div className="guest-field"><span>Количество гостей</span><div className="counter"><button type="button" aria-label="Уменьшить" onClick={() => setGuests(Math.max(1, guests - 1))}>−</button><output>{guests}</output><button type="button" aria-label="Увеличить" onClick={() => setGuests(Math.min(3, guests + 1))}>+</button></div><small>Максимум 3 человека</small></div><button className="garden-button submit-button" disabled={submitting}>{submitting ? "Отправляем…" : "Отправить ответ"}</button></form>}</AnimatedContainer></section>;
}
