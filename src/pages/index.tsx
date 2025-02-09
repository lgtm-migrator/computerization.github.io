import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";

const features = [
  {
    title: "Web 开发",
    imageUrl: "img/undraw_version_control.svg",
    description: (
      <Translate
        id="frontpage.sec1.item1"
        values={{
          link1: <a href="https://vuejs.org/">Vue</a>,
          link2: <a href="https://docusaurus.io">Docusaurus</a>,
        }}>
        {
          "在C社，学习 {link1}, {link2} 等多个前端框架，使用 GitHub 进行多人合作项目开发，并用所学的技巧创建自己的个人页面，参与社团平台搭建，充分展现你的创意与才智！"
        }
      </Translate>
    ),
  },
  {
    title: "算法竞赛",
    imageUrl: "img/undraw_docusaurus_tree.svg",
    description: (
      <Translate id="frontpage.sec1.item2">
        在C社，与大佬交流竞赛经验与技巧，深入了解各类数据结构与算法，备赛NOIP，
        组队参加力扣周赛、洛谷月赛等算法竞赛，在磨练中提升自己的功力！
      </Translate>
    ),
  },
  {
    title: "人工智能探索",
    imageUrl: "img/undraw_docusaurus_react.svg",
    description: (
      <Translate id="frontpage.sec1.item3">
        在C社，感受时代科技的前沿，探究人工智能与机器学习的奥秘，
        亲手设计一个自己的神经网络，并训练它做一切你能想象得到的疯狂的事！
      </Translate>
    ),
  },
];

function Home(): JSX.Element {
  return (
    <Layout
      title="Hello from Computerization"
      description="C社 << Computerization << 世外信息化社">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Computerization</h1>
          <p className="hero__subtitle">
            {"C社 << Computerization << 世外信息化社"}
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
              )}
              id={styles.getStarted}
              to="docs/about-us">
              <Translate id="frontpage.button">了解更多</Translate>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features?.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col text--center">
                  <h2>
                    <Translate id="frontpage.sec1">我们的活动</Translate>
                  </h2>
                </div>
              </div>
              <div className="row">
                {features.map(({ imageUrl, title, description }, idx) => (
                  <div
                    key={title}
                    className={clsx("col col--4", styles.feature)}>
                    {imageUrl && (
                      <div className="text--center">
                        <img
                          className={styles.featureImage}
                          src={imageUrl}
                          alt={title}
                        />
                      </div>
                    )}
                    <h3>
                      <Translate id={`frontpage.sec1.item${idx + 1}.title`}>
                        {title}
                      </Translate>
                    </h3>
                    <p>{description}</p>
                  </div>
                ))}
              </div>
              <div className="row">
                <div className="col text--center">
                  <div className={clsx(styles.caption)}>
                    <Translate id="frontpage.sec1.imgsrc">图片来源：</Translate>
                    <a href="https://docusaurus.io/">
                      <Translate id="frontpage.sec1.imgsrc.link">
                        Docusaurus 官方文档
                      </Translate>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h2>
                  <Translate id="frontpage.sec2.title">最新动态</Translate>
                </h2>
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="row">
              <div className="col col--6">
                <div className={styles.card}>
                  <h3 className={styles.header}>
                    <Translate id="frontpage.sec2.item1">
                      2021 届圆满落幕 🥳
                    </Translate>
                  </h3>
                  <div>
                    <img
                      style={{ maxWidth: "400px", width: "100%" }}
                      alt="all club members"
                      src="/img/club_photo.jpeg"
                    />
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.card}>
                  <h3 className={styles.header}>
                    <Translate id="frontpage.sec2.item2">
                      C 社 2022 届开始招新，欢迎你的加入！
                    </Translate>
                  </h3>
                  <div>
                    <img
                      style={{ maxWidth: "400px", width: "100%" }}
                      alt="poster"
                      src="/img/poster.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
