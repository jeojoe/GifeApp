import { TabNavigator, StackNavigator, TabBarBottom } from 'react-navigation';

import * as Explore from './Explore';
import * as Gife from './Gife';
import * as Profile from './Profile';
import * as Reward from './Reward';
import * as Challenge from './Challenge';
import * as Place from './Place';

export const MainTab = TabNavigator({
  ExploreTab: {
    screen: Explore.ExploreTabScreen,
  },
  GifeTab: {
    screen: Gife.GifeTabScreen,
  },
  RewardTab: {
    screen: Reward.RewardTabScreen,
  },
  ProfileTab: {
    screen: Profile.ProfileTabScreen,
  },
}, {
  tabBarOptions: {
    showLabel: false,
    style: {
      borderTopWidth: 0,
      backgroundColor: '#fff',
    },
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
});

export const RootStack = StackNavigator({
  MainTab: {
    screen: MainTab,
  },
  Challenge: {
    screen: Challenge.ChallengeScreen,
  },
  Place: {
    screen: Place.PlaceScreen,
  },
});
