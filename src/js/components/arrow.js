import React from 'react';

export default class Arrow extends React.Component {

  render() {
    const arrows = [
      {
        src: 'src/style/images/arrow-right.png',
        id: 'arrowRight',
        href: '#academics'
      },
      {
        src: 'src/style/images/arrow-left.png',
        id: 'arrowLeft',
        href: '#studentLife'
      },
      {
        src: 'src/style/images/down-arrow.png',
        id: 'arrowDown',
        href: '#tour'
      }
    ]

    const showArrows = arrows.map((arrow, key) =>
      <div class="arrow valign-wrapper" key={key} id={arrow.id}>
        <a href={arrow.href}>
          <img src={arrow.src} alt={arrow.href} />
        </a>
      </div>
    )

    return (
      <div>
      {showArrows}
      </div>
    )
  }
}
