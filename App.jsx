import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { PageHeader } from "./components/PageHeader";
import { PageFooter } from "./components/PageFooter";
import { TodoSection } from "./components/TodoSection";
import { colors } from "./assets/theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <PageHeader />
        <StatusBar style="light" />
        <ScrollView style={styles.scrollContent}>
          <TodoSection />
        </ScrollView>
        <PageFooter />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.base,
  },
  scrollContent: {
    paddingBottom: 32,
  },
});
