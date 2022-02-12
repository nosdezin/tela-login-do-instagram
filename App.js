import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" translucent={false} />

      <Image source={require("./src/assets/logo.svg")} style={styles.logo} />

      <TextInput
        placeholder="Celular, username ou email"
        style={styles.input}
      />
      <TextInput placeholder="Sua senha" style={styles.input} />

      <View style={styles.forgotContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity styles={styles.facebookButton}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookText}>Continue com Edson</Text>
      </TouchableOpacity>

      <View style={styles.divisor}>
        <View style={styles.line} />
        <Text style={{ marginHorizontal: "3%" }}>OU</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Não possui uma conta?</Text>
        <TouchableOpacity>
          <Text style={styles.signUpButton}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 75,
    marginTop: Platform.OS === "android" ? "13%" : "20%",
    marginBottom: Platform.OS === "android" ? "13%" : "15%",
  },
  input: {
    width: "90%",
    height: 42,
    backgroundColor: "#F4F3F3",
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  forgotContainer: {
    width: "90%",
    alignItems: "flex-end",
  },
  forgotText: {
    color: "#399fff",
  },
  loginButton: {
    marginTop: "5%",
    backgroundColor: "#399fff",
    width: "90%",
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  loginText: {
    color: "#FFF",
    fontSize: 17,
  },
  facebookButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "15%",
  },
  facebookText: {
    color: "#399FFF",
    paddingLeft: 30,
    fontSize: 15,
    marginTop: -21,
  },
  divisor: {
    marginTop: "10%",
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: "45%",
    height: 2,
    backgroundColor: "#EFEDED",
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: "row",
    marginTop: "10%",
  },
  signUpText: {
    color: "#c4c4c4",
    paddingRight: 5,
  },
  signUpButton: {
    color: "#399FFF",
    fontWeight: "bold",
  },
});
