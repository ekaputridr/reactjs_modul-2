import React from 'react';
import { CardView } from 'react-card-with-image';
import 'react-card-with-image/dist/index.css';

const TentangSaya = () => {
    const items = [
      {
        id: 1,
        header: 'About Me (General)',
        description:
          "Hi, my name is Eka Putri Andriani. I'm 16 years old. My weight 54 kg also my height 5'4. My favorite colour is black, green and purple as the colors on this landing page. My sign zodiac is Libra, while my MBTI is INFP-T. Really nice to meet you all, xoxo.",
        image: 'w.jpg'
      },
      {
        id: 2,
        header: 'Her Background and School',
        description:
          'Born in Malang, East Java. Has a small family, consisting of father, mother and younger sisters and brothers. Currently attending SMK TELKOM MALANG and undergoing semester 4.',
        image: 'w.jpg'
      },
      {
        id: 3,
        header: 'Something That Her Like and Not',
        description:
          "She's really like to art. Could be music, painting, and many else. Her genre of music is R&B, Rock, Pop, and Hip-Hop. She really like to draw, coloring and painting. She likes some music artist like Yerin Baek, Audrey Mika, B.I, Arctic Monkeys, Ariana Grande, ITZY, Frank Ocean, Travis Scott, DPR LIVE, Kehlani, Hyukoh, Mark(NCT), keshi, Wallows, Nirvana also local artist like Svmmerdose, Noni, Biru Baru and more. Finding new flow and music is her recent hobby lol. As already explained her MBTI is INFP-T, she really hard to socializing with new people. She really likes matcha but not a big fan and of course sambal. She dont to like to crowd.",
        image: 'w.jpg'
      },
      {
        id: 4,
        header: 'Social Media',
        description:
          "Y'all can check it on Contact, thank you xx ♡",
        image: 'w.jpg'
      },
    ]
    
    return (
      <CardView
        items={items}
        activeColor='#000'
        imageHeight='480px'
        imageWidth='276px'
      />
    )
}

export default TentangSaya;