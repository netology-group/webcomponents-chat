import { css } from 'lit-element';

export const style = css`
  :host .separator {
    margin: 10px 0 15px;
    user-select: none;
    width: 100%;
  }

  :host .separator span {
    background: #f8f8f8;
    border-radius: 5px;
    color: #b8b8b8;
    font-size: 16px;
    margin-left: 50px;
    padding: 2px 5px;
    position: relative;
  }

  :host .separator hr {
    border: none;
    border-top: 1px solid #d4d4d4;
    height: 0;
    margin: 0;
    position: absolute;
    top: 11px;
    width: 100%;
  }
`;
