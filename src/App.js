import { Route, Routes } from "react-router";
import HomePage from "./components/templates/HomePage";
import MainLayout from "./components/layouts/MainLayout";
import { BooksProvider } from "./context/BooksContext";

function App() {
  return (
    <BooksProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainLayout>
    </BooksProvider>
  );
}

export default App;
