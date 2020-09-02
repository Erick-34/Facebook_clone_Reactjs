import React from 'react'

import Story from '../Story/Story';
import './StoryReel.css'

function StoryReel(){
    return (
        <div className="storyReel">
           <Story 
             image="https://logodownload.org/wp-content/uploads/2020/07/tesla-logo-1427x2048.png"
             profileSrc="https://imagens.canaltech.com.br/celebridades/18.400.jpg"
             title="Elon Musk"
           />
           <Story 
             image="https://exame.com/wp-content/uploads/2020/03/facebook.jpg"
             profileSrc="https://www.infomoney.com.br/wp-content/uploads/2019/06/mark-zuckerberg-bloomberg-1.jpg?fit=900%2C600&quality=75&strip=all"
             title="Mark Zuckerberg"
           />
           <Story 
             image="https://www.partnerscom.com.br/wp-content/uploads/2020/03/Marketing-Amazon.jpg"
             profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1598550931&w=1400&h=950"
             title="Jeff Bezos"
           />
           <Story 
             image="https://newtrade.com.br/wp-content/uploads/2017/12/bill-gates-leitura-750x430-2.jpg"
             profileSrc="https://s2.glbimg.com/-fjY3WhrQCnbns5Hz5by9DQEW3k=/512x320/smart/e.glbimg.com/og/ed/f/original/2017/11/17/bill-gates-na-china.jpg"
             title="Bill Gates"
           />
        </div>
    )
}

export default StoryReel;