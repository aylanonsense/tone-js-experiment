import * as Tone from 'tone'

export default async () => {
  const synth = new Tone.Synth().toMaster();
  synth.triggerAttackRelease('C4', '8n');
}
