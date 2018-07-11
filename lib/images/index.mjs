import { html } from '@polymer/lit-element'

export const warning = html`<svg id="warninig" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
  <g fill-rule="evenodd">
      <path fill-rule="nonzero" d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 2A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
      <path d="M9 9H7V4h2zM9 12H7v-2h2z"/>
  </g>
</svg>`

export const del = html`<svg id="delete" xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18">
  <g fill-rule="evenodd">
      <path fill-rule="nonzero" d="M9 7h2v7H9zM5 7h2v7H5z"/>
      <path fill-rule="nonzero" d="M3 5v11h10V5H3zM1 3h14v15H1V3z"/>
      <path d="M4 0h8v5H4V0zm2 2v1h4V2H6z"/>
      <path fill-rule="nonzero" d="M0 5h16V3H0z"/>
  </g>
</svg>`

export const lock = html`
  <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23859 0 0 2.23859 0 5V8H10V5C10 2.23859 7.76147 0 5 0ZM5 2C3.34314 2 2 3.34314 2 5V6H8V5C8 3.34314 6.65686 2 5 2Z" transform="translate(3)" fill="#B8B8B8"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0909 0H2.90912C1.30243 0 0 1.30243 0 2.90912V10.1818C0 13.3951 2.60486 16 5.81818 16H10.1818C13.3951 16 16 13.3951 16 10.1818V2.90912C16 1.30243 14.6975 0 13.0909 0ZM2 2.90912C2 2.40704 2.40704 2 2.90912 2H13.0909C13.593 2 14 2.40704 14 2.90912V10.1818C14 12.2905 12.2905 14 10.1818 14H5.81818C3.70947 14 2 12.2905 2 10.1818V2.90912Z" transform="translate(0 6)" fill="#B8B8B8"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.18188 2.64374C2.61658 2.3988 2.90906 1.94104 2.90906 1.41669C2.90906 0.634277 2.25781 0 1.45459 0C0.651245 0 0 0.634277 0 1.41669C0 1.94104 0.29248 2.39886 0.727295 2.6438V3.52277C0.727295 3.92444 1.05286 4.25 1.45459 4.25C1.8562 4.25 2.18188 3.92444 2.18188 3.52277V2.64374Z" transform="translate(6.54541 11.375)" fill="#B8B8B8"/>
  </svg>
`

export const amend = html`
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="15" viewBox="0 0 16 15">
      <defs>
          <path id="a" d="M0 0h16v16H0z"/>
      </defs>
      <g fill="none" fill-rule="evenodd" transform="translate(0 -1)">
          <mask id="b" fill="#fff">
              <use xlink:href="#a"/>
          </mask>
          <path fill="#B8B8B8" fill-rule="nonzero" d="M6.121 2.485v12.172l1 1 1-1V2.485h-2zm-2-2h6v15l-3 3-3-3v-15z" mask="url(#b)" transform="rotate(45 7.121 9.485)"/>
          <path fill="#B8B8B8" fill-rule="nonzero" d="M9 16v-2h7v2z" mask="url(#b)"/>
      </g>
  </svg>
`

export const entry = html`
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g fill="none" fill-rule="evenodd" transform="rotate(-90 12 12)">
      <circle cx="12" cy="12" r="12" fill="#48A1E6"/>
      <path fill="#FFF" fill-rule="nonzero" d="M10.2 8.649l.849-.849 4.024 4.024-4.024 4.025L10.2 15l3.176-3.176z"/>
  </g>
  </svg>
`
