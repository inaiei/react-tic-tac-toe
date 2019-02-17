import { createStackNavigator, createAppContainer } from 'react-navigation';
import PlayerSelection from './components/PlayerSelection';
import GameBoard from './components/GameBoard';

export const Navigator = createStackNavigator(
  {
    GameBoard: {
      screen: GameBoard,
    },
    PlayerSelection: {
      screen: PlayerSelection,
    },
  },
  {
    initialRouteName: 'PlayerSelection',
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',        
      },
      headerTitleStyle: {
        justifyContent: 'center'
      }
    }
  }
);

export const AppContainer = createAppContainer(Navigator);
