import HomePage from "@pages/home-page";
import { ConfigProvider, theme } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        // token: { colorText: "#dcdcf2d9" },
      }}
    >
      <HomePage />
    </ConfigProvider>
  );
}

export default App;
