import React from 'react';
import './impact.css';

// Moved out of the footer, where these were the strongest thing the site had to
// say and the last thing anyone would see. Each figure is stated once, with its
// Vietnamese label beneath rather than beside it.
// Every stat carries the same three lines — value, English label, Vietnamese
// label. The USD conversion is folded into the Vietnamese line rather than
// hanging off the first stat as a fourth line nothing else had, which left the
// row visibly ragged.
const STATS = [
  // USD figure derived from the rate the previous pair implied (52.4M ≈ $2,060,
  // so ~25,400 VND to the dollar). Worth confirming against the real total.
  { value: '67M', unit: 'VND', label: 'Raised', vi: 'Quyên góp · ≈ $2,630' },
  { value: '5', label: 'Missions', vi: 'Chiến dịch' },
  { value: '27', label: 'Members', vi: 'Thành viên' },
  { value: '2024', label: 'Founded', vi: 'Thành lập' },
];

export default function Impact() {
  return (
    <section className="impact" aria-label="Our impact so far">
      <div className="h2h-shell">
        <ul className="impact__list">
          {STATS.map((stat) => (
            <li key={stat.label} className="impact__stat">
              <div className="impact__value">
                {stat.value}
                {stat.unit && <span className="impact__unit">{stat.unit}</span>}
              </div>
              <div className="impact__label">{stat.label}</div>
              <div className="impact__vi" lang="vi">
                {stat.vi}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
