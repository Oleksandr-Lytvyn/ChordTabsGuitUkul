import { useState } from 'react';
import tabs from '../../db.json';
import { KeyItem } from './NavigationKey.styled';
import { KeyList } from './NavigationKey.styled';

export const NavigationKey = ({ sk }) => {
  const [active, setActive] = useState(false);
  const onClick = event => {
    sk(event.target.outerText);
    setActive(event.target.textContent);
    // className={this.state.active === name ? 'active' : ''}
    console.dir(event.target.textContent);
  };
  return (
    <>
      <KeyList>
        {tabs.keys.map(suffix => {
          return (
            <KeyItem
              key={suffix}
              onClick={onClick}
              active={active === suffix ? 'active' : ''}
            >
              {suffix}
            </KeyItem>
          );
        })}
      </KeyList>
    </>
  );
};
