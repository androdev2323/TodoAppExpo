import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '../redux/store'

const Layout = () => {
  return (
   <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
       <Stack>
        <Stack.Screen name='index'/>
        <Stack.Screen name='home'/>
        <Stack.Screen name='addtodo'/>
       </Stack>
    </PersistGate>

   </Provider>
  );
};

export default Layout