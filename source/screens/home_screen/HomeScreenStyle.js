import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";

import { PrimaryColor } from "../../constants/ColorConstant";

export const sectionListStyles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor.LIGHT_GRAY,
    width: "100%",
    height: normalize(40),
    justifyContent: "center",
  },
  headerTitle: { fontSize: normalize(20) },
});

export const tournamentListItemStyles = StyleSheet.create({
  container: {
    borderRadius: normalize(19),
    height: normalize(130),
    backgroundColor: PrimaryColor.WHITE,
    marginVertical: normalize(10),
    shadowOffset: {
      width: normalize(0),
      height: normalize(6),
    },
    shadowOpacity: normalize(0.37),
    shadowRadius: normalize(7.49),
    elevation: normalize(12),
  },
  coverImageStyle: {
    height: normalize(70),
    resizeMode: "stretch",
    borderTopLeftRadius: normalize(19),
    borderTopRightRadius: normalize(19),
  },
  detailContainer: {
    borderRadius: normalize(19),
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(5),
    flex: 1,
    alignContent: "space-between",
  },
  name: {
    width: normalize(300),
    fontWeight: "bold",
    fontSize: normalize(17),
  },
  gameName: { marginTop: normalize(2), fontSize: normalize(14) },
});

export const styles = StyleSheet.create({
  logoImage: {
    width: 30,
    height: 30,
    resizeMode: "center",
  },
  container: {
    flex: 1,
    marginTop: 0,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "green",
  },
});

export const tournamentHeaderStyle = StyleSheet.create({
  ratingSummaryContainer: {
    flexDirection: "column",
    marginLeft: normalize(20),
    justifyContent: "space-around",
  },
  ratingViewStyle: {
    borderRadius: normalize(20),
    height: normalize(35),
    width: normalize(200),
    alignItems: "center",
    flexDirection: "row",
    borderColor: PrimaryColor.BUTTON_COLOR,
    borderWidth: 1,
    paddingLeft: normalize(20),
  },
  ratingTextStyle: {
    fontSize: normalize(19),
    color: PrimaryColor.BUTTON_COLOR,
    marginRight: normalize(10),
  },
  playedSummaryContain: {
    width: "90%",
    height: normalize(70),
    margin: normalize(10),
    borderRadius: normalize(20),
    flex: 3,
    flexDirection: "row",
  },
  playerContainFirst: {
    flex: 1,
    backgroundColor: PrimaryColor.PLAYED,
    borderBottomStartRadius: normalize(20),
    borderTopStartRadius: normalize(20),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  playerContainLast: {
    flex: 1,
    backgroundColor: PrimaryColor.WINNING_PERCENTAGE,
    borderBottomEndRadius: normalize(20),
    borderTopEndRadius: normalize(20),
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  playerContainMid: {
    flex: 1,
    backgroundColor: PrimaryColor.WON,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    textAlign: "center",
    color: PrimaryColor.WHITE,
    fontSize: normalize(13),
  },
});
