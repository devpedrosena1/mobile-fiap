import { useState } from 'react';
import { View } from 'react-native';
import Header from './components/Header/header';
import TabBar from './components/TabBar/tabBar';
import Feed from './pages/Feed';

const App = () => {
  const [page, setPage] = useState('Feed');

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {page === 'Feed' && <Feed />}
      <TabBar setPage={setPage} />
    </View>
  );
}

export default App;
