import { StyleSheet, Dimensions } from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default StyleSheet.create({
  containerHome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerChat: {
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
  },
  containerTitle: { paddingTop: 20, marginTop: 50 },
  title: {
    color: "#80b918",
    fontSize: 28,
    fontWeight: "700",
    paddingRight: 15,
    paddingLeft: 15,
  },
  containerSubTitle: {
    paddingTop: 30,
    marginTop: 30,
    width: "100%",
  },
  subtitle: { color: "#55A630", fontWeight: "bold" },
  containerImage: {
    marginTop: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerButton: {
    margin: 10,
    flexDirection: "row",
  },
  containerSend: {
    alignItems: "flex-end",
    width: "100%",
  },
  imageContainer: {
    justifyContent: "center",
  },
  buttonContainer: {
    margin: 10,
    width: 200,
  },

  button: {
    height: 50,
    borderRadius: 15,
    alignItems: "center",
    padding: 10,
    margin: 10,
  },
  buttonPrimary: { backgroundColor: "#80b918" },
  buttonSecondary: {
    backgroundColor: "#FFF",
    borderColor: "#80b918",
    borderWidth: 1.5,
  },
  buttonText: {
    color: "#80b918",
    fontSize: 17,
    fontWeight: "700",
    paddingRight: 15,
    paddingLeft: 15,
  },
  textPrimary: {
    color: "#FFF",
  },

  textSecondary: {
    color: "#80b918",
  },
  paragraphContainer: {
    padding: 20,
  },
  paragraph: {
    color: "#545454",
  },
  subtitleProfile: {
    color: "#55A630",
    fontWeight: "bold",
    fontSize: 22,
  },
  containerProfile: {
    padding: 20,
    marginTop: 30,
  },
  description: {
    textAlign: "justify",
    fontStyle: "italic",
    fontWeight: "700",
  },
  image: {
    width: ITEM_WIDTH,
    height: 200,
  },
  containerCarrusel: {
    backgroundColor: "white",
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  header: {
    color: "#007F5F",
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 10,
  },
  body: {
    color: "#545454",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
