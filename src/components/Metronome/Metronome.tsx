import React from 'react';
import { BpmInfo } from './BpmInfo/BpmInfo';
import { TapButton } from './TapButton/TapButton';
import { PlayButton } from './PlayButton/PlayButton';
import { BpmSlider } from './BpmSlider/BpmSlider';
import { TimePoti } from './TimePoti/TimePoti';
import { VolumeSlider } from './VolumeSlider/VolumeSlider';
import { SoundPoti } from './SoundPoti/SoundPoti';
import './Metronome.scss';

export const Metronome: React.FC = () => {
  return (
    <div className="metronome">
      <BpmInfo />
      <TapButton />
      <BpmSlider />
      <div className="buttons">
        <TimePoti />
        <PlayButton />
        <SoundPoti />
      </div>
      <VolumeSlider />
    </div>
  );
};
