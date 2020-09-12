/*
 * Description : Home Screen
 */
/**
 * Node_Modules
 */
import React, {useEffect, useContext, useState} from 'react';
import {
  View,
  SectionList,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import normalize from 'react-native-normalize';

/**
 * Application Components
 */
import {HomeConstant, localizedStrings} from '../../constants/constant';
import {PrimaryColor} from '../../constants/ColorConstant';
import {Context as TournamentContext} from '../../context/TournamentContext';
import {Context as AuthenticationContext} from '../../context/AuthenticationContext';
import {
  sectionListStyles,
  tournamentListItemStyles,
  styles,
  tournamentHeaderStyle,
} from './HomeScreenStyle';
const HomeScreen = () => {
  // useContext
  const {
    getTournaments,
    state: {tournaments, cursor},
  } = useContext(TournamentContext);

  const {
    state: {tournamentsPlayed, tournamentsWon, name, profilePicture, rating},
  } = useContext(AuthenticationContext);

  // useState
  const [tournamentList, setTournaments] = useState(null);

  useEffect(() => {
    const data = [
      {
        sectionHeader: localizedStrings.RECOMMENDED_SECTION,
        data: tournaments,
      },
    ];

    setTournaments(data);
  }, [tournaments]);

  useEffect(() => {
    getTournaments('');
  }, []);

  tournamentHeader = () => {
    let profilePic = {
      uri: profilePicture,
    };

    const headerView = (
      <View
        style={{
          flexDirection: 'column',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Avatar.Image size={normalize(80)} source={profilePic} />
          <View style={tournamentHeaderStyle.ratingSummaryContainer}>
            <Text style={{fontSize: normalize(20), fontWeight: 'bold'}}>
              {name}
            </Text>
            <View style={tournamentHeaderStyle.ratingViewStyle}>
              <Text style={tournamentHeaderStyle.ratingTextStyle}>
                {rating}
              </Text>
              <Text style={styles.textStyle}>
                {' '}
                {localizedStrings.ELO_RATING}{' '}
              </Text>
            </View>
          </View>
        </View>

        <View style={tournamentHeaderStyle.playedSummaryContain}>
          <View style={tournamentHeaderStyle.playerContainFirst}>
            <Text style={tournamentHeaderStyle.textStyle}>
              {tournamentsPlayed}
            </Text>
            <Text style={tournamentHeaderStyle.textStyle}>
              {localizedStrings.TOURNAMENTS} {'\n'}
              {localizedStrings.PLAYED}
            </Text>
          </View>

          <View style={tournamentHeaderStyle.playerContainMid}>
            <Text style={tournamentHeaderStyle.textStyle}>
              {tournamentsWon}
            </Text>
            <Text style={tournamentHeaderStyle.textStyle}>
              {localizedStrings.TOURNAMENTS} {'\n'}
              {localizedStrings.WON}
            </Text>
          </View>

          <View style={tournamentHeaderStyle.playerContainLast}>
            <Text style={tournamentHeaderStyle.textStyle}>
              {((tournamentsWon / tournamentsPlayed) * 100).toFixed(2)}%
            </Text>
            <Text style={tournamentHeaderStyle.textStyle}>
              {localizedStrings.WINNING} {'\n'}
              {localizedStrings.PERCENTAGE}{' '}
            </Text>
          </View>
        </View>
      </View>
    );

    return headerView;
  };

  const TournamentListItem = ({item}) => {
    let coverImage = {
      uri: item.cover_url,
    };

    return (
      <View style={tournamentListItemStyles.container}>
        <Image
          source={coverImage}
          style={tournamentListItemStyles.coverImageStyle}
        />

        <View style={{flexDirection: 'row'}}>
          <View style={tournamentListItemStyles.detailContainer}>
            <Text numberOfLines={1} style={tournamentListItemStyles.name}>
              {item.name}
            </Text>
            <Text numberOfLines={1} style={tournamentListItemStyles.gameName}>
              {item.game_name}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SectionList
      style={{
        paddingHorizontal: normalize(15),
        backgroundColor: PrimaryColor.LIGHT_GRAY,
      }}
      sections={tournamentList}
      ListHeaderComponent={tournamentHeader}
      keyExtractor={(item, index) => item.tournament_id + index.toString()}
      renderItem={({item, index}) => <TournamentListItem item={item} />}
      renderSectionHeader={({section: {sectionHeader}}) => (
        <View style={sectionListStyles.container}>
          <Text style={sectionListStyles.headerTitle}>{sectionHeader}</Text>
        </View>
      )}
      onEndReached={() => {
        getTournaments(cursor);
      }}
    />
  );
};

export const SideMenuNavigationOptions = ({navigation}) => {
  const {signout} = useContext(AuthenticationContext);
  return {
    headerShown: true,
    title: localizedStrings.FLYINGWOLF,
    headerBackTitleVisible: false,
    headerTitleAlign: 'center',

    headerStyle: {
      backgroundColor: PrimaryColor.LIGHT_GRAY,
      elevation: 0,
      shadowOpacity: 0,
    },
    headerLeft: () => (
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => {
            Alert.alert(
              localizedStrings.LOGOUT,
              localizedStrings.LOGOUT_MESSAGE,
              [
                {
                  text: localizedStrings.NO,
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {
                  text: localizedStrings.YES,
                  onPress: () => {
                    signout();
                  },
                },
              ],
              {cancelable: false},
            );
          }}>
          <Image source={require('../../assets/sidemenuicon.png')} />
        </TouchableOpacity>
      </View>
    ),
  };
};

export default HomeScreen;
