import { StyleSheet } from "react-native";

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
    alignItems: "center",
  },
  containerTitle: { paddingTop: 50, marginTop: 50 },
  title: {
    color: "#80b918",
    fontSize: 28,
    fontWeight: "700",
    paddingRight: 15,
    paddingLeft: 15,
  },
  containerSubTitle: { paddingTop: 30, marginTop: 30 },
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
    borderWidth: 2,
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
});
