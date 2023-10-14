'use client';
import Transfer from './Transfer';
import Swap from './Swap';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import { useState } from 'react';

const AsideContainer = () => {
  const [activeTab, setActiveTab] = useState('transfer');
  const data = [
    {
      label: 'Transfer',
      value: 'transfer',
      component: <Transfer />,
    },
    {
      label: 'Swap',
      value: 'swap',
      component: <Swap />,
    },
  ];

  return (
    <aside className="py-[28px] w-[300px] h-full bg-black/40 flex flex-col">
      <Tabs
        id="custom-animation"
        value={activeTab}
        className="h-full flex flex-col"
      >
        <TabsHeader
          className="rounded-full bg-[#1C1D22] text-white mx-[28px]"
          indicatorProps={{
            className:
              'rounded-full bg-gradient-to-r from-[#4AFF93] to-[#26FFFF]',
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? 'text-black transition-colors duration-300'
                  : 'text-white transition-colors duration-300'
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="flex-grow">
          {data.map(({ value, component }) => (
            <TabPanel key={value} value={value} className="p-0 h-full">
              {component}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </aside>
  );
};

export default AsideContainer;
