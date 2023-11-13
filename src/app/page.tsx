import MainComp from "@/components/MainComp";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <MainComp />
      <Footer />
    </div>
  );
}

{
  /* <div className="bg-cyan-500 mt-11 h-14 flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-center text-background">
          Hello world
        </h1>
      </div>
      <Card>
        <CardContent>
          <p>This is some cord content</p>
        </CardContent>
      </Card> */
}
