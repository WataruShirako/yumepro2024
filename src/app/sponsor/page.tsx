import "../globals.css";
import "../entt.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

const Sponsor = () => {
  const news = [
    {
      path: "/",
      title: "",
      content: "",
    },
  ];
  return (
    <>
      <Header />
      <main id="" className={"entt"}>
        <section id="sponsor" className="pt-12 md:pt-24">
          <h2 className={"text-center"}>
            <p className={"font-bold text-2xl md:text-4xl sm:p-10"}>
              スポンサー企業さま募集
            </p>
          </h2>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-3xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white">
              夢プロ総合冠スポンサー
              <br />
              部門冠スポンサー
            </div>
            <div className="bg-white rounded-b-3xl p-5 md:p-10 text-sm sm:text-base sm:leading-loose">
              夢プロ総合冠スポンサー様、部門冠スポンサー様のみの権利としてスポンサー募集が可能です。
              <br />
              各冠スポンサー様が募集したスポンサーの費用は、冠スポンサー様の報酬となります。
              <br />
              冠スポンサーとして業界内の企業に声がけをすることで各業界の「盟主」「オーソリティ」としての影響力を発揮することができます。
            </div>
          </div>

          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-3xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white">
              部門冠スポンサー
              <br />
              （各部門１社様限定）
            </div>
            <div className="bg-white rounded-b-3xl p-5 md:p-10 text-sm sm:text-base sm:leading-loose">
              夢叶えるプロジェクト10部門を貴社の冠部門として大々的にPRにご活用いただけます。
              <br />
              各部門の審査委員長として、メディア露出、イベント情報の2次利用などによるPR効果を期待できます。
              <br />
              認知拡大やブランディングにご活用しやすいポジションです。
            </div>
          </div>

          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-3xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white">
              地方大会冠スポンサー
              <br />
              ダイヤモンド
              <br />
              (各地方大会限定5社)
              <br />
            </div>
            <div className="bg-white rounded-b-3xl p-5 md:p-10 text-sm sm:text-base sm:leading-loose">
              審査員としてエントリーされ、貴社名を冠とした「スポンサー賞」を設定、表彰することで、業界内での存在感を発揮できます。
              <br />
              当日会場内でのブース出店、銀座のサイネージ広告掲載（2種/2週間）、映画スクリーン広告、ラジオ出演などPRに最適です。
            </div>
          </div>

          <div className=" overflow-x-auto p-5 pb-24">
            <table className="table-fixed mx-auto  border border-inherit border-2 bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5]">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className="border border-inherit border-2 p-3  text-white"
                  >
                    カテゴリー
                  </th>
                  <th
                    colSpan={6}
                    className="border border-inherit border-2 col-span-2  p-3  text-white"
                  >
                    メディア展開
                  </th>
                  <th
                    colSpan={8}
                    className="border border-inherit border-2  p-3  text-white"
                  >
                    授賞式当日
                  </th>
                  <th
                    colSpan={3}
                    className="border border-inherit border-2  p-3  text-white"
                  >
                    その他特典
                  </th>
                </tr>
                <tr>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    映画・テレビ出演権
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    ラジオ番組出演権
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    映画広告放送権
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    ＳＮＳ　ＰＲ
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    銀座サイネージ
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    プレスリリース配信
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    講演枠
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    審査員
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    企業ブース出展
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    最終ステージ登壇
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    授賞式招待
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    サンプリング
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    パンフレット掲載
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    市松パネル
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-1  text-white">
                    レストラン
                    <br />
                    ＳＡＫＵＲＡ貸切権
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    高級ＳＰＡ利用券
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    サウナ・入浴券
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="border border-inherit border-2 py-3 px-8 whitespace-nowrap  text-white">
                    夢プロ総合冠
                    <br />
                    (限定1社)
                  </th>

                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    20秒
                    <br />
                    2回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    5種
                    <br />
                    1ヶ月
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    VIP
                    <br />
                    12枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    A1
                    <br />
                    2枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    年間30回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    200万円分
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    200回分
                  </td>
                </tr>
                <tr className="">
                  <th className="border border-inherit border-2 py-3 px-8 whitespace-nowrap  text-white">
                    各部門冠
                    <br /> (限定各1社)
                  </th>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    15秒
                    <br />
                    2回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    3種
                    <br />
                    3週間
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    △
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    VIP
                    <br />
                    8枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    A1
                    <br />
                    1枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    年間20回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    100万円分
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    100回分
                  </td>
                </tr>
                <tr>
                  <th className="border border-inherit border-2 py-3 px-8 whitespace-nowrap  text-white">
                    各地方大会冠
                    <br />
                    ダイヤモンド <br />
                    (限定5社)
                  </th>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    2種
                    <br />
                    2週間
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    VIP
                    <br />
                    6枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    A2
                    <br />
                    1枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    年間10回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    50万円分
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    50回分
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="text-center p-5">
              ※協賛特典の詳細は
              <a
                href="#sponsor_detail"
                className="text-[#1D9BF0] border-[#1D9BF0] border-b font-bold"
              >
                こちら
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-3xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white">
              プラチナスポンサー
            </div>
            <div className="bg-white rounded-b-3xl p-5 md:p-10 text-sm sm:text-base sm:leading-loose">
              テレビ出演・映画CM・パンフレット掲載・サンプリング・銀座駅サイネージ広告・SNSでのPRなど、幅広く貴社PRの機会をご提供することが可能です。
              <br />
              また、主催のクレドインターナショナルが運営するレストラン・SAKURAを活用した交流会の開催・自社イベントの開催も可能です。
            </div>
          </div>

          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-3xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white">
              ゴールドスポンサー
            </div>
            <div className="bg-white rounded-b-3xl p-5 md:p-10 text-sm sm:text-base sm:leading-loose">
              プラチナスポンサー様と同じく、テレビ出演・映画CM・パンフレット掲載・サンプリング・銀座駅サイネージ広告・SNSでのPRなど、幅広く貴社PRできます。
              <br />
              また、主催のクレドインターナショナルが運営するレストラン・SAKURAを活用した交流会の開催・自社イベントの開催も可能です。
            </div>
          </div>

          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-3xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white">
              シルバースポンサー
            </div>
            <div className="bg-white rounded-b-3xl p-5 md:p-10 text-sm sm:text-base sm:leading-loose">
              パンフレット掲載・サンプリング・銀座サイネージ広告などで、貴社PRが可能です。
              <br />
              その他、主催のクレドインターナショナルが運営するレストラン・SAKURAをはじめスパ・サウナなどの利用券もご提供させていただきます。
            </div>
          </div>
          <div className="mx-auto max-w-4xl p-5 m-10">
            <div className="text-xl sm:text-3xl text-center p-5 sm:leading-relaxed bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5] rounded-t-3xl text-white">
              ブロンズスポンサー
            </div>
            <div className="bg-white rounded-b-3xl p-5 md:p-10 text-sm sm:text-base sm:leading-loose">
              パンフレット掲載・サンプリングなどで、貴社PRが可能です。
              <br />
              その他、主催のクレドインターナショナルが運営するレストラン・SAKURAをはじめスパ・サウナなどの利用券もご提供させていただきます。
            </div>
          </div>

          <div className=" overflow-x-auto p-5 pb-10">
            <table className="table-fixed mx-auto  border border-inherit border-2 bg-gradient-to-tr from-[#C52CFD] to-[#2D4BB5]">
              <thead>
                <tr>
                  <th
                    rowSpan={2}
                    className="border border-inherit border-2 p-3  text-white"
                  >
                    カテゴリー
                  </th>
                  <th
                    colSpan={4}
                    className="border border-inherit border-2 col-span-2  p-3  text-white"
                  >
                    メディア展開
                  </th>
                  <th
                    colSpan={4}
                    className="border border-inherit border-2  p-3  text-white"
                  >
                    授賞式当日
                  </th>
                  <th
                    colSpan={3}
                    className="border border-inherit border-2  p-3  text-white"
                  >
                    その他特典
                  </th>
                </tr>
                <tr>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    テレビ番組出演権
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    映画広告放送権
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    ＳＮＳ　ＰＲ
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    銀座サイネージ
                  </th>

                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    授賞式招待
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    サンプリング
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    パンフレット掲載
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    市松パネル
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-1  text-white">
                    レストラン
                    <br />
                    ＳＡＫＵＲＡ貸切権
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    高級ＳＰＡ利用券
                  </th>
                  <th className="border border-inherit border-2 [writing-mode:vertical-rl] py-3 px-2  text-white">
                    サウナ・入浴券
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th className="border border-inherit border-2 py-3 px-8 whitespace-nowrap  text-white">
                    プラチナスポンサー
                  </th>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    15秒1回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    1種1週間
                  </td>

                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    VIP 4枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    A4 3枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    年間10回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    30万円分
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    30回分
                  </td>
                </tr>
                <tr className="">
                  <th className="border border-inherit border-2 py-3 px-8 whitespace-nowrap  text-white">
                    ゴールドスポンサー
                  </th>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    10秒1回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    1種3日間
                  </td>

                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    VIP 3枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    A4 2枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    年間7回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    20万円分
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    20回分
                  </td>
                </tr>
                <tr>
                  <th className="border border-inherit border-2 py-3 px-8 whitespace-nowrap  text-white">
                    シルバースポンサー
                  </th>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    別途費用
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    1種1日間
                  </td>

                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    VIP 2枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    A4 1枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    年間5回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    15万円分
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    10回分
                  </td>
                </tr>
                <tr>
                  <th className="border border-inherit border-2 py-3 px-8 whitespace-nowrap  text-white">
                    ブロンズスポンサー
                  </th>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    別途費用
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>

                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    VIP 2枚
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    ○
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    —
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    年間3回
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    5万円分
                  </td>
                  <td className="text-center border border-inherit border-2 px-1 text-sm bg-white">
                    5回分
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="sponsor_detail" className="py-10 px-2">
            <div className="text-xl sm:text-3xl text-center p-5 mt-32">
              協賛特典詳細
            </div>
            <table className="table-fixed mx-auto  border border-inherit border-2 ">
              <thead>
                <tr>
                  <th className="border border-inherit border-2 p-3  text-white bg-[#888888] [writing-mode:vertical-rl] text-center">
                    区分
                  </th>
                  <th className="border border-inherit border-2 p-3  text-white bg-[#888888]">
                    特典名
                  </th>
                  <th className="border border-inherit border-2 p-3  text-white bg-[#888888]">
                    内容
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    rowSpan={4}
                    className="border border-inherit border-2 p-2 bg-white [writing-mode:vertical-rl] text-center text-sm sm:text-base"
                  >
                    メディア特典
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    映画・テレビ出演権
                    <br />
                    ラジオ番組出演権
                    <br />
                    映画広告放送権
                  </td>

                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    弊社がスポンサー企画しているメディアへのご出演や、PRとしての活用をご支援いたします。
                  </td>
                </tr>

                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    SNS PR
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    スポンサー様の情報を、公式SNS・出演者SNSでPRいたします。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    銀座サイネージ
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    銀座駅地下コンコースのスタジオにてサイネージへの掲載ができます。
                    <br />
                    自社PRのライブ配信や番組、ポップアップなどができます。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    プレスリリース配信
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    イベントプレスリリースにて企業を紹介します。
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={8}
                    className="border border-inherit border-2 p-2 bg-white [writing-mode:vertical-rl] text-center text-sm sm:text-base"
                  >
                    授賞式当日
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    講演枠
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    会場で講演会やパネルディスカッション等のイベント企画、企業PRが可能です。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    審査員
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    コンテストの審査員となっていただきます。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    企業ブース出展
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    会場内にて企業様ブースの出店をいただけます。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    最終ステージ登壇
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    ステージにて表彰を行っていただきます。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    授賞式招待
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    授賞式へご招待いたします。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    サンプリング
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    ご来場の方全員に配布が可能です。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    パンフレット掲載
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    当日のパンフレットに企業情報を掲載します。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    市松パネル
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    市松パネルに企業のロゴを掲載します。
                  </td>
                </tr>
                <tr>
                  <td
                    rowSpan={3}
                    className="border border-inherit border-2 p-2 bg-white [writing-mode:vertical-rl] text-center text-sm sm:text-base"
                  >
                    その他特典
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    レストランSAKURA貸切権
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    弊社運営のエンタメカフェSAKURAの貸切権をご提供します。
                    <br />
                    レセプション、宴会、ライブコマースなどにご活用ください。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    高級SPA利用券
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    弊社運営の国内外のエステ・スパ施設にてご利用いただけます。
                  </td>
                </tr>
                <tr>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    サウナ・入浴券
                  </td>
                  <td className="border border-inherit border-2 p-2 bg-white text-sm sm:text-base">
                    弊社運営の温浴施設にてご利用いただけます。
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Sponsor;
