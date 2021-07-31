import { StyleSheet, Dimensions } from "react-native";

const SLIDER_WIDTH = Dimensions.get("window").width + 80;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

export default StyleSheet.create({
  activityIndicator: {
    alignItems: "center",
    height: 80,
  },
  // TODO
  containerHome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
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
  containerTitle: {
    paddingTop: 30,
    paddingLeft: 10,
    width: "100%",
    justifyContent: "flex-start",
  },
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
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerButton: {
    margin: 10,
    flexDirection: "row",
  },
  containerSend: {
    height: 60,
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
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
    backgroundColor: "#80b9188a",
    borderColor: "#80b9188a",
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
    color: "#fff",
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
  searchInput: {
    backgroundColor: "white",
    height: 50,
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#55A630",
    color: "#545454",
  },
  // Modal view
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
