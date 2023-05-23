import { useState } from 'react';
import tabs from '../../db.json';
import { ListSuffixes, ListItem } from './NavigationSuffix.styled';
import { addSuffix } from 'redux/slice';
import { useDispatch, useSelector } from 'react-redux';

export const NavigationSuffix = () => {
  const [selected, setSelected] = useState(false);
  const k = useSelector(state => state.chord.key);

  const dispatch = useDispatch();

  const onClick = event => {
    setSelected(event.target.textContent);

    dispatch(addSuffix(event.target.textContent));
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
