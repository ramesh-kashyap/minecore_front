import React, { useEffect, useState, useRef } from 'react';
import Api from '../Requests/Api';
import { LogOut, Lock, User } from "lucide-react"; // Icons
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {


  return (
    <div data-v-72d7289a="" class="headers">
      <div data-v-e457753b="" data-v-fee66994="" class="main-header on">
        <div data-v-e457753b="" class="left"><img data-v-e457753b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAlCAYAAAAqXEs9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACcSURBVHgB7ZXRDUBAEESHCpRwJShBCTpSyrWiAyUoQQmsOB+Evbhkycm8ZBKx3n7I5QbYqCSdZJQMEi9xiGPiuTCYTxkjy808fzHc45XFZt6kfDApi028IjxoFDfvTbxS0ivzT2YN7n9hrcimXovjyR+CGMPcW+8Hh+e87RGSH2x7sO0TPbY92PZse0IygW0Ptn2ix7YH2/5vbb8AJnhQUjyfYQ4AAAAASUVORK5CYII=" alt="" /></div>
        <div data-v-e457753b="" class="right">
          <div data-v-e457753b="" class="customer">
            <img data-v-e457753b="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIkSURBVHgB3ZiNdcIgEMf/dQJHYAQ3kE5QR8gGuoFsoBvoBq0T2E5gN0g2sBtYTskrOTCBAD5ff+/dMx/AnXdwB3nBeKZaFlrmWmZahHlG/GhptHxr+dLyYZ49BKFlo+Ws5RIhO9O3GFNj2CVRNojgJbCd0HKE6wEKG4XxgFtI7TBS2Cn8C8941PbV/CYjtNToeoHCq/A35/qgNpVnjBoZQi48A28RZphvrD0yG8mNU0hHwTVyzB/GGvmNa1FIWDiEgJsicrNlOkRE36tBWSezBwqrnUu3MR3tf1ahHArdzBA0FyskuD4S7sWKN5h4Os2t6zYBl6JN9D7dV3wGzqzrT5TncEe3g4Bba99RNsQStxJqz8OdT+cM/buTNfKz7NFXw/KmgFsxfCKRDxmg72xs6+S8tmLQABUz/Ih88LCujE4Ft+53jFBsIMk6jKqZDJ5n+XZMoRvqwTDa73tXWSCSjdn7foI4cngwilgDH86/MzDH0TFqDDKwse4le89XWIN0GnYv2f2ct+Ubx7XpRLnJri6l8iClksroXMOzURYIO4RL5EMG6Kth1eQZ+svdCvlR6C9zTs4VuB0La6sR7WYkyiGMDl7eBJ4IWoid0mbzDHnwzbpu8GQIPO6AFg3VdXth1ihQ65cY3uye4HpGmOdFvVdhOJf5CoDv42fwoT2GU6SB92SPQqQa1m71i1GPNOqI8I+fSawQZ1xRb92jwvBcrFOM+wXp7n2Zcm6yKQAAAABJRU5ErkJggg==" alt="" />
          </div>
          <div data-v-e457753b="" class="ques">
            <div data-v-e457753b="" class="msg ques">
              <div data-v-e457753b="" class="van-badge__wrapper">
                <img data-v-e457753b="" src="data:image/png;base64,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" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;
