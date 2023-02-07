import { useState } from 'react';
import tabs from '../../db.json';
import { ListSuffixes, ListItem } from './NavigationSuffix.styled';

export const NavigationSuffix = ({ ss, k }) => {
  const [selected, setSelected] = useState(false);

  const onClick = event => {
    ss(event.target.outerText);
    setSelected(event.target.textContent);
  };

  let allSuffix = tabs.suffixes;
  let activeSuffix = [];

  activeSuffix =
    tabs.chords[k] &&
    tabs.chords[k].map(chord => {
      return chord.suffix;
    });

  const resultSuffixes = [];

  const createSuffixList = () => {
    for (const key of allSuffix) {
      if (activeSuffix === undefined) {
        return;
      } else if (activeSuffix.find(suf => suf === key)) {
        resultSuffixes.push({ suffix: key, isActive: true });
      } else resultSuffixes.push({ suffix: key, isActive: false });
    }
  };

  createSuffixList();

  return (
    <div>
      <ListSuffixes>
        {resultSuffixes.map(ch => {
          // console.log(suffix);
          return (
            <ListItem
              key={ch.suffix}
              onClick={onClick}
              active={ch.isActive}
              isSelected={selected === ch.suffix ? true : false}
            >
              {ch.suffix}
            </ListItem>
          );
        })}
      </ListSuffixes>
    </div>
  );
};
