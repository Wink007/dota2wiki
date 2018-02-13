import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Preview from 'components/Preview';
import preview from 'components/cfg/preview';

import 'styles/index.scss';


class App extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }
  render() {
    const {heroes, items, creeps} = preview;

    return (
      <div className="App">
        <Tabs className="container">
          <TabList
            className="list"
            selectedindex={this.state.tabIndex}
            onSelect={tabIndex => this.setState({ tabIndex })}
          >
            <Tab className="link heroes">
              <span>Герои</span>
            </Tab>
            <Tab className="link items">
              <span>Предметы</span>
            </Tab>
            <Tab className="link creeps">
              <span>Крипы</span>
            </Tab>
          </TabList>
          <TabPanel className="preview">
            <Preview tab={heroes} />
          </TabPanel>
          <TabPanel className="preview">
            <Preview tab={items} className={'preview-wrap-reverse'} />
          </TabPanel>
          <TabPanel className="preview">
            <Preview tab={creeps} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
