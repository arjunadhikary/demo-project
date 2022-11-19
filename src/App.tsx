import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { SearchBox } from './components/searchbox';
import {
  Badge,
  Container,
  Flex,
  Grid,
  Header,
  SimpleGrid,
  Title,
} from '@mantine/core';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header height={56} mb={120}>
        <Flex
          mih={50}
          gap="md"
          justify="space-between"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <Badge variant="gradient" gradient={{ from: 'orange', to: 'red' }}>
            Demo
          </Badge>

          <Title size="h4" color={'red'}>
            This is a demo application do not depend on it. Just for educational
            purpose only
          </Title>
        </Flex>
      </Header>
      <SearchBox />
    </div>
  );
}

export default App;
