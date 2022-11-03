import React, { useContext, useState } from "react";
import Table from "../Table/Table";
import Article from "./../Article/Article";
import { dataContext } from "./../../pages/index";
import Tab from "../Tab/Tab";
import TabList from "../Tab/TabList/TabList";
import TabItem from "../Tab/TabItem/TabItem";
import TabBody from "../Tab/TabBody/TabBody";
import TabBodyItem from "../Tab/TabBodyItem/TabBodyItem";
const About = () => {
  const [type, setType] = useState("education");
  const [tabIndex, setTabIndex] = useState(1);
  const [tabIsChanged, setTabIsChanged] = useState(false);
  const { data, lang } = useContext(dataContext);
  const par = data.data.left.about.paragraph;
  const title = data.data.left.about.title;
  const heading = data.data.left.about.heading;
  const table = data.data.left.about.table;
  const tabList = data.data.left.about.tabs.list;
  const tabBody = data.data.left.about.tabs.body;
  const ChangeTab = (tabIndex, tabType) => {
    setTabIndex(tabIndex);
    setType(tabType);
    setTabIsChanged(true);
    setTimeout(() => {
      setTabIsChanged(false);
    }, 300);
  };
  return (
    <div name="about" className="flex flex-col gap-2 min-h-screen">
      <Article par={par} title={title} heading={heading} />
      <Table table={table} />
      <Tab twdClasses={"mt-32 mb-20 transition-all duration-300"}>
        <TabList>
          {tabList[lang].map(({ id, title, type }) => (
            <TabItem
              key={id}
              ChangeTab={ChangeTab}
              isActiveTab={tabIndex === id}
              changeId={id}
              type={type}
            >
              {title}
            </TabItem>
          ))}
        </TabList>
        <TabBody tabIsChanged={tabIsChanged}>
          <TabBodyItem
            tabIsChanged={tabIsChanged}
            tabData={tabBody[type][lang]}
          />
        </TabBody>
      </Tab>
    </div>
  );
};

export default About;
