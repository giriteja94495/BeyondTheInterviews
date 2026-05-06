/* All illustrations share one restrained palette:
   bg:    #11140f  (deep slate)
   line:  #d9d3c4  (warm cream)
   mute:  #6b6a60  (warm grey)
   warm:  #e26a3d  (terracotta)
   cool:  #34d399  (emerald, used sparingly)
*/

const BG = '#11140f'
const LINE = '#d9d3c4'
const MUTE = '#6b6a60'
const WARM = '#e26a3d'
const COOL = '#34d399'

export function RealWorldIllus() {
  return (
    <svg viewBox="0 0 320 200" className="illus" aria-hidden="true">
      <rect x="0" y="0" width="320" height="200" fill={BG} />
      <text x="20" y="30" fill={MUTE} fontFamily="Inter" fontSize="11" fontWeight="600">$ git push origin reality</text>

      <rect x="20" y="50" width="120" height="60" rx="8" fill="none" stroke={LINE} strokeWidth="1.4" />
      <text x="32" y="74" fill={LINE} fontFamily="Inter" fontSize="11" fontWeight="600">Pull Request</text>
      <text x="32" y="92" fill={MUTE} fontFamily="Inter" fontSize="9">4 reviewers</text>
      <text x="32" y="104" fill={COOL} fontFamily="Inter" fontSize="9">+1,204</text>
      <text x="78" y="104" fill={WARM} fontFamily="Inter" fontSize="9">−287</text>

      <rect x="160" y="50" width="140" height="60" rx="8" fill="none" stroke={LINE} strokeWidth="1.4" />
      <text x="172" y="74" fill={LINE} fontFamily="Inter" fontSize="11" fontWeight="600">Code Review</text>
      <text x="172" y="92" fill={MUTE} fontFamily="Inter" fontSize="9">"why not a queue here?"</text>
      <circle cx="288" cy="100" r="3.5" fill={WARM} />

      <rect x="20" y="130" width="280" height="50" rx="8" fill="none" stroke={LINE} strokeWidth="1.4" opacity="0.5" />
      <rect x="32" y="142" width="60" height="6" rx="3" fill={LINE} />
      <rect x="32" y="154" width="200" height="4" rx="2" fill={MUTE} opacity="0.6" />
      <rect x="32" y="162" width="160" height="4" rx="2" fill={MUTE} opacity="0.6" />
    </svg>
  )
}

export function SystemsIllus() {
  return (
    <svg viewBox="0 0 320 200" className="illus" aria-hidden="true">
      <rect width="320" height="200" fill={BG} />
      <g stroke={LINE} strokeWidth="1.4" fill="none">
        <rect x="40" y="50" width="60" height="40" rx="6" />
        <rect x="220" y="50" width="60" height="40" rx="6" />
        <rect x="130" y="120" width="60" height="40" rx="6" />
        <path d="M100 70 L220 70" />
        <path d="M70 90 L160 120" />
        <path d="M250 90 L190 120" />
      </g>
      <text x="48" y="74" fill={LINE} fontFamily="Inter" fontSize="10" fontWeight="600">Service A</text>
      <text x="228" y="74" fill={LINE} fontFamily="Inter" fontSize="10" fontWeight="600">Service B</text>
      <text x="138" y="144" fill={LINE} fontFamily="Inter" fontSize="10" fontWeight="600">Queue</text>
      <circle cx="160" cy="70" r="3.5" fill={WARM}>
        <animate attributeName="cx" values="100;220;100" dur="3.4s" repeatCount="indefinite" />
      </circle>
      <text x="20" y="190" fill={MUTE} fontFamily="Inter" fontSize="9">distributed_tracing.span</text>
    </svg>
  )
}

export function SystemDesignIllus() {
  return (
    <svg viewBox="0 0 320 200" className="illus" aria-hidden="true">
      <rect width="320" height="200" fill={BG} />
      <g fill="none" stroke={LINE} strokeWidth="1.4">
        <circle cx="60" cy="100" r="22" />
        <circle cx="160" cy="60" r="22" />
        <circle cx="160" cy="140" r="22" />
        <circle cx="260" cy="100" r="22" />
        <path d="M82 100 L138 70" />
        <path d="M82 100 L138 130" />
        <path d="M182 70 L238 100" />
        <path d="M182 130 L238 100" />
      </g>
      <text x="42" y="104" fill={LINE} fontFamily="Inter" fontSize="9" fontWeight="600">Client</text>
      <text x="151" y="64" fill={LINE} fontFamily="Inter" fontSize="9" fontWeight="600">LB</text>
      <text x="146" y="144" fill={LINE} fontFamily="Inter" fontSize="9" fontWeight="600">Cache</text>
      <text x="251" y="104" fill={LINE} fontFamily="Inter" fontSize="9" fontWeight="600">DB</text>
      <text x="20" y="190" fill={MUTE} fontFamily="Inter" fontSize="9">
        p99 = <tspan fill={COOL}>42ms</tspan> · QPS = <tspan fill={WARM}>18k</tspan>
      </text>
    </svg>
  )
}

export function CleanCodeIllus() {
  return (
    <svg viewBox="0 0 320 200" className="illus" aria-hidden="true">
      <rect width="320" height="200" fill={BG} />
      <g stroke={LINE} strokeWidth="1.4" fill="none">
        <rect x="40" y="40" width="100" height="40" rx="6" />
        <rect x="180" y="40" width="100" height="40" rx="6" />
        <rect x="110" y="120" width="100" height="40" rx="6" />
        <path d="M90 80 L160 120" strokeDasharray="3 3" />
        <path d="M230 80 L160 120" strokeDasharray="3 3" />
      </g>
      <text x="60" y="64" fill={LINE} fontFamily="Inter" fontSize="10" fontWeight="600">Interface</text>
      <text x="200" y="64" fill={LINE} fontFamily="Inter" fontSize="10" fontWeight="600">Strategy</text>
      <text x="130" y="144" fill={LINE} fontFamily="Inter" fontSize="10" fontWeight="600">Concrete</text>
      <text x="20" y="190" fill={MUTE} fontFamily="Inter" fontSize="9">«clean code, clean career»</text>
    </svg>
  )
}

export function ConcurrencyIllus() {
  return (
    <svg viewBox="0 0 320 200" className="illus" aria-hidden="true">
      <rect width="320" height="200" fill={BG} />
      <g stroke={LINE} strokeWidth="1.4" fill="none">
        <line x1="80" y1="40" x2="80" y2="170" />
        <line x1="240" y1="40" x2="240" y2="170" />
        <rect x="60" y="60" width="40" height="20" rx="4" />
        <rect x="220" y="90" width="40" height="20" rx="4" />
        <rect x="60" y="130" width="40" height="20" rx="4" />
      </g>
      <g stroke={WARM} strokeWidth="1.4" fill="none" strokeDasharray="4 3">
        <path d="M100 70 L220 100" />
        <path d="M220 110 L100 140" />
      </g>
      <text x="50" y="55" fill={LINE} fontFamily="Inter" fontSize="9" fontWeight="600">Thread A</text>
      <text x="210" y="55" fill={LINE} fontFamily="Inter" fontSize="9" fontWeight="600">Thread B</text>
      <text x="64" y="74" fill={MUTE} fontFamily="Inter" fontSize="9">lock()</text>
      <text x="226" y="104" fill={MUTE} fontFamily="Inter" fontSize="9">acquire</text>
      <text x="62" y="144" fill={MUTE} fontFamily="Inter" fontSize="9">unlock()</text>
      <text x="20" y="190" fill={MUTE} fontFamily="Inter" fontSize="9">concurrency · without the panic</text>
    </svg>
  )
}

export function MentorshipIllus() {
  return (
    <svg viewBox="0 0 320 200" className="illus" aria-hidden="true">
      <rect width="320" height="200" fill={BG} />
      <g fill="none" stroke={LINE} strokeWidth="1.4">
        <rect x="40" y="60" width="80" height="80" rx="12" />
        <rect x="200" y="60" width="80" height="80" rx="12" />
      </g>
      <text x="58" y="108" fill={LINE} fontFamily="Sora" fontSize="22" fontWeight="800">YOU</text>
      <text x="212" y="108" fill={LINE} fontFamily="Sora" fontSize="18" fontWeight="800">MENTOR</text>
      <path d="M120 100 L200 100" stroke={MUTE} strokeWidth="1.4" strokeDasharray="6 4" />
      <circle cx="160" cy="100" r="5" fill={WARM} />
      <text x="20" y="190" fill={MUTE} fontFamily="Inter" fontSize="9">1:1 office hours · weekly cohorts</text>
    </svg>
  )
}
