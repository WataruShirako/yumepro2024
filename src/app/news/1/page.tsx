import "../../globals.css";
import "../../entt.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const News = () => {
  return (
    <>
      <Header />
      <main id="" className={"bg-[#F7F7F7] p-10"}>
        <section id="" className="max-w-4xl mx-auto bg-white p-10">
          <h2 className="text-4xl font-bold">ニュースタイトル</h2>
          <div className="pb-10 text-right">2023年12月1日</div>
          <div>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキストテキスト
            <br />
            テキストテキストテキストテキストテキストテキストテキストテキスト
            <br />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default News;
