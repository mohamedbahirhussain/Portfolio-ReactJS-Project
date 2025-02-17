import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './TechStyle';
import TechCard from '../Cards/TechCards';
import { techStacks } from '../../data/constants';

const Tech = () => {
  const [toggle, setToggle] = useState('all');

  const handleToggle = (category) => {
    setToggle(category);
  };

  return (
    <Container id="tech">
      <Wrapper>
        <Title>Technologies</Title>
        <Desc>
          Here are some of the technologies and frameworks I have experience working with.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton
            active={toggle === 'all'}
            value="all"
            onClick={() => handleToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'frontend'}
            value="frontend"
            onClick={() => handleToggle('frontend')}
          >
            Frontend
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'backend'}
            value="backend"
            onClick={() => handleToggle('backend')}
          >
            Backend
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'database'}
            value="database"
            onClick={() => handleToggle('database')}
          >
            Database
          </ToggleButton>
          <Divider />
          <ToggleButton
            active={toggle === 'tools'}
            value="tools"
            onClick={() => handleToggle('tools')}
          >
            Tools
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {techStacks
            .filter(tech => toggle === 'all' || (Array.isArray(tech.category) ? tech.category.includes(toggle) : tech.category === toggle))
            .map(tech => (
              <TechCard key={tech.id} tech={tech} />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Tech;