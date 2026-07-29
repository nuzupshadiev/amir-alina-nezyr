import Image from "next/image";
import { AnimatedContainer } from "@/components/AnimatedContainer";
import { SectionTitle } from "@/components/SectionTitle";
import type { InvitationConfig } from "@/types/invitation";

export function WeddingDate({ config }: { config: InvitationConfig }) {
  return <section className="paper-section date-section"><AnimatedContainer>
    <p className="invitation-copy">Урматтуу коноктор!</p><p className="body-copy">{config.greeting}</p>
    <SectionTitle eyebrow="Сохраните дату">Сентябрь</SectionTitle>
    <div className="calendar" aria-label={config.dateLabel}>
      <div className="weekdays"><span>ПН</span><span>ВТ</span><span>СР</span><span>ЧТ</span><span>ПТ</span><span>СБ</span><span>ВС</span></div>
      <div className="days"><span /><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><strong>12</strong><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span></div>
    </div>
    <p className="date-time">{config.timeLabel}</p><Image className="date-art" src="/images/newlyweds-car.png" width={637} height={392} alt="Иллюстрация машины молодожёнов" />
  </AnimatedContainer></section>;
}
