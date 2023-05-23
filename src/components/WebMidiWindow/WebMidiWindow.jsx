import MIDISounds from 'midi-sounds-react';
import React, { Component } from 'react';
import { GuitarTabsList } from '../GuitarTabsList/GuitarTabsList';
import { UkuleleTabsList } from '../UkuleleTabsList/UkuleleTabsList';
import { StyledWebMidi } from './WebMidiWindow.styled';

export class WebMidiWindow extends Component {
  playTestInstrument() {
    this.midiSounds.playChordNow(3, [this.props.note], 2.5);
  }
  render() {
    return (
      <div className="App">
        {this.props.i === 'guit' && (
          <GuitarTabsList
            chord={this.props.ch}
            setNotes={this.props.setNotes}
            play={this.playTestInstrument.bind(this)}
          />
        )}
        {this.props.i === 'ukul' && <UkuleleTabsList chord={this.props.ch} />}
        <StyledWebMidi>
          <MIDISounds
            ref={ref => (this.midiSounds = ref)}
            appElementName="root"
            instruments={[3]}
          />
        </StyledWebMidi>
      </div>
    );
  }
}
