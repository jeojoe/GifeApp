import { TabNavigator, StackNavigator } from 'react-navigation';

import * as Explore from './Explore';
import * as Gife from './Gife';
import * as Profile from './Profile';
import * as Reward from './Reward';
import * as Challenge from './Challenge';

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
  Profile: {
    screen: Profile.ProfileTabScreen,
  },
});

export const RootStack = StackNavigator({
  MainTab: {
    screen: MainTab,
  },
  Challenge: {
    screen: Challenge.ChallengeScreen,
  },
});
