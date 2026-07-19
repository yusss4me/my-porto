import PortfolioPage from "./(portfolio)/page";
import PortfolioLayout from "./(portfolio)/layout";

export default function Home() {
  return (
    <PortfolioLayout>
      <PortfolioPage />
    </PortfolioLayout>
  );
}
