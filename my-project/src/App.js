import { useState } from 'react';
import { View } from 'react-native';
import Header from './components/Header/header';
import TabBar from './components/TabBar/tabBar';
import Feed from './pages/Feed';
import Sair from './pages/Sair';

const App = () => {
  const [page, setPage] = useState('Feed');

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {page === 'Feed' && <Feed />}
      {page === 'Sair' && <Sair />}
      <TabBar setPage={setPage} />
    </View>
  );
}

export default App;
