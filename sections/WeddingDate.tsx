import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import { invitation, t } from "@/data/invitation";
import type { Language } from "@/types/invitation";

export function WeddingDate({ language }: { language: Language }) {
  return <section className="paper-section date-section"><AnimatedContainer>
    <p className="invitation-copy">{t(invitation.weddingDetails.heading, language)}</p><p className="body-copy">{t(invitation.weddingDetails.customMessage, language)}</p>
    <SectionTitle eyebrow={t(invitation.weddingDetails.eyebrow, language)}>{t(invitation.weddingDetails.month, language)}</SectionTitle>
    <div className="calendar" aria-label={t(invitation.dateLabel, language)}>
      <div className="weekdays">{invitation.weddingDetails.weekdays[language].map((day) => <span key={day}>{day}</span>)}</div>
      <div className="days"><span /><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><strong>19</strong><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span></div>
    </div>
    <p className="date-time">{t(invitation.weddingDetails.timeLabel, language)}</p><Image className="date-art" src="/images/newlyweds-car.png" width={637} height={392} alt={t(invitation.weddingDetails.imageAlt, language)} />
  </AnimatedContainer></section>;
}
